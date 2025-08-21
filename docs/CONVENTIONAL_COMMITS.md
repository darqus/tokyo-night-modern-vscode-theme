# Conventional Commits Guide

Этот проект использует [Conventional Commits](https://conventionalcommits.org/) для автоматической генерации версий и changelog.

## Формат коммитов

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Типы коммитов

### Основные типы (влияющие на версию)

- **feat**: новая функциональность (MINOR version bump)
- **fix**: исправление бага (PATCH version bump)
- **perf**: улучшение производительности (PATCH version bump)

### BREAKING CHANGES

Для MAJOR version bump добавьте `BREAKING CHANGE:` в footer или `!` после типа:

```
feat!: изменение API темы
feat(theme)!: новая система цветов

BREAKING CHANGE: изменен формат конфигурации темы
```

### Дополнительные типы

- **docs**: изменения в документации
- **style**: форматирование кода, пробелы (не влияет на логику)
- **refactor**: рефакторинг кода без изменения функциональности
- **test**: добавление или изменение тестов
- **build**: изменения в системе сборки или внешних зависимостях
- **ci**: изменения в CI конфигурации
- **chore**: другие изменения, не затрагивающие src или test файлы

## Области (scope)

Рекомендуемые области для этого проекта:

- **theme**: изменения в цветовой схеме
- **palette**: изменения в палитре цветов
- **build**: система сборки
- **validation**: система валидации
- **plugins**: система плагинов
- **cli**: инструменты командной строки
- **config**: конфигурация
- **docs**: документация

## Примеры коммитов

### Новая функциональность

```bash
git commit -m "feat(theme): добавить поддержку высококонтрастного режима"
git commit -m "feat(plugins): добавить плагин для Rust"
git commit -m "feat(cli): добавить команду валидации"
```

### Исправления

```bash
git commit -m "fix(theme): исправить контрастность кнопок"
git commit -m "fix(build): исправить сборку для Windows"
git commit -m "fix(validation): исправить проверку цветов"
```

### Breaking Changes

```bash
git commit -m "feat(theme)!: новая архитектура системы вариантов

BREAKING CHANGE: изменен формат конфигурации вариантов темы.
Старые конфигурации несовместимы и требуют обновления."
```

### Документация

```bash
git commit -m "docs: обновить README с новыми возможностями"
git commit -m "docs(api): добавить примеры использования CLI"
```

### Рефакторинг

```bash
git commit -m "refactor(palette): упростить структуру цветовой палитры"
git commit -m "refactor(build): оптимизировать процесс сборки"
```

## Команды для релиза

### Автоматический релиз (рекомендуется)

```bash
# Анализирует коммиты и создает релиз
npm run release

# Сухой прогон - посмотреть что будет сделано
npm run release -- --dry-run

# Принудительный релиз определенного типа
npm run release -- --release-as minor
npm run release -- --release-as major
npm run release -- --release-as patch
```

### Пререлизы

```bash
# Создать альфа версию
npm run release -- --prerelease alpha

# Создать бета версию
npm run release -- --prerelease beta

# Создать RC версию
npm run release -- --prerelease rc
```

### Первый релиз

```bash
# Для первого релиза проекта
npm run release -- --first-release
```

## Семантическое версионирование (SemVer)

Версии следуют формату `MAJOR.MINOR.PATCH`:

- **MAJOR**: несовместимые изменения API (BREAKING CHANGES)
- **MINOR**: новая функциональность с обратной совместимостью (feat)
- **PATCH**: исправления багов с обратной совместимостью (fix, perf)

### Примеры

- `1.0.0` → `1.0.1` (patch): исправления багов
- `1.0.1` → `1.1.0` (minor): новые функции
- `1.1.0` → `2.0.0` (major): breaking changes

## Автоматическая генерация changelog

При каждом релизе автоматически обновляется `CHANGELOG.md` с:

- Списком новых функций
- Списком исправлений
- Ссылками на коммиты
- Информацией о breaking changes
- Ссылками на сравнение версий

## Workflow

1. Разработка → коммиты с conventional format
2. `npm run release` → автоматическое определение версии
3. Автоматическое обновление `package.json` и `CHANGELOG.md`
4. Создание git tag
5. `git push --follow-tags` → отправка в репозиторий

## Дополнительные команды

```bash
# Проверка формата последних коммитов
npx commitizen init cz-conventional-changelog --save-dev --save-exact

# Линтер коммитов
npx @commitlint/cli --from HEAD~1 --to HEAD --verbose
```
