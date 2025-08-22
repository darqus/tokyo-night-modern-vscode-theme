# Примеры использования системы валидации

## Интеграция в собственные проекты

### Базовая валидация темы

```typescript
import { PropertyValidator } from './src/validation/propertyValidator'

const validator = new PropertyValidator()
const theme = {
  name: "My Theme",
  type: "dark",
  colors: {
    "editor.background": "#1a1a1a",
    "invalid.property": "#ff0000" // Это будет найдено как ошибка
  }
}

const result = validator.validateThemeProperties(theme)
console.log(result.passed) // false
console.log(result.issues) // Детали проблем
```

### Автоисправление проблем

```typescript
import { PropertyValidator } from './src/validation/propertyValidator'

const validator = new PropertyValidator()
const { fixedTheme, fixes } = validator.fixInvalidProperties(theme)

console.log('Исправления:', fixes)
// Сохраняем исправленную тему
fs.writeFileSync('fixed-theme.json', JSON.stringify(fixedTheme, null, 2))
```

### Валидация качества

```typescript
import { ThemeValidator } from './src/validation/themeValidator'

const qualityValidator = new ThemeValidator()
const qualityResult = qualityValidator.validateTheme(theme)

// Проверяем контрастность
const contrastIssues = qualityResult.issues.filter(issue =>
  issue.message.includes('контрастность')
)
```

## CI/CD интеграция

### GitHub Actions

```yaml
name: Theme Validation

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build themes
        run: npm run build

      - name: Validate themes
        run: npm run validate:all

      - name: Check for validation errors
        run: |
          if ! npm run validate:summary; then
            echo "❌ Theme validation failed"
            exit 1
          fi
```

### GitLab CI

```yaml
validate_themes:
  stage: test
  script:
    - npm ci
    - npm run build
    - npm run validate:all
  artifacts:
    reports:
      junit: validation-report.xml
    when: on_failure
```

## Расширенное использование

### Создание кастомных правил

```typescript
import { ThemeValidator } from './src/validation/themeValidator'

const validator = new ThemeValidator()

// Добавляем собственное правило
validator.addRule({
  name: 'brand-colors',
  description: 'Проверка использования брендовых цветов',
  validate: (theme: ThemeData) => {
    const issues = []
    const brandColors = ['#007acc', '#ff6b35', '#4caf50']

    // Проверяем использование только брендовых цветов
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (!brandColors.includes(value) && !value.startsWith('#1')) {
        issues.push({
          severity: 'warning',
          message: `Небрендовый цвет: ${value} в ${key}`,
          suggestion: `Используйте один из брендовых цветов: ${brandColors.join(', ')}`
        })
      }
    })

    return {
      passed: issues.length === 0,
      issues
    }
  }
})
```

### Валидация с метриками

```typescript
import { PropertyValidator, ThemeValidator } from './src/validation'

class ThemeMetrics {
  static analyze(theme: any) {
    const propertyValidator = new PropertyValidator()
    const qualityValidator = new ThemeValidator()

    const propertyResult = propertyValidator.validateThemeProperties(theme)
    const qualityResult = qualityValidator.validateTheme(theme)

    return {
      score: this.calculateScore(propertyResult, qualityResult),
      metrics: {
        totalProperties: Object.keys(theme.colors || {}).length,
        validProperties: propertyResult.passed ? 'all' : 'some',
        errorCount: propertyResult.issues.filter(i => i.severity === 'error').length,
        warningCount: [...propertyResult.issues, ...qualityResult.issues]
          .filter(i => i.severity === 'warning').length,
        contrastIssues: qualityResult.issues.filter(i =>
          i.message.includes('контрастность')).length
      }
    }
  }

  private static calculateScore(propResult: any, qualResult: any): number {
    let score = 100

    // Снимаем очки за ошибки
    score -= propResult.issues.filter(i => i.severity === 'error').length * 10
    score -= propResult.issues.filter(i => i.severity === 'warning').length * 5
    score -= qualResult.issues.filter(i => i.severity === 'error').length * 15
    score -= qualResult.issues.filter(i => i.severity === 'warning').length * 3

    return Math.max(0, score)
  }
}

// Использование
const metrics = ThemeMetrics.analyze(theme)
console.log(`Качество темы: ${metrics.score}/100`)
```

## Интеграция с редакторами

### VS Code Task

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Validate Theme",
      "type": "shell",
      "command": "npm",
      "args": ["run", "validate:all"],
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

### NPM Scripts для разработки

```json
{
  "scripts": {
    "dev": "npm run build && npm run validate:summary",
    "dev:watch": "nodemon --watch src --ext ts,js --exec 'npm run dev'",
    "dev:fix": "npm run build && npm run validate:fix",
    "precommit": "npm run validate:all",
    "test:validation": "npm run validate:all && echo 'All themes valid!'"
  }
}
```

## Отчеты и мониторинг

### Генерация отчетов

```typescript
import { PropertyValidator } from './src/validation/propertyValidator'

class ValidationReporter {
  static generateReport(themes: Record<string, any>) {
    const validator = new PropertyValidator()
    const report = {
      timestamp: new Date().toISOString(),
      themes: {},
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        totalIssues: 0
      }
    }

    Object.entries(themes).forEach(([name, theme]) => {
      const result = validator.validateThemeProperties(theme)
      report.themes[name] = {
        passed: result.passed,
        issues: result.issues.length,
        errors: result.issues.filter(i => i.severity === 'error').length,
        warnings: result.issues.filter(i => i.severity === 'warning').length
      }

      report.summary.total++
      if (result.passed) report.summary.passed++
      else report.summary.failed++
      report.summary.totalIssues += result.issues.length
    })

    return report
  }
}
```

### Webhook для уведомлений

```typescript
class ValidationNotifier {
  static async sendToSlack(webhookUrl: string, validationResult: any) {
    const color = validationResult.passed ? 'good' : 'danger'
    const message = {
      attachments: [{
        color,
        title: 'Theme Validation Result',
        fields: [
          {
            title: 'Status',
            value: validationResult.passed ? '✅ Passed' : '❌ Failed',
            short: true
          },
          {
            title: 'Issues',
            value: validationResult.issues.length.toString(),
            short: true
          }
        ]
      }]
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    })
  }
}
```

Эти примеры показывают, как интегрировать систему валидации в различные рабочие процессы и расширить её функциональность под конкретные потребности.
