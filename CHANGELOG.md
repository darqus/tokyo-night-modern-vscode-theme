# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.117](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.109...v2.2.117) (2025-10-14)


### Features

* **theme:** update text link colors to use semantic palette values ([1ef6094](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1ef60949fe49d1d2ede1c0d86463097b4fd77e85))

### [2.2.109](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.92...v2.2.109) (2025-10-14)


### ⚠ BREAKING CHANGES

* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design. Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

- Implement semantic color system with primitive → semantic → UI → syntax hierarchy
- Reduce color palette from 4503 to 174 colors (97% reduction)
- Replace legacy color references with semantic tokens
- Add comprehensive documentation for new color system
- Update all UI modules to use new semantic color mapping
- Improve theme performance and maintainability

### Features

* **theme:** add button color palette and fix input option alpha value ([a68e467](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a68e467c66bced68eef78c51288f427ca40eaf0f))
* **theme:** add git decoration colors and update theme snapshot ([3579b86](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3579b86b3f2ea697d12980d0cdeafab1a578652b))
* **theme:** add scm graph colors and update theme snapshot ([5e6304f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5e6304f4c01cf6d42296f9f6ab50b66c1053629a))


### Bug Fixes

* **theme:** update git decoration colors and build timestamp ([4bab327](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/4bab32704069d18e7d80d6b9d2b7209b9bdbe670))


* **theme:** overhaul color system with semantic architecture and optimize palette ([044af86](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/044af860f7b6baa8923294c66ee5b3a0c0367910))

### [2.2.92](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.90...v2.2.92) (2025-10-13)

### [2.2.90](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.87...v2.2.90) (2025-10-13)

### [2.2.87](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.86...v2.2.87) (2025-10-13)

### [2.2.86](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.85...v2.2.86) (2025-10-12)

### Features

- **theme:** add sticky scroll background colors ([919bfd9](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/919bfd93cf0c8b8fe5b41ccc40b8d24ab3222a89))

### [2.2.85](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.79...v2.2.85) (2025-10-12)

### [2.2.79](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.78...v2.2.79) (2025-10-12)

### [2.2.78](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.4...v2.2.78) (2025-10-12)

### ⚠ BREAKING CHANGES

- **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design.
- **theme:** The entire color palette and syntax highlighting rules have been replaced, resulting in a significant visual change to the theme.
- **theme:** Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

### Features

- **build:** dynamically read version from package.json for vsix name ([e8400fd](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e8400fd65035418af6c5ef7da864ae8e95716e65))
- **tests:** add snapshot test for theme consistency ([205158f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/205158f4cc4050164ddd9569f803ccb8847d5c93))
- **theme:** add comprehensive status bar color customization ([7e7890b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7e7890b1bd8612d5c20de89ee735ec1ca4f186be))
- **theme:** add comprehensive syntax highlighting tokens for Tokyo Night theme ([e640ec3](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e640ec3b011a42d47ee70f3474c2f0e1956fd92d))
- **theme:** add Go, Rust, Haskell support and enhance syntax highlighting ([6d6453e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6d6453eb0fcc58735a5695fd6ed11d4b811327fd))
- **theme:** add new color variables for enhanced UI and syntax highlighting ([2a0d37a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2a0d37a1e2bd8b3019f2a2318caeaad22ab594ca))
- **theme:** add semantic highlighting for Vue/Pinia ([295cbed](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/295cbed232aa2c9e29d86feee9b6e91a739d3ca9))
- **theme:** add syntax highlighting for Vue.js ([a816548](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a816548e642b9f73567de171ad9259248cbf5dec))
- **theme:** differentiate Pinia state, getters, and actions ([e006c55](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e006c55f4c0c0bf602239f3fc0a5cb08dd9d319d))
- **theme:** enhance Vue and add Pinia syntax highlighting ([dfd9078](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/dfd9078ef45a331164bda1cb8c368b6512939e12))
- **theme:** overhaul color palette and syntax highlighting ([50ccafb](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/50ccafbd8b30fcaac6ad2ce816eecbe5c92b6388))
- **theme:** refactor UI color tokens into modular files ([a34064b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a34064b9c3f4835db68be7db9a252ca1c16fb6d4))

### Bug Fixes

- **theme:** adjust scrollbar color for better theme integration ([0364ac8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0364ac842e5cf5081dd1690ce14d6a22971335a2))
- **theme:** adjust selection background color for better contrast ([8ecd898](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8ecd898d21b920b442fd39fda55969f719b171a5)), closes [#a9b1d6](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/a9b1d6) [#4e6ab2](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/4e6ab2)

- **theme:** overhaul color and token system ([e0e0c97](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e0e0c978bc0a4eed6b831a45165fb071346aa1b7))
- **theme:** update color palette and syntax highlighting across all language modules ([7fb69b4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7fb69b4d7015ea84668539ed95b1fd06f340ea13))

### [2.2.4](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.1.0...v2.2.4) (2025-10-10)

### Features

- update version to 2.1.2 and add package script ([d9080b7](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/d9080b72ac625d1882d75146ec893d5691eddb98)), closes [#123](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/123)

## [2.1.0](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.0.33...v2.1.0) (2025-10-10)

### Features

- **theme:** implement modular theme generation pipeline ([81c2b26](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/81c2b26dccbc1c04dda7aeedea9fa80fbaf01af5))

### [2.0.33](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.0.6...v2.0.33) (2025-09-30)

### Features

- **colors:** enhance search and selection highlighting ([c60faec](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c60faecbceed2857c59e8ffa1b42c756425c679b))
- **core:** improve color contrast and readability ([d49b596](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/d49b5960b5bda0970351cbeda502b6d7022a67bc))
- **theme:** add new color tokens and update existing ones ([3984da3](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3984da3b11e46cf051aca3e725e832903cf81042))
- **theme:** add title bar foreground color tokens ([5ca1646](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5ca164613573a362147c9b1fa12d47298761d212))
- **theme:** implement configurable theme generation and plugin system ([8264906](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8264906edf79f40f8d4d26fa61db45050ed3c4a0))
- **themes:** add placeholder and fold colors for tokyo-night-modern ([5fbb95b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5fbb95bc1b578c8a89846a03d57a1dc37ac997fc))
- **tokens:** add new editor and inline chat placeholder tokens ([040ca44](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/040ca44dd5040fbaedb57aa7a3f85346129d10e1))

### [2.0.6](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.18.19...v2.0.6) (2025-09-25)

### Bug Fixes

- correct the use of process.nextTick in favor of setImmediate ([0a3d76b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0a3d76ba8adf3af3e0dfefbd9d20464972db512e))

## [2.0.0](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.18.19...v2.0.0) (2025-09-25)

### ⚠️ BREAKING CHANGES

- Полностью удалены legacy-файлы: `src/generators/interfaceMapping.ts`, `src/core/themeEngine.ts`, `src/types/themeEngine.ts`.
- Единственным источником маппинга токенов теперь является `modernInterfaceMapping.ts` (DSL).
- Любые внешние импорты из перечисленных legacy-файлов больше не работают — требуется перейти на DSL API (`createTokens` / `colorMappings` из `modernInterfaceMapping`).

### Изменения

- Удаление устаревшего движка ThemeEngine и связанных типов.
- Удаление shim-файла `interfaceMapping.ts` (ранее выводил предупреждение).
- Мажорный bump версии до 2.0.0 для фиксации границы совместимости.
- Добавлены частичные снапшоты (`core`, `lists_panels`, `terminal_widgets`) для более точечных диффов.
- Генерация документации по токенам автоматизирована (`docs:tokens`).

### Миграция

1. Замените импорт
   `import { colorMappings } from './generators/interfaceMapping'` → `import { createTokens as colorMappings } from './generators/modernInterfaceMapping'`.
2. Если использовались типы ThemeEngine / ThemePlugin — перенесите логику напрямую в слой генерации темы или используйте собственную обёртку.
3. Обновите скрипты: убедитесь, что не осталось ссылок на удалённые файлы.

### Причина изменения

Старый движок создавал путаницу, дублировал ответственность и замедлял внедрение новых токенов. DSL предоставляет:

- Декларативность и прозрачность.
- Единый источник правды для генерации и документации.
- Простую валидацию и подсчёт стабильного количества токенов.

### Верификация

- Все тесты пройдены после удаления (см. частичные снапшоты и счётчик токенов).
- Количество color tokens остаётся стабильным (guard тест не изменён).

---

### [1.18.19](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.17.42...v1.18.19) (2025-09-24)

### Features

- add statusBarItem.hoverForeground token ([7e78e62](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7e78e62f47b431a4e4dec31a311d706feb82094d))
- enhance statusBarItem colors and add compact hover effect ([d55ba92](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/d55ba9250bdc3025d678ef4ecfd26542fbb52de6))
- **menu:** update selection background to transparent ([e7b1b22](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e7b1b22c0b2be030557f1ed4e0032b62ee9da1a0)), closes [#00000000](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/00000000)
- **static:** add tokyo night modern screenshot ([5e11f7d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5e11f7d742032a60bd99e63cdb53ddbf37c3e1e8))
- **theme:** add overview ruler and minimap highlight colors ([ccd0410](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ccd0410272717593edbfd21f2f6b4fa3a30bede5))
- **theme:** add tokens for panel title badges ([1f86e7c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1f86e7cf6336559089939f116109fa179be8ce66))
- **theme:** enhance visual consistency and accessibility ([cfde3a0](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/cfde3a089914ec8625707133258aa633208fcdc1))
- **theme:** update search highlight colors to cool blue scheme ([2cd4422](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2cd442271bbc44a89eb9fa4c0047b8c75e779493))

### [1.17.42](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.17.41...v1.17.42) (2025-09-23)

### [1.17.41](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.16.20...v1.17.41) (2025-09-23)

### Features

- **.vscode:** add new VSCode task and update tab background colors ([58bb515](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/58bb515052cf3c88572bea5a573fbec1067b82f2))
- add missing PeekView token mappings and update theme ([c43e311](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c43e311f87eec7caf14a9f4fcb7166182d2ee3e2))
- change editor hover widget background to base ([5faf5ef](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5faf5efcb0d049dce33b938714699be45c5055be))
- **color-theme:** enhance hover widget readability and add foreground token ([8181ece](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8181ece46e20c08cab5416d88760f859eb41bab0))
- **core:** adjust editor line number colors ([28aeb8d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/28aeb8d7d97224716d91b955ad5e31979cd82636))
- **core:** change warning state color to purple ([8025418](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8025418c91223e1a5ec379222acbb3c4a43d5bf8))
- **core:** rename skyblue to badgeBlue for badge background color ([32978f1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/32978f153bc715840f00f9a7e503a1bff1bd07c1))
- **core:** update link and icon colors in theme ([922d7c0](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/922d7c036688c15f45d22484592bb7f2c5dda9d9)), closes [#c0caf5](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/c0caf5)
- **core:** update link and icon colors to primaryBlue ([f2dd3c9](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/f2dd3c94397057e6e02af54e269f778c9cb67dc6))
- **extensions:** add sticky scroll theming for TypeScript 5.2+ ([a5c8015](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a5c8015d43d5de53d568a41f876e19ff47a84dff))
- **theme:** add icon foreground color ([68c2cf6](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/68c2cf628a463e68818882aef93b3578f3d020a7))
- **theme:** add Markdown blockquote styles and adjust tab colors ([fa0e0af](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/fa0e0afaf7fe0904bdc00bf3ba7c8c8bb0d29532))
- **theme:** adjust panel title and editor suggest widget colors ([b463197](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b463197559aa9654e4243cf6caa08aa30dc0ec63))
- **theme:** lighten tooltip background for readability ([519926d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/519926d498297e15e6a0ac312d8b01b17b61b253))
- **titleBar:** adjust title bar foreground colors ([350f9a3](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/350f9a34529e299d3c40998d2a54dbab21963396))

### Bug Fixes

- adjust activity bar background and active background ([4810dec](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/4810deceebe63585e6d4d8f537d0753130b31904))
- **panel:** update color mapping for panel titles and related UI elements ([4dc0b7d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/4dc0b7d51441b8c362063e6d24b03d06bf067737))
- **theme:** adjust menu and dropdown color mappings ([924efe8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/924efe8c8a59232900aaca229968ce6299be948e))
- **theme:** correct color mappings and improve contrast in interface palette ([7b420fe](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7b420fe8d3639cf0d1041b221e879149997eb47a))

### [1.16.20](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.15.35...v1.16.20) (2025-09-22)

### Features

- add modern interface mapping for editor groups ([df66e4f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/df66e4ffade3755cb747fcfa1f95c5eb46e79358))
- add new editor debug tokens and update theme ([583c73e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/583c73ed381537a54b389a4777bce1b1446ed03e))
- add title bar color tokens ([b58bba5](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b58bba52dfd593be2efc14a15bf96cae4765efb0))
- **colors:** add CTA colors and update button styles ([9fdc9b1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9fdc9b1cd11511472d0f23a1fc49dc3815e87c06))
- **core:** adjust non-bright white in terminal to reduce glare ([61ade4a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/61ade4a1c57df31352fe2e6280eb3afa3dd5e5e6))
- **theme:** add badge colors to interface palette and update related tokens ([dc3d210](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/dc3d21036b6a209965c2ced3322f5d639b94b56f))
- **theme:** add new color tokens and update existing ones ([0c6c683](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0c6c683e4e9512780f40fe4148edb11468bb4893))
- **theme:** enhance terminal and debugging UI ([025da0f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/025da0f670db2f5561c52cccd78cda9fa2342f64))

### Bug Fixes

- **theme:** adjust text colors for better contrast and visibility ([247df3a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/247df3abe9042e3511d0fbcc0c7bca31d0880a15))

### [1.15.35](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.54...v1.15.35) (2025-09-22)

### Features

- **.vscode:** add task to run tests and update theme colors ([2e38d23](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2e38d237b7f528ef13912c6f10539afa65cf4dae))
- **accessibility:** improve contrast ratios for better readability ([ae5502d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ae5502da290e5793888941d42efa7eb2194a6bda))
- add color token for editorCodeLens.foreground ([76c4dca](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/76c4dca04d934f8d25b73a7a16231601215244cc))
- **breadcrumb:** improve focus and hover readability ([8034a4e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8034a4e3e03925a288bfaa12cf4aba5e8c4d2da4))
- **contrast:** enhance text contrast against overlay background ([ea0338a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ea0338ad8ad4e4eb92138cb54ae189016fd2c750))
- **core:** add OKLCH color utilities and enhance theme tokens ([c70ba64](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c70ba64dd573186aaa520dff995c86b0d4d915e5))
- **core:** add tokens for menu bar, panel section header, and CodeLens ([56c9901](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/56c9901934964119e6d12a73ecf3fd5e6da7620b))
- **core:** implement caching for color operations and add surfaces system ([8697f9b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8697f9b64e2183a7c2c7caea7c2ab3210113b170))
- **docs:** add token registry generator and update CI scripts ([9471d90](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9471d9032cec8764262250849a9a53aae94256f6))
- **shadow:** adjust widget shadow with cool tone and translucency ([2b552eb](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2b552eb638d92663adb76c26fc542a1cc12c1504))
- **terminal:** improve hover highlight color and visibility ([30b724f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/30b724fc92d4c47fb4d057a726004c0cac77b4a7))
- **theme:** add OKLCH-derived shadows and update swatches ([e7b6235](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e7b6235aa8629aa5cebc8c40b4fedee33f0783ee))
- **theme:** add shadow color definitions and update related tokens ([a025657](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a025657cffa6f954fd6d3a9eeea5982d82dc494e))
- **theme:** enhance contrast and border consistency ([e6f4052](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e6f40528f458fcb2ab0f42c6b9d276e0ca45c50f))
- **theme:** enhance editorCodeLens contrast and configurability ([a9f3fca](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a9f3fca9611f2aa47692f3301dc8227b8d2dee19))
- **theme:** enhance peek view and add accessibility improvements ([6dd660f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6dd660f514beb62919c09e7cbc75cd77aec80ba1))
- **theme:** refactor color system and add contrast checks ([19b9986](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/19b998660d1bf76d2cb1582f39cd8887bef44419))
- **theme:** standardize thin borders and enhance color contrast ([1d63ed5](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1d63ed5b23fd8fb809b0f1fc2192f9aafcb3cb6c))

### Bug Fixes

- **theme:** update activityBar inactive foreground color ([6f222d2](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6f222d249501066215e8a44850d4a16ba96d43bc))
- update text color contrast to meet accessibility standards ([9de9fc6](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9de9fc6bd06f1900ccefc2142c3bf7aa288c973a))
- update text color mappings and adjust token sources ([86e7d39](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/86e7d39a43fcaa2c1092197ae13c4ef87b31fcf9))

### [1.14.54](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.52...v1.14.54) (2025-09-21)

### Bug Fixes

- **theme:** remove editor.findMatchHighlightForeground to avoid warnings ([084be1a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/084be1a33ba606fccdedd159cf61311f28d9ee63))

### [1.14.52](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.33...v1.14.52) (2025-09-21)

### Features

- **button:** adjust hover and separator colors for improved contrast and visibility ([c522444](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c5224447a0fbef23c133e0545406fa086405f2d7))
- **interface:** add darkened base background color ([aa880ac](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/aa880ac5990e8ab33f90b327c4e1f138762d7c50))
- **theme:** enhance SCM graph colors and adjust find match highlighting ([666870f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/666870ff90a96a15e6a7d73444a0a27792387208))
- **theme:** update theme description for enhanced marketing ([3bb436a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3bb436acdfb740eb66d94dea390de673ce330566))

### Bug Fixes

- **theme:** update extensionButton prominent hover background color ([5c883e8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5c883e84420912d89437d38b8fa10363fec9386f))

### [1.14.33](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.32...v1.14.33) (2025-09-21)

### Features

- **interface:** add blockquote colors to interface palette ([b4214f3](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b4214f3c463733634f6220a54074a42e46dba1a0))

### [1.14.32](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.29...v1.14.32) (2025-09-21)

### Features

- **button:** enhance button contrast and adjust color scheme ([9eff309](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9eff30964722e98792ac03b6328f525d545f5181))
- **core:** add dropdown control palette ([bca051d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/bca051d245afafe42156320df586cffd7a934bd1))
- **interface:** expand button color palette and adjust generated colors ([2e5c73e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2e5c73eb0588dd818c6cb1e749d246981f392e3f))

### [1.14.29](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.23...v1.14.29) (2025-09-20)

### Features

- **docs:** add release versioning information and update README metrics ([acf7fa8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/acf7fa83065ed3660df5a7b3f5ec51c5a0f82485))
- **interface:** add inlineChat background color ([a02248f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a02248f3d4729242e60cbf96b2f24813df466a99))

### [1.14.23](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.22...v1.14.23) (2025-09-20)

### Features

- **release:** incorporate commit count into version bump ([c146ac4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c146ac4d05ea3733372513e83d3b981e9c516a81))

### [1.14.22](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.21...v1.14.22) (2025-09-20)

### Features

- **package:** add test:update script for updating snapshots ([7aa7626](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7aa7626cea8771c67064809e7fd7757b62238ae0))
- **theme:** add inline chat and toolbar color configurations ([0a9e828](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0a9e828e225d234f5fad6faafd386d5111d460da))
- **theme:** improve secondary button appearance with cooler outline ([1600237](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/160023764a9d81b2aafaafb71dd875efa508fd18))
- **theme:** unify terminal blue and cyan ANSI colors with link color ([c995844](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c99584410ccd2783c6923cf645b1adcc963fadda))
- **theme:** update Tokyo Night Modern theme colors ([8ddcda1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8ddcda18516afb4ed6957f33bd206212a358913d))

### Bug Fixes

- **theme:** improve inline chat text contrast ([2d96606](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2d966068085ff51460a02563d78316b21e02cb7f)), closes [#c8d0f6](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/c8d0f6)
- **theme:** improve terminal link hover and text link colors ([87446ae](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/87446ae4ce72b7e765850a8b754a1ebd8db5cfd6))
- **theme:** remove deprecated Inline Chat and toolbar color properties ([05f1cef](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/05f1cef07f85fa9a17d2884c5c1711b824ee6476))

### [1.14.21](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.20...v1.14.21) (2025-09-20)

### [1.14.20](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.19...v1.14.20) (2025-09-20)

### Features

- **colors:** unify search highlight colors across editor, terminal, and list ([e2434e9](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e2434e96636b049362ee652787d09de6d13bc5e9))
- **interface:** autogenerate button colors and update theme ([a88fdbe](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a88fdbe87f85c782a2365b74e5e7cd0edbfdcfaf))
- **theme:** enhance terminal appearance and add drop background transparency ([0304f3d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0304f3d14bdd6710834dba73d3d484af5b5c5064))
- **theme:** enhance terminal colors and add text link styles ([262dc5b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/262dc5bd138bbe1a3645178e77b4a991a4ea69e3))

### [1.14.19](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.18...v1.14.19) (2025-09-09)

### [1.14.18](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.17...v1.14.18) (2025-09-09)

### Features

- **static:** add screenshot of tokyo night modern theme ([55f5ac3](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/55f5ac3a9f7d9a066b0da84f41a55dbd9b57da0b))

### [1.14.17](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.16...v1.14.17) (2025-09-09)

### Features

- **interface:** add lineNumber and lineNumberActive colors ([9255047](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9255047c2421a4066db08833345f2a8b72da9b61))

### [1.14.16](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.15...v1.14.16) (2025-09-09)

### Bug Fixes

- **package.json:** update theme configuration for consistent theming ([023da5f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/023da5f94ae2911cd845da546d5abefe3d9f68a9))

### [1.14.15](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.14...v1.14.15) (2025-09-09)

### Features

- **theme:** add support for environment variables and dynamic configuration ([34f703f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/34f703f46339106027ff329ab76ad55c50bd7017))
- **theme:** rename and update Tokyo Night theme ([a91e620](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a91e620a15d4def9a06dc5e4f1fb239276ea368b))
- **theme:** rename and update Tokyo Night theme collection ([6c78a1a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6c78a1a55692f18e155da8b826607041d2bdf0c6))

### [1.14.14](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.13...v1.14.14) (2025-09-03)

### Features

- **theme:** enhance color system and build process ([b3422ad](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b3422ad6035a65529494468322277ee243e1f8a9))

### [1.14.13](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.12...v1.14.13) (2025-09-03)

### Bug Fixes

- **version:** correct version number in CHANGELOG and package-lock ([fd8b7ad](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/fd8b7addf12a4f75c367353a703483731b6f1c66))

### [1.14.12](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.10...v1.14.12) (2025-09-03)

### [1.14.6](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.3...v1.14.6) (2025-09-02)

### [1.14.4](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.14.1...v1.14.4) (2025-09-02)

### [1.14.2](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.13.0...v1.14.2) (2025-09-02)

## [1.14.0](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v1.11.0...v1.14.0) (2025-09-02)

### Features

- Implement placeholder color analysis and optimization plan ([e7d8da0](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e7d8da0b69f8e690e269a17c935c6c71333704f8))
- **release:** add automated release script ([04e323c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/04e323c35eb7c8b05972f9a1314b3ffa9ca26288))
- **theme:** add SCM Graph colors and other improvements ([9e59e4e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9e59e4efee601b76da41c4177a871f98c8473a10))
- **theme:** add semantic token colors to One Monokai theme ([e527bcf](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e527bcffd74d8f157114e4a6227cb721a192ceb5))
- **theme:** add Tokyo Night Dark theme for VS Code ([a6c2fd4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a6c2fd4796cab91530f4820df36f3616087b048b))

### Bug Fixes

- improve light theme contrast and accessibility ([8cece28](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8cece284cc570d514b5c5f9862bf9a4c61469b51)), closes [#c0caf5](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/c0caf5) [#1f2328](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/1f2328) [#a9b1d6](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/a9b1d6) [#1f2328](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/1f2328) [#3d4752](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/3d4752) [#d1d5](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/d1d5)
- **release:** modify release script and update package.json ([9dc2089](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9dc20892a905e9a0f5c9abc996a3d9e1cabbc609))
- **scripts:** handle undefined return value in execSync ([25fb44f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/25fb44f7463429b8ff8f437a07510690f2427bc7))
- **scripts:** improve error handling in release script ([0c400a7](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0c400a7f136f317e4e1a69b08ce1c5ca92b9f52d))
- **theme:** resolve validation issues and update deprecated properties ([0a743ae](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0a743aef7fef2baf580ca50a522a7e0666179681))

## [1.12.0] - 2025-01-02

### 🧹 Cleanup & Optimization

- **BREAKING**: Removed legacy build system and scripts

- **BREAKING**: Simplified package.json scripts
- Removed outdated analysis files and reports
- Cleaned up development dependencies
- Streamlined project structure

### 📚 Documentation

- Updated architecture documentation

- Refreshed development guide
- Simplified README structure
- Removed obsolete documentation files

### 🔧 Technical Improvements

- Consolidated build process to single `src/build.ts`

- Removed redundant validation and testing scripts
- Optimized project structure for maintainability
- Kept core functionality: palette system, theme generation, CLI tools

### 🎯 Focus Areas

- Maintained 17 theme variants generation

- Preserved adaptive palette system
- Kept zero hardcoded colors architecture
- Retained CLI tools for custom themes

## [1.11.0] - Previous Release

- Full adaptive palette system implementation

- 17 theme variants with seasonal and accessibility options
- Zero hardcoded colors migration completed
- Comprehensive CLI tools for theme customization
