#!/bin/bash

# 🚀 Tokyo Night Modern Release Script
# Автоматическое умное поднятие версии и публикация релиза

set -e  # Выход при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функции для вывода
info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
success() { echo -e "${GREEN}✅ $1${NC}"; }
warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
error() { echo -e "${RED}❌ $1${NC}"; exit 1; }

# Проверка зависимостей
check_dependencies() {
    info "Проверка зависимостей..."

    command -v git >/dev/null 2>&1 || error "Git не установлен"
    command -v npm >/dev/null 2>&1 || error "npm не установлен"
    command -v node >/dev/null 2>&1 || error "Node.js не установлен"

    # Проверка VSCE (опционально)
    # if ! command -v vsce >/dev/null 2>&1; then
    #     warning "VSCE не установлен глобально. Устанавливаю..."
    #     npm install -g @vscode/vsce --force
    # fi

    success "Все зависимости установлены"
}

# Проверка рабочей директории
check_working_directory() {
    info "Проверка рабочей директории..."

    if [ -n "$(git status --porcelain)" ]; then
        error "Рабочая директория не чистая. Закоммитьте или спрячьте изменения."
    fi

    success "Рабочая директория чистая"
}

# Проверка ветки
check_branch() {
    local current_branch=$(git branch --show-current)
    info "Текущая ветка: $current_branch"

    if [[ "$current_branch" != "main" && "$current_branch" != "master" ]]; then
        if [[ "$1" != "--force" ]]; then
            error "Вы не на главной ветке. Используйте --force для релиза с другой ветки."
        else
            warning "Принудительный релиз с ветки $current_branch"
        fi
    fi
}

# Определение типа релиза на основе коммитов
detect_release_type() {
    info "Анализ коммитов для определения типа релиза..."

    # Получаем последний тег
    local last_tag=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

    if [ -z "$last_tag" ]; then
        warning "Теги не найдены, используем patch релиз"
        echo "patch"
        return
    fi

    # Получаем коммиты с последнего тега
    local commits=$(git log ${last_tag}..HEAD --oneline)

    if [ -z "$commits" ]; then
        info "Новых коммитов с последнего релиза нет"
        echo "patch"
        return
    fi

    info "Коммиты с $last_tag:"
    echo "$commits"

    # Анализируем коммиты
    if echo "$commits" | grep -qE "(BREAKING CHANGE|!:|^[a-f0-9]+\s+\w+!:)"; then
        success "Обнаружены breaking changes → MAJOR релиз"
        echo "major"
    elif echo "$commits" | grep -qE "(feat:|feature:|add:|new:)"; then
        success "Обнаружены новые функции → MINOR релиз"
        echo "minor"
    else
        success "Обнаружены исправления/улучшения → PATCH релиз"
        echo "patch"
    fi
}

# Подсчет количества коммитов с последнего релиза
commit_count_since_last_release() {
    local last_tag=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
    if [ -n "$last_tag" ]; then
        git rev-list ${last_tag}..HEAD --count 2>/dev/null || echo 0
    else
        git rev-list HEAD --count 2>/dev/null || echo 0
    fi
}

# Запуск тестов
run_tests() {
    if [[ "$1" == "--skip-tests" ]]; then
        warning "Пропуск тестов"
        return
    fi

    info "Запуск валидации и тестов..."
    npm run validate:all
    success "Вся валидация и тесты прошли"
}

# Сборка проекта
build_project() {
    if [[ "$1" == "--skip-build" ]]; then
        warning "Пропуск сборки"
        return
    fi

    info "Сборка проекта..."
    npm run build
    success "Сборка завершена"
}

# Генерация .vsix пакета
generate_package() {
    info "Генерация .vsix пакета..."
    npm run package
    success "Пакет сгенерирован"
}

# Поднятие версии
bump_version() {
    local release_type=$1
    local prerelease=$2

    info "Поднятие версии ($release_type) с учетом количества коммитов..."

    local current_version=$(node -p "require('./package.json').version")
    local base=${current_version%%-*}
    local major=$(echo $base | cut -d. -f1)
    local minor=$(echo $base | cut -d. -f2)
    local patch=$(echo $base | cut -d. -f3)
    local count=$(commit_count_since_last_release)
    if [ -z "$count" ] || [ "$count" -lt 1 ]; then
        count=1
    fi

    case "$release_type" in
        major)
            major=$((major + 1))
            minor=0
            patch=$count
            ;;
        minor)
            minor=$((minor + 1))
            patch=$count
            ;;
        patch|*)
            patch=$((patch + count))
            ;;
    esac

    local next="${major}.${minor}.${patch}"
    if [[ "$prerelease" == "--prerelease" ]]; then
        next="${next}-beta.${count}"
    fi

    npm version "$next" --no-git-tag-version
    success "Версия поднята до $next"
    echo $next
}

# Обновление THEME_VERSION в генераторе темы
update_theme_version() {
    local new_version=$1
    local file="src/generators/theme.ts"

    info "Обновление THEME_VERSION в ${file}..."

    if grep -Eq "THEME_VERSION[[:space:]]*:[[:space:]]*env\\.THEME_VERSION[[:space:]]*\\|\\|[[:space:]]*'[^']*'" "$file"; then
        sed -i -E "s/(THEME_VERSION[[:space:]]*:[[:space:]]*env\\.THEME_VERSION[[:space:]]*\\|\\|[[:space:]]*')[^']*(')/\\1${new_version}\\2/" "$file"
        success "THEME_VERSION обновлён до ${new_version}"
    else
        warning "Шаблон THEME_VERSION не найден или уже обновлён — пропуск"
    fi
}

# Генерация changelog
generate_changelog() {
    info "Генерация changelog..."

    if command -v npx >/dev/null 2>&1; then
        npx standard-version --skip.tag --skip.commit 2>/dev/null || warning "Не удалось автоматически сгенерировать changelog"
    else
        warning "npx недоступен, пропуск генерации changelog"
    fi
}

# Коммит и тег
commit_and_tag() {
    local version=$1

    info "Создание коммита и тега..."

    git add .
    git commit -m "chore(release): $version"
    git tag -a "v$version" -m "Release v$version"

    success "Создан коммит и тег v$version"
}

# Пуш в удаленный репозиторий
push_to_remote() {
    info "Отправка в удаленный репозиторий..."

    git push origin HEAD
    git push origin --tags

    success "Отправлено в удаленный репозиторий"
}

# Публикация в маркетплейс
publish_to_marketplace() {
    info "Пропуск публикации в VS Code Marketplace (нет ключа)..."

    npm run package

    # if vsce publish; then
    #     success "Опубликовано в VS Code Marketplace"
    # else
    #     error "Не удалось опубликовать в маркетплейс. Проверьте токен VSCE."
    # fi

    warning "Публикация в маркетплейс пропущена. Для публикации настройте VSCE токен."
}

# Создание GitHub релиза
create_github_release() {
    local version=$1

    info "Создание GitHub релиза..."

    if command -v gh >/dev/null 2>&1; then
        gh release create "v$version" --title "Release v$version" --generate-notes
        success "GitHub релиз создан"
    else
        warning "GitHub CLI недоступен"
        info "Создайте релиз вручную: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/new?tag=v$version"
    fi
}

# Показать справку
show_help() {
    cat << EOF
🚀 Tokyo Night Modern Release Script

Использование: ./scripts/release.sh [опции]

Опции:
  --patch         Принудительный patch релиз (x.x.X)
  --minor         Принудительный minor релиз (x.X.x)
  --major         Принудительный major релиз (X.x.x)
  --prerelease    Создать prerelease версию
  --dry-run       Показать что будет сделано без изменений
  --skip-tests    Пропустить запуск тестов
  --skip-build    Пропустить сборку проекта
  --force         Разрешить релиз с не-главной ветки
  --help, -h      Показать эту справку

Примеры:
  ./scripts/release.sh                    # Автоопределение типа релиза
  ./scripts/release.sh --minor           # Принудительный minor релиз
  ./scripts/release.sh --dry-run         # Предварительный просмотр
  ./scripts/release.sh --prerelease      # Создать prerelease
EOF
}

# Основная функция
main() {
    local start_time=$(date +%s)

    # Парсинг аргументов
    local release_type=""
    local dry_run=false
    local prerelease=""
    local skip_tests=""
    local skip_build=""
    local force=""

    while [[ $# -gt 0 ]]; do
        case $1 in
            --patch|--minor|--major)
                release_type="${1#--}"
                shift
                ;;
            --prerelease)
                prerelease="--prerelease"
                shift
                ;;
            --dry-run)
                dry_run=true
                shift
                ;;
            --skip-tests)
                skip_tests="--skip-tests"
                shift
                ;;
            --skip-build)
                skip_build="--skip-build"
                shift
                ;;
            --force)
                force="--force"
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                error "Неизвестная опция: $1"
                ;;
        esac
    done

    info "Начало процесса релиза..."

    # Предварительные проверки
    check_dependencies

    if [[ "$dry_run" != true ]]; then
        check_working_directory
        check_branch $force
    fi

    # Определение типа релиза
    if [ -z "$release_type" ]; then
        release_type=$(detect_release_type)
    fi

    info "Тип релиза: $release_type"

    if [[ "$dry_run" == true ]]; then
        info "🔍 РЕЖИМ ПРЕДВАРИТЕЛЬНОГО ПРОСМОТРА - изменения не будут внесены"
        local current_version=$(node -p "require('./package.json').version")
        local commits=$(commit_count_since_last_release)
        # Предпросчет следующей версии
        local preview_release_type=$release_type
        if [ -z "$preview_release_type" ]; then
            preview_release_type=$(detect_release_type)
        fi
        local base=${current_version%%-*}
        local maj=$(echo $base | cut -d. -f1)
        local min=$(echo $base | cut -d. -f2)
        local pat=$(echo $base | cut -d. -f3)
        local cnt=$commits; [ -z "$cnt" ] || [ "$cnt" -lt 1 ] && cnt=1
        case "$preview_release_type" in
            major)
                maj=$((maj + 1)); min=0; pat=$cnt;;
            minor)
                min=$((min + 1)); pat=$cnt;;
            *)
                pat=$((pat + cnt));;
        esac
        local preview_next="${maj}.${min}.${pat}"
        if [ -n "$prerelease" ]; then
            preview_next="${preview_next}-beta.${cnt}"
        fi
        info "Текущая версия: $current_version"
        info "Коммитов с последнего релиза: $commits"
        info "Будет поднято до: $preview_next"
        exit 0
    fi

    # Выполнение релиза
    run_tests $skip_tests
    build_project $skip_build

    local new_version=$(bump_version $release_type $prerelease)

    # Синхронизация дефолтной версии темы
    update_theme_version "$new_version"

    generate_package

    generate_changelog
    commit_and_tag $new_version
    push_to_remote
    # publish_to_marketplace
    create_github_release $new_version

    local end_time=$(date +%s)
    local duration=$((end_time - start_time))

    success "🎉 Релиз v$new_version успешно завершен за ${duration}s!"
}

# Запуск скрипта
main "$@"
