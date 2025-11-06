import {
  boldItalicToken,
  boldToken,
  italicToken,
  token,
} from '../../src/theme/utils/semantic-helpers'

describe('Semantic Helpers', () => {
  const color = '#ff0000'

  describe('token', () => {
    it('should create a token with only foreground', () => {
      expect(token(color)).toEqual({ foreground: color })
    })

    it('should create a token with foreground and fontStyle', () => {
      expect(token(color, 'bold')).toEqual({
        foreground: color,
        fontStyle: 'bold',
      })
      expect(token(color, 'italic')).toEqual({
        foreground: color,
        fontStyle: 'italic',
      })
      expect(token(color, 'bold italic')).toEqual({
        foreground: color,
        fontStyle: 'bold italic',
      })
    })
  })

  describe('Token Aliases', () => {
    it('boldToken should create a bold token', () => {
      expect(boldToken(color)).toEqual({
        foreground: color,
        fontStyle: 'bold',
      })
    })

    it('italicToken should create an italic token', () => {
      expect(italicToken(color)).toEqual({
        foreground: color,
        fontStyle: 'italic',
      })
    })

    it('boldItalicToken should create a bold italic token', () => {
      expect(boldItalicToken(color)).toEqual({
        foreground: color,
        fontStyle: 'bold italic',
      })
    })
  })
})
