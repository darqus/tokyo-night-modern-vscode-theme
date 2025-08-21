# 🤖 Умная система версионирования

## Быстрый старт

Основная команда для автоматического релиза:

```bash
npm run release
```

Эта команда автоматически:

- 🔍 Анализирует коммиты с последнего релиза
- 📈 Определяет тип версии (patch/minor/major)
- 🧪 Запускает тесты и сборку
- 📦 Создает релиз и VSIX пакет
- 🏷️ Создает git тег

## Основные команды

| Команда | Описание |
|---------|----------|
| `npm run release` | 🚀 Умный автоматический релиз |
| `npm run version:analyze` | 🔍 Только анализ коммитов |
| `npm run release:dry` | 👀 Предварительный просмотр |
| `npm run test:version` | 🧪 Тестирование системы |

## Логика определения версий

### Автоматические правила

- **MAJOR** (2.0.0): Breaking changes (`feat!:`, `BREAKING CHANGE:`)
- **MINOR** (1.3.0): Новые функции (`feat:`)
- **PATCH** (1.2.4): Исправления (`fix:`, `perf:`)

### Примеры коммитов

```bash
# PATCH релиз
git commit -m "fix(theme): исправить контрастность кнопок"
git commit -m "perf(build): ускорить сборку"

# MINOR релиз
git commit -m "feat(theme): добавить светлую тему"

# MAJOR релиз
git commit -m "feat(api)!: новый формат конфигурации"
```

## Workflow

```bash
# 1. Разработка с правильными коммитами
git add .
git commit -m "feat(theme): добавить новую цветовую схему"

# 2. Предварительный анализ (опционально)
npm run version:analyze

# 3. Автоматический релиз
npm run release

# 4. Отправка в репозиторий
git push --follow-tags origin main
```

## Детальная документация

Полная документация находится в [`docs/SMART_VERSIONING.md`](../docs/SMART_VERSIONING.md)

## Тестирование

Протестировать систему на примерах:

```bash
npm run test:version
npm run test:version -- --demo
```
