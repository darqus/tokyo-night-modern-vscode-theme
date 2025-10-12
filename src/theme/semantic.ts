import { palette } from './palette'

export const semanticTokenColors = {
  // Pinia/Vuex actions are methods
  method: {
    foreground: palette.function,
  },
  // Pinia/Vuex getters are readonly properties
  'variable.readonly': {
    foreground: palette.yellow,
  },
}
