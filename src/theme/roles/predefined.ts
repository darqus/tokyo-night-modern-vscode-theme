import { semantic } from '../palette/semantic'
import { createColorRole } from './generator'
import { ColorCategory } from './types'

/**
 * Предопределенные роли для интерфейса
 */
export const interfaceRoles = [
  // Фоны
  createColorRole({
    name: 'background.primary',
    description: 'Основной фон приложения',
    category: ColorCategory.Interface,
    subcategory: 'background',
    value: semantic.surfaces.background.base,
  }),
  createColorRole({
    name: 'background.secondary',
    description: 'Вторичный фон для разделения контента',
    category: ColorCategory.Interface,
    subcategory: 'background',
    value: semantic.surfaces.modal.base,
  }),

  // Поверхности
  createColorRole({
    name: 'surface.modal',
    description: 'Фон модальных окон',
    category: ColorCategory.Interface,
    subcategory: 'surface',
    value: semantic.surfaces.modal.base,
  }),
  createColorRole({
    name: 'surface.popover',
    description: 'Фон всплывающих окон',
    category: ColorCategory.Interface,
    subcategory: 'surface',
    value: semantic.surfaces.popover.base,
  }),

  // Интерактивные состояния
  createColorRole({
    name: 'interactive.hover',
    description: 'Цвет при наведении',
    category: ColorCategory.Interface,
    subcategory: 'interactive',
    value: semantic.interactive.hover.base,
  }),
  createColorRole({
    name: 'interactive.active',
    description: 'Цвет активного состояния',
    category: ColorCategory.Interface,
    subcategory: 'interactive',
    value: semantic.interactive.active.base,
  }),

  // Эффекты
  createColorRole({
    name: 'effect.shadow',
    description: 'Цвет теней',
    category: ColorCategory.Interface,
    subcategory: 'effect',
    value: semantic.effects.shadow.base,
  }),
  createColorRole({
    name: 'effect.glow',
    description: 'Цвет свечения',
    category: ColorCategory.Interface,
    subcategory: 'effect',
    value: semantic.effects.glow.base,
  }),
]

/**
 * Предопределенные роли для типографики
 */
export const typographyRoles = [
  // Основной текст
  createColorRole({
    name: 'body.primary',
    description: 'Основной текст',
    category: ColorCategory.Typography,
    subcategory: 'body',
    value: semantic.text.primary.base,
  }),
  createColorRole({
    name: 'body.secondary',
    description: 'Вторичный текст',
    category: ColorCategory.Typography,
    subcategory: 'body',
    value: semantic.text.secondary.base,
  }),

  // Заголовки
  createColorRole({
    name: 'heading.primary',
    description: 'Основные заголовки',
    category: ColorCategory.Typography,
    subcategory: 'heading',
    value: semantic.typography.heading.default.base,
  }),

  // Код
  createColorRole({
    name: 'code.default',
    description: 'Текст кода',
    category: ColorCategory.Typography,
    subcategory: 'code',
    value: semantic.typography.code.default.base,
  }),

  // Ссылки
  createColorRole({
    name: 'link.default',
    description: 'Цвет ссылок',
    category: ColorCategory.Typography,
    subcategory: 'link',
    value: semantic.typography.link.default.base,
  }),
  createColorRole({
    name: 'link.hover',
    description: 'Цвет ссылок при наведении',
    category: ColorCategory.Typography,
    subcategory: 'link',
    value: semantic.typography.link.hover.base,
  }),
]

/**
 * Предопределенные роли для границ
 */
export const borderRoles = [
  // Структурные границы
  createColorRole({
    name: 'structural.default',
    description: 'Основные структурные границы',
    category: ColorCategory.Border,
    subcategory: 'structural',
    value: semantic.borders.structural.default.base,
  }),

  // Интерактивные границы
  createColorRole({
    name: 'interactive.default',
    description: 'Границы интерактивных элементов',
    category: ColorCategory.Border,
    subcategory: 'interactive',
    value: semantic.borders.interactive.default.base,
  }),
  createColorRole({
    name: 'interactive.focus',
    description: 'Границы при фокусе',
    category: ColorCategory.Border,
    subcategory: 'interactive',
    value: semantic.borders.interactive.focus.base,
  }),

  // Декоративные границы
  createColorRole({
    name: 'decorative.subtle',
    description: 'Тонкие декоративные границы',
    category: ColorCategory.Border,
    subcategory: 'decorative',
    value: semantic.borders.decorative.subtle.base,
  }),
]

/**
 * Все предопределенные роли
 */
export const predefinedRoles = [
  ...interfaceRoles,
  ...typographyRoles,
  ...borderRoles,
]
