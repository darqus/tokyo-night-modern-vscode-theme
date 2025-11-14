# Анализ и расширение покрытия токенов для CSS/SCSS

## Текущее состояние покрытия

### ✅ Уже покрытые токены

На основе анализа `src/theme/config/token-configs.ts`, текущее покрытие CSS/SCSS включает:

#### Базовые CSS токены

- **CSS Property Names**: `support.type.property-name.css`
- **CSS Classes**: `entity.other.attribute-name.class`
- **CSS IDs**: `entity.other.attribute-name.id`
- **CSS Tags**: `entity.name.tag.css`
- **CSS Values**: `support.constant.property-value`
- **CSS @rules**: `keyword.control.at-rule`
- **CSS Punctuation**: `meta.property-list`

#### SCSS/SASS специфичные токены

- **SCSS Mixins**: `meta.at-rule.mixin`, `keyword.control.at-rule.mixin`
- **SCSS Include**: `meta.at-rule.include`, `keyword.control.at-rule.include`
- **SCSS Extend**: `keyword.control.at-rule.extend`
- **SCSS Functions**: `meta.at-rule.function`
- **SCSS Variables**: `meta.at-rule.variable`

#### Препроцессоры

- **Less**: поддержка через `source.less`
- **Stylus**: поддержка через `source.stylus`
- **PostCSS**: поддержка через `source.postcss`

### ❌ Упущенные возможности для CSS/SCSS

## 1. Современные CSS возможности

### CSS Grid и Flexbox

```scss
// Текущее покрытие отсутствует
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1rem;
justify-content: center;
align-items: center;
```

### CSS Custom Properties (CSS Variables)

```scss
// Недостаточное покрытие
:root {
  --primary-color: #7aa2f7;
  --secondary-color: #bb9af7;
  --spacing-unit: 1rem;
}

.component {
  color: var(--primary-color);
  margin: var(--spacing-unit);
}
```

### CSS Functions

```scss
// Отсутствует подсветка для calc(), clamp(), min(), max()
.container {
  width: clamp(300px, 80%, 1200px);
  height: calc(100vh - 2rem);
  font-size: min(1rem, 3vw);
}
```

### CSS Logical Properties

```scss
// Нет поддержки для логических свойств
.element {
  margin-inline: auto;
  padding-block: 1rem;
  border-inline-start: 2px solid;
  inset-inline: 0;
}
```

## 2. SCSS продвинутые возможности

### SCSS Maps и Lists

```scss
// Отсутствует подсветка для карт и списков
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px
);

$colors: primary, secondary, accent;
```

### SCSS Functions и Mixins с продвинутыми возможностями

```scss
// Недостаточная подсветка для пользовательских функций
@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }
  @return $number;
}

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}
```

### SCSS Control Directives

```scss
// Отсутствует подсветка для @if, @each, @for, @while
@each $color, $value in $colors {
  .text-#{$color} {
    color: $value;
  }
}

@for $i from 1 through 3 {
  .col-#{$i} {
    flex: 0 0 percentage($i / 3);
  }
}
```

## 3. CSS-in-JS и Styled Components

### Styled Components синтаксис

```javascript
// Нет поддержки для CSS-in-JS литералов
const StyledButton = styled.button`
  background: ${props => props.primary ? '#7aa2f7' : '#bb9af7'};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;

  &:hover {
    background: ${props => props.primary ? '#6a92e7' : '#ab90e7'};
  }
`;
```

### Emotion и CSS Modules

```javascript
// Отсутствует поддержка
const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
```

## 4. Современные CSS фреймворки

### Tailwind CSS классы

```html
<!-- Недостаточная подсветка для утилитарных классов -->
<div class="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-gray-800">Title</h1>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>
```

### Bootstrap 5 классы

```html
<!-- Требуется улучшение подсветки -->
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 5. CSS Modules и CSS-in-JS

### CSS Modules синтаксис

```scss
// Нет специальной подсветки для :local, :global
.container {
  composes: base from './base.css';
  display: flex;

  :global(.global-class) {
    color: red;
  }
}
```

## Рекомендации по расширению

### 1. Добавить новые токены для CSS Grid

```typescript
{
  name: 'CSS Grid Properties',
  scope: [
    'support.type.property-name.grid',
    'support.type.property-name.flexbox',
    'support.constant.property-value.grid',
    'support.constant.property-value.flexbox'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    fontStyle: 'bold'
  }
}
```

### 2. Поддержка CSS Custom Properties

```typescript
{
  name: 'CSS Custom Properties',
  scope: [
    'variable.other.css',
    'support.type.property-name.custom-property',
    'keyword.other.var.css'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    fontStyle: 'italic'
  }
}
```

### 3. CSS Functions подсветка

```typescript
{
  name: 'CSS Functions',
  scope: [
    'support.function.css',
    'support.function.calc.css',
    'support.function.clamp.css',
    'support.function.min.css',
    'support.function.max.css',
    'support.function.var.css'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    fontStyle: 'bold'
  }
}
```

### 4. SCSS продвинутые конструкции

```typescript
{
  name: 'SCSS Control Directives',
  scope: [
    'keyword.control.at-rule.if.scss',
    'keyword.control.at-rule.each.scss',
    'keyword.control.at-rule.for.scss',
    'keyword.control.at-rule.while.scss',
    'keyword.control.at-rule.function.scss'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    fontStyle: 'bold'
  }
}
```

### 5. CSS-in-JS литералы

```typescript
{
  name: 'CSS-in-JS Template Literals',
  scope: [
    'string.template.css',
    'string.template.styled',
    'string.template.emotion',
    'meta.embedded.css'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.green.main
  }
}
```

### 6. Утилитарные CSS классы

```typescript
{
  name: 'Tailwind CSS Classes',
  scope: [
    'entity.other.attribute-name.class.tailwind',
    'string.quoted.other.tailwind',
    'support.class.tailwind'
  ],
  settings: {
    foreground: (p: UniversalPalette) => p.chromatic.cyan.light,
    fontStyle: 'normal'
  }
}
```

## Приоритеты реализации

### 🔥 Высокий приоритет

1. CSS Custom Properties (CSS Variables)
2. CSS Functions (calc, clamp, min, max)
3. CSS Grid и Flexbox свойства
4. SCSS Control Directives

### 🟡 Средний приоритет

1. CSS-in-JS Template Literals
2. Tailwind CSS классы
3. SCSS Maps и Lists
4. CSS Logical Properties

### 🟢 Низкий приоритет

1. Bootstrap 5 специфичные классы
2. CSS Modules синтаксис
3. PostCSS плагины
4. Styled Components специфичный синтаксис

## Тестирование

Для тестирования нового покрытия рекомендуется:

1. **Создать тестовые файлы** для каждого расширения
2. **Проверить контрастность** новых токенов
3. **Валидировать scope селекторы** с различными VS Code расширениями
4. **Тестирование на реальных проектах** с использованием соответствующих технологий

## Заключение

Текущее покрытие CSS/SCSS токенов является хорошей базой, но требует расширения для поддержки современных возможностей CSS и препроцессоров. Особое внимание следует уделить CSS Custom Properties, CSS Functions, и продвинутым SCSS конструкциям, которые активно используются в современной веб-разработке.
