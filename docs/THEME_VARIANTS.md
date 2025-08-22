# Варианты темы Tokyo Night Lod

Этот пакет содержит 6 различных вариантов темы Tokyo Night Lod, каждый из которых оптимизирован для различных случаев использования и потребностей пользователей.

## 🎨 Доступные варианты

### 1. Tokyo Night Lod (Стандартная)

**Файл:** `tokyo-night-dark-color-theme.json`
**UI Theme:** `vs-dark`

Базовая тёмная тема с сбалансированными цветами и умеренным контрастом.

**Особенности:**

- Стандартный контраст для комфортного ежедневного использования
- Полная поддержка всех языков программирования
- Сбалансированная цветовая палитра Tokyo Night
- Все UI элементы имеют видимые границы и эффекты

### 2. Tokyo Night Lod High Contrast (Высококонтрастная)

**Файл:** `tokyo-night-dark-high-contrast-color-theme.json`
**UI Theme:** `hc-dark`

Высококонтрастная версия для лучшей читаемости.

**Особенности:**

- Увеличенный контраст между текстом и фоном
- Белый текст (`#ffffff`) вместо приглушённого
- Чёрный фон редактора (`#000000`) для максимального контраста
- Более яркие акцентные цвета
- Соответствует рекомендациям VS Code для `hc-dark` тем

**Ключевые отличия:**

```json
{
  "type": "hc-dark",
  "foreground": "#ffffff",
  "editor.background": "#000000",
  "activityBar.activeBorder": "#00ffff",
  "button.background": "#0066cc"
}
```

### 3. Tokyo Night Lod Minimal (Минималистичная)

**Файл:** `tokyo-night-dark-minimal-color-theme.json`
**UI Theme:** `vs-dark`

Упрощённая версия без лишних украшений.

**Особенности:**

- Убраны все границы и рамки (transparent)
- Отключены эффекты hover
- Упрощённая подсветка синтаксиса (только основные токены)
- Приглушённые цвета значков
- Минимальные визуальные отвлечения

**Ключевые отличия:**

```json
{
  "activityBar.border": "transparent",
  "tab.border": "transparent",
  "tab.activeBorder": "transparent",
  "editor.lineHighlightBackground": "transparent",
  "widget.shadow": "transparent"
}
```

### 4. Tokyo Night Lod Accessibility (Доступность)

**Файл:** `tokyo-night-accessibility-color-theme.json`
**UI Theme:** `hc-dark`

Специально оптимизированная для людей с ограниченными возможностями.

**Особенности:**

- Соответствие стандартам WCAG AAA (коэффициент контрастности 7:1)
- Жёлтая граница фокуса (`#ffff00`) для лучшей видимости
- Контрастные цвета состояний (error, warning, info)
- Яркие цвета Git декораций
- Специальные цвета для токенов синтаксиса

**Ключевые отличия:**

```json
{
  "type": "hc-dark",
  "focusBorder": "#ffff00",
  "activityBar.activeBorder": "#ffff00",
  "inputValidation.errorBorder": "#ff0000",
  "gitDecoration.addedResourceForeground": "#00ff00"
}
```

### 5. Tokyo Night Lod Clean (Чистая)

**Файл:** `tokyo-night-minimal-color-theme.json`
**UI Theme:** `vs-dark`

Альтернативное название для минималистичной темы.

**Особенности:**

- Идентична Minimal варианту
- Для пользователей, предпочитающих название "Clean"

### 6. Tokyo Night Lod Light (Светлая)

**Файл:** `tokyo-night-light-color-theme.json`
**UI Theme:** `vs`

Светлая версия темы Tokyo Night.

**Особенности:**

- Белый фон редактора (`#ffffff`)
- Тёмный текст на светлом фоне
- Адаптированная палитра цветов для светлой темы
- Material Design inspired цвета
- Полная функциональность в светлом варианте

**Ключевые отличия:**

```json
{
  "type": "light",
  "editor.background": "#ffffff",
  "editor.foreground": "#263238",
  "activityBar.background": "#f5f5f5",
  "activityBar.activeBorder": "#1976d2"
}
```

## 🔧 Технические детали

### Размеры файлов тем

- **Стандартная**: 1917 строк (полная)
- **High Contrast**: 1924 строки (расширенная)
- **Minimal/Clean**: 977 строк (упрощённая)
- **Light**: 1521 строка (адаптированная)
- **Accessibility**: 1914 строк (полная с accessibility)

### Соответствие стандартам VS Code

Все темы соответствуют официальным рекомендациям VS Code:

1. **Типы UI Theme:**
   - `vs-dark` - для тёмных тем
   - `hc-dark` - для высококонтрастных тёмных тем
   - `vs` - для светлых тем

2. **Naming Convention:**
   - Используются официальные цветовые токены VS Code
   - Соблюдается иерархия наследования
   - Правильная структура JSON

3. **Accessibility:**
   - High Contrast и Accessibility варианты помечены как `hc-dark`
   - Соблюдаются коэффициенты контрастности WCAG
   - Специальные цвета для состояний focus

## 🎯 Рекомендации по использованию

- **Стандартная**: Для ежедневной работы
- **High Contrast**: При проблемах со зрением или ярком освещении
- **Minimal/Clean**: Для фокусировки на коде без отвлечений
- **Accessibility**: Для пользователей с ограниченными возможностями
- **Light**: Для работы в светлых помещениях или личных предпочтений

## 🔍 Проверка различий

Для сравнения тем используйте:

```bash
# Сравнить стандартную с высококонтрастной
diff tokyo-night-dark-color-theme.json tokyo-night-dark-high-contrast-color-theme.json

# Проверить размеры всех тем
wc -l *.json

# Найти специфические настройки
grep "activityBar.border" *.json
```

## 📝 Разработка

Все варианты генерируются автоматически из общих компонентов с помощью `ThemeBuilder`:

```bash
npm run build  # Собрать все варианты
npm run validate:all  # Проверить все темы
```

Каждый вариант имеет свою логику в `src/variants/themeBuilder.ts` для обеспечения уникальных характеристик.
