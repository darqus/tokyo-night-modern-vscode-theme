import {
  ColorCategory,
  type ColorRole,
  ColorSubcategories,
  type SubcategoryType,
} from './types'

/**
 * Создает новую цветовую роль
 */
export function createColorRole<C extends ColorCategory>({
  name,
  description,
  category,
  subcategory,
  value,
}: {
  name: string
  description: string
  category: C
  subcategory: SubcategoryType<C>
  value: string
}): ColorRole {
  // Создаем уникальный ID из категории и имени
  const id = `${category}.${subcategory}.${name}`
    .toLowerCase()
    .replace(/\s+/g, '-')

  return {
    id,
    name,
    description,
    category,
    subcategory,
    value,
  }
}

/**
 * Валидирует цветовую роль
 */
export function validateColorRole(role: ColorRole): boolean {
  // Проверяем наличие всех обязательных полей
  if (!role.id || !role.name || !role.description || !role.value) {
    return false
  }

  // Проверяем корректность категории
  if (!Object.values(ColorCategory).includes(role.category)) {
    return false
  }

  // Проверяем корректность подкатегории
  const validSubcategories = ColorSubcategories[role.category]
  if (!validSubcategories.includes(role.subcategory as any)) {
    return false
  }

  // Проверяем формат цвета
  if (!/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(role.value)) {
    return false
  }

  return true
}

/**
 * Группирует роли по категориям и подкатегориям
 */
export function groupColorRoles(
  roles: ColorRole[]
): Record<ColorCategory, Record<string, ColorRole[]>> {
  const grouped: Record<ColorCategory, Record<string, ColorRole[]>> = {
    [ColorCategory.Interface]: {},
    [ColorCategory.Typography]: {},
    [ColorCategory.Border]: {},
    [ColorCategory.Syntax]: {},
  }

  roles.forEach((role) => {
    if (!grouped[role.category][role.subcategory]) {
      grouped[role.category][role.subcategory] = []
    }
    grouped[role.category][role.subcategory].push(role)
  })

  return grouped
}

/**
 * Находит конфликты между ролями
 */
export function findColorRoleConflicts(
  roles: ColorRole[]
): Array<[ColorRole, ColorRole]> {
  const conflicts: Array<[ColorRole, ColorRole]> = []

  // Ищем дубликаты ID
  const idMap = new Map<string, ColorRole>()
  roles.forEach((role) => {
    if (idMap.has(role.id)) {
      conflicts.push([idMap.get(role.id)!, role])
    }
    idMap.set(role.id, role)
  })

  // Ищем конфликты значений в рамках одной подкатегории
  const grouped = groupColorRoles(roles)
  Object.values(grouped).forEach((categoryGroup) => {
    Object.values(categoryGroup).forEach((subcategoryRoles) => {
      subcategoryRoles.forEach((role1, i) => {
        subcategoryRoles.slice(i + 1).forEach((role2) => {
          if (role1.value === role2.value) {
            conflicts.push([role1, role2])
          }
        })
      })
    })
  })

  return conflicts
}
