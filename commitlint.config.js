module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // новая функциональность
        'fix',      // исправление бага
        'perf',     // улучшение производительности
        'revert',   // откат изменений
        'docs',     // документация
        'style',    // форматирование, стили
        'refactor', // рефакторинг кода
        'test',     // тесты
        'build',    // сборка, зависимости
        'ci',       // CI/CD
        'chore',    // рутинные задачи
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'theme',      // изменения в цветовой схеме
        'palette',    // изменения в палитре цветов
        'build',      // система сборки
        'validation', // система валидации
        'plugins',    // система плагинов
        'cli',        // инструменты командной строки
        'config',     // конфигурация
        'docs',       // документация
        'variants',   // варианты темы
        'semantic',   // семантические токены
        'utils',      // утилиты
        'types',      // типы TypeScript
        'scripts',    // скрипты
        'release',    // релиз
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
}
