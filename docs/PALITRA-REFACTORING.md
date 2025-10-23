# Рефакторинг палитры цветов Tokyo Night

## Обзор

Выполнен полный рефакторинг жестко закодированных цветов в теме Tokyo Night с переносом их в централизованную палитру.

## Изменения

### 1. Расширение палитры

Добавлены новые группы цветов в `src/theme/palette/index.ts`:

#### UI Palette

- `white`: `#ffffff` - базовый белый цвет
- `badgeForeground`: `#acb0d0` - текст значков
- `linkActive`: `#acb0d0` - активные ссылки
- `codeLens`: `#51597d` - код линзы
- `brightWhite`: `#acb0d0` - яркий белый

#### Brackets Palette

- `blue`: `#698cd6` - синие скобки
- `cyan`: `#68b3de` - голубые скобки
- `purple`: `#9a7ecc` - фиолетовые скобки
- `teal`: `#25aac2` - teal скобки
- `green`: `#80a856` - зеленые скобки

#### Git Palette

- `modified`: `#394b70` - измененные файлы
- `added`: `#164846` - добавленные файлы
- `deleted`: `#703438` - удаленные файлы
- `deletedDark`: `#823c41` - темные удаленные файлы
- `modifiedMinimap`: `#425882` - измененные в миникарте
- `addedMinimap`: `#1c5957` - добавленные в миникарте
- `deletedMinimap`: `#944449` - удаленные в миникарте

#### Interactive Palette

- `hover`: `#13131a` - фон при наведении
- `selected`: `#20222c` - выделенный фон
- `highlight`: `#668ac4` - подсветка
- `invalid`: `#c97018` - невалидные элементы
- `error`: `#bb616b` - ошибки
- `errorOutline`: `#a6333f` - обводка ошибок

#### Elements Palette

- `indentGuides`: `#2b2b3b` - направляющие отступов
- `indentGuidesBackground`: `#232433` - фон направляющих
- `foldBackground`: `#111117` - фон сворачивания
- `cssPunctuation`: `#9abdf5` - CSS пунктуация
- `info`: `#1abc9c` - информационные элементы

### 2. Обновленные файлы

#### UI Генераторы

- `src/theme/generator/ui/core.ts` - базовые UI цвета
