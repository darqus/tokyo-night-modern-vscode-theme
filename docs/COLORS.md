# 🎨 Цветовая палитра Tokyo Night

## Базовые цвета

| Название | Hex | Предпросмотр | Использование |
|----------|-----|--------------|---------------|
| **black** | `#1a1b26` | ![#1a1b26](https://via.placeholder.com/20/1a1b26/1a1b26) | Фон редактора, панелей |
| **gray** | `#565f89` | ![#565f89](https://via.placeholder.com/20/565f89/565f89) | Комментарии, неактивные элементы |
| **light** | `#c0caf5` | ![#c0caf5](https://via.placeholder.com/20/c0caf5/c0caf5) | Основной светлый текст, пунктуация |
| **white** | `#ffffff` | ![#ffffff](https://via.placeholder.com/20/ffffff/ffffff) | Чисто белый для максимального контраста |
| **blue** | `#7aa2f7` | ![#7aa2f7](https://via.placeholder.com/20/7aa2f7/7aa2f7) | Функции, методы, ключевые слова |
| **cyan** | `#7dcfff` | ![#7dcfff](https://via.placeholder.com/20/7dcfff/7dcfff) | Переменные, импорты, данные |
| **teal** | `#73daca` | ![#73daca](https://via.placeholder.com/20/73daca/73daca) | Типы, интерфейсы, свойства |
| **purple** | `#9d7cd8` | ![#9d7cd8](https://via.placeholder.com/20/9d7cd8/9d7cd8) | Операторы, модификаторы |
| **green** | `#9ece6a` | ![#9ece6a](https://via.placeholder.com/20/9ece6a/9ece6a) | Строки, содержимое |
| **yellow** | `#e0af68` | ![#e0af68](https://via.placeholder.com/20/e0af68/e0af68) | Классы, константы |
| **orange** | `#ff9e64` | ![#ff9e64](https://via.placeholder.com/20/ff9e64/ff9e64) | Числа, значения |
| **red** | `#f7768e` | ![#f7768e](https://via.placeholder.com/20/f7768e/f7768e) | Ошибки, теги, предупреждения |
| **magenta** | `#bb9af7` | ![#bb9af7](https://via.placeholder.com/20/bb9af7/bb9af7) | Атрибуты, HTML теги |

## Цветовые группы

### Нейтральные

- **black** — основной фон редактора
- **gray** — комментарии и неактивные элементы
- **light** — основной светлый текст по умолчанию
- **white** — чисто белый для максимального контраста (кнопки, бейджи, dropdown, inline chat)

### Холодные акценты

- **blue** — Функции и методы
- **cyan** — Переменные и данные
- **teal** — Типы и интерфейсы
- **purple** — Операторы и модификаторы

### Теплые акценты

- **green** — Строки и содержимое
- **yellow** — Классы и константы
- **orange** — Числовые значения
- **red** — Ошибки и предупреждения
- **magenta** — Атрибуты и теги

## Алиасы палитры и правила использования

Ниже — краткие алиасы, добавленные для читабельности и единообразия. Они не меняют визуал сами по себе, а фиксируют намерение.

### Текстовые алиасы

- `textPrimary` — основной текст для большинства панелей и UI.
- `textWhite` — чисто белый для максимального контраста (кнопки, бейджи, dropdown, inline chat).
- `textMuted` — приглушённый текст.
- `textSubtle` — ещё более приглушённый.

Правило выбора текста:

- По умолчанию используйте `textPrimary`.
- Используйте `textWhite`, когда фон насыщенный/яркий и требуется высокая читаемость (кнопки, бейджи, контрастные поверхности).

### Поверхности (фоны)

- `surfaceBase` — базовый фон приложения.
- `surfaceSidebar` — фон сайдбара/терминала.
- `surfacePanel` — фон панелей/вспомогательных областей.
- `surfaceOverlay` — фон оверлеев/виджетов.

Применение в коде:

- `bg.darkenBase = surfaceSidebar`
- `bg.elevated = surfacePanel`
- `bg.overlay = surfaceOverlay`
- `dropdown.background = surfacePanel`
- `derived.overlays.dropBackground = surfaceOverlay` (с альфой)
- `blockquote.background = surfaceOverlay`

### Границы и ссылки

- `borderThin` — тонкая нейтральная граница/линии (вместо inline‑смесей).
- `borderSeparator` — разделители/бордеры виджетов.
- `link` — цвет ссылок и ANSI blue/cyan в терминале.

### CTA и акцентные элементы

- `primaryButtonBlue` — яркий синий фон основной кнопки (`#2b5ff6`).
  - Наведение: перцептуальное осветление ~8% (OKLCH-aware lighten).
  - Текст на кнопке: `textWhite` для максимальной читаемости.
- `badgeBlue` — насыщенный синий для бейджей (`#007acc`), текст бейджа — `textWhite`.

### Когда не заменять на алиасы

Интерактивные полутона `hover`, `active`, `selection` построены перцептуально (OKLCH, контролируемые смеси) — их лучше сохранять, чтобы не потерять целевую градацию.
