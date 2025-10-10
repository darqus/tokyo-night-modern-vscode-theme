// Утилиты для работы с цветами и генерации альфа-вариантов
export interface ColorPalette {
  [key: string]: string
}

export interface AlphaValues {
  [key: string]: string
}

/**
 * Генерирует альфа-варианты для базовых цветов.
 * @param baseColors Объект с базовыми цветами (без альфа-канала, формат #rrggbb).
 * @param alphaValues Объект с альфа-значениями (например, { '1f': '1f', '33': '33' }).
 * @returns Объект, содержащий как базовые цвета, так и их альфа-варианты.
 */
export function generateAlphaVariants(
  baseColors: ColorPalette,
  alphaValues: AlphaValues
): ColorPalette {
  const palette: ColorPalette = { ...baseColors }

  for (const [colorName, colorValue] of Object.entries(baseColors)) {
    if (isValidHexColor(colorValue) && colorValue.length === 7) {
      for (const [alphaName, alphaValue] of Object.entries(alphaValues)) {
        // Создаем имя варианта, например, "blueAlpha1f"
        const variantName = `${colorName}Alpha${
          alphaName.charAt(0).toUpperCase() + alphaName.slice(1)
        }`
        palette[variantName] = `${colorValue}${alphaValue}`
      }
    }
  }

  return palette
}

/**
 * Создает полную палитру цветов, объединяя несколько источников и генерируя альфа-варианты.
 * @param sources Массив объектов с цветами.
 * @param alphaValues Альфа-значения для генерации вариантов.
 * @returns Финальная палитра цветов.
 */
export function createColorPalette(
  sources: ColorPalette[],
  alphaValues: AlphaValues
): ColorPalette {
  const combinedColors = sources.reduce(
    (acc, current) => ({ ...acc, ...current }),
    {}
  )
  return generateAlphaVariants(combinedColors, alphaValues)
}

/**
 * Проверяет, является ли строка допустимым 6-значным или 8-значным шестнадцатеричным цветом.
 * @param color Строка для проверки.
 * @returns `true`, если цвет допустим, иначе `false`.
 */
export function isValidHexColor(color: string): boolean {
  if (typeof color !== 'string' || !color.startsWith('#')) {
    return false
  }
  const hex = color.slice(1)
  if (!(hex.length === 6 || hex.length === 8)) {
    return false
  }
  return /^[0-9a-fA-F]+$/.test(hex)
}

/**
 * Объединяет базовый цвет с альфа-компонентом.
 * Эта функция заменяет ручную конкатенацию строк.
 * @param baseColor Базовый цвет в формате #rrggbb.
 * @param alpha Альфа-компонент в формате двух шестнадцатеричных символов (например, '1f').
 * @returns Комбинированный цвет в формате #rrggbbaa или исходный цвет, если входные данные неверны.
 */
export function combineColorWithAlpha(
  baseColor: string,
  alpha: string
): string {
  if (
    isValidHexColor(baseColor) &&
    baseColor.length === 7 &&
    typeof alpha === 'string' &&
    alpha.length === 2 &&
    /^[0-9a-fA-F]{2}$/.test(alpha)
  ) {
    return `${baseColor}${alpha}`
  }
  // Возвращаем исходный цвет, если не можем его обработать
  return baseColor
}

/**
 * Проводит валидацию всей палитры, чтобы убедиться, что все цвета корректны.
 * @param palette Палитра для проверки.
 * @param context Дополнительная информация для логгирования (например, имя файла).
 */
export function validatePalette(palette: ColorPalette, context: string): void {
  const invalidEntries: string[] = []
  for (const [key, value] of Object.entries(palette)) {
    if (!isValidHexColor(value)) {
      invalidEntries.push(`  ${key}: "${value}"`)
    }
  }

  if (invalidEntries.length > 0) {
    console.warn(
      `[${context}] Найдены некорректные значения в палитре:\n${invalidEntries.join(
        '\n'
      )}`
    )
  }
}