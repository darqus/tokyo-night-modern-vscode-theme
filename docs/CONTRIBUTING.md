# Руководство по разработке (CONTRIBUTING)

Дата: 2025-11-04

Этот документ описывает локальную разработку, тестирование и публикацию темы «Tokyo Modern» для VS Code, а также минимизацию поставки (исключение dev-папок из ветки main и VSIX).

Исключаемые каталоги (dev-only): `src/`, `test/`, `tests/`, `docs/`, `scripts/`.

---

## 1) Требования

- Node.js 18+
- PNPM (предпочтительно) или npm
- Git
- VS Code

Проверка окружения:

```bash
node -v
pnpm -v  # или npm -v
```

## 2) Установка зависимостей

```bash
pnpm install
# или
npm ci
```

## 3) Структура проекта

- `themes/` — готовые JSON-файлы темы (попадают в VSIX и main)
- `icon.png`, `README.md`, `LICENSE`, `package.json` — необходимые файлы для Marketplace
- `src/` — исходники генератора (исключены)
- `scripts/` — скрипты сборки/релиза (исключены)
- `docs/` — внутренняя документация для разработки (исключена)
- `test/`, `tests/` — тесты (исключены)

## 4) Сборка темы

```bash
pnpm run build
```

Результат: `themes/tokyo-modern-color-theme.json`. Этот файл коммитится в main.

Быстрая проверка в VS Code:

- Откройте проект и нажмите F5 (Run Extension), или
- Соберите VSIX и установите локально:

```bash
pnpm run build:vsix
code --install-extension ./tokyo-modern-*.vsix --force
```

## 5) Тестирование и качество кода

```bash
pnpm run test
pnpm run test:coverage
pnpm run lint
pnpm run format
```

Примечание: убедитесь, что перечисленные скрипты определены в `package.json`. При расхождениях синхронизируйте скрипты и документацию.

## 6) Политика исключений и минимальной поставки

- `.vscodeignore` исключает dev-файлы из VSIX.
- `.gitignore` исключает dev-файлы из индекса Git (и, следовательно, из main).

Ключевые ��сключения (должны присутствовать в обоих файлах):

```
src/**
test/**
tests/**
docs/**
scripts/**
```

Если dev-директории уже попали в индекс:

```bash
git rm -r --cached src/ test/ tests/ docs/ scripts/
git commit -m "chore: remove dev-only directories from tracking"
```

## 7) Политика ветвления и PR

- Работайте в фиче-ветках: `git checkout -b feature/your-change`
- В PR в main допускаются изменения только пользовательских артефактов:
  - `themes/*.json`, `package.json`, `README.md`, `LICENSE`, `icon.png`
- Запрещено добавлять в main: `src/`, `test/`, `tests/`, `docs/`, `scripts/`
- Чеклист перед PR:
  - [ ] Сгенерирован `themes/*.json` (если требуется)
  - [ ] Прошли тесты/линт (локально)
  - [ ] В PR нет файлов из dev-директорий
  - [ ] Проверен состав VSIX: `npx @vscode/vsce ls`

## 8) Релиз и публикация

- Обновите версию в `package.json`
- Сборка темы: `pnpm run build`
- Формирование пакета:

```bash
pnpm run build:vsix
npx @vscode/vsce ls
npx @vscode/vsce package
```

- Публикация (при наличии токена):

```bash
npx @vscode/vsce publish
```

## 9) Полезные команды

- Проверка состава VSIX: `npx @vscode/vsce ls`
- Удаление установленного расширения: `code --uninstall-extension tokyo-modern`
- Переустановка локального пакета: `code --install-extension ./tokyo-modern-*.vsix --force`

---
Документ поддерживает стратегию: dev-папки используются локально, итоговые артефакты — в `themes/` и поставке. Это гарантирует, что пользователи получают только минимально необходимый набор файлов.

Итог: конфигурация и документация соответствуют политике исключений. Для полной уверенности запустите две команды проверки `vsce ls`, но по текущему содержимому файлов правил исключения — всё настроено корректно.
