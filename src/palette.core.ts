import type { Hex } from './types/palette'

/**
 * Базовые (ядро) цвета темы для исключения дублирования значений hex.
 * Эти константы переиспользуются в разных разделах палитры.
 */
export const core = {
  // Нейтральные фоны и границы
  bg: {
    base: '#18181d' as Hex,
    elevated: '#1c1d24' as Hex,
    sunken: '#16161b' as Hex,
    overlay: '#1e1f26' as Hex,
    input: '#1a1a21' as Hex,
    hover: '#242530' as Hex,
    active: '#26293a' as Hex,
    drop: '#2b3140' as Hex,
    lineHighlight: '#1c1d24' as Hex,
    bracketMatch: '#202129' as Hex,
    tabs: '#18181d' as Hex,
    selection: {
      active: '#262b3d' as Hex,
      inactive: '#2a2c3b' as Hex,
      focus: '#2c3b64' as Hex,
      menu: '#2c3b64' as Hex,
    },
    stateLabel: '#1e1e25' as Hex,
  },
  border: '#262733' as Hex,
  borders: {
    input: '#262835' as Hex,
  },

  // Текстовые тона
  text: {
    // Чуть более холодные тона для текста, чтобы убрать розоватый оттенок на откалиброванных дисплеях
    primary: '#c7d2ff' as Hex,
    muted: '#b3bce8' as Hex,
    subtle: '#7580a7' as Hex,
    inactive: '#7883b3' as Hex,
    soft: '#b3bce8' as Hex,
    selection: '#ffffff' as Hex,
    subtle2: '#9aa5ce' as Hex,
    gray600: '#545c7e' as Hex,
    comment: '#6b7499' as Hex,
    commentDoc: '#5a607a' as Hex,
    commentDocEmphasized: '#7481a6' as Hex,
    preformat: '#9699a8' as Hex,
    placeholder: '#7a85b0' as Hex,
    editorLinkActive: '#acb0d0' as Hex,
  },

  // Акцентные семейства
  accent: {
    blue: '#7aa2f7' as Hex,
    cyan: '#7dcfff' as Hex,
    teal: '#73daca' as Hex,
    tealDeep: '#0db9d7' as Hex,
    purple: '#9d7cd8' as Hex,
    magenta: '#bb9af7' as Hex,
    // Чуть более холодный и менее насыщенный красный, чтобы не "кричал" на дисплеях с точной цветопередачей
    red: '#e46876' as Hex,
    green: '#9ece6a' as Hex,
    sky: '#38bdf8' as Hex,
    skyLight: '#7dd3fc' as Hex,
    indigo: '#6366f1' as Hex,
    blueMuted: '#6183bb' as Hex,
    blueBright: '#61bdf2' as Hex,
    bluePunctuation: '#9abdf5' as Hex,
    lilac: '#b267e6' as Hex,
    mint: '#34d399' as Hex,
    aqua: '#14b8a6' as Hex,
    azure: '#449dab' as Hex,
    maroon: '#914c54' as Hex,
    slate: '#363b54' as Hex,
    steel: '#2a3047' as Hex,
    badgeBase: '#4158a6' as Hex,
    windowBorder: '#20212c' as Hex,
    // Дополнительные полутона и вариации для устранения хардкода
    tealSoft: '#85c9c1' as Hex,
    rose: '#e0687a' as Hex,
    azureLight: '#41a6b5' as Hex,
    blue400: '#60a5fa' as Hex,
    aquaLight: '#b4f9f8' as Hex,
    blueSoft: '#6d91de' as Hex,
    grayBlue400: '#747ca1' as Hex,
    blueWash: '#c0cefc' as Hex,
    cyan300: '#22d3ee' as Hex,
    redMuted: '#db4b4b' as Hex,
    pinkMuted: '#c0768e' as Hex,
    indigoDark: '#414868' as Hex,
    steelAlt: '#252a3f' as Hex,
    steelMuted: '#2a3041' as Hex,
    brick: '#963c47' as Hex,
    violet: '#8b5cf6' as Hex,
    cyan500: '#06b6d4' as Hex,
    steel2: '#2b3047' as Hex,
  },

  // Брендовые оттенки для UI
  brand: {
    button: {
      primary: '#263147' as Hex,
      hover: '#2c3952' as Hex,
    },
  },

  // UI вспомогательные цвета
  ui: {
    shadow: '#7aa2f733' as Hex,
    selectionWash: '#515c7e' as Hex,
    scrollbarBase: '#868bc4' as Hex,
    tab: {
      activeModified: '#8b5cf6' as Hex,
      inactiveModified: '#06b6d4' as Hex,
      unfocusedActive: '#2b3047' as Hex,
    },
  },
} as const
