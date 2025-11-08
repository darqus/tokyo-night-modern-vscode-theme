# Palette

Раздел: Универсальный подход к палитре и генерации оттенков

1) Цели

- Сократить избыточность цветовых значений и риск рассинхронизации.
- Сделать палитру предсказуемой: одинаковые шаги между dark/main/light/bright.
- Обеспечить поддерживаемость: правим main-тон и централизованные дельты — вся палитра пересчитывается.

2) Базовые сущности

- ColorVariant: 4-ступенчатая шкала на один тон:
  - dark: затемненный вариант от main
  - main: базовый тон
  - light: осветленный вариант от main
  - bright: самый светлый шаг для подсветок/hover
- UniversalPalette: структура с группами background, foreground, semantic, chromatic, ui, shadow.

3) Генерация оттенков

- Все варианты (кроме shadow/примитивов white/black/badge) строятся формульно от main с помощью функции fromMain(main, { d, l, b }):
  - dark = darken(main, d)
  - light = lighten(main, l)
  - bright = lighten(main, b)
- Корректировки (дельты) централизованы в объекте VARIANT_DELTA:
  - background: d=MEDIUM, l=LIGHT, b=STRONG
  - foregroundStrong (primary/secondary/muted): d=SLIGHT, l=SLIGHT, b=STRONG
  - foregroundSoft (disabled): d=SLIGHT, l=TINY, b=LIGHT
  - chromatic: d=MEDIUM, l=LIGHT, b=STRONG
  - border/scrollbar: d=TINY, l=SLIGHT, b=LIGHT
- Константы ADJUST определены в utils/color-helpers.ts:
  - TINY=0.02, SLIGHT=0.05, LIGHT=0.1, MEDIUM=0.15, STRONG=0.2, VERY_STRONG=0.25
- Функции работы с цветами:
  - lighten(hex, amount), darken(hex, amount), mix(hex1, hex2, ratio) из utils/color.ts

4) Организация палитры

- chromatic:
  - Хранит только main-тона для ключей (blue, cyan, teal, green, lime, emerald, orange, amber, yellow, red, pink, purple, indigo, neutral), а варианты генерируются через fromMain.
  - Алиасы для сокращения избыточности:
    - sky → blue
    - rose → pink
    - magenta → pink
    - violet → purple
  Ключи сохранены для совместимости, значения генерируются из соответствующих базовых main-тонов.
- semantic:
  - Не хранит собственных значений. Ссылается на chromatic:
    - success → emerald
    - warning → amber
    - error → red
    - info → blue
    - accent → purple
  Это гарантирует синхронность и отсутствие дублирования.
- background:
  - Четыре слоя: base, elevated, inset, overlay.
  - Каждый слой получает dark/light/bright от своего main по VARIANT_DELTA.background.
- foreground:
  - Группы: primary, secondary, muted, disabled.
  - Используют разные пресеты дельт для необходимой выразительности:
    - primary/secondary/muted → foregroundStrong
    - disabled → foregroundSoft
- ui:
  - border: fromMain(mix(background.base.main, foreground.primary.main, MOSTLY_FIRST), VARIANT_DELTA.border)
  - scrollbar: fromMain(lighten(background.base.main, SLIGHT), VARIANT_DELTA.scrollbar)
  - selection: смешение chromatic.blue.* с background.base.main с фиксированным коэффициентом 0.25 для всех ступеней.

5) Контрасты и доступность

- Цель: foreground.primary.main против background.base.main ≥ 4.5:1, для muted/disabled ≥ 3:1.
- Контроль контраста осуществляется проверочными скриптами (scripts/check-contrast.ts, scripts/analyze-palette.ts).
- Опционально: интегрировать ensureContrast на этапе генерации foreground, чтобы автоматически поддерживать порог при изменениях базовых тонов.

6) Принципы bright

- bright — самый светлый семантический шаг для подсветок, границ, selection, hover.
- Всегда вычисляется формульно от main (через fromMain и VARIANT_DELTA), чтобы поддерживать единообразие.

7) Как изменять палитру

- Изменить тона проекта:
  - Править только main-значения в chromatic/background/foreground.
  - При необходимости подправить VARIANT_DELTA (например, усилить глубину фона — увеличить background.d).
- Стабильность:
  - semantic автоматически синхронизирован, UI элементы пересчитаются, ступени сохранятся равномерными.

8) Роадмап упрощения

- Текущее состояние: интерфейсы сохранены, алиасы сведены, генерация централизована.
- Возможные будущие шаги:
  - Внедрение ensureContrast в генерацию.
  - Переход на числовую шкалу уровней (100..900) в мажорной версии, если потребуется.
  - Удаление алиасов (sky/rose/magenta/violet) из интерфейсов после полной миграции потребителей.

9) Пример кода (описательно)

- Создание chromatic:
  - chromaMain содержит main-тона
  - chromatic = Object.fromEntries(Object.entries(chromaMain).map(([k, main]) => [k, fromMain(main, VARIANT_DELTA.chromatic)]))
- semantic:
  - success: chromatic.emerald; warning: chromatic.amber; error: chromatic.red; info: chromatic.blue; accent: chromatic.purple
- background:
  - base: fromMain('#18162c', VARIANT_DELTA.background), и т.д.
- ui:
  - border: fromMain(mix(base.main, fg.primary.main, MOSTLY_FIRST), VARIANT_DELTA.border)
  - scrollbar: fromMain(lighten(base.main, SLIGHT), VARIANT_DELTA.scrollbar)
  - selection: mix(chromatic.blue.[dark/main/light/bright], base.main, 0.25)

10) Проверки

- npm test — общий регресс.
- ts-node scripts/check-contrast.ts — проверка контрастов UI/синтаксиса.
- ts-node scripts/analyze-palette.ts — анализ цветового распределения/ступеней.

Эта документация фиксирует принципы и правила палитры после рефакторинга, делает поведение прозрачным и облегчает дальнейшую поддержку.
