# Tokyo Night Lod - Руководство по улучшенной архитектуре

## 🎯 Обзор

Тема Tokyo Night Lod теперь включает улучшенную архитектуру с поддержкой множественных вариантов, системы плагинов, автоматической валидации и гибкой конфигурации.

## 🏗️ Новая архитектура

### Компоненты системы

```
src/
├── types/theme.ts              # TypeScript типы и интерфейсы
├── variants/index.ts           # Система тематических вариантов
├── utils/colorSystem.ts        # Динамическая генерация цветов
├── components/index.ts         # UI компоненты и состояния
├── validation/themeValidator.ts # Система валидации качества
├── config/themeConfig.ts       # Менеджер конфигурации
├── plugins/index.ts            # Система плагинов
└── build.ts                    # Улучшенный генератор темы
```

## 🎨 Варианты темы

Теперь поддерживается 4 варианта темы:

1. **Tokyo Night Dark** - стандартный вариант
2. **Tokyo Night Dark High Contrast** - повышенная контрастность
3. **Tokyo Night Dark Minimal** - минималистичный стиль
4. **Tokyo Night Light** - светлый вариант (планируется)

### Использование в VS Code

```json
{
  "workbench.colorTheme": "Tokyo Night Lod High Contrast"
}
```

## 🔧 CLI инструменты

### Сборка темы

```bash
# Стандартная сборка
npm run build

# Сборка всех вариантов
npm run build:all

# Сборка конкретного варианта
npm run cli build accessibility
```

### Валидация

```bash
# Валидация основной темы
npm run validate

# Валидация всех тем
npm run validate:all

# Валидация конкретного файла
npm run cli validate themes/custom-theme.json
```

### Управление плагинами

```bash
# Список доступных плагинов
npm run cli plugins list

# Включение плагинов
npm run cli plugins enable rust-support go-support

# Информация о системе
npm run cli info
```

## 📦 Система плагинов

### Встроенные плагины

- **rust-support** - расширенная поддержка Rust
- **go-support** - улучшенная поддержка Go
- **python-support** - расширенная поддержка Python
- **typescript-support** - улучшенная поддержка TypeScript
- **high-contrast** - повышение контрастности

### Создание собственного плагина

```typescript
import { ThemePlugin } from '../types/theme'

export const myLanguagePlugin: ThemePlugin = {
  name: 'my-language-support',
  version: '1.0.0',
  description: 'Поддержка моего языка',

  apply: (theme) => ({
    ...theme,
    semanticTokenColors: {
      ...theme.semanticTokenColors,
      'myLanguage.keyword': { foreground: '#7aa2f7' }
    }
  }),

  isCompatible: (version) => true
}
```

## ⚙️ Конфигурация

### Создание конфигурации

```bash
# Конфигурация для разработчика
npm run cli config create developer

# Конфигурация для доступности
npm run cli config create accessibility

# Минималистичная конфигурация
npm run cli config create minimal
```

### Пример конфигурации

```json
{
  "variant": "tokyo-night-dark",
  "contrast": "normal",
  "syntax": {
    "enableSemanticHighlighting": true,
    "bracketPairColorization": true,
    "customLanguageSupport": ["rust", "go", "python"]
  },
  "ui": {
    "activityBarPosition": "left",
    "tabBarStyle": "modern",
    "statusBarStyle": "full"
  }
}
```

## 🔍 Система валидации

### Правила валидации

1. **Контрастность** - проверка WCAG 2.1 AA/AAA
2. **Консистентность** - проверка согласованности цветов
3. **Доступность** - проверка элементов фокуса
4. **Дублирование** - выявление избыточных цветов
5. **Дальтонизм** - проверка различимости для дальтоников

### Автоматическая валидация

```typescript
import { ThemeValidator } from './validation/themeValidator'

const validator = new ThemeValidator()
const result = validator.validateTheme(theme)

if (!result.passed) {
  result.issues.forEach(issue => {
    console.log(`[${issue.severity}] ${issue.message}`)
  })
}
```

## 🎨 Динамические цвета

### Генерация по глубине

```typescript
import { DynamicColorSystem } from './utils/colorSystem'

const colorSystem = new DynamicColorSystem(baseColors)

// Генерация цветов для JSON ключей
const jsonColors = colorSystem.generateJsonKeys(8)

// Генерация заголовков Markdown
const markdownHeaders = colorSystem.generateMarkdownHeaders()
```

### Цветовые шкалы

```typescript
// Генерация шкалы из базового цвета
const scale = colorSystem.generateColorScale('#7aa2f7')
// Результат: { 50: '#f0f7ff', 100: '#e1f0ff', ..., 900: '#1a2845' }
```

## 🧩 UI компоненты

### Стандартизированные состояния

```typescript
import { ComponentStateFactory } from './components/index'

const buttonStates = ComponentStateFactory.createStandardStates(
  baseBackground,
  baseForeground,
  accentColor
)
// Результат: { default, hover, active, focus, disabled }
```

### Генерация VS Code цветов

```typescript
import { UIComponentManager } from './components/index'

const manager = new UIComponentManager()
const vsCodeColors = manager.generateVSCodeColors('button')
```

## 🚀 Производительность

### Оптимизации

- **Ленивая загрузка** плагинов
- **Кэширование** генерируемых цветов
- **Минимизация** количества цветовых вычислений
- **Оптимальный размер** результирующих файлов

### Метрики

- Время сборки: ~2-5 секунд
- Размер темы: ~50-80 КБ
- Поддерживаемые языки: 20+
- Количество правил валидации: 15+

## 🔄 Миграция

### Обновление с предыдущей версии

1. **Сохраните настройки** - экспортируйте текущие настройки
2. **Обновите тему** - установите новую версию
3. **Выберите вариант** - выберите подходящий вариант темы
4. **Настройте плагины** - включите нужные языковые плагины

### Совместимость

- VS Code версии 1.74.0+
- Node.js версии 16+
- TypeScript версии 4.5+

## 📚 API справочник

### ThemeConfigManager

```typescript
const config = new ThemeConfigManager()
config.updateConfig({ contrast: 'high' })
const theme = config.generateTheme()
```

### PluginManager

```typescript
const plugins = new PluginManager()
plugins.enablePlugin('rust-support')
const enhancedTheme = plugins.applyPlugins(theme)
```

### ThemeValidator

```typescript
const validator = new ThemeValidator()
const result = validator.validateTheme(theme)
```

## 🎯 Лучшие практики

### Разработка плагинов

1. Следуйте соглашениям именования
2. Обеспечьте совместимость версий
3. Добавляйте описательные сообщения об ошибках
4. Тестируйте на разных языках

### Настройка темы

1. Начните с предустановленной конфигурации
2. Постепенно настраивайте под свои нужды
3. Регулярно проверяйте валидацию
4. Сохраняйте резервные копии настроек

### Производительность

1. Используйте только необходимые плагины
2. Периодически очищайте кэш
3. Мониторьте время загрузки VS Code
4. Оптимизируйте пользовательские цвета

## 🐛 Решение проблем

### Частые проблемы

**Тема не применяется**

- Проверьте правильность имени в настройках
- Перезапустите VS Code
- Проверьте логи на ошибки

**Низкая производительность**

- Отключите неиспользуемые плагины
- Проверьте настройки семантического выделения
- Обновите VS Code до последней версии

**Проблемы с контрастностью**

- Используйте high-contrast вариант
- Настройте параметры контрастности
- Проверьте настройки монитора

## 📞 Поддержка

- **GitHub Issues**: [tokyo-night-vscode-theme-lod/issues](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)
- **Документация**: `docs/` директория
- **Примеры**: `docs/EXAMPLES.md`

## 🎉 Заключение

Улучшенная архитектура Tokyo Night Lod предоставляет мощные инструменты для настройки и расширения темы. Благодаря модульной структуре, системе плагинов и автоматической валидации, тема может адаптироваться под любые потребности разработчика, сохраняя при этом высокое качество и производительность.
