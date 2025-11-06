import { checkContrast } from '../src/theme/utils/contrast.js'

// Функция для получения видимого цвета с учетом альфа-канала на темном фоне
function getVisibleColor(
  transparentColor: string,
  backgroundColor: string = '#16141f'
): string {
  // Проверяем, содержит ли цвет альфа-канал
  const hasAlpha =
    transparentColor.length === 9 || transparentColor.length === 5
  if (!hasAlpha) {
    return transparentColor
  }

  // Извлекаем RGB и альфа-канал вручную
  let r: number
  let g: number
  let b: number
  let alpha: number

  if (transparentColor.length === 9) {
    // Формат #RRGGBBAA
    r = Number.parseInt(transparentColor.substring(1, 3), 16)
    g = Number.parseInt(transparentColor.substring(3, 5), 16)
    b = Number.parseInt(transparentColor.substring(5, 7), 16)
    const alphaHex = transparentColor.substring(7, 9)
    alpha = Number.parseInt(alphaHex, 16) / 255
  } else if (transparentColor.length === 5) {
    // Формат #RGBA
    r = Number.parseInt(
      transparentColor.substring(1, 2) + transparentColor.substring(1, 2),
      16
    )
    g = Number.parseInt(
      transparentColor.substring(2, 3) + transparentColor.substring(2, 3),
      16
    )
    b = Number.parseInt(
      transparentColor.substring(3, 4) + transparentColor.substring(3, 4),
      16
    )
    const alphaHex = transparentColor.substring(4, 5)
    alpha = Number.parseInt(alphaHex + alphaHex, 16) / 255
  } else {
    // Если цвет не прозрачный, возвращаем его как есть
    return transparentColor
  }

  // Получаем компоненты фонового цвета
  const bgR = Number.parseInt(backgroundColor.substring(1, 3), 16)
  const bgG = Number.parseInt(backgroundColor.substring(3, 5), 16)
  const bgB = Number.parseInt(backgroundColor.substring(5, 7), 16)

  // Если альфа-канал равен 1 (непрозрачный), возвращаем цвет без альфа-канала
  if (alpha >= 1) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }

  // Вычисляем видимый цвет с учетом прозрачности (alpha blending)
  const finalR = Math.round(r * alpha + bgR * (1 - alpha))
  const finalG = Math.round(g * alpha + bgG * (1 - alpha))
  const finalB = Math.round(b * alpha + bgB * (1 - alpha))

  const hexR = finalR.toString(16).padStart(2, '0')
  const hexG = finalG.toString(16).padStart(2, '0')
  const hexB = finalB.toString(16).padStart(2, '0')

  return `#${hexR}${hexG}${hexB}`
}

// Цвета фона из предоставленного списка
const backgroundColors = {
  'editorHoverWidget.background': '#1f2038',
  'menu.background': '#1a1b2c',
  'quickInput.background': '#191624',
  'panel.background': '#191624',
  'peekViewEditor.background': '#1a1625',
  'editorSuggestWidget.background': '#1a1625',
  'editorWidget.background': '#1f2038',
  'notificationCenterHeader.background': '#1a1b2c',
  'notifications.background': '#1a1b2c',
  'sideBar.background': '#1b1923',
  'list.focusBackground': '#3d59a159',
  'list.hoverBackground': '#3d59a126',
  'list.inactiveSelectionBackground': '#2a4d8e66',
  'list.activeSelectionBackground': '#3d59a159',
  'dropdown.background': '#1a1b2c',
  'input.background': '#16141f',
  'terminal.background': '#1a1625',
  'activityBar.background': '#16141f',
  'tab.activeBackground': '#1a1625',
  'tab.inactiveBackground': '#191524',
  'titleBar.activeBackground': '#1a1625',
  'titleBar.inactiveBackground': '#191524',
  'statusBar.background': '#16141f',
  'editorGroupHeader.tabsBackground': '#1a1625',
  'editor.background': '#221e33',
  'peekViewTitle.background': '#16141f',
  'peekViewResult.background': '#1a1625',
  'walkThrough.embeddedEditorBackground': '#1a1625',
  'textBlockQuote.background': '#1a1625',
  'textCodeBlock.background': '#1a1625',
  'debugExceptionWidget.background': '#16141f',
  'debugView.stateLabelBackground': '#1a1b2c',
  'notebook.cellEditorBackground': '#1a1625',
  'chat.avatarBackground': '#2a4d8e',
  'inlineChatInput.background': '#221e33',
}

// Предполагаемые цвета текста
const textColors = {
  white: '#ffffff',
  lightGray: '#cccccc',
}

// Функция для анализа контраста
function analyzeContrast() {
  console.log('=== Анализ контраста фона с текстом ===\n')

  const lowContrastIssues: {
    colorName: string
    backgroundColor: string
    textColor: string
    visibleColor: string
    contrastRatio: number
    meetsAA: boolean
    meetsAAA: boolean
  }[] = []

  // Проверяем каждый цвет фона с каждым цветом текста
  for (const [colorName, backgroundColor] of Object.entries(backgroundColors)) {
    for (const [textLabel, textColor] of Object.entries(textColors)) {
      // Получаем видимый цвет с учетом альфа-канала
      const visibleColor = getVisibleColor(backgroundColor)
      const result = checkContrast(textColor, visibleColor)

      console.log(
        `${colorName} (${backgroundColor} → ${visibleColor}) с ${textLabel} (${textColor}):`
      )
      console.log(`  - Соотношение контраста: ${result.ratio}`)
      console.log(` - Соответствие AA: ${result.aa ? 'ДА' : 'НЕТ'} (≥4.5)`)
      console.log(` - Соответствие AAA: ${result.aaa ? 'ДА' : 'НЕТ'} (≥7.0)`)
      console.log('')

      // Добавляем в список проблем, если контраст слишком низкий
      if (!result.aa) {
        lowContrastIssues.push({
          colorName,
          backgroundColor,
          textColor,
          visibleColor,
          contrastRatio: result.ratio,
          meetsAA: result.aa,
          meetsAAA: result.aaa,
        })
      }
    }
  }

  console.log(
    '=== Проблемы с низким контрастом (не соответствует AA стандарту) ===\n'
  )

  if (lowContrastIssues.length === 0) {
    console.log('Не найдено проблем с контрастом!')
  } else {
    console.log(`Найдено ${lowContrastIssues.length} проблем с контрастом:\n`)

    // Группируем проблемы по цвету фона
    const groupedIssues = new Map<string, typeof lowContrastIssues>()
    for (const issue of lowContrastIssues) {
      if (!groupedIssues.has(issue.colorName)) {
        groupedIssues.set(issue.colorName, [])
      }
      groupedIssues.get(issue.colorName)?.push(issue)
    }

    for (const [colorName, issues] of groupedIssues) {
      console.log(
        `${colorName} (${issues[0].backgroundColor} → ${issues[0].visibleColor}):`
      )
      for (const issue of issues) {
        console.log(
          `  - ${issue.textColor}: ${issue.contrastRatio} (AA: ${issue.meetsAA ? 'ДА' : 'НЕТ'}, AAA: ${issue.meetsAAA ? 'ДА' : 'НЕТ'})`
        )
      }
      console.log('')
    }
  }

  return {
    allResults: Object.entries(backgroundColors).map(([name, color]) => {
      const visibleColor = getVisibleColor(color)
      return {
        name,
        originalColor: color,
        visibleColor,
        whiteText: checkContrast('#ffffff', visibleColor),
        lightGrayText: checkContrast('#cccccc', visibleColor),
      }
    }),
    lowContrastIssues,
  }
}

// Запускаем анализ
const results = analyzeContrast()

// Предлагаем улучшения для цветов с низким контрастом
console.log('=== Рекомендуемые улучшения ===\n')

// Определяем цвета, которые нужно улучшить
const colorsToImprove = new Map<
  string,
  { original: string; visible: string; recommended: string }
>()
for (const issue of results.lowContrastIssues) {
  if (!colorsToImprove.has(issue.colorName)) {
    const originalColor = issue.backgroundColor
    const visibleColor = getVisibleColor(originalColor)
    let recommendedColor = visibleColor

    // Для прозрачных цветов пытаемся увеличить непрозрачность или изменить базовый цвет
    if (originalColor.length === 9 || originalColor.length === 5) {
      // прозрачный цвет
      // Извлекаем RGB и альфа-канал
      let r: number
      let g: number
      let b: number
      if (originalColor.length === 9) {
        r = Number.parseInt(originalColor.substring(1, 3), 16)
        g = Number.parseInt(originalColor.substring(3, 5), 16)
        b = Number.parseInt(originalColor.substring(5, 7), 16)
      } else {
        // 5 символов #RGBA
        r = Number.parseInt(
          originalColor.substring(1, 2) + originalColor.substring(1, 2),
          16
        )
        g = Number.parseInt(
          originalColor.substring(2, 3) + originalColor.substring(2, 3),
          16
        )
        b = Number.parseInt(
          originalColor.substring(3, 4) + originalColor.substring(3, 4),
          16
        )
      }

      // Используем непрозрачный вариант цвета
      recommendedColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    } else {
      // Для непрозрачных цветов, но с низким контрастом, пробуем затемнить
      const rgb = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/.exec(
        visibleColor
      )
      if (rgb) {
        const r = Math.max(0, Number.parseInt(rgb[1], 16) - 30)
        const g = Math.max(0, Number.parseInt(rgb[2], 16) - 30)
        const b = Math.max(0, Number.parseInt(rgb[3], 16) - 30)
        recommendedColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

        // Проверяем, улучшает ли это контраст
        const improvedResult = checkContrast('#ffffff', recommendedColor)
        if (!improvedResult.aa) {
          // Если все еще не соответствует AA, пробуем еще темнее
          const r2 = Math.max(0, r - 20)
          const g2 = Math.max(0, g - 20)
          const b2 = Math.max(0, b - 20)
          recommendedColor = `#${r2.toString(16).padStart(2, '0')}${g2.toString(16).padStart(2, '0')}${b2.toString(16).padStart(2, '0')}`
        }
      }
    }

    colorsToImprove.set(issue.colorName, {
      original: originalColor,
      visible: visibleColor,
      recommended: recommendedColor,
    })

    console.log(`${issue.colorName}:`)
    console.log(`  - Текущий цвет: ${originalColor}`)
    console.log(`  - Видимый цвет: ${visibleColor}`)
    console.log(`  - Рекомендуемый цвет: ${recommendedColor}`)
    console.log(
      `  - Контраст с #ffffff: ${checkContrast('#ffffff', visibleColor).ratio} → ${checkContrast('#ffffff', recommendedColor).ratio}`
    )
    console.log(
      `  - Контраст с #cccccc: ${checkContrast('#cccccc', visibleColor).ratio} → ${checkContrast('#cccccc', recommendedColor).ratio}`
    )
    console.log('')
  }
}
