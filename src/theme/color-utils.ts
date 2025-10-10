// Утилиты для работы с цветами и генерации альфа-вариантов
export interface ColorWithAlpha {
  base: string;
  alpha: string;
  combined: string;
}

export interface ColorPalette {
  [key: string]: string;
}

export interface AlphaPalette {
  [key: string]: string;
}

/**
 * Генерирует альфа-варианты для базовых цветов
 * @param baseColors Объект с базовыми цветами (без альфа-канала)
 * @param alphaValues Объект с альфа-значениями (например, { '1f': '1f', '33': '33' })
 * @returns Объект с базовыми цветами их альфа-вариантами
 */
export function generateAlphaVariants(baseColors: ColorPalette, alphaValues: AlphaPalette): ColorPalette {
  const result: ColorPalette = { ...baseColors };

  // Генерируем альфа-варианты для каждого базового цвета
  for (const [colorName, colorValue] of Object.entries(baseColors)) {
    // Проверяем, является ли цвет корректным шестнадцатеричным цветом без альфа-канала (#rrggbb)
    if (colorValue && typeof colorValue === 'string' && isValidColor(colorValue) && colorValue.length === 7 && colorValue.startsWith('#')) {
      for (const [alphaName, alphaValue] of Object.entries(alphaValues)) {
        const variantName = `${colorName}${alphaName.charAt(0).toUpperCase() + alphaName.slice(1)}`;
        result[variantName] = `${colorValue}${alphaValue}`;
      }
    }
  }

  return result;
}

/**
 * Создает полный набор цветов с альфа-вариантами
 * @param baseColors Базовые цвета
 * @param alphaValues Альфа-значения
 * @returns Объект с полным набором цветов
 */
export function createColorPalette(baseColors: ColorPalette, alphaValues: AlphaPalette): ColorPalette {
  return generateAlphaVariants(baseColors, alphaValues);
}

/**
 * Возвращает альфа-вариант для указанного цвета
 * @param baseColor Базовый цвет (например, '#7dcfff')
 * @param alpha Альфа-значение (например, '33')
 * @returns Комбинированный цвет (например, '#7dcfff33')
 */
export function withAlpha(baseColor: string, alpha: string): string {
  if (baseColor && typeof baseColor === 'string' && baseColor.length === 7 && baseColor.startsWith('#') && 
      alpha && typeof alpha === 'string' && alpha.length === 2) {
    return `${baseColor}${alpha}`;
  }
  return baseColor;
}

/**
 * Извлекает альфа-канал из цвета
 * @param color Цвет в формате #rrggbbaa или #rrggbb
 * @returns Альфа-канал или 'ff' для непрозрачных цветов
 */
export function getAlpha(color: string): string {
  if (color && typeof color === 'string' && color.length === 9 && color.startsWith('#')) {
    return color.slice(7);
  }
  return 'ff';
}

/**
 * Извлекает базовый цвет без альфа-канала
 * @param color Цвет в формате #rrggbbaa или #rrggbb
 * @returns Базовый цвет в формате #rrggbb
 */
export function getBaseColor(color: string): string {
  if (color && typeof color === 'string' && color.length === 9 && color.startsWith('#')) {
    return color.slice(0, 7);
  }
  return color;
}

/**
 * Проверяет, является ли цвет допустимым
 * @param color Цвет для проверки
 * @returns true если цвет допустим, false в противном случае
 */
export function isValidColor(color: string): boolean {
  if (!color || typeof color !== 'string') return false;
  if (color === 'null' || color === 'undefined') return false;
  if (color.startsWith('#')) {
    // Проверяем, что цвет имеет длину 7 (#rrggbb) или 9 (#rrggbbaa) символов
    // и что все символы после # являются шестнадцатеричными
    const hexPart = color.substring(1);
    return (color.length === 7 || color.length === 9) && /^[0-9a-fA-F]+$/.test(hexPart);
  }
  return false;
}

/**
 * Объединяет два цвета
 * @param color1 Первый цвет
 * @param color2 Второй цвет
 * @returns Объединенный цвет
 */
export function combineColors(color1: string, color2: string): string {
  // Если один из цветов null или undefined, возвращаем другой цвет
  if (!isValidColor(color1)) return color2;
  if (!isValidColor(color2)) return color1;
  
  // Если оба цвета допустимы, объединяем их
 if (color1.length === 7 && color2.length === 7) {
    // Оба цвета без альфа-канала, просто возвращаем первый
    return color1;
  } else if (color1.length === 7 && color2.length === 9) {
    // Первый цвет без альфа, второй с альфа - возвращаем второй
    return color2;
  } else if (color1.length === 9 && color2.length === 7) {
    // Первый цвет с альфа, второй без альфа - возвращаем первый
    return color1;
  } else if (color1.length === 9 && color2.length === 9) {
    // Оба цвета с альфа - возвращаем первый
    return color1;
  }
  
  // По умолчанию возвращаем первый цвет
  return color1;
}

/**
 * Комбинирует базовый цвет с альфа-компонентом
 * @param baseColor Базовый цвет в формате #rrggbb
 * @param alpha Альфа-компонент в формате 2 шестнадцатеричных символа
 * @returns Комбинированный цвет в формате #rrggbbaa
 */
export function combineColorWithAlpha(baseColor: string, alpha: string): string {
  if (!baseColor || !alpha || typeof baseColor !== 'string' || typeof alpha !== 'string') {
    return baseColor;
  }
  
  // Проверяем, что базовый цвет в формате #rrggbb
  if (baseColor.length === 7 && baseColor.startsWith('#') && /^[0-9a-fA-F]{6}$/.test(baseColor.substring(1))) {
    // Проверяем, что альфа-компонент в формате 2 шестнадцатеричных символа
    if (alpha.length === 2 && /^[0-9a-fA-F]{2}$/.test(alpha)) {
      return baseColor + alpha;
    }
  }
  
  return baseColor; // Возвращаем базовый цвет, если комбинация невозможна
}

/**
 * Нормализует цвет, убирая лишние символы и приводя к стандартному формату
 * @param color Цвет для нормализации
 * @returns Нормализованный цвет
 */
export function normalizeColor(color: string): string {
  if (!color || typeof color !== 'string') return '';
  
  // Убираем лишние пробелы и приводим к нижнему регистру
 const normalized = color.trim().toLowerCase();
  
  // Проверяем, начинается ли цвет с # и имеет допустимую длину
 if (normalized.startsWith('#')) {
    if (normalized.length === 7 || normalized.length === 9) {
      return normalized;
    }
  }
  
  return color; // Возвращаем оригинальный цвет, если он не соответствует формату
}