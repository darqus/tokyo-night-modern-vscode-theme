# План реализации генератора Tokyo Night

## Архитектура

```
src/theme/
├── palette/
│   ├── index.ts          # Главный экспорт палитры
│   ├── backgrounds.ts    # 8 уровней фонов
│   ├── foregrounds.ts    # 6 уровней текста
│   ├── blues.ts          # Синие оттенки (3)
│   ├── cyans.ts          # Cyan/teal (6)
│   ├── greens.ts         # Зелёные (2)
│   ├── purples.ts        # Фиолетовые (3)
│   ├── yellows.ts        # Жёлтые/оранжевые (4)
│   ├── reds.ts           # Красные/розовые (6)
│   └── special.ts        # Специальные (11)
├── utils/
│   ├── index.ts          # Экспорт утилит
│   ├── color.ts          # alpha, lighten, darken, mix
│   └── validate.ts       # Валидация hex
├── generator/
│   ├── ui/
│   │   ├── index.ts      # Объединение UI цветов
│   │   ├── core.ts       # Базовые (foreground, borders, etc.)
│   │   ├── buttons.ts    # Кнопки и прогресс
│   │   ├── inputs.ts     # Инпуты и валидация
│   │   ├── activityBar.ts
│   │   ├── sidebar.ts
│   │   ├── lists.ts
│   │   ├── editor.ts     # Редактор и виджеты
│   │   ├── diff.ts       # Diff editor
│   │   ├── tabs.ts
│   │   ├── panels.ts
│   │   ├── statusBar.ts
│   │   ├── titleBar.ts
│   │   ├── terminal.ts
│   │   ├── git.ts        # Git decorations
│   │   ├── notebook.ts
│   │   ├── charts.ts
│   │   ├── merge.ts
│   │   ├── notifications.ts
│   │   └── menu.ts
│   ├── tokens/
│   │   ├── index.ts      # Объединение токенов
│   │   ├── comments.ts
│   │   ├── strings.ts
│   │   ├── numbers.ts
│   │   ├── keywords.ts
│   │   ├── functions.ts
│   │   ├── variables.ts
│   │   ├── classes.ts
│   │   ├── tags.ts
│   │   ├── css.ts
│   │   ├── scss.ts
│   │   ├── regex.ts
│   │   ├── json.ts
│   │   ├── markdown.ts
│   │   ├── markup.ts
│   │   └── language.ts   # Language-specific
│   ├── semantic.ts       # Семантические токены
│   └── index.ts          # Главный генератор
├── types/
│   └── index.ts          # TypeScript типы
└── index.ts              # Точка входа
```

---

## Этап 1: Типы (30 мин)

### `src/theme/types/index.ts`

```typescript
export interface VSCodeTheme {
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting?: boolean;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticTokenColors: Record<string, SemanticTokenStyle>;
}

export interface TokenColor {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
}

export interface SemanticTokenStyle {
  foreground?: string;
  background?: string;
  fontStyle?: string;
}

export interface Palette {
  bg: BackgroundPalette;
  fg: ForegroundPalette;
  blue: BluePalette;
  cyan: CyanPalette;
  teal: TealPalette;
  green: GreenPalette;
  purple: PurplePalette;
  orange: string;
  yellow: YellowPalette;
  red: RedPalette;
  pink: PinkPalette;
  special: SpecialPalette;
}

export interface BackgroundPalette {
  darkest: string;
  darker: string;
  dark: string;
  main: string;
  editor: string;
  light: string;
  lighter: string;
  lightest: string;
}

export interface ForegroundPalette {
  dim: string;
  muted: string;
  medium: string;
  bright: string;
  brighter: string;
  brightest: string;
}

export interface BluePalette {
  primary: string;
  light: string;
  medium: string;
}

export interface CyanPalette {
  dark: string;
  medium: string;
  light: string;
  bright: string;
}

export interface TealPalette {
  main: string;
  dark: string;
}

export interface GreenPalette {
  main: string;
  dark: string;
}

export interface PurplePalette {
  light: string;
  dark: string;
  bright: string;
}

export interface YellowPalette {
  main: string;
  light: string;
  muted: string;
}

export interface RedPalette {
  main: string;
  dark: string;
  muted: string;
}

export interface PinkPalette {
  main: string;
  light: string;
  bright: string;
}

export interface SpecialPalette {
  regex: string;
  invalid: string;
  selection: string;
  indentGuide: string;
  indentActive: string;
  border: string;
  disabled: string;
  badge: string;
  scrollbar: string;
  ghostText: string;
  inactive: string;
}
```

---

## Этап 2: Утилиты (1 час)

### `src/theme/utils/color.ts`

```typescript
export function alpha(hex: string, opacity: number): string {
  const normalized = normalizeHex(hex);
  const alphaValue = Math.round(Math.max(0, Math.min(1, opacity)) * 255);
  const alphaHex = alphaValue.toString(16).padStart(2, '0');
  return normalized + alphaHex;
}

export function lighten(hex: string, amount: number): string {
  return mix(hex, '#ffffff', amount);
}

export function darken(hex: string, amount: number): string {
  return mix(hex, '#000000', amount);
}

export function mix(hex1: string, hex2: string, ratio: number): string {
  const rgb1 = hexToRgb(normalizeHex(hex1));
  const rgb2 = hexToRgb(normalizeHex(hex2));
  const clampedRatio = Math.max(0, Math.min(1, ratio));

  const r = Math.round(rgb1.r * (1 - clampedRatio) + rgb2.r * clampedRatio);
  const g = Math.round(rgb1.g * (1 - clampedRatio) + rgb2.g * clampedRatio);
  const b = Math.round(rgb1.b * (1 - clampedRatio) + rgb2.b * clampedRatio);

  return rgbToHex(r, g, b);
}

export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}

export function normalizeHex(hex: string): string {
  let normalized = hex.startsWith('#') ? hex : `#${hex}`;
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`;
  }
  return normalized.toLowerCase();
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = normalizeHex(hex);
  const r = Number.parseInt(normalized.slice(1, 3), 16);
  const g = Number.parseInt(normalized.slice(3, 5), 16);
  const b = Number.parseInt(normalized.slice(5, 7), 16);
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

---

## Этап 3: Палитра (1 час)

### `src/theme/palette/index.ts`

```typescript
import type { Palette } from '../types';

export const palette: Palette = {
  bg: {
    darkest: '#0d0f17',
    darker: '#101014',
    dark: '#14141b',
    main: '#16161e',
    editor: '#1a1b26',
    light: '#1c1d29',
    lighter: '#1e202e',
    lightest: '#202330',
  },

  fg: {
    dim: '#515670',
    muted: '#51597d',
    medium: '#787c99',
    bright: '#9aa5ce',
    brighter: '#a9b1d6',
    brightest: '#c0caf5',
  },

  blue: {
    primary: '#3d59a1',
    light: '#6183bb',
    medium: '#7aa2f7',
  },

  cyan: {
    dark: '#0db9d7',
    medium: '#0da0ba',
    light: '#7dcfff',
    bright: '#89ddff',
  },

  teal: {
    main: '#73daca',
    dark: '#449dab',
  },

  green: {
    main: '#9ece6a',
    dark: '#41a6b5',
  },

  purple: {
    light: '#bb9af7',
    dark: '#9d7cd8',
    bright: '#b267e6',
  },

  orange: '#ff9e64',

  yellow: {
    main: '#e0af68',
    light: '#ffdb69',
    muted: '#c49a5a',
  },

  red: {
    main: '#f7768e',
    dark: '#db4b4b',
    muted: '#914c54',
  },

  pink: {
    main: '#ba3c97',
    light: '#de5971',
    bright: '#fc7b7b',
  },

  special: {
    regex: '#b4f9f8',
    invalid: '#ff5370',
    selection: '#515c7e',
    indentGuide: '#363b54',
    indentActive: '#42465d',
    border: '#29355a',
    disabled: '#545c7e',
    badge: '#7e83b2',
    scrollbar: '#868bc4',
    ghostText: '#646e9c',
    inactive: '#3b3e52',
  },
};
```

---

## Этап 4: Генераторы UI (3 часа)

### Пример: `src/theme/generator/ui/core.ts`

```typescript
import { palette } from '../../palette';
import { alpha } from '../../utils/color';

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, special, blue } = palette;

  return {
    'foreground': fg.medium,
    'descriptionForeground': fg.dim,
    'disabledForeground': special.disabled,
    'focusBorder': alpha(special.disabled, 0.20),
    'errorForeground': fg.dim,
    'widget.shadow': alpha('#ffffff', 0),
    'scrollbar.shadow': alpha('#000000', 0.20),
    'badge.background': alpha(special.badge, 0.19),
    'badge.foreground': '#acb0d0',
    'icon.foreground': fg.medium,
    'settings.headerForeground': blue.light,
    'window.activeBorder': bg.darkest,
    'window.inactiveBorder': bg.darkest,
    'sash.hoverBorder': special.border,
  };
}
```

### Пример: `src/theme/generator/ui/editor.ts`

```typescript
import { palette } from '../../palette';
import { alpha } from '../../utils/color';

export function generateEditorColors(): Record<string, string> {
  const { bg, fg, special, blue, cyan, yellow, red } = palette;

  return {
    'selection.background': alpha(special.selection, 0.25),
    'editor.background': bg.editor,
    'editor.foreground': fg.brighter,
    'editor.foldBackground': alpha('#111117', 0.29),
    'editorLink.activeForeground': '#acb0d0',
    'editor.selectionBackground': alpha(special.selection, 0.30),
    'editor.inactiveSelectionBackground': alpha(special.selection, 0.15),
    'editor.findMatchBackground': alpha(blue.primary, 0.40),
    'editor.findMatchBorder': yellow.main,
    'editor.findMatchHighlightBackground': alpha(blue.primary, 0.40),
    'editor.findRangeHighlightBackground': alpha(special.selection, 0.20),
    'editor.rangeHighlightBackground': alpha(special.selection, 0.125),
    'editor.wordHighlightBackground': alpha(special.selection, 0.27),
    'editor.wordHighlightStrongBackground': alpha(special.selection, 0.33),
    'editor.selectionHighlightBackground': alpha(special.selection, 0.27),
    'editorCursor.foreground': fg.brightest,
    'editorIndentGuide.background1': '#232433',
    'editorIndentGuide.activeBackground1': special.indentActive,
    'editorLineNumber.foreground': special.indentActive,
    'editorLineNumber.activeForeground': fg.medium,
    'editor.lineHighlightBackground': bg.lighter,
    'editorWhitespace.foreground': special.indentActive,
    // ... остальные свойства редактора
  };
}
```

---

## Этап 5: Генераторы токенов (2 часа)

### Пример: `src/theme/generator/tokens/comments.ts`

```typescript
import type { TokenColor } from '../../types';
import { palette } from '../../palette';

export function generateCommentTokens(): TokenColor[] {
  const { fg } = palette;

  return [
    {
      name: 'Italics - Comments',
      scope: [
        'comment',
        'meta.var.expr storage.type',
        'keyword.control.flow',
        'keyword.control.return',
        'storage.modifier',
        'string.quoted.docstring.multi',
      ],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'comment.block.documentation',
        'punctuation.definition.comment',
      ],
      settings: {
        foreground: fg.muted,
      },
    },
    {
      name: 'Comment Doc',
      scope: [
        'keyword.operator.assignment.jsdoc',
        'comment.block.documentation variable',
        'comment.block.documentation storage',
      ],
      settings: {
        foreground: '#5a638c',
      },
    },
    {
      name: 'Comment Doc Emphasized',
      scope: [
        'comment.block.documentation storage.type',
        'comment.block.documentation punctuation.definition.block.tag',
      ],
      settings: {
        foreground: palette.special.ghostText,
      },
    },
  ];
}
```

### Пример: `src/theme/generator/tokens/json.ts`

```typescript
import type { TokenColor } from '../../types';
import { palette } from '../../palette';

export function generateJsonTokens(): TokenColor[] {
  const { blue, cyan, purple, yellow, teal } = palette;

  return [
    {
      name: 'JSON Key - Level 0',
      scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: blue.medium },
    },
    {
      name: 'JSON Key - Level 1',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: cyan.dark },
    },
    {
      name: 'JSON Key - Level 2',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: cyan.light },
    },
    {
      name: 'JSON Key - Level 3',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: purple.light },
    },
    // ... уровни 4-8
  ];
}
```

---

## Этап 6: Семантические токены (15 мин)

### `src/theme/generator/semantic.ts`

```typescript
import type { SemanticTokenStyle } from '../types';
import { palette } from '../palette';

export function generateSemanticTokenColors(): Record<string, SemanticTokenStyle> {
  const { yellow, fg, teal, cyan, purple } = palette;

  return {
    'parameter.declaration': {
      foreground: yellow.main,
    },
    'parameter': {
      foreground: '#d9d4cd',
    },
    'property.declaration': {
      foreground: teal.main,
    },
    'property.defaultLibrary': {
      foreground: '#2ac3de',
    },
    '*.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.declaration': {
      foreground: purple.light,
    },
    'variable': {
      foreground: fg.brightest,
    },
  };
}
```

---

## Этап 7: Главный генератор (30 мин)

### `src/theme/generator/index.ts`

```typescript
import type { VSCodeTheme } from '../types';
import { generateCoreColors } from './ui/core';
import { generateButtonColors } from './ui/buttons';
import { generateInputColors } from './ui/inputs';
import { generateEditorColors } from './ui/editor';
// ... импорты всех UI генераторов

import { generateCommentTokens } from './tokens/comments';
import { generateStringTokens } from './tokens/strings';
// ... импорты всех token генераторов

import { generateSemanticTokenColors } from './semantic';

export function generateTheme(): VSCodeTheme {
  return {
    name: 'Tokyo Night',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
      ...generateCoreColors(),
      ...generateButtonColors(),
      ...generateInputColors(),
      ...generateEditorColors(),
      // ... все UI генераторы
    },
    tokenColors: [
      ...generateCommentTokens(),
      ...generateStringTokens(),
      // ... все token генераторы
    ],
    semanticTokenColors: generateSemanticTokenColors(),
  };
}
```

---

## Этап 8: Build скрипт (15 мин)

### `scripts/build-theme.ts`

```typescript
import { generateTheme } from '../src/theme';
import { writeFileSync } from 'fs';
import { join } from 'path';

function buildTheme() {
  console.log('🎨 Generating Tokyo Night theme...');

  const theme = generateTheme();
  const outputPath = join(__dirname, '../themes/tokyo-night-color-theme.json');

  writeFileSync(outputPath, JSON.stringify(theme, null, 2));

  console.log('✅ Theme generated successfully!');
  console.log(`📁 Output: ${outputPath}`);
  console.log(`📊 Stats:`);
  console.log(`   - UI Colors: ${Object.keys(theme.colors).length}`);
  console.log(`   - Token Rules: ${theme.tokenColors.length}`);
  console.log(`   - Semantic Tokens: ${Object.keys(theme.semanticTokenColors).length}`);
}

buildTheme();
```

---

## Оценка времени

| Этап | Время |
|------|-------|
| 1. Типы | 30 мин |
| 2. Утилиты | 1 час |
| 3. Палитра | 1 час |
| 4. UI генераторы | 3 часа |
| 5. Token генераторы | 2 часа |
| 6. Семантические токены | 15 мин |
| 7. Главный генератор | 30 мин |
| 8. Build скрипт | 15 мин |
| **ИТОГО** | **~9 часов** |

---

## Приоритеты

### Must Have

- Типы
- Утилиты (alpha, mix)
- Базовая палитра (bg, fg, основные акценты)
- Core UI генераторы (editor, sidebar, lists)
- Основные token генераторы (comments, strings, keywords)

### Should Have

- Полная палитра
- Все UI генераторы
- Все token генераторы
- Семантические токены

### Nice to Have

- Валидация
- Тесты
- Документация API
- CLI для генерации вариантов
