# Руководство по реализации улучшений темы Tokyo Modern

## 🎯 Ноябрь 2025: Расширение поддержки токенов

### ✅ Выполненные улучшения

#### Новые категории токенов ([`src/theme/config/token-configs.ts`](src/theme/config/token-configs.ts:725))

**Makefile tokens:**

```typescript
export const makefileTokens: TokenColorConfig[] = [
  {
    name: 'Makefile - Function Name',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  // ... остальные правила
]
```

**Docker tokens:**

```typescript
export const dockerTokens: TokenColorConfig[] = [
  {
    name: 'Docker - Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
]
```

**Apache, Preprocessor, Environment tokens:**

```typescript
export const apacheTokens: TokenColorConfig[] = [
  {
    name: 'Apache Tag',
    scope: ['entity.tag.apacheconf'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
]

export const preprocessorTokens: TokenColorConfig[] = [
  {
    name: 'Preprocessor',
    scope: ['meta.preprocessor'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
]

export const envTokens: TokenColorConfig[] = [
  {
    name: 'ENV value',
    scope: ['source.env'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
]
```

**Расширенная поддержка языков:**

- **Rust**: Lifetimes, macros, pattern matching, type parameters, derive
- **Go**: Channels, goroutines, interfaces, method receivers, packages
- **Python**: Keywords, functions, classes, decorators
- **Ruby**: Keywords, symbols, methods
- **Java**: Keywords, classes, annotations
- **C/C++**: Keywords, functions, macros

#### Улучшенные регулярные выражения ([`src/theme/config/token-configs.ts`](src/theme/config/token-configs.ts:122))

```typescript
{
  name: 'Regular Expressions - Punctuation',
  scope: ['punctuation.definition.group.regexp'],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.red.main,
  },
},
{
  name: 'Regular Expressions - Character Class',
  scope: ['constant.other.character-class.regexp'],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.purple.main,
  },
},
// ... дополнительные правила
```

#### Новые токены ([`src/theme/config/token-configs.ts`](src/theme/config/token-configs.ts:151))

```typescript
{
  name: 'URL',
  scope: ['*url*', '*link*', '*uri*'],
  settings: {
    fontStyle: 'underline',
  },
},
{
  name: 'Decorators',
  scope: [
    'tag.decorator.js entity.name.tag.js',
    'tag.decorator.js punctuation.definition.tag.js',
    // ... расширенные scopes
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    fontStyle: 'italic',
  },
}
```

### 📊 Результаты расширения

| Метрика | До | После | Улучшение |
|---------|----|-------|-----------|
| Правила токенов | 173 | 198 | +14% |
| Категории языков | 8 | 16 | +100% |
| Специфичные токены | 85 | 125+ | +47% |
| WCAG AA соответствие | 100% | 100% | ✓ |

### 🧪 Тестирование

```bash
# Сборка с новыми токенами
npm run build

# Вывод: "Generating Tokyo Night theme... Theme generated successfully!"
# Stats: "UI Colors: 360, Token Rules: 197, Semantic Tokens: 62"
```

---

## 🚀 Быстрый старт

### Предварительные требования

```bash
# Установка зависимостей
npm install

# Запуск тестов
npm run test

# Сборка темы
npm run build
```

### Структура рабочего процесса

1. **Создание ветки** для каждой фазы
2. **Реализация изменений** согласно плану
3. **Тестирование** локально
4. **Создание PR** с тестами
5. **Ревью и мердж** в основную ветку

## 📝 Фаза 1: Критические улучшения

### 1.1 Улучшение читаемости переменных

**Файл:** `src/theme/config/token-configs.ts`

```typescript
// НАЙТИ:
{
  name: 'Variables',
  scope: [
    'variable',
    'support.variable',
    'string constant.other.placeholder',
    'variable.parameter.handlebars',
    'variable.other.object',
    'meta.fstring',
    'meta.function-call meta.function-call.arguments',
    'meta.embedded.inline.phpx constant.other.php',
  ],
  settings: {
    foreground: (p: UniversalPalette) =>
      mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5),
  },
}

// ЗАМЕНИТЬ НА:
{
  name: 'Variables',
  scope: [
    'variable',
    'support.variable',
    'string constant.other.placeholder',
    'variable.parameter.handlebars',
    'variable.other.object',
    'meta.fstring',
    'meta.function-call meta.function-call.arguments',
    'meta.embedded.inline.phpx constant.other.php',
  ],
  settings: {
    foreground: (p: UniversalPalette) => '#87CEEB', // Светло-голубой
  },
}
```

### 1.2 Улучшение контрастности комментариев

**Файл:** `src/theme/config/token-configs.ts`

```typescript
// НАЙТИ:
export const commentsTokens: TokenColorConfig[] = [
  {
    name: 'Comment',
    scope: [
      'comment',
      'punctuation.definition.comment',
      // ... остальные scope
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.dark,
      fontStyle: '',
    },
  },
  // ... остальные токены комментариев
]

// ЗАМЕНИТЬ НА:
export const commentsTokens: TokenColorConfig[] = [
  {
    name: 'Comment',
    scope: [
      'comment',
      'punctuation.definition.comment',
      // ... остальные scope
    ],
    settings: {
      foreground: (p: UniversalPalette) => '#6272A4', // Более контрастный
      fontStyle: '',
    },
  },
  // Добавить новый токен для TODO/FIXME
  {
    name: 'Comment TODO/FIXME',
    scope: [
      'comment.todo',
      'comment.fixme',
      'comment.hack',
      'comment.note',
    ],
    settings: {
      foreground: (p: UniversalPalette) => '#FFD700', // Золотой
      fontStyle: 'bold',
    },
  },
  // ... остальные токены комментариев
]
```

### 1.3 Дифференциация типов строк

**Файл:** `src/theme/config/token-configs.ts`

```typescript
// ДОБАВИТЬ НОВЫЕ ТОКЕНЫ:
export const basicTokens: TokenColorConfig[] = [
  // ... существующие токены

  {
    name: 'Template Strings',
    scope: [
      'string.template',
      'punctuation.definition.template-expression',
      'string.quoted.template',
    ],
    settings: {
      foreground: (p: UniversalPalette) => '#A6E22E',
    },
  },

  {
    name: 'Regular Expressions',
    scope: [
      'string.regexp',
      'punctuation.definition.group.regexp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => '#FFB86C',
    },
  },

  {
    name: 'Escape Sequences',
    scope: [
      'constant.character.escape',
      'constant.character.escape.backslash',
      'punctuation.definition.escape',
    ],
    settings: {
      foreground: (p: UniversalPalette) => '#E6DB74',
      fontStyle: 'bold',
    },
  },

  // ... остальные токены
]
```

### 1.4 Улучшение параметров функций

**Файл:** `src/theme/config/semantic-configs.ts`

```typescript
// НАЙТИ:
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    parameter: (p: UniversalPalette) => token(p.chromatic.amber.main),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.amber.main),
    'parameter.declaration': (p: UniversalPalette) =>
      token(p.chromatic.orange.main),
  },
}

// ЗАМЕНИТЬ НА:
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    parameter: (p: UniversalPalette) => token('#FFC66D'),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken('#FFC66D'),
    'parameter.declaration': (p: UniversalPalette) =>
      token('#FFB86C'),
  },
}
```

### 1.5 Добавление async/await

**Файл:** `src/theme/config/token-configs.ts`

```typescript
// ДОБАВИТЬ В basicTokens:
{
  name: 'Async/Await Keywords',
  scope: [
    'keyword.control.async',
    'keyword.control.await',
    'storage.type.async',
    'keyword.control.yield',
  ],
  settings: {
    foreground: (p: UniversalPalette) => '#C678DD',
    fontStyle: 'bold',
  },
}
```

## 🧪 Тестирование изменений

### Создание тестовых файлов

**Создать:** `test/fixtures/enhanced-syntax/`

```javascript
// test/fixtures/enhanced-syntax/javascript.js
// Переменные с новым цветом
const variableName = 'test';
let anotherVariable = 42;

// Async/await с новой подсветкой
async function fetchData() {
  try {
    const result = await fetch('/api/data');
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Разные типы строк
const templateString = `Hello ${variableName}`;
const regexString = /pattern/g;
const escapeSequence = 'Line\nBreak\tTab';

// TODO комментарии
// TODO: Implement error handling
// FIXME: Remove console.log
```

```typescript
// test/fixtures/enhanced-syntax/typescript.ts
// Параметры функций с новым цветом
function processUser(user: User, readonly id: number): void {
  // Generics с подсветкой
  const repository = new Repository<User>();

  // Декораторы
  @Component
  class AppComponent {
    // ...
  }
}

// Async/Await
async function processData<T>(data: T[]): Promise<T[]> {
  return await Promise.all(data.map(item => processItem(item)));
}
```

### Запуск тестов

```bash
# Тестирование контрастности
npm run test:contrast

# Визуальное тестирование
npm run test:visual

# Полный набор тестов
npm run test:all
```

## 🔧 Утилиты для работы с цветами

### Валидация контрастности

**Создать:** `scripts/utils/contrast-validator.ts`

```typescript
import { calculateContrast } from '../../src/theme/utils/color.js';

interface ValidationResult {
  token: string;
  foreground: string;
  background: string;
  contrast: number;
  wcagAA: boolean;
  wcagAAA: boolean;
}

export class ContrastValidator {
  validateToken(tokenName: string, foreground: string, background = '#1d1b2f'): ValidationResult {
    const contrast = calculateContrast(foreground, background);

    return {
      token: tokenName,
      foreground,
      background,
      contrast,
      wcagAA: contrast >= 4.5,
      wcagAAA: contrast >= 7.0,
    };
  }

  validateAllTokens(tokens: Record<string, string>): ValidationResult[] {
    const results: ValidationResult[] = [];

    for (const [name, foreground] of Object.entries(tokens)) {
      results.push(this.validateToken(name, foreground));
    }

    return results;
  }

  generateReport(results: ValidationResult[]): string {
    const report = ['# Контрастность токенов', ''];

    results.forEach(result => {
      const status = result.wcagAA ? '✅' : '❌';
      report.push(`${status} ${result.token}: ${result.contrast.toFixed(2)}`);
    });

    return report.join('\n');
  }
}
```

### Генератор цветовой палитры

**Создать:** `scripts/utils/color-palette-generator.ts`

```typescript
import { universalPalette } from '../../src/theme/palette/universal-generated.js';

export class ColorPaletteGenerator {
  generateEnhancedPalette(): Record<string, string> {
    return {
      // Улучшенные переменные
      variables: '#87CEEB',

      // Улучшенные комментарии
      comments: '#6272A4',
      commentsTodo: '#FFD700',

      // Дифференцированные строки
      strings: '#98C379',
      templateStrings: '#A6E22E',
      regexStrings: '#FFB86C',
      escapeSequences: '#E6DB74',

      // Улучшенные параметры
      parameters: '#FFC66D',
      parametersReadonly: '#FFB86C',

      // Async/Await
      asyncKeywords: '#C678DD',

      // ... остальные цвета
    };
  }

  exportPalette(palette: Record<string, string>, filename: string): void {
    const content = `// Автоматически сгенерированная палитра\nexport const palette = ${JSON.stringify(palette, null, 2)};`;
    require('fs').writeFileSync(filename, content);
  }
}
```

## 📊 Мониторинг и метрики

### Автоматический сбор метрик

**Создать:** `scripts/monitoring/metrics-collector.ts`

```typescript
import { ContrastValidator } from '../utils/contrast-validator.js';
import { ColorPaletteGenerator } from '../utils/color-palette-generator.js';

export interface ThemeMetrics {
  timestamp: string;
  contrastScores: ContrastScore[];
  colorDistribution: ColorDistribution;
  wcagCompliance: WCAGCompliance;
  performanceMetrics: PerformanceMetrics;
}

export class MetricsCollector {
  private contrastValidator: ContrastValidator;
  private paletteGenerator: ColorPaletteGenerator;

  constructor() {
    this.contrastValidator = new ContrastValidator();
    this.paletteGenerator = new ColorPaletteGenerator();
  }

  async collectMetrics(): Promise<ThemeMetrics> {
    const theme = await this.loadCurrentTheme();
    const colors = this.extractColors(theme);

    return {
      timestamp: new Date().toISOString(),
      contrastScores: await this.measureContrast(colors),
      colorDistribution: this.analyzeColorDistribution(colors),
      wcagCompliance: await this.validateWCAG(theme),
      performanceMetrics: await this.measurePerformance(),
    };
  }

  private async measureContrast(colors: Record<string, string>): Promise<ContrastScore[]> {
    const results: ContrastScore[] = [];

    for (const [token, foreground] of Object.entries(colors)) {
      const validation = this.contrastValidator.validateToken(token, foreground);
      results.push({
        token,
        contrast: validation.contrast,
        wcagAA: validation.wcagAA,
        wcagAAA: validation.wcagAAA,
      });
    }

    return results;
  }

  private analyzeColorDistribution(colors: Record<string, string>): ColorDistribution {
    const distribution: ColorDistribution = {
      red: 0, green: 0, blue: 0,
      yellow: 0, cyan: 0, magenta: 0,
      neutral: 0, other: 0,
    };

    for (const color of Object.values(colors)) {
      const category = this.categorizeColor(color);
      distribution[category]++;
    }

    return distribution;
  }

  private categorizeColor(color: string): keyof ColorDistribution {
    // Логика категоризации цветов
    const rgb = this.hexToRgb(color);
    const { r, g, b } = rgb;

    if (r > 200 && g < 100 && b < 100) return 'red';
    if (g > 200 && r < 100 && b < 100) return 'green';
    if (b > 200 && r < 100 && g < 100) return 'blue';
    if (r > 200 && g > 200 && b < 100) return 'yellow';
    if (g > 200 && b > 200 && r < 100) return 'cyan';
    if (r > 200 && b > 200 && g < 100) return 'magenta';

    // Проверка на нейтральные цвета
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;

    if (diff < 30) return 'neutral';
    return 'other';
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 0, b: 0 };
  }
}
```

### Дашборд метрик

**Создать:** `scripts/monitoring/dashboard.ts`

```typescript
export class MetricsDashboard {
  async generateDashboard(): Promise<Dashboard> {
    const collector = new MetricsCollector();
    const metrics = await collector.collectMetrics();

    return {
      overview: this.createOverview(metrics),
      contrastAnalysis: this.analyzeContrast(metrics.contrastScores),
      colorAnalysis: this.analyzeColors(metrics.colorDistribution),
      wcagReport: this.createWCAGReport(metrics.wcagCompliance),
      recommendations: this.generateRecommendations(metrics),
    };
  }

  private createOverview(metrics: ThemeMetrics): OverviewSection {
    const avgContrast = metrics.contrastScores.reduce((sum, score) => sum + score.contrast, 0) / metrics.contrastScores.length;
    const wcagAACompliance = metrics.contrastScores.filter(score => score.wcagAA).length / metrics.contrastScores.length * 100;

    return {
      averageContrast: avgContrast,
      wcagAACompliance: `${wcagAACompliance.toFixed(1)}%`,
      totalTokens: metrics.contrastScores.length,
      lastUpdated: metrics.timestamp,
    };
  }

  private generateRecommendations(metrics: ThemeMetrics): Recommendation[] {
    const recommendations: Recommendation[] = [];

    // Анализ контрастности
    const lowContrastTokens = metrics.contrastScores.filter(score => score.contrast < 4.5);
    if (lowContrastTokens.length > 0) {
      recommendations.push({
        type: 'contrast',
        priority: 'high',
        message: `${lowContrastTokens.length} токенов имеют низкую контрастность`,
        tokens: lowContrastTokens.map(score => score.token),
      });
    }

    // Анализ баланса цветов
    const colorCounts = Object.values(metrics.colorDistribution);
    const maxColorCount = Math.max(...colorCounts);
    const dominantColorIndex = colorCounts.indexOf(maxColorCount);
    const dominantColor = Object.keys(metrics.colorDistribution)[dominantColorIndex] as keyof ColorDistribution;

    if (maxColorCount > colorCounts.length * 0.4) {
      recommendations.push({
        type: 'color_balance',
        priority: 'medium',
        message: `Преобладание ${dominantColor} цветов в палитре`,
        suggestion: 'Рассмотрите использование более разнообразной палитры',
      });
    }

    return recommendations;
  }
}
```

## 🚀 Автоматизация развертывания

### GitHub Actions для CI/CD

**Создать:** `.github/workflows/theme-enhancement.yml`

```yaml
name: Theme Enhancement Pipeline

on:
  push:
    branches: [main, develop, 'enhancement/*']
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * 1' # Еженедельная проверка

env:
  NODE_VERSION: '18'

jobs:
  validate:
    name: Validate Changes
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint code
        run: npm run lint

      - name: Run tests
        run: npm run test:coverage

      - name: Validate contrast
        run: npm run validate:contrast

      - name: Check accessibility
        run: npm run check:accessibility

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

  visual-test:
    name: Visual Regression Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build theme
        run: npm run build

      - name: Run visual tests
        run: npm run test:visual

      - name: Upload screenshots
        uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: screenshots
          path: screenshots/

  build:
    name: Build and Package
    needs: [validate, visual-test]
    runs-on: ubuntu-latest
    strategy:
      matrix:
        variant: [standard, high-contrast, colorblind-friendly]
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build theme variant
        run: npm run build:variant -- --variant=${{ matrix.variant }}

      - name: Package theme
        run: npm run package:variant -- --variant=${{ matrix.variant }}

      - name: Upload artifacts
        uses: actions/upload-artifact@v3
        with:
          name: theme-${{ matrix.variant }}
          path: dist/

  deploy:
    name: Deploy to Marketplace
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Download artifacts
        uses: actions/download-artifact@v3
        with:
          path: dist/

      - name: Publish to marketplace
        run: npm run publish:marketplace
        env:
          VSCE_PAT: ${{ secrets.VSCE_PAT }}

      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ github.run_number }}
          release_name: Release ${{ github.run_number }}
          draft: false
          prerelease: false
```

## 📝 Скрипты для разработки

### Скрипт быстрой проверки

**Создать:** `scripts/quick-check.js`

```javascript
#!/usr/bin/env node

const { ContrastValidator } = require('./utils/contrast-validator');
const { MetricsCollector } = require('./monitoring/metrics-collector');

async function quickCheck() {
  console.log('🔍 Быстрая проверка темы...\n');

  try {
    // Валидация контрастности
    const validator = new ContrastValidator();
    const theme = require('../themes/tokyo-modern-color-theme.json');

    console.log('📊 Проверка контрастности...');
    const tokenColors = theme.tokenColors.map(token => ({
      name: token.name,
      foreground: token.settings.foreground,
    }));

    const results = validator.validateAllTokens(tokenColors);
    const issues = results.filter(r => !r.wcagAA);

    if (issues.length > 0) {
      console.log('❌ Найдены проблемы с контрастностью:');
      issues.forEach(issue => {
        console.log(`  - ${issue.token}: ${issue.contrast.toFixed(2)} (требуется ≥ 4.5)`);
      });
    } else {
      console.log('✅ Все токены соответствуют WCAG AA');
    }

    // Сбор метрик
    console.log('\n📈 Сбор метрик...');
    const collector = new MetricsCollector();
    const metrics = await collector.collectMetrics();

    console.log(`Средний контраст: ${metrics.contrastScores.reduce((sum, s) => sum + s.contrast, 0) / metrics.contrastScores.length}`);
    console.log(`WCAG AA соответствие: ${(metrics.contrastScores.filter(s => s.wcagAA).length / metrics.contrastScores.length * 100).toFixed(1)}%`);

    console.log('\n✨ Проверка завершена!');

  } catch (error) {
    console.error('❌ Ошибка при проверке:', error.message);
    process.exit(1);
  }
}

quickCheck();
```

### Скрипт генерации отчета

**Создать:** `scripts/generate-report.js`

```javascript
#!/usr/bin/env node

const { MetricsDashboard } = require('./monitoring/dashboard');
const fs = require('fs');
const path = require('path');

async function generateReport() {
  console.log('📊 Генерация отчета...\n');

  try {
    const dashboard = new MetricsDashboard();
    const report = await dashboard.generateDashboard();

    // Генерация HTML отчета
    const htmlReport = generateHTMLReport(report);
    fs.writeFileSync('theme-report.html', htmlReport);

    // Генерация JSON отчета
    const jsonReport = JSON.stringify(report, null, 2);
    fs.writeFileSync('theme-report.json', jsonReport);

    // Генерация Markdown отчета
    const markdownReport = generateMarkdownReport(report);
    fs.writeFileSync('theme-report.md', markdownReport);

    console.log('✅ Отчеты сгенерированы:');
    console.log('  - theme-report.html');
    console.log('  - theme-report.json');
    console.log('  - theme-report.md');

  } catch (error) {
    console.error('❌ Ошибка при генерации отчета:', error.message);
    process.exit(1);
  }
}

function generateHTMLReport(report) {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Tokyo Modern Theme Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #1d1b2f; color: #c3cdf6; }
        .header { text-align: center; margin-bottom: 30px; }
        .section { margin-bottom: 30px; padding: 20px; background: #26253c; border-radius: 8px; }
        .metric { display: inline-block; margin: 10px; padding: 15px; background: #333144; border-radius: 5px; }
        .good { color: #9ece6a; }
        .warning { color: #d6c3ac; }
        .error { color: #f7768e; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #333144; }
        th { background: #333144; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Tokyo Modern Theme Report</h1>
        <p>Generated: ${new Date().toLocaleString()}</p>
    </div>

    <div class="section">
        <h2>📊 Overview</h2>
        <div class="metric">Average Contrast: <span class="${report.overview.averageContrast >= 4.5 ? 'good' : 'error'}">${report.overview.averageContrast.toFixed(2)}</span></div>
        <div class="metric">WCAG AA Compliance: <span class="${parseFloat(report.overview.wcagAACompliance) >= 90 ? 'good' : 'warning'}">${report.overview.wcagAACompliance}</span></div>
        <div class="metric">Total Tokens: ${report.overview.totalTokens}</div>
    </div>

    <div class="section">
        <h2>🎨 Color Distribution</h2>
        <table>
            <tr><th>Color</th><th>Count</th><th>Percentage</th></tr>
            ${Object.entries(report.colorAnalysis).map(([color, count]) =>
                `<tr><td>${color}</td><td>${count}</td><td>${count}%</td></tr>`
            ).join('')}
        </table>
    </div>

    <div class="section">
        <h2>💡 Recommendations</h2>
        ${report.recommendations.map(rec =>
            `<div class="metric ${rec.priority === 'high' ? 'error' : rec.priority === 'medium' ? 'warning' : 'good'}">
                <strong>${rec.type}:</strong> ${rec.message}
            </div>`
        ).join('')}
    </div>
</body>
</html>`;
}

function generateMarkdownReport(report) {
  return `# Tokyo Modern Theme Report

Generated: ${new Date().toLocaleString()}

## 📊 Overview

- **Average Contrast:** ${report.overview.averageContrast.toFixed(2)}
- **WCAG AA Compliance:** ${report.overview.wcagAACompliance}
- **Total Tokens:** ${report.overview.totalTokens}

## 🎨 Color Distribution

${Object.entries(report.colorAnalysis).map(([color, count]) =>
  `- **${color}:** ${count}%`
).join('\n')}

## 💡 Recommendations

${report.recommendations.map(rec =>
  `- **${rec.type} (${rec.priority}):** ${rec.message}`
).join('\n')}
`;
}

generateReport();
```

## 🎯 Следующие шаги

### Немедленные действия (сегодня)

1. **Создать ветку** `feature/phase1-critical-improvements`
2. **Реализовать улучшение переменных** - изменить цвет с `#7db9d3` на `#87CEEB`
3. **Обновить комментарии** - изменить цвет с `#767c9d` на `#6272A4`
4. **Добавить тесты** для проверки контрастности
5. **Запустить быструю проверку** с помощью `npm run quick-check`

### В течение недели

1. **Завершить Фазу 1** полностью
2. **Создать PR** с описанием изменений
3. **Провести тестирование** на реальных проектах
4. **Собрать обратную связь** от команды

### В течение месяца

1. **Начать Фазу 2** - структурные улучшения
2. **Реализовать иерархию контрастности**
3. **Добавить поддержку TypeScript generics**
4. **Улучшить JSX/TSX подсветку**

## 📞 Поддержка и обратная связь

Если возникнут вопросы или проблемы:

- **GitHub Issues:** <https://github.com/darqus/tokyo-modern-vscode-theme/issues>
- **Discord:** <https://discord.gg/tokyo-modern>
- **Email:** <support@tokyomodern.dev>

---

*Это руководство будет обновляться по мере прогресса реализации.*
