# План улучшений темы Tokyo Night Lod

## Phase 1: Critical Improvements (High Priority)

### 1.1 Улучшение контрастности комментариев

**Проблема**: Комментарии (`#444b6a`) слишком темные и плохо читаемые.

**Решение**:

```typescript
// src/palette.ts
token: {
  comment: '#6b7499',        // было #444b6a - увеличиваем яркость
  commentDoc: '#5a607a',     // было #545c7e - небольшое увеличение
  ignored: '#6b7499',        // было #444b6a - синхронизируем с comment
}
```

**Тестирование**: Проверить контрастность 4.5:1 с фоном `#16161e`

### 1.2 Балансировка синтаксических цветов

**Проблема**: Слишком много голубых оттенков для разных элементов.

**Решение**:

```typescript
// src/palette.ts
token: {
  operator: '#a9b1d6',        // было #89ddff - используем muted цвет
  importExport: '#bb9af7',    // было #7dcfff - используем magenta
  templateKeyword: '#73daca', // было #0db9d7 - более отличимый teal
  tagPunctuation: '#a9b1d6',  // было #89ddff - менее яркий
}
```

### 1.3 Расширение семантических токенов

**Решение**:

```typescript
// src/semanticTokenColors.ts
export const semanticTokenColors = {
  // Существующие
  'parameter.declaration': { foreground: palette.accent.yellow },
  'parameter': { foreground: palette.fg.muted },
  'property.declaration': { foreground: palette.accent.teal },
  'property.defaultLibrary': { foreground: palette.accent.cyan },
  '*.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.declaration': { foreground: palette.accent.magenta },
  'variable': { foreground: palette.fg.primary },

  // Новые расширенные правила
  'variable.readonly': { foreground: palette.accent.cyan },
  'variable.mutable': { foreground: palette.fg.primary },
  'function.declaration': { foreground: palette.accent.blue },
  'function.async': { foreground: palette.accent.magenta },
  'class.declaration': { foreground: palette.accent.orange },
  'interface.declaration': { foreground: palette.accent.teal },
  'enum.declaration': { foreground: palette.accent.yellow },
  'type.declaration': { foreground: palette.accent.orange },
  'namespace': { foreground: palette.accent.blue },
  'macro': { foreground: palette.accent.red },

  // Language-specific
  'lifetime:rust': { foreground: palette.accent.yellow },
  'generic:rust': { foreground: palette.accent.teal },
  'attribute:rust': { foreground: palette.accent.magenta },
  'decorator:python': { foreground: palette.accent.blue },
  'selfParameter:python': { foreground: palette.accent.red },
};
```

## Phase 2: UI/UX Improvements (Medium Priority)

### 2.1 Улучшение состояний интерфейса

**Решение**:

```typescript
// src/palette.ts
bg: {
  hover: '#24283b',          // было #1e1f2a - более контрастный
  active: '#2a3041',         // было #252a3f - более темный для active
  lineHighlight: '#1a1b26',  // было #181820 - немного ярче
},
ui: {
  focusBorder: '#7dcfff66',  // увеличить alpha для лучшей видимости
}
```

### 2.2 Оптимизация bracket pair colorization

**Решение**:

```typescript
// src/build.ts - в функции buildColors()
'editorBracketHighlight.foreground2': palette.accent.orange, // было cyan
'editorBracketHighlight.foreground3': '#9ece6a',            // зеленый вместо magenta
'editorBracketPairGuide.activeBackground1': withAlpha(palette.accent.blue, '40'), // было 30
```

### 2.3 Улучшение цветов состояний

**Решение**:

```typescript
// src/build.ts
'list.hoverBackground': '#24283b',           // более контрастный hover
'button.hoverBackground': '#4158a6',         // более яркий hover для кнопок
'statusBarItem.hoverBackground': '#24283b',  // консистентный hover
```

## Phase 3: Extended Features (Low Priority)

### 3.1 Добавление утилит для контрастности

**Создать**: `src/utils/contrast.ts`

```typescript
export function getContrastRatio(color1: string, color2: string): number {
  // Реализация WCAG contrast ratio
}

export function validateWCAGCompliance(palette: Palette): ValidationReport {
  // Проверка всех цветовых комбинаций
}
```

### 3.2 Создание альтернативных вариантов

**Создать**:

- `src/variants/soft.ts` - приглушенная версия
- `src/variants/high-contrast.ts` - высококонтрастная версия
- `src/variants/colorblind-friendly.ts` - версия для дальтоников

### 3.3 Улучшение инструментов разработки

**Добавить в package.json**:

```json
{
  "scripts": {
    "dev:watch": "nodemon --watch src --ext ts --exec 'npm run build'",
    "test:contrast": "ts-node scripts/test-contrast.ts",
    "test:a11y": "ts-node scripts/test-accessibility.ts",
    "validate": "npm run test:contrast && npm run test:a11y",
    "preview": "code --install-extension ./tokyo-night-lod-*.vsix"
  }
}
```

## Implementation Timeline

### Week 1: Critical fixes

- [x] Analyze current theme
- [ ] Implement comment contrast improvements
- [ ] Balance syntax highlighting colors
- [ ] Test basic functionality

### Week 2: Semantic tokens

- [ ] Implement extended semantic token support
- [ ] Test with multiple languages (TS, Rust, Python, Go)
- [ ] Validate color consistency

### Week 3: UI improvements

- [ ] Implement better state differentiation
- [ ] Improve bracket colorization
- [ ] Test interface interactions

### Week 4: Quality assurance

- [ ] Implement contrast validation tools
- [ ] Create automated tests
- [ ] Documentation updates
- [ ] Release preparation

## Testing Strategy

### Manual Testing

1. **Code samples**: Test with real codebases in different languages
2. **UI interactions**: Test all interactive elements
3. **Different screen settings**: Test on various displays and brightness levels

### Automated Testing

```bash
# Контрастность
npm run test:contrast

# Accessibility
npm run test:a11y

# Smoke tests
npm run test:smoke
```

### User Testing

1. **Beta release**: Distribute to small group of users
2. **Feedback collection**: Gather specific feedback on readability
3. **Iteration**: Implement feedback and re-test

## Success Metrics

### Objective Metrics

- [ ] All color combinations meet WCAG 2.1 AA standards (4.5:1 for normal text)
- [ ] Semantic token coverage >90% for TypeScript, JavaScript, Python, Rust
- [ ] No similar colors (ΔE < 10) used for different semantic purposes

### Subjective Metrics

- [ ] User feedback score >4.0/5.0 for readability
- [ ] Reduced eye strain reported by >80% of testers
- [ ] Preference over original theme by >60% of users

## Risk Mitigation

### Breaking Changes

- Keep original color scheme as fallback
- Provide migration guide
- Version semantic correctly (major.minor.patch)

### Compatibility

- Test with popular extensions (Prettier, ESLint, GitLens)
- Ensure backward compatibility with VS Code versions 1.74+
- Test on different operating systems

### Performance

- Monitor theme file size (should remain <50KB)
- Ensure build time remains <5 seconds
- No impact on VS Code startup time

## Resources Needed

### Development Time

- Estimated 20-30 hours total
- Can be done incrementally over 4 weeks
- Requires access to various codebases for testing

### Tools

- Color contrast analyzers
- VS Code extension development tools
- Access to different display types for testing

### Community

- Beta testers from different developer backgrounds
- Feedback from accessibility community
- Code review from theme developers

---

*Plan created: ${new Date().toISOString()}*
*Implementation start: Pending approval*
