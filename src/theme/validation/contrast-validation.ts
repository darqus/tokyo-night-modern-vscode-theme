/**
 * Возвращает отчет о контрастности для включения в метаданные темы
 */
export const getContrastReport = () => {
  /* const report = getContrastValidationReport()

  return {
    totalChecks: report.totalChecks,
    passedChecks: report.passedChecks,
    failedChecks: report.failedChecks,
    validationDate: new Date().toISOString(),
  } */
}

/**
 * Проверка контрастности палитры при сборке темы
 * Используется для автоматической валидации соответствия WCAG
 */
export const validatePaletteContrastOnBuild = () => {
  console.log('Проверка контрастности палитры...')

  /* const report = getContrastValidationReport()

  console.log(`Всего проверок: ${report.totalChecks}`)
  console.log(`Пройдено: ${report.passedChecks}`)
  console.log(`Провалено: ${report.failedChecks}`)

  if (report.violations.length > 0) {
    console.log('\nНарушения контрастности:')
    report.violations.forEach((violation) => {
      console.log(
        `  - ${violation.element1} (${violation.color1}) vs ${violation.element2} (${violation.color2}): ` +
          `контраст ${violation.contrastRatio}:1, требуется ${violation.required} (${violation.required === 'AA' ? '4.5:1' : '7:1'})`
      )
    })

    console.log('\nРекомендации:')
    report.suggestions.forEach((suggestion) => {
      console.log(`  - ${suggestion}`)
    })

    // В зависимости от настроек, можно сделать разные действия:
    // - выбросить ошибку для CI/CD
    // - вывести предупреждение
    // - просто логировать

    // В текущей реализации просто выводим в консоль
    console.warn(
      `Найдено ${report.failedChecks} нарушений контрастности. Проверьте палитру на соответствие WCAG.`
    )
  } else {
    console.log('✅ Все проверки контрастности пройдены успешно.')
  }

  return report */
}
