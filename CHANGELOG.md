# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.2390](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2389...v2.3.2390) (2025-11-04)

### [2.3.2389](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2387...v2.3.2389) (2025-11-04)

### [2.3.2387](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2386...v2.3.2387) (2025-11-04)

### [2.3.2386](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2383...v2.3.2386) (2025-11-04)

### [2.3.2383](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2382...v2.3.2383) (2025-11-04)

### [2.3.2382](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2381...v2.3.2382) (2025-11-04)

### [2.3.2381](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2380...v2.3.2381) (2025-11-04)

### [2.3.2380](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2379...v2.3.2380) (2025-11-04)

### [2.3.2379](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2378...v2.3.2379) (2025-11-04)

### [2.3.2378](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2375...v2.3.2378) (2025-11-04)

### [2.3.2375](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2374...v2.3.2375) (2025-11-04)

### [2.3.2374](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2373...v2.3.2374) (2025-11-04)

### [2.3.2373](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2372...v2.3.2373) (2025-11-04)

### [2.3.2372](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2371...v2.3.2372) (2025-11-04)

### [2.3.2371](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2370...v2.3.2371) (2025-11-04)

### [2.3.2370](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2361...v2.3.2370) (2025-11-04)

### [2.3.2365](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2361...v2.3.2365) (2025-11-04)

### [2.3.2361](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2357...v2.3.2361) (2025-11-04)

### Bug Fixes

* **palette:** reorder exports and improve code formatting ([450d518](https://github.com/darqus/tokyo-modern-vscode-theme/commit/450d51876ea08e21e064d6f8b53d291e82267996))

### [2.3.2357](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2351...v2.3.2357) (2025-11-03)

### [2.3.2351](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2332...v2.3.2351) (2025-11-03)

### Features

* **list:** update list selection and hover colors ([b1625c8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b1625c8a431d1901eb00025e548c6e64eab925a5))
* **static:** add tokyo modern screenshot ([d03e82c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d03e82ca15040f9d338d687407fa5e8d34753b6d))
* **statusBarItem:** update hover background color ([34b0ed0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34b0ed00a93dd5681ded16baae563e3b7018ac5f))
* **theme:** enhance widget shadows and adjust border colors ([bf54c9d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bf54c9d5d5de56e83b739a8a1b1d8e996dc14777))

### Bug Fixes

* **theme:** correct theme color key access for dark themes ([5855897](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5855897ff62c8b077916d34af23bd65bd4c75827))
* update editor inlay hint color for better visibility ([7355334](https://github.com/darqus/tokyo-modern-vscode-theme/commit/735533460c5034ed14223ff817c7695022cea817))

### [2.3.2332](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2330...v2.3.2332) (2025-11-03)

### [2.3.2330](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.2323...v2.3.2330) (2025-11-03)

### 2.3.2323 (2025-11-03)

### ⚠ BREAKING CHANGES

* Removes legacy color palette and refactoring plan
documents in favor of the new comprehensive analysis approach.
* **theme:** The old theme generation system, including `tokyo-night-generators`, `base-colors`, `primitives`, and various palette utilities, has been completely removed. The theme is now generated solely through the new nested model.
* **docs:** removes architecture documentation that may have
been referenced in external materials
* **theme:** Direct usage of `foundationColors` in UI modules is deprecated. All UI components must now use semantic tokens via the `getToken()` utility to ensure architectural consistency.
* **theme:** Legacy color references replaced with semantic color system
* **theme:** The structure of TypeScript syntax color definitions has been refactored. Colors are now defined as direct string values instead of nested objects with a 'base' property. This simplifies the theme structure but may affect integrations that relied on the previous object shape.
* **theme:** primitiveColors has been renamed to foundationColors
* **theme:** The 'migration' utility object, including 'getLegacyMapping' and 'migrateColor' functions, has been removed from the theme palette.
* **theme:** Token access now requires using getToken() function instead of direct palette access
* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design. Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

* Implement semantic color system with primitive → semantic → UI → syntax hierarchy
* Reduce color palette from 4503 to 174 colors (97% reduction)
* Replace legacy color references with semantic tokens
* Add comprehensive documentation for new color system
* Update all UI modules to use new semantic color mapping
* Improve theme performance and maintainability

* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design.
* **theme:** The entire color palette and syntax highlighting rules have been replaced, resulting in a significant visual change to the theme.
* **theme:** Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.
* **release:** replaced release system with smart automatic one

### Features

* **.vscode:** add new VSCode task and update tab background colors ([ba71a8a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba71a8a1d411300a19a8f49c00fa04fb36719049))
* **.vscode:** add task to run tests and update theme colors ([897c18d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/897c18df1924ea12b46352d10d584b2eebf0306d))
* **accessibility:** improve contrast ratios for better readability ([168e2eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/168e2eb68a224e45864dfd5b862bc66ef7541c87))
* **adaptive-backgounds:** implement editor background adaptation ([a505c13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a505c132072b3ac77313dcfdfda8962b127aee20))
* add color token for editorCodeLens.foreground ([c6b5ad7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6b5ad7de20c8355e9cab1a2a8f10ae90de4b5ae))
* add missing PeekView token mappings and update theme ([7b2f3ea](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b2f3ea4d748a35cb9964aea438e42d8b456badb))
* add modern interface mapping for editor groups ([1e8282f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1e8282f21e6ea45436fa2a6a7b7e7d9d3df893b1))
* add new editor debug tokens and update theme ([2e3f36e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2e3f36e227822116e24e12bab4f651ea13565196))
* add new Tokyo Night themes ([822bd2e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/822bd2ededadbc6e409fbb0e917f7ff881cbb5ba))
* add screenshot of tokyo night modern theme ([3355549](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3355549d29dac625a598996d24990f9940e7408a))
* add statusBarItem.hoverForeground token ([0564156](https://github.com/darqus/tokyo-modern-vscode-theme/commit/056415664cb1af8638f615e9d76bfe85757fa005))
* add title bar color tokens ([c6b07cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6b07cdab242bcc9ad167f4a53da83dcf33e0f97))
* add updated screenshot of Tokyo Night Modern theme ([71ecd4c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/71ecd4c12fd319e28b49bfa463937146e3eaf31e))
* adjust diff editor colors and remove borders ([288d612](https://github.com/darqus/tokyo-modern-vscode-theme/commit/288d612c86a38fb4a09443ae9a178ace2d051064))
* **assets:** update tokyo night modern theme screenshot ([5dd3192](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5dd3192f336de8268f9a2e8d1e7a8549f4425e7e))
* **assets:** update tokyo night modern theme screenshot ([f2f11d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f2f11d27484196719246b1001ac1aa93f7c94658))
* **biome:** add useShorthandFunctionType rule ([021dde0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/021dde0ea1d720b88f465a9134019ef99e34b15a))
* **breadcrumb:** improve focus and hover readability ([2d2add0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d2add05c2166ab4b5d03e9021708ced9bd68ccf))
* **build:** dynamically read version from package.json for vsix name ([d7c7284](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d7c7284b0da4889f5fe03b75af0921d38ff36e36))
* **build:** implement full theming pipeline ([b2e1d6a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b2e1d6ab78909685b447e2f3c301afcc8f31f2ea))
* **button:** adjust hover and separator colors for improved contrast and visibility ([3656cfb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3656cfb40f88686f84f28cf1a5ce5325d9acb619))
* **button:** enhance button contrast and adjust color scheme ([b4c0892](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b4c089261bbb30b2c96758336e84705b2c690420))
* change editor hover widget background to base ([97cdb55](https://github.com/darqus/tokyo-modern-vscode-theme/commit/97cdb55d2288d82be4a2c73b07da89a41f991453))
* **color-theme:** enhance hover widget readability and add foreground token ([72aa3bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/72aa3bcffff0e3330c8b753a051d6c4357b7cc22))
* **colors:** add CTA colors and update button styles ([126672f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/126672f0c921963ae158a7aea76405cb840894d1))
* **colors:** enhance search and selection highlighting ([16226bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/16226bc616a795591050425c2307baad79117358))
* **colors:** unify search highlight colors across editor, terminal, and list ([602aa06](https://github.com/darqus/tokyo-modern-vscode-theme/commit/602aa06b1e6dc6bdf2a9f6f4765ceab04def9b7c))
* **colors:** update badge and remote indicators ([b8cc5a0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8cc5a0b790751f8b487ccfd2a6cd1e06080e5d7))
* **contrast:** enhance text contrast against overlay background ([00f99e9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/00f99e910055fe6394b1cd3898fdafb74580bf4a))
* **core:** add dropdown control palette ([3f967cf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f967cfb9f7bb7b206d57619b3eee797a4a73108))
* **core:** add OKLCH color utilities and enhance theme tokens ([a7b0a63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a7b0a63172c752b6c1a2100f7ee5438710f03219))
* **core:** add tokens for menu bar, panel section header, and CodeLens ([3f1032e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f1032e6a8450dbe81c2a844a32a0104714495cd))
* **core:** adjust editor line number colors ([b3fdc15](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b3fdc15fad9a261f2d5afd5fb73fd9673aaa5bdf))
* **core:** adjust non-bright white in terminal to reduce glare ([da46a5a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da46a5ad70edf9f41afaa8609e3c429da2fb192b))
* **core:** change warning state color to purple ([f581029](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5810297fff39a60c38dafa507a0857449925ded))
* **core:** implement caching for color operations and add surfaces system ([471f94d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/471f94d1e9ef78a15bf6bd95642676bee3d3330a))
* **core:** improve color contrast and readability ([4bff4e8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4bff4e83794960005ca71032fb421e5497a92a44))
* **core:** rename skyblue to badgeBlue for badge background color ([a674ffd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a674ffd5a8147cecc668326e80c034159d3a0955))
* **core:** update link and icon colors in theme ([eccfe9d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eccfe9dda73d054aeed6e57e673a822f087a6910)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5)
* **core:** update link and icon colors to primaryBlue ([9a58228](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9a582284906243907620e1f1dc48d27bd6d21560))
* **doc:** add smart versioning documentation ([ae9b472](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ae9b47213a835c5b15c322ecead2dab436af9c21))
* **docs:** add comprehensive list of editor and UI color tokens ([6b9aeaa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6b9aeaa81f48d630223588deef07cc1416b9bf22))
* **docs:** add release versioning information and update README metrics ([b930ad0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b930ad069a1d249d61ced765ac83cfd793ffaf3d))
* **docs:** add token registry generator and update CI scripts ([ad5ecc1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ad5ecc1b3b6b4a393dfc267a57f677cdbb40649e))
* **docs:** enhance contributing guide with detailed process and examples ([64003e7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/64003e791a6d107f319d68eb1fbfafe49bf65118))
* enhance statusBarItem colors and add compact hover effect ([a184bb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a184bb56e71d7cfb4f9db0f29fe3ad9a137363df))
* **extensions:** add sticky scroll theming for TypeScript 5.2+ ([d26774d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d26774dd23ee14a49f8feb8d746e3a7f8ac79aa1))
* **i18n:** update smart versioning system to use English language ([039ff54](https://github.com/darqus/tokyo-modern-vscode-theme/commit/039ff54fd481f5236aeb363324e62e842fcf4906))
* **icon:** update icon.png binary file ([d26280d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d26280dc26a0281c029a9b7585c931a73fffcf3b))
* **icon:** update icon.png binary file ([259f98a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/259f98a870abf807c5bf5d16b5b71d5beb4153c1))
* Implement placeholder color analysis and optimization plan ([ba8c6e1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba8c6e15bd814cc98e9c18e4f9490767945427d2))
* improve visual tests with syntax highlighting ([f28c9d7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f28c9d72c830e483dd7b4135d45707017e1fb753))
* **interface:** add blockquote colors to interface palette ([719eaeb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/719eaebbd6228b435d5256f6b58e2d42ccbe92e3))
* **interface:** add darkened base background color ([23ea9b4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/23ea9b4ab7517f5dff05de9de3ca85f4f7b7f3f3))
* **interface:** add find match colors to interface palette ([e7e55eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7e55eb17a4b3e0055186f47530e623710685ef6))
* **interface:** add hover state colors for status bar and text items ([81e8736](https://github.com/darqus/tokyo-modern-vscode-theme/commit/81e8736b9f87d4ba12781873fed68cc0edbc3332))
* **interface:** add inlineChat background color ([d74b74d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d74b74d7cba0de111cb7a72f54a4ff3e4cdd2c25))
* **interface:** add lineNumber and lineNumberActive colors ([3740413](https://github.com/darqus/tokyo-modern-vscode-theme/commit/37404139ff657a225613cebac7db38974d57b742))
* **interface:** autogenerate button colors and update theme ([19eb7d7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19eb7d7797f1be3edab0073808af31b83417a26a))
* **interface:** expand button color palette and adjust generated colors ([069a182](https://github.com/darqus/tokyo-modern-vscode-theme/commit/069a1820eac9835c0a966038be1ae2c6aac8f5b7))
* **marketplace:** rename extension and update publisher ([8748aa5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8748aa54099d8b7f4b0fc7b73daddee0baad9c4f))
* **menu:** update selection background to transparent ([032b651](https://github.com/darqus/tokyo-modern-vscode-theme/commit/032b65181b442e5db4d69d228dce9a4a4397e303)), closes [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **package:** add test:update script for updating snapshots ([9928f18](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9928f180a8db959b7fbd2c4d85ad1b26c4b0a38b))
* **palette:** add editor bracket highlighting colors ([8e56ab0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8e56ab0771fefae8b73d41175ed957f0f80eef45))
* **palette:** add token-specific colors for syntax highlighting ([b6bf491](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b6bf4919302502c1eaeb9536a6213772c3d35796))
* **palette:** adjust comment text colors and related styles ([f1d9253](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f1d92530fac4d95efbfaed0091f8d2fa868238fe))
* **palette:** adjust git decoration colors for better contrast and visibility ([0c8ba4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c8ba4a9626065978433415412ada5062b406d85))
* **palette:** calculate interface border color ([8b45a50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8b45a506e42759da2d91aa0eecfce37c37ae0c77))
* **palette:** implement declarative token generation ([cff908c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cff908c399dff052fd4dc18913326212e0371afc))
* **palette:** update badge base color ([9f278f9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f278f95fcbaa28b0cfdff2dc44b392301bcfa16))
* **release:** add automated release script ([f5f5680](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5f56800a05555e5678714ec50a95f694b3071fb))
* **release:** create github release automatically ([fe83026](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe83026e4b27f44a79b4d1f070a111800eb21c33))
* **release:** implement automated release process ([59ed1ea](https://github.com/darqus/tokyo-modern-vscode-theme/commit/59ed1eab6b7dc26378b4b5233a26ce08f94196fb))
* **release:** incorporate commit count into version bump ([9388082](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9388082d1dab306fbc49c808c5acc1f8793b930d))
* **release:** remove auto push from smart-version.ts ([35ec3b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35ec3b7686943f1e960fb8b9f557ec3dfc93979b))
* **release:** smart system for automatic version detection ([d737203](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d7372035a8ae7d5d99e6f4ea014074114285124e))
* rename display name to Tokyo Modern ([5170ed9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5170ed95e164eb12995534742cfafd82fa242512))
* rename theme from Tokyo Night Darker to Tokyo Night Darqus ([d093034](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d0930343779e054267bf036d8d5fa285df2bab52))
* rename theme to Tokyo Modern ([42cc199](https://github.com/darqus/tokyo-modern-vscode-theme/commit/42cc19927793e3720bdef86d4dbdb8e4752c840e))
* **scripts:** implement visual test script for UI components ([1ca4525](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1ca4525053189a5d9ff6613a2d6ca826623a66db))
* **semantic-tokens:** add extended semantic rules for enhanced syntax highlighting ([75e5c45](https://github.com/darqus/tokyo-modern-vscode-theme/commit/75e5c45082982691ae66ed6867364ec101bf384b))
* **shadow:** adjust widget shadow with cool tone and translucency ([1511480](https://github.com/darqus/tokyo-modern-vscode-theme/commit/151148087cf26ab4f3c6c0841b8ed3583569bd06))
* **smart-version:** enhance release versioning options ([909d833](https://github.com/darqus/tokyo-modern-vscode-theme/commit/909d833e67146c6b46ecaf1b330d1b8d14f03b1b))
* **static:** add new Tokyo Night Dark screenshot ([34c9392](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34c9392dc638486b242446f62605fbc9325f4430))
* **static:** add screenshot of tokyo night dark theme ([b59d076](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b59d0764c1ba048b6859c3993b411db326f6162d))
* **static:** add screenshot of tokyo night dark theme ([05cb542](https://github.com/darqus/tokyo-modern-vscode-theme/commit/05cb542d86e62df20ba5a6f042225273c0ae18bc))
* **static:** add screenshot of tokyo night dark theme ([02bdf48](https://github.com/darqus/tokyo-modern-vscode-theme/commit/02bdf489109d5a6fe77e81347141246e57c9fae2))
* **static:** add screenshot of tokyo night modern theme ([4e9c0fc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e9c0fc4c64f76b2fcdf26ad1ff94cedbd13ff3e))
* **static:** add screenshot of tokyo night modern theme ([33a6d38](https://github.com/darqus/tokyo-modern-vscode-theme/commit/33a6d38fffc0849e7a61ea62f271eac2f43de796))
* **static:** add tokyo night modern screenshot ([da03f72](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da03f72d80ad75126bfbc30bdc681add976460d7))
* **static:** update screenshot for tokyo night dark theme ([07dc8e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/07dc8e262d7da7e8718a85b64756baf384eac09a))
* **static:** update screenshot for tokyo night dark theme ([b8066f1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8066f107773a61fb9d639b8cbe0275d1710911b))
* **static:** update Tokyo Night Dark screenshot ([fb40787](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fb40787dd6f7c84a6ba9eb2c91744f4c0f311c35))
* **static:** update Tokyo Night Modern screenshot ([34c0daa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34c0daa20a6610e6bd174589a2f314f6ae933de8))
* **tabs:** unify active and inactive tab backgrounds ([60daff1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/60daff1ff628fd51124f49e5f1d86c5d1ec46955)), closes [#18181](https://github.com/darqus/tokyo-modern-vscode-theme/issues/18181)
* **terminal:** improve hover highlight color and visibility ([c53ef61](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c53ef61f67717bfc192b04e71d7dbda1cc2490c7))
* **tests:** add snapshot test for theme consistency ([7bfec3f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7bfec3f3abba23e78866550800f0944d77cdf8ca))
* **theme:** add adaptive background colors for various components ([7deed60](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7deed607581d9d50e93129d36ce965581d02c132))
* **theme:** add adaptive selection colors for lists and activity bar ([d56c5e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d56c5e23db6274e44eff3ebc2f93f444abfa21fa))
* **theme:** add and reposition Tokyo Night semantic token color generator ([9d6abda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9d6abdab3aee9aef6fe8ed6e8c4f1aacfe116a9d))
* **theme:** add badge colors to interface palette and update related tokens ([6ab553b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6ab553b6e8f789390cfb2bc04cdbb45a24160878))
* **theme:** add button color palette and fix input option alpha value ([b16d10c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b16d10c204885019dc8c5af84343cf711f3ad69b))
* **theme:** add checkbox colors to generated theme ([36db534](https://github.com/darqus/tokyo-modern-vscode-theme/commit/36db53497d122523a63f75603b4acc080ebc4ec1))
* **theme:** add comprehensive colors for SCM Graph view ([70dd867](https://github.com/darqus/tokyo-modern-vscode-theme/commit/70dd8671584511eec4dfcc4027900bff3a0139d9))
* **theme:** add comprehensive palette types and token categories ([3e57259](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3e572594d311d95f020c8617324d4139c362e0fd))
* **theme:** add comprehensive semantic token color definitions for enhanced syntax highlighting ([1180ba1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1180ba1a902601c36117d0bfd884b7b59958ede4))
* **theme:** add comprehensive status bar color customization ([ff2edda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ff2eddad90c9ecf7a5a115222986eb5f53077ae2))
* **theme:** add comprehensive syntax highlighting tokens for Tokyo Night theme ([06e2bcd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/06e2bcdc85effb9cf912a89bd7abc0122e45ea24))
* **theme:** add comprehensive Vue syntax highlighting support ([2d54fe4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d54fe4c69f2fb232003ca1f2ffbfa1ebe7cf95f))
* **theme:** add contrast check script and improve color contrast ([88daad4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/88daad474dc02eaa10c7b65fa2f9283b1c405b68))
* **theme:** add custom colors for SCM graph view ([b9aafda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b9aafdaf3b7f20e460e8dd46ed86e830174de8c3))
* **theme:** add design tokens for consistent UI styling ([10d20eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10d20eb4cd1f44618fe33c9b3cc52dd91599c9ca))
* **theme:** add detailed punctuation and bracket colors ([a8d53a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a8d53a5793580d7cf72b5272c84f34ea5fb48a05))
* **theme:** add enhanced terminal colors and generate theme variants ([1aabf7f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1aabf7fd1774dbc3bd2b28dc39026d34b3e21865))
* **theme:** add foreground color for icons and hover widgets ([6e29796](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6e29796765554c35bbb0f7d8cd229d371f99c712))
* **theme:** add frosty glass effect to hover widget and notifications ([91c473c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/91c473c9b2f0f862f76b035955d3d267bfa38381))
* **theme:** add git decoration colors and update theme snapshot ([d6bf4af](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d6bf4afa2cdb61cd756038c22eab503b1e85fb88))
* **theme:** add Go, Rust, Haskell support and enhance syntax highlighting ([7615a36](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7615a3681f7ccdbd7954c7b4ff53a235d61703c3))
* **theme:** add icon foreground color ([0ca16f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0ca16f5157d000817f554bacb71166894f6d0e46))
* **theme:** add inline chat and toolbar color configurations ([fe2e7e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe2e7e28df2029f5ada333c4df58b17b128039b2))
* **theme:** add JSON key coloring and enhance object property highlighting ([6679b4d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6679b4dfc92ccb761f4b73e35c374287242d796d))
* **theme:** add light theme and improve theme variants ([6491a93](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6491a93f2226e4acbda85b016bc7625b3e5fd26d))
* **theme:** add list drop background color ([35b88ae](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35b88aefabd04505d57c4310492e7d1617392a61))
* **theme:** add Markdown blockquote styles and adjust tab colors ([f61bcb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f61bcb5bd12724cc8878578a9d131f74a76b168b))
* **theme:** add new color palettes and enhance syntax highlighting ([16e5b97](https://github.com/darqus/tokyo-modern-vscode-theme/commit/16e5b97b140c7bca4db8551138e376c88ae97513))
* **theme:** add new color tokens and update existing ones ([d1153b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d1153b7ca0c2da78c31b8e2d57cb9cf1f204a985))
* **theme:** add new color tokens and update existing ones ([40c5540](https://github.com/darqus/tokyo-modern-vscode-theme/commit/40c554096cb1801b1a75285176dce0497baf5ce5))
* **theme:** add new color variables for enhanced UI and syntax highlighting ([a684bd8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a684bd85b2ad700cb57ab389ae9c3730f02ddefd))
* **theme:** add new UI elements and improve existing ones ([d6958a0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d6958a024e28974030a914b5dfe1f564ed81daf9))
* **theme:** add notebook and debug palette options ([ec97690](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ec9769029c218dcd5a543738bb99a0abf0027346))
* **theme:** add OKLCH-derived shadows and update swatches ([ad19898](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ad198983b5a1140243e77653c5c2e4cfebdc6d11))
* **theme:** add overview ruler and minimap highlight colors ([ff562cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ff562ccd87a6aed39c3f436066c2f625147adc83))
* **theme:** add primary and secondary button styles ([2cd889a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2cd889ae39aed82a00b337c9d1c972bcb0eeda3c))
* **theme:** add SCM Graph colors and improve git blame readability ([767be61](https://github.com/darqus/tokyo-modern-vscode-theme/commit/767be61b1ae38b99ac47d89db891bd757bef636d))
* **theme:** add SCM Graph colors and other improvements ([154011f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/154011f9e4c4983f038bf72f79919317a35bc9ae))
* **theme:** add scm graph colors and update theme snapshot ([c7a2099](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c7a209947b0eaca658a14ea07322f9d500ac6e4c))
* **theme:** add semantic highlighting for Vue/Pinia ([324fbbb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/324fbbbdd5baec6cbef3291a225462ac79796c3a))
* **theme:** add semantic highlighting to tokyo-night-dark-color-theme ([37ceff7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/37ceff784e37d00015bfb3f1c00a407bb98ab4a4))
* **theme:** add semantic token colors ([b00f7fa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b00f7fa4d0b954b385aec93f309bdfc31c512d08))
* **theme:** add semantic token colors for tokyo night theme ([9e31e7b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9e31e7b59b9fa5e78589ffb912ffee29514856e3))
* **theme:** add semantic token colors to One Dark Pro theme ([f1073c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f1073c93afdcbc2bcd6569e8a9c1b7bcdebd0388))
* **theme:** add semantic token colors to One Monokai theme ([6cae0c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6cae0c940ae4b1068d91476bd150ab8a77137c3b))
* **theme:** add semantic tokens and UI component color definitions ([fbf1a6c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fbf1a6cddf746d8a43c119aa6f6e8818cda701b4)), closes [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* **theme:** add shadow color definitions and update related tokens ([509b879](https://github.com/darqus/tokyo-modern-vscode-theme/commit/509b87954039638aa4a2fa134ce91007adbc3d18))
* **theme:** add shadow colors for scrollbar and sticky scroll elements ([69ec703](https://github.com/darqus/tokyo-modern-vscode-theme/commit/69ec703191d76246484f7917f0dbd4e3f8f0980c))
* **theme:** add shadow colors for widgets and inline chat ([9666da2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9666da2c108fc8d62b08b2ba530a81d9b201461b))
* **theme:** add sticky scroll background colors ([7814a06](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7814a065ac652dd3b9490e886947d8d0d0b7079d))
* **theme:** add sticky scroll colors for editor and panel ([8490316](https://github.com/darqus/tokyo-modern-vscode-theme/commit/84903163b99cd4d69490d6ee135cc1c6f17284c2))
* **theme:** add subtle shadows to UI elements ([eed359c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eed359c1e4e11da39275b647caa307e54e992079))
* **theme:** add support for environment variables and dynamic configuration ([7255099](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7255099a7e4b19fa0b5c5ad62624d23c6a852613))
* **theme:** add support for modern languages and frameworks ([f33ac73](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f33ac737e97cdb7cb77e69c9a802592b121ac14b))
* **theme:** add syntax highlighting for Vue.js ([2f1e64d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f1e64d7c86f1d2fc90499444310a6b15ee31b6e))
* **theme:** add syntax highlighting support for C#, PHP, Ruby, Kotlin, and Swift ([99b188b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/99b188bfc55a7aca9265b66235dd8096d7dfdc62))
* **theme:** add syntax red color to base palette ([261df97](https://github.com/darqus/tokyo-modern-vscode-theme/commit/261df9764b62d46e2c6ff79d6d7026cf4116e730)), closes [#df215](https://github.com/darqus/tokyo-modern-vscode-theme/issues/df215)
* **theme:** add title bar foreground color tokens ([9948393](https://github.com/darqus/tokyo-modern-vscode-theme/commit/99483937eda7a572f468901828ced1f2cc492077))
* **theme:** add tokens for panel title badges ([92fc6db](https://github.com/darqus/tokyo-modern-vscode-theme/commit/92fc6db86449b88e1df05e19234b41b4a3533561))
* **theme:** add Tokyo Night Dark theme for VS Code ([6695693](https://github.com/darqus/tokyo-modern-vscode-theme/commit/669569361db251ae71e75966faf830cbd3a56613))
* **theme:** add VSCodeTheme type definition ([3f9e834](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f9e834d1544d2a664aa7a5c71261cdfce9981f7))
* **theme:** adjust background colors for better contrast and visibility ([0c7df50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c7df50bab51782367ab5913d1a7aec7f4412405))
* **theme:** adjust badge and activity bar badge colors ([15f27a4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/15f27a4b425a139f46a1f61f8cda0524f8d8bcc4))
* **theme:** adjust border colors and lighten sidebar foreground ([9b9d355](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9b9d355ed236482ba8ff390fc03a7e97dde7e3cd))
* **theme:** adjust dropdown and debug view background colors ([a84153a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a84153a664e5cfa2da5774cada25f81202edf553))
* **theme:** adjust panel title and editor suggest widget colors ([f5ccb9e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5ccb9eaa29e00180b542b1948411ac0aa81dead))
* **theme:** darken activity bar and badge backgrounds for better contrast ([f8f7d5e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f8f7d5ec13190e42f8cd4b0ffdefdf0ebd34212a))
* **theme:** differentiate Pinia state, getters, and actions ([2d3cffb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d3cffba3c8accaa891774b00e2e0bd4fa7076d1))
* **theme:** elevate window title bar and activity bar ([2145722](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2145722772a7c5aba27f68ba6b530b8742a933a3))
* **theme:** enable palette contrast validation on build ([f65be7b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f65be7bb400e0b6d48e701aca13f4f7c91a73ba6))
* **theme:** enhance breadcrumb accessibility and consistency ([a9159b3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a9159b34100ed1622796690907f722e3c0e8968c))
* **theme:** enhance button visibility and color contrast ([6cad645](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6cad645455c0f1f524e181112dfc7c2551995044))
* **theme:** enhance color contrast and update palette for better readability ([100b0dc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/100b0dcee0cc770df60897e8a3ce6eb2d3fd376e))
* **theme:** enhance color system and build process ([091365e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/091365e843f91d08f926474143ebaaaf356079d6))
* **theme:** enhance contrast and add border for search/replace widgets ([24bd4b0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/24bd4b0ed4ad26032620a6f1438bd7422d07b463))
* **theme:** enhance contrast and border consistency ([67ca167](https://github.com/darqus/tokyo-modern-vscode-theme/commit/67ca1679987b3efafc73d919d0dfee375a921550))
* **theme:** enhance contrast and update colors for better visibility ([553617d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/553617df513fa8a967e6ca9cad1a8f5d86ed0e63))
* **theme:** enhance editorCodeLens contrast and configurability ([dc1871f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dc1871ff2c0ef58b8dd6fc64f30caa9f14b3728f))
* **theme:** enhance hover feedback for radio buttons and toolbar items ([6c1d2c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6c1d2c42680529377e87c59c52c7eee11c306a6c))
* **theme:** enhance hover widget and menu appearances ([fcc30cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fcc30cc10f7d0644a0aa2ba6e2303c0863a907f2))
* **theme:** enhance JavaScript and TypeScript syntax highlighting with new token definitions and styling ([1995a7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1995a7dade588fa20ee0df5e87df40ad10a214b5))
* **theme:** enhance markdown list highlighting ([1b7809c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1b7809c71ab4f32171baa936db332c7109975296))
* **theme:** enhance menu and menubar selection colors ([53c4fbf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/53c4fbffed2a162cef87364bdf44fa1036c147f0))
* **theme:** enhance menu colors and contrast in tokyo-night ([d297df7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d297df7df614dd44efbf909d7535664eb27bedee))
* **theme:** enhance peek view and add accessibility improvements ([266cb2d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/266cb2dfbd079a5f1ec6bca8cda319e3bd303c6d))
* **theme:** enhance SCM graph colors and adjust find match highlighting ([311c1f6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/311c1f67ad7b951673877a1782de7429339a0c4e))
* **theme:** enhance status bar color settings and add build task ([f35abc0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f35abc09ccf1fcef43af506404fd1b7c303a099f))
* **theme:** enhance status bar item styles in Tokyo Night theme ([ebb9330](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ebb93303db3b31dfb30da7f13fda2af4b5800182))
* **theme:** enhance terminal and debugging UI ([c55f1ff](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c55f1ff6d926c7899559344fa49809905874b51f))
* **theme:** enhance terminal appearance and add drop background transparency ([ec2bcc5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ec2bcc548d1a72b02744430c757df7f299bb787c))
* **theme:** enhance terminal colors and add text link styles ([cbd8d92](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cbd8d929e927175f1f6493063090b0d06be06aef))
* **theme:** enhance terminal colors and rename terminal file ([b79590a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b79590ae4c12941dfa258dcf0d97473d882fd14b))
* **theme:** enhance theme validation and color palette management ([7ff310f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7ff310f169bae0e46d3747a32c3b8d10a6110ba4))
* **theme:** enhance validation script with duplicate color detection and improved unused color filtering ([d3c14c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d3c14c93451d2ffc2d4b3631a5c438be8bb8492c))
* **theme:** enhance visual consistency and accessibility ([90dc52b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/90dc52b572b0148c972b775c225660479391ced7))
* **theme:** enhance Vue and add Pinia syntax highlighting ([4671485](https://github.com/darqus/tokyo-modern-vscode-theme/commit/46714853edbfa078dcac6ca0b4bea6b83024e1c5))
* **theme:** expand semantic color system and refactor UI modules ([2f08717](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f087177c89d99f82024216e6b14d9d2d29afdc3))
* **theme:** expand semantic token colors for Tokyo Night Modern ([18144f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/18144f05dd595dd50f0edb7f63059161d5654674))
* **theme:** expand Tokyo Night theme collection to 18 variants ([9e4b25f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9e4b25ff3331ac51cce308ef526f65e95880de8c))
* **theme:** export PrimitiveColors type from foundation palette ([19e956a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19e956a976334a4ba96a38569b1cdfcb8022b0c1))
* **theme:** implement adaptive button backgrounds ([214cbf2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/214cbf29f8404bd2acfcd614b645899a71fe78b4))
* **theme:** implement color constants and enhance documentation ([a991afa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a991afa723653ef63a66c41f83108012c8fe9330))
* **theme:** implement color derivation functions and update palette ([f5d1827](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5d1827a9d8b9ca73946ca92c851ad42aea89a71))
* **theme:** implement comprehensive design token system with light theme support ([842dfa7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/842dfa7d3302ca4d6321118882b677961f6a4c69))
* **theme:** implement comprehensive theme validation and improvement ([944e3e3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/944e3e3b92a969fa607996e13ea6100723b118bb))
* **theme:** implement configurable theme generation and plugin system ([aa36112](https://github.com/darqus/tokyo-modern-vscode-theme/commit/aa361125a938100b2d7b49ee72c43bcd8c46784b))
* **theme:** implement modular palette generation and WCAG contrast validation ([b8b5cb8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8b5cb8200a87160dc5376d6a5843c16f0a1cfe0))
* **theme:** implement modular theme generation pipeline ([4e3afa1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e3afa19a128a15203cf4a8c81cad16ec849a024))
* **theme:** implement nested theme generator and comparer ([a599cd4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a599cd4455c4310f328ca7824ac411bea5c70748))
* **theme:** implement nested token model and flattening utilities ([ac4c2e7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ac4c2e70948d8f0b87f418ee31a5b5be21fc358e))
* **theme:** implement tokyo night color palette with modular architecture ([a7880d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a7880d27be2e24a13dcaab65a266393b45d6d462))
* **theme:** improve button color contrast ([e85d425](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e85d42518782e6403153e5483af2e9f75f75cde9))
* **theme:** improve color transparency and contrast ([3579e6d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3579e6daff49c2a67ecb7a59980f847d763416da))
* **theme:** improve contrast and consistency of syntax highlighting colors ([1b9443d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1b9443dafa62b076d4e08d7f197aa90de539a2cc))
* **theme:** improve contrast and visibility for various UI elements ([92f2a10](https://github.com/darqus/tokyo-modern-vscode-theme/commit/92f2a101ab55289f2332ed5207eafbd41f3ab608))
* **theme:** improve highlight visibility in editor and search ([967cb44](https://github.com/darqus/tokyo-modern-vscode-theme/commit/967cb44398a677dc0a204b2c38556c2cabe9630e))
* **theme:** improve readability and contrast in various components ([6d19637](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6d196370f7a7a0327485ed911eacc5fd1887baac))
* **theme:** improve secondary button appearance with cooler outline ([86ad6f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/86ad6f52b3435ad32428461d4ce66cbaba8639b5))
* **theme:** improve syntax highlighting color diversity ([4b332df](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4b332df718926aaf7eb1fcaa0ed372e5457c3bf4))
* **theme:** improve type safety and refactor theme validation scripts ([29bf650](https://github.com/darqus/tokyo-modern-vscode-theme/commit/29bf65078ef874aeaa45d7fa53ea4d03f3a3d93e))
* **theme:** introduce onAccent text color and adopt semantic typography ([82bd1fe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/82bd1fe7d9bb37b981d9af658489fee6e77a596e))
* **theme:** lighten input, tab, and checkbox border colors ([cd062a7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cd062a7f6a79a64a9f7e19f96ac61a3933c5fb51))
* **theme:** lighten tooltip background for readability ([234904b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/234904bfb929c004a621a45e6b3189ffe7f45eee))
* **theme:** migrate palette architecture to modular system ([edcfd21](https://github.com/darqus/tokyo-modern-vscode-theme/commit/edcfd210ff7531a1ab4b52d11e3b2b5ba5e86233))
* **theme:** mix blue into status bar and activity bar backgrounds ([1a7fb57](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1a7fb57dfce2d1f761058b3abe6060d5aa9a5621))
* **theme:** normalize hex color format for activity bar badge foreground ([b95f19c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b95f19cdc6379c1fd3daede92655c6fdf87c51ad))
* **theme:** overhaul color palette and syntax highlighting ([fe0d9b4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe0d9b4191051d186c08f804b345237e0b5f87bb))
* **theme:** overhaul color palette for improved harmony and distinction ([61251cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61251ccf907bf9f9a0c8feb79e150cd44a6811cc))
* **theme:** refactor color system and add contrast checks ([35754ec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35754ec3fc27070e97f60a1ff8a8460cf4872971))
* **theme:** refactor UI color tokens into modular files ([ed603f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed603f09d0b91c6e86e68a74b916b7b0f48e61fa))
* **theme:** refine button colors for enhanced visibility ([ed63cd3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed63cd381188f1cd65308d05475151a59f5db56e))
* **theme:** refine scm graph colors for visual consistency ([b4a675f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b4a675f1a82af8cd7c917927a8742fe4d987be71))
* **theme:** refine secondary button colors ([63f5ea6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/63f5ea668b1b79dc54390333f314a1d6b4539c91))
* **theme:** remove base and workbench palette files ([4502214](https://github.com/darqus/tokyo-modern-vscode-theme/commit/45022141bb601cc6f593eec94c9627626ceed649))
* **theme:** remove deprecated accent color and update color palette ([d35abfe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d35abfe7d382908bbed6dbea704b9172853270f8))
* **theme:** remove unused Tokyo Night theme palette files ([734e365](https://github.com/darqus/tokyo-modern-vscode-theme/commit/734e36501b8e43077f7c6bc61948866e52e32651))
* **theme:** rename and update Tokyo Night theme ([4df5845](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4df584569d212bccad9e2e06a65b258873cfd1b1))
* **theme:** rename and update Tokyo Night theme collection ([0b0ff5f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0b0ff5ff67d72c25056ae593760438b914938921))
* **theme:** rename Tokyo Night theme to Tokyo Night Modern ([71c3bee](https://github.com/darqus/tokyo-modern-vscode-theme/commit/71c3bee5bf07ed3e40a8b123f52724840ca898ca))
* **theme:** replace bright text colors with cooler, subdued tones ([985adb2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/985adb253066927507c1414b37b1c65fc4d7f923)), closes [#97a2d3](https://github.com/darqus/tokyo-modern-vscode-theme/issues/97a2d3) [#6c7097](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6c7097)
* **theme:** replace hardcoded token colors with semantic color references ([2947eb6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2947eb6295200389e1ca2c7ba8818e846d06b43a))
* **theme:** replace Math.pow with exponentiation operator in luminance calculation ([79c3811](https://github.com/darqus/tokyo-modern-vscode-theme/commit/79c38118d4fb55e79887962c36cbaf68adfb1de3))
* **theme:** replace Tokyo Night Modern with Calm Clarity theme ([f3ce704](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f3ce7046ccc2cfa0ce99bda98156439debb16981))
* **themes:** add placeholder and fold colors for tokyo-modern ([bf47a4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bf47a4a70a7ee9b14973dea309e4bcb8c83742db))
* **theme:** standardize thin borders and enhance color contrast ([c505a3f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c505a3f7da48307c013160a7fe822d79c19c1f62))
* **theme:** unify terminal blue and cyan ANSI colors with link color ([c6a7d04](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6a7d042ef91012c5675ce3dc2c3fee617afd8c4))
* **theme:** update accent hover color and format token scopes ([881407c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/881407c1037a906b48bedd7fb3f616f2f07912d7)), closes [#6d8](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6d8) [#85c4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/85c4)
* **theme:** update badge colors to azure blue ([5d9937c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5d9937ce2be2efad124520d5bebc8f151df0c9a1)), closes [#0078d4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0078d4) [#7e83b2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7e83b2)
* **theme:** update border colors for activity bar and panel input ([7871660](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7871660b8bfce452357c8d896622ea151dafe47a))
* **theme:** update border colors with semi-transparent alpha value ([e92c99c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e92c99ce16e92e4aa6f9a3679346ec6dbace3d7f))
* **theme:** update button hover color to primary blue ([4e8c2e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e8c2e2628c3c65f3ed5f4aefd4fa3bdf3bbed66))
* **theme:** update focus border validation logic ([7ea9fec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7ea9fecc239672db67dba0ab25a8c183b66698cd))
* **theme:** update garden theme colors and add semantic token colors ([03f1a9d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/03f1a9d3b5db0a9a8d7691d9eb7802273c30723d))
* **theme:** update history item base ref color to use syntax green ([0ef73ed](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0ef73ed00b0466d5d68de6fde1f82455755655d9))
* **theme:** update input validation colors for tokyo night theme ([e32f93f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e32f93f73117c07291b365ad39396b4d29beb660))
* **theme:** update panel title active border and input border colors ([aa3464e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/aa3464e1d51456671b261193b784c2545a0a7539))
* **theme:** update primitive color palette values ([8faea02](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8faea028bc1974423a0b3bb4ebfb0ccb32247f90))
* **theme:** update purple dark color and add secondary button styles ([3bec61c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3bec61c326c5bb2de7067d855176d6d4e5573aca)), closes [#7256a3](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7256a3)
* **theme:** update search highlight colors to cool blue scheme ([08f4c67](https://github.com/darqus/tokyo-modern-vscode-theme/commit/08f4c677435159d3c90ae13f91f367116baceea9))
* **theme:** update status bar and panel colors ([4a83a11](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4a83a1123c369c949444f8f507b311ed425f7f5f))
* **theme:** update status bar item hover background color ([b6cbfb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b6cbfb57b3e094fa4737b2d47f7908731efa55b1))
* **theme:** update status bar item hover colors ([eddf191](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eddf1918867fd6b85957753918f54a4c1783abaa))
* **theme:** update tab colors and adjust active border position ([9be95c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9be95c4814bad6a69b6182e2c08bdc5c78ce51e3)), closes [#202030](https://github.com/darqus/tokyo-modern-vscode-theme/issues/202030)
* **theme:** update text link colors to use semantic palette values ([60bde70](https://github.com/darqus/tokyo-modern-vscode-theme/commit/60bde701ff9957770dc57a360a6dfbb13c8016e6))
* **theme:** update theme description for enhanced marketing ([10f9dd9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10f9dd957297af7a8f31302ad75012a38f0e8540))
* **theme:** update theme name and improve metadata ([2ded5df](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2ded5df71a563a03c132c182bff30a37b91cf54f))
* **theme:** update Tokyo Night Modern theme colors ([a8fef5e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a8fef5ee67c0af2eb0fe426666ab160a093db03f))
* **theme:** update VSCode theme type definitions and palette structure ([3066927](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3066927aec44ec696ff68f06b0b5e3ee18b99f9d))
* **titleBar:** adjust title bar foreground colors ([e9958f9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e9958f9e1ac3486220cf43c9a74ee830a764fd03))
* **tokens:** add new editor and inline chat placeholder tokens ([45ba3e0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/45ba3e08edc3b609a446329f62484de886e434e4))
* **tsconfig:** enable stricter TypeScript compiler options ([04ccc7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/04ccc7d85598843ff64655f0478f288b7f31f142))
* **ui:** adjust tab inactive background color ([c8151a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c8151a5c6dbb90626993a696681a0ce2fc82474e))
* update button border and separator colors ([4342c1f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4342c1f3771341ed15d67ce42d74c32c1a108fa3))
* update version to 2.1.2 and add package script ([e582673](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e582673095b59677ef32f017f5f9815edf7af0b9)), closes [#123](https://github.com/darqus/tokyo-modern-vscode-theme/issues/123)
* **validation:** enhance theme validation and color usage analysis ([0e081f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0e081f54edc0131f238ed7a3b14c2040b6423fc0))

### Bug Fixes

* adjust activity bar background and active background ([8312185](https://github.com/darqus/tokyo-modern-vscode-theme/commit/83121851a02f043bf91b2cb3d659b446b2455dd1))
* adjust editor selection colors for better visibility ([0994bd7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0994bd759349cc0bc38ca48ebebef894f4bfb3ec))
* adjust SCM graph colors for WCAG AA contrast ratio ([4323e45](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4323e45780bad8a2770f68868b5a8a1fd5bced32))
* correct color codes for Tokyo Night theme ([ee351bb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ee351bb14f98d39f7e13a599f3f9d104af021be1)), closes [#484e71](https://github.com/darqus/tokyo-modern-vscode-theme/issues/484e71) [#636986](https://github.com/darqus/tokyo-modern-vscode-theme/issues/636986)
* correct color codes in theme configuration ([07882ef](https://github.com/darqus/tokyo-modern-vscode-theme/commit/07882ef7de56f4b4823ebfbce9e26d7d9d9bb9ec)), closes [#2a2f41](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2a2f41) [#2A3047](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2A3047) [#16161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/16161) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* correct color values and update terminal colors ([9cc54d8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9cc54d80d9d5d3ae3852bedfcbdba92e52b3ce4a))
* correct palette exports and formatting ([72bca50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/72bca50f5a934e0bf12bcedcf1b21c4090474ba7))
* correct the use of process.nextTick ([a2d376a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a2d376ad2d169145d185cf19773d62ed8215cb06))
* correct the use of process.nextTick in favor of setImmediate ([da1f756](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da1f756ce5d983c9adf8638a5500fd0538f5d1ab))
* correct the use of process.nextTick in message handling ([10ee8a9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10ee8a999c01e3510aba4fb1180482e250f95ccc))
* correct tokenColors import in smoke-compare script ([a83e3ce](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a83e3cedacb12a44733b8f1abad297e65ad0f52a))
* enhance widget and scrollbar shadows, update placeholder color ([c03e47c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c03e47cd092f8824af8951d4101be4ddb29cc755)), closes [#7aa2f733](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7aa2f733) [#747ca1](https://github.com/darqus/tokyo-modern-vscode-theme/issues/747ca1)
* **i18n:** complete translation of smart-version.ts to English ([7b29664](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b296642c33d235a8c94f3067f390841b76892d7))
* **i18n:** translate final console messages to English ([7192dcc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7192dcc3ba299743428a9553347c63ace0d51936))
* improve light theme contrast and accessibility ([b57547e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b57547e306d73156d1322aca6014f01a0ed72535)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#3d4752](https://github.com/darqus/tokyo-modern-vscode-theme/issues/3d4752) [#d1d5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/d1d5)
* **lint:** allow hex values in palette.base.ts ([dfd8c6b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dfd8c6bfac1e1642c6178155d2a3a80a344e3f2f))
* **package.json:** update theme configuration for consistent theming ([b554d51](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b554d51a66930677d2d5e7b21f1c2c230dd3e3ad))
* **package:** correct display name in package.json ([432b964](https://github.com/darqus/tokyo-modern-vscode-theme/commit/432b96487c70f91d11c91a210db90f36b00631b4))
* **palette:** adjust background colors and intensity ([cc0f782](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cc0f782f9cdd448ea59a81eba4a1d25fa342d95c))
* **palette:** adjust base palette white and interface editorFg colors ([fd2f010](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fd2f01004d558efd52915794f87fa7ec1cc7c0c7))
* **palette:** resolve critical contrast issues in light theme ([c04c365](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c04c3659b3dd035d9e7dd24cd44bd2b1db4fb61d))
* **panel:** update color mapping for panel titles and related UI elements ([906f1d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/906f1d232f93e2883f97bd2d793ba9b009f7e338))
* prevent error when getting items from empty localStorage ([f18b99d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f18b99dce4fdc6e7096f937254c445356ee4221a))
* **README:** correct theme name and update marketplace badges ([18f127d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/18f127d1f96fa119535bff48b67a33a71dc22435))
* **release:** improve commit analysis and information display ([8443291](https://github.com/darqus/tokyo-modern-vscode-theme/commit/84432910fb81109695633bce0d45b37f8226e2dc))
* **release:** modify release script and update package.json ([d87e8cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d87e8cd81c2f1d5aedba8f37bc369e0d940bfcd9))
* remove alpha channel from buttonBg color and update snapshots ([e97142d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e97142df390c810768e553f12b17f10afdb8924a))
* Remove JSON key level colors to address highlighting issue ([43de855](https://github.com/darqus/tokyo-modern-vscode-theme/commit/43de8555c5078c9f34ca734978c87a1dbdd07a4b)), closes [#32](https://github.com/darqus/tokyo-modern-vscode-theme/issues/32)
* remove unnecessary newline in color.ts ([7231cd5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7231cd59b22f6f3c5e6c2de4fe142f8c724835bd))
* remove unnecessary whitespace ([ba467cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba467cca83564608049174e4f693bbd74f2e06c7))
* remove unnecessary whitespace ([b0f493c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b0f493c594d347008af56779f718487f8889ea45))
* resolve theme validation issues and improve accessibility ([0a6651b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0a6651bd8aa805738a5ef034f54b349523d92587)), closes [#787c99](https://github.com/darqus/tokyo-modern-vscode-theme/issues/787c99) [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5)
* **scripts:** handle undefined return value in execSync ([cf288a3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cf288a3f4ba47ce9e1bc9e348daa2ff6ff2ec994))
* **scripts:** improve error handling and sanitize outputs ([f2dc200](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f2dc20061cdc5b3f531f6726d7b06524d4456129))
* **scripts:** improve error handling in release script ([d32ab99](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d32ab9980cd4f46151964b5be4df6a542462de46))
* **scripts:** improve theme contrast check for token names and scope ([90847c5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/90847c5118d4409ff8adf6dc00b36de1d94cd28e))
* **scripts:** update code evaluation for server-side rendering ([acd22ee](https://github.com/darqus/tokyo-modern-vscode-theme/commit/acd22ee3f5a5df6f8f8d87ad9a82d2439c49ab68))
* **scripts:** update release type message to English ([21b6176](https://github.com/darqus/tokyo-modern-vscode-theme/commit/21b617674085e68c8dbe142a9c5654675d52bd20))
* **selection:** ensure proper selection background in light themes ([61c9c46](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61c9c46ae1abedad02abd9fcab071937023b85d9))
* **semanticTokenColors:** update variable and punctuation colors ([43df841](https://github.com/darqus/tokyo-modern-vscode-theme/commit/43df8411d418946c482ebf396e535908965b1287))
* **test:** fix smoke tests for new architecture ([5e71f12](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5e71f121fa433fb318712123c661ec5697448653))
* **theme:** исправить значение прозрачного цвета ([1d64834](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1d64834665dea858d6e7d138504103c3e5e73850)), closes [#00000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000) [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **theme:** adjust menu and dropdown color mappings ([a4fe802](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a4fe80287585b9e33c22898ca197a196e475139d))
* **theme:** adjust SCM graph hover label color for better visibility ([e180b4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e180b4af171cb46148aa4c248f47971b39e8ad2b))
* **theme:** adjust scrollbar color for better theme integration ([11fcf79](https://github.com/darqus/tokyo-modern-vscode-theme/commit/11fcf79c9f88ae05419ba6261927a6ba3251188f))
* **theme:** adjust selection background color for better contrast ([f876252](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f87625260adfec169f404f023554a47f7634aba6)), closes [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#4e6ab2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/4e6ab2)
* **theme:** adjust syntax comment color and import order ([a80bf87](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a80bf8701185c3b34ffedcac7ecbf39576bab963))
* **theme:** adjust text colors for better contrast and visibility ([7d323de](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7d323de4b2fca27bad96f957b2b7fd977c9f6a58))
* **theme:** adjust unfocused inactive modified border color ([57927bf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/57927bf0e5392a346fe7e16b0b22495be66d81ef))
* **theme:** boost luminance of colors to pass contrast checks ([0f33db6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0f33db6a3eb787f1c728e95272e1493b917d7938))
* **theme:** brighten primary accent color and update properties ([886209d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/886209d93f2e60e642dcd87e066fff6778d7e6be)), closes [#5a7b9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/5a7b9) [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4)
* **theme:** correct border color values in tokyo-night theme ([3e6a24d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3e6a24d28c8e227eb432a29f3a64f9face1c68a4))
* **theme:** correct color mappings and improve contrast in interface palette ([59369e4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/59369e487574f73a76b1a8e9f8022690474f4770))
* **theme:** correct color values and import order in palette files ([ed8a962](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed8a962349a0d0e848f6cb58d084f30736541717)), closes [#f768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f768) [#ff768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/ff768)
* **theme:** correct color values for border and background properties ([955c869](https://github.com/darqus/tokyo-modern-vscode-theme/commit/955c869e45c7ed7008c7ebae7a759b8ac3618ca3)), closes [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* **theme:** correct color values in Tokyo Night theme ([762b487](https://github.com/darqus/tokyo-modern-vscode-theme/commit/762b48780b12bdcd082663e481215af712bf472c)), closes [#161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/161) [#16161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/16161) [#116611](https://github.com/darqus/tokyo-modern-vscode-theme/issues/116611) [#14141](https://github.com/darqus/tokyo-modern-vscode-theme/issues/14141)
* **theme:** correct colors for better readability and alignment with original Tokyo Night ([049d0c2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/049d0c27624306b67acf273ffd45e13d50a98efc))
* **theme:** correct hex color values in color-utils tests ([61a24bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61a24bc76964d109f9859de5ee738ae6fe51abd7))
* **theme:** correct hex to HSL conversion and improve hex padding ([6eb2777](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6eb2777af92e210117779cfac6185b866c194fca))
* **theme:** correct typo in status bar item hover background color ([eaa9236](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eaa9236994a211480db2cba2b60b77799b31f20e)), closes [#2022](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2022) [#20222](https://github.com/darqus/tokyo-modern-vscode-theme/issues/20222)
* **theme:** fix tab inactive and selected background colors ([65c74c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/65c74c4d520d9da5be113bdc10798e82159a446e))
* **theme:** improve accessibility and high contrast themes ([204d447](https://github.com/darqus/tokyo-modern-vscode-theme/commit/204d447f120676e15bce3bdd41641011aa46776e))
* **theme:** improve contrast and accessibility for various components ([47fde07](https://github.com/darqus/tokyo-modern-vscode-theme/commit/47fde073e64e9c7662248353263cecc7d48a750b))
* **theme:** improve contrast and extend semantic token support ([52f5e5a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/52f5e5a90090e3ab23881b748265c2015c21ef47))
* **theme:** improve inline chat text contrast ([f5b32d8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5b32d8a05d6f82463d0d196fd615d3b96e71b43)), closes [#c8d0f6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c8d0f6)
* **theme:** improve log sanitization for better reliability ([ef748b0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ef748b0872eba2d20cb851903ab04051318898cc))
* **theme:** improve syntax contrast and update colors ([13c4c63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/13c4c63b75a049e768602bce4cc20097111f2e31))
* **theme:** improve terminal link hover and text link colors ([573be5c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/573be5cb6c5ba2f1a2a1fb620d4bbf4f705f722e))
* **theme:** improve UI color retrieval with better type safety ([19a6709](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19a6709783498a22bbc0b63d488ee151454cc5de))
* **theme:** increase brightness of primary accent color ([f5d005d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5d005d3984207652f59cff8d2a3188ffa4dbecf)), closes [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4) [#8ac7](https://github.com/darqus/tokyo-modern-vscode-theme/issues/8ac7)
* **theme:** make token settings optional in VSCodeTheme type ([6ba9395](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6ba9395a6b7f88e9967767deba6eff5a01834c55))
* **theme:** normalize hex color values to lowercase ([d0c68cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d0c68cdcda94a9406010aea852d705de1ab3b022))
* **theme:** remove deprecated Inline Chat and toolbar color properties ([8dcc75e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8dcc75e93cbfd435c5a33fcb2a9a8fb0837d47c0))
* **theme:** remove editor.findMatchHighlightForeground to avoid warnings ([8eb6d34](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8eb6d347f1aae600c362bf8f4284d74ea54ffc4d))
* **theme:** remove sideBySideEditor.border color definition ([e7eab87](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7eab87bdfe2ec72e8c8d63b51eed135ed6a36dc))
* **theme:** resolve validation issues and update deprecated properties ([4e3890e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e3890e09f62d6d8386a73a3be7be55fe7184d3a))
* **themes:** improve contrast and readability for Tokyo Night theme ([4cc8d11](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4cc8d11cbbb7bc97a6a459896daa3a39cb5d5c67))
* **themes:** update focus border and match highlight colors ([af55d0a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/af55d0ad8d2852ed7395dae16ac0cf09f6401fac)), closes [#7bb2fa66](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa66) [#95abd966](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd966) [#7bb2fa66](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa66) [#7bb2fa99](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa99) [#95abd966](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd966) [#95abd999](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd999) [#7bb2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2) [#95abd9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd9) [#7bb2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2) [#95abd9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd9)
* **themes:** update indent guide colors for tokyo-night-dark ([f4c81a9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f4c81a95d288865d5dfcd3b432d6b870ca8ae3c3))
* **theme:** update active line number foreground color ([c1abed8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c1abed8801706a0b932b788af2917688b46150b0)), closes [#d6e3d8](https://github.com/darqus/tokyo-modern-vscode-theme/issues/d6e3d8)
* **theme:** update activityBar inactive foreground color ([733a5fb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/733a5fb1d3742f27c75c2cd5177068a3201b8b24))
* **theme:** update background color values for better contrast and consistency ([9c3c4a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9c3c4a5c50d54b41526330917dfd0050b7dfce61))
* **theme:** update button color tokens for better consistency ([28a3d26](https://github.com/darqus/tokyo-modern-vscode-theme/commit/28a3d264f3cd3afca9cf593793066790a129599f))
* **theme:** update button colors in interface and tokyo-night-dark theme ([82b3ea1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/82b3ea148cdd2ee640c22edac1e9283aaaa0de45))
* **theme:** update darkest gray color to [#0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0)f1722 across palette and theme files ([c58aa4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c58aa4a032d8f738a47f9060596e373be09cfb12)), closes [#0f1722](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0f1722)
* **theme:** update extensionButton prominent hover background color ([9eae568](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9eae568715ac6e006b478d079e2a1758adee0082))
* **theme:** update git decoration colors and build timestamp ([b5b43b1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b5b43b11fb7853e15bcef86706fe3146bcf99165))
* **theme:** update hover background color in tokyo night theme ([00ddee7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/00ddee76a94110ec2b380fd56c2cc817cbc18007)), closes [#13131](https://github.com/darqus/tokyo-modern-vscode-theme/issues/13131) [#1f1f33](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f1f33)
* **theme:** update menu separator background color ([9f394bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f394bca48f7c19310a5ce09c8891f8ab5fc4201))
* **theme:** update operator color for better visibility ([2d333f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d333f02feb421553f939a8edf561be86c9c751e)), closes [#f7768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f7768) [#f14565](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f14565)
* **theme:** update semanticClass name in calm-clarity theme ([6f5d2ed](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6f5d2ed3400679ae6bd2d9d0b895fb9967c9385c))
* **theme:** update status bar item hover background colors ([490ec03](https://github.com/darqus/tokyo-modern-vscode-theme/commit/490ec03a3d753ed6f9efc08345d1ae09ab5f69ed))
* **theme:** update statusBar debugging background and pink color value ([3b6eb63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3b6eb63f51a999251236cfbd0555319289f6f5f7)), closes [#e047e0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/e047e0)
* **theme:** update syntax red color references and usage ([b449c4f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b449c4f380f8aec8011a1c2187ba2c4972712da5)), closes [#df215](https://github.com/darqus/tokyo-modern-vscode-theme/issues/df215)
* **theme:** update tab active border style ([712a7f6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/712a7f61ade70ed9ed3f5ee760386ac77e4a69a8))
* types/v3-directive not published ([08a4ac8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/08a4ac8cb08a51020ea6cb9809ada1b2e38a884d))
* types/v3-directive not published ([725bd13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/725bd1322d710fa9168b54ff45eb5c62dd0c4681))
* update author info in package.json ([5467b32](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5467b325772af15aa8f210d57a6327993dd99094))
* update dependencies to resolve security vulnerabilities ([2416bf7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2416bf75ada666bbaa7f679f814c7cd6bebf8595))
* update editor find range highlight colors ([776105f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/776105fec0d62650676ee0dfdce477e7ab73546d))
* update empty code diff to empty commit message ([6dcce34](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6dcce3417d9ed6ef5a112d764383f352b5061f6b))
* update string, operator, and escape char colors ([4bc464a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4bc464a3a7e73740cd82c50c22a84604526297c0)), closes [#4ea044](https://github.com/darqus/tokyo-modern-vscode-theme/issues/4ea044) [#72ac6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/72ac6)
* update text color contrast to meet accessibility standards ([8fe573d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8fe573d5992e8d5bb02f9104fecd70f046f5a02f))
* update text color mappings and adjust token sources ([9f91429](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f91429bd0dafc85c01d44b129d430eb0b251ea2))
* **utils:** replace string alpha values with numeric values in color functions ([6c0bc46](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6c0bc46dd654386af809a234395d736923d07c61))
* **version:** correct version number in CHANGELOG and package-lock ([2a17857](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2a1785793dcfc4b323246bcec44ddad14e678f82))
* **vitest:** add missing semanticTokenColors property in validation tests ([3dff72d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3dff72dcea7b03455bf3fb2be81eefe244ad77e1))

* add comprehensive Tokyo Night theme analysis and generator plan ([b0c4504](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b0c45043716e55a69c42dcd7f0b903b7c1bf96a5))
* **docs:** remove architecture documentation files ([8714c96](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8714c961263d9998fd9ed02377ecf672ee80cb0e))
* **theme:** clean up palette and syntax color definitions ([100610c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/100610c83580161c659ae856537cd029724606f1))
* **theme:** migrate to semantic color system and remove legacy scripts ([39d56ac](https://github.com/darqus/tokyo-modern-vscode-theme/commit/39d56ac126591ecde05063f4349d42bbfe36159c))
* **theme:** overhaul color and token system ([cfbf3e4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cfbf3e46d30ec2742015a281db923dfa14b0ea41))
* **theme:** overhaul color system with semantic architecture and optimize palette ([0d6a215](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0d6a215c4d3ea79dd0d906a0cdbd80d1c06e2b6b))
* **theme:** remove legacy theme palette and generators ([27b4eb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/27b4eb511f2aae91cb8cffce4909af443883fd06))
* **theme:** rename primitiveColors to foundationColors and update imports ([401daf0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/401daf0be8403782feee537b52aac0cde8ffdd24))
* **theme:** update color palette and syntax highlighting across all language modules ([0c25bfd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c25bfd9b92e9524dc6659fe452b006856db407f))

### [2.3.1193](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1190...v2.3.1193) (2025-11-02)

### Bug Fixes

* **scripts:** improve theme contrast check for token names and scope ([82dfc7e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/82dfc7e2ffd1cebcc34566fc3ef96bf4f8f4d82a))

### [2.3.1190](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1179...v2.3.1190) (2025-11-02)

### Features

* **theme:** enhance theme validation and color palette management ([7ff310f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7ff310f169bae0e46d3747a32c3b8d10a6110ba4))
* **theme:** implement color constants and enhance documentation ([a991afa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a991afa723653ef63a66c41f83108012c8fe9330))
* **theme:** rename Tokyo Night theme to Tokyo Modern ([f3f5b13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f3f5b13f8552cef36fe3674e2d3927d4f05dfedf))

### Bug Fixes

* **vitest:** add missing semanticTokenColors property in validation tests ([09f89b9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/09f89b9dfd78635c01470c45138e386b1af0cc09))

### [2.3.1179](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1178...v2.3.1179) (2025-11-01)

### [2.3.1178](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1177...v2.3.1178) (2025-11-01)

### [2.3.1177](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1176...v2.3.1177) (2025-11-01)

### [2.3.1176](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1175...v2.3.1176) (2025-11-01)

### [2.3.1175](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.1169...v2.3.1175) (2025-11-01)

### 2.3.1169 (2025-10-31)

### ⚠ BREAKING CHANGES

* Removes legacy color palette and refactoring plan
documents in favor of the new comprehensive analysis approach.
* **theme:** The old theme generation system, including `tokyo-night-generators`, `base-colors`, `primitives`, and various palette utilities, has been completely removed. The theme is now generated solely through the new nested model.
* **docs:** removes architecture documentation that may have
been referenced in external materials
* **theme:** Direct usage of `foundationColors` in UI modules is deprecated. All UI components must now use semantic tokens via the `getToken()` utility to ensure architectural consistency.
* **theme:** Legacy color references replaced with semantic color system
* **theme:** The structure of TypeScript syntax color definitions has been refactored. Colors are now defined as direct string values instead of nested objects with a 'base' property. This simplifies the theme structure but may affect integrations that relied on the previous object shape.
* **theme:** primitiveColors has been renamed to foundationColors
* **theme:** The 'migration' utility object, including 'getLegacyMapping' and 'migrateColor' functions, has been removed from the theme palette.
* **theme:** Token access now requires using getToken() function instead of direct palette access
* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design. Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

* Implement semantic color system with primitive → semantic → UI → syntax hierarchy
* Reduce color palette from 4503 to 174 colors (97% reduction)
* Replace legacy color references with semantic tokens
* Add comprehensive documentation for new color system
* Update all UI modules to use new semantic color mapping
* Improve theme performance and maintainability

* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design.
* **theme:** The entire color palette and syntax highlighting rules have been replaced, resulting in a significant visual change to the theme.
* **theme:** Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.
* **release:** replaced release system with smart automatic one

### Features

* **.vscode:** add new VSCode task and update tab background colors ([ba71a8a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba71a8a1d411300a19a8f49c00fa04fb36719049))
* **.vscode:** add task to run tests and update theme colors ([897c18d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/897c18df1924ea12b46352d10d584b2eebf0306d))
* **accessibility:** improve contrast ratios for better readability ([168e2eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/168e2eb68a224e45864dfd5b862bc66ef7541c87))
* **adaptive-backgounds:** implement editor background adaptation ([a505c13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a505c132072b3ac77313dcfdfda8962b127aee20))
* add color token for editorCodeLens.foreground ([c6b5ad7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6b5ad7de20c8355e9cab1a2a8f10ae90de4b5ae))
* add missing PeekView token mappings and update theme ([7b2f3ea](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b2f3ea4d748a35cb9964aea438e42d8b456badb))
* add modern interface mapping for editor groups ([1e8282f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1e8282f21e6ea45436fa2a6a7b7e7d9d3df893b1))
* add new editor debug tokens and update theme ([2e3f36e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2e3f36e227822116e24e12bab4f651ea13565196))
* add new Tokyo Night themes ([822bd2e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/822bd2ededadbc6e409fbb0e917f7ff881cbb5ba))
* add screenshot of tokyo night modern theme ([3355549](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3355549d29dac625a598996d24990f9940e7408a))
* add statusBarItem.hoverForeground token ([0564156](https://github.com/darqus/tokyo-modern-vscode-theme/commit/056415664cb1af8638f615e9d76bfe85757fa005))
* add title bar color tokens ([c6b07cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6b07cdab242bcc9ad167f4a53da83dcf33e0f97))
* adjust diff editor colors and remove borders ([288d612](https://github.com/darqus/tokyo-modern-vscode-theme/commit/288d612c86a38fb4a09443ae9a178ace2d051064))
* **assets:** update tokyo night modern theme screenshot ([5dd3192](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5dd3192f336de8268f9a2e8d1e7a8549f4425e7e))
* **assets:** update tokyo night modern theme screenshot ([f2f11d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f2f11d27484196719246b1001ac1aa93f7c94658))
* **biome:** add useShorthandFunctionType rule ([021dde0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/021dde0ea1d720b88f465a9134019ef99e34b15a))
* **breadcrumb:** improve focus and hover readability ([2d2add0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d2add05c2166ab4b5d03e9021708ced9bd68ccf))
* **build:** dynamically read version from package.json for vsix name ([d7c7284](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d7c7284b0da4889f5fe03b75af0921d38ff36e36))
* **build:** implement full theming pipeline ([b2e1d6a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b2e1d6ab78909685b447e2f3c301afcc8f31f2ea))
* **button:** adjust hover and separator colors for improved contrast and visibility ([3656cfb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3656cfb40f88686f84f28cf1a5ce5325d9acb619))
* **button:** enhance button contrast and adjust color scheme ([b4c0892](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b4c089261bbb30b2c96758336e84705b2c690420))
* change editor hover widget background to base ([97cdb55](https://github.com/darqus/tokyo-modern-vscode-theme/commit/97cdb55d2288d82be4a2c73b07da89a41f991453))
* **color-theme:** enhance hover widget readability and add foreground token ([72aa3bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/72aa3bcffff0e3330c8b753a051d6c4357b7cc22))
* **colors:** add CTA colors and update button styles ([126672f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/126672f0c921963ae158a7aea76405cb840894d1))
* **colors:** enhance search and selection highlighting ([16226bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/16226bc616a795591050425c2307baad79117358))
* **colors:** unify search highlight colors across editor, terminal, and list ([602aa06](https://github.com/darqus/tokyo-modern-vscode-theme/commit/602aa06b1e6dc6bdf2a9f6f4765ceab04def9b7c))
* **colors:** update badge and remote indicators ([b8cc5a0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8cc5a0b790751f8b487ccfd2a6cd1e06080e5d7))
* **contrast:** enhance text contrast against overlay background ([00f99e9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/00f99e910055fe6394b1cd3898fdafb74580bf4a))
* **core:** add dropdown control palette ([3f967cf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f967cfb9f7bb7b206d57619b3eee797a4a73108))
* **core:** add OKLCH color utilities and enhance theme tokens ([a7b0a63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a7b0a63172c752b6c1a2100f7ee5438710f03219))
* **core:** add tokens for menu bar, panel section header, and CodeLens ([3f1032e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f1032e6a8450dbe81c2a844a32a0104714495cd))
* **core:** adjust editor line number colors ([b3fdc15](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b3fdc15fad9a261f2d5afd5fb73fd9673aaa5bdf))
* **core:** adjust non-bright white in terminal to reduce glare ([da46a5a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da46a5ad70edf9f41afaa8609e3c429da2fb192b))
* **core:** change warning state color to purple ([f581029](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5810297fff39a60c38dafa507a0857449925ded))
* **core:** implement caching for color operations and add surfaces system ([471f94d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/471f94d1e9ef78a15bf6bd95642676bee3d3330a))
* **core:** improve color contrast and readability ([4bff4e8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4bff4e83794960005ca71032fb421e5497a92a44))
* **core:** rename skyblue to badgeBlue for badge background color ([a674ffd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a674ffd5a8147cecc668326e80c034159d3a0955))
* **core:** update link and icon colors in theme ([eccfe9d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eccfe9dda73d054aeed6e57e673a822f087a6910)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5)
* **core:** update link and icon colors to primaryBlue ([9a58228](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9a582284906243907620e1f1dc48d27bd6d21560))
* **doc:** add smart versioning documentation ([ae9b472](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ae9b47213a835c5b15c322ecead2dab436af9c21))
* **docs:** add comprehensive list of editor and UI color tokens ([6b9aeaa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6b9aeaa81f48d630223588deef07cc1416b9bf22))
* **docs:** add release versioning information and update README metrics ([b930ad0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b930ad069a1d249d61ced765ac83cfd793ffaf3d))
* **docs:** add token registry generator and update CI scripts ([ad5ecc1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ad5ecc1b3b6b4a393dfc267a57f677cdbb40649e))
* **docs:** enhance contributing guide with detailed process and examples ([64003e7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/64003e791a6d107f319d68eb1fbfafe49bf65118))
* enhance statusBarItem colors and add compact hover effect ([a184bb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a184bb56e71d7cfb4f9db0f29fe3ad9a137363df))
* **extensions:** add sticky scroll theming for TypeScript 5.2+ ([d26774d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d26774dd23ee14a49f8feb8d746e3a7f8ac79aa1))
* **i18n:** update smart versioning system to use English language ([039ff54](https://github.com/darqus/tokyo-modern-vscode-theme/commit/039ff54fd481f5236aeb363324e62e842fcf4906))
* **icon:** update icon.png binary file ([d26280d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d26280dc26a0281c029a9b7585c931a73fffcf3b))
* **icon:** update icon.png binary file ([259f98a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/259f98a870abf807c5bf5d16b5b71d5beb4153c1))
* Implement placeholder color analysis and optimization plan ([ba8c6e1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba8c6e15bd814cc98e9c18e4f9490767945427d2))
* improve visual tests with syntax highlighting ([f28c9d7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f28c9d72c830e483dd7b4135d45707017e1fb753))
* **interface:** add blockquote colors to interface palette ([719eaeb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/719eaebbd6228b435d5256f6b58e2d42ccbe92e3))
* **interface:** add darkened base background color ([23ea9b4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/23ea9b4ab7517f5dff05de9de3ca85f4f7b7f3f3))
* **interface:** add find match colors to interface palette ([e7e55eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7e55eb17a4b3e0055186f47530e623710685ef6))
* **interface:** add hover state colors for status bar and text items ([81e8736](https://github.com/darqus/tokyo-modern-vscode-theme/commit/81e8736b9f87d4ba12781873fed68cc0edbc3332))
* **interface:** add inlineChat background color ([d74b74d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d74b74d7cba0de111cb7a72f54a4ff3e4cdd2c25))
* **interface:** add lineNumber and lineNumberActive colors ([3740413](https://github.com/darqus/tokyo-modern-vscode-theme/commit/37404139ff657a225613cebac7db38974d57b742))
* **interface:** autogenerate button colors and update theme ([19eb7d7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19eb7d7797f1be3edab0073808af31b83417a26a))
* **interface:** expand button color palette and adjust generated colors ([069a182](https://github.com/darqus/tokyo-modern-vscode-theme/commit/069a1820eac9835c0a966038be1ae2c6aac8f5b7))
* **marketplace:** rename extension and update publisher ([8748aa5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8748aa54099d8b7f4b0fc7b73daddee0baad9c4f))
* **menu:** update selection background to transparent ([032b651](https://github.com/darqus/tokyo-modern-vscode-theme/commit/032b65181b442e5db4d69d228dce9a4a4397e303)), closes [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **package:** add test:update script for updating snapshots ([9928f18](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9928f180a8db959b7fbd2c4d85ad1b26c4b0a38b))
* **palette:** add editor bracket highlighting colors ([8e56ab0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8e56ab0771fefae8b73d41175ed957f0f80eef45))
* **palette:** add token-specific colors for syntax highlighting ([b6bf491](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b6bf4919302502c1eaeb9536a6213772c3d35796))
* **palette:** adjust comment text colors and related styles ([f1d9253](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f1d92530fac4d95efbfaed0091f8d2fa868238fe))
* **palette:** adjust git decoration colors for better contrast and visibility ([0c8ba4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c8ba4a9626065978433415412ada5062b406d85))
* **palette:** calculate interface border color ([8b45a50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8b45a506e42759da2d91aa0eecfce37c37ae0c77))
* **palette:** implement declarative token generation ([cff908c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cff908c399dff052fd4dc18913326212e0371afc))
* **palette:** update badge base color ([9f278f9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f278f95fcbaa28b0cfdff2dc44b392301bcfa16))
* **release:** add automated release script ([f5f5680](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5f56800a05555e5678714ec50a95f694b3071fb))
* **release:** create github release automatically ([fe83026](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe83026e4b27f44a79b4d1f070a111800eb21c33))
* **release:** implement automated release process ([59ed1ea](https://github.com/darqus/tokyo-modern-vscode-theme/commit/59ed1eab6b7dc26378b4b5233a26ce08f94196fb))
* **release:** incorporate commit count into version bump ([9388082](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9388082d1dab306fbc49c808c5acc1f8793b930d))
* **release:** remove auto push from smart-version.ts ([35ec3b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35ec3b7686943f1e960fb8b9f557ec3dfc93979b))
* **release:** smart system for automatic version detection ([d737203](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d7372035a8ae7d5d99e6f4ea014074114285124e))
* rename theme from Tokyo Night Darker to Tokyo Night Darqus ([d093034](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d0930343779e054267bf036d8d5fa285df2bab52))
* **scripts:** implement visual test script for UI components ([1ca4525](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1ca4525053189a5d9ff6613a2d6ca826623a66db))
* **semantic-tokens:** add extended semantic rules for enhanced syntax highlighting ([75e5c45](https://github.com/darqus/tokyo-modern-vscode-theme/commit/75e5c45082982691ae66ed6867364ec101bf384b))
* **shadow:** adjust widget shadow with cool tone and translucency ([1511480](https://github.com/darqus/tokyo-modern-vscode-theme/commit/151148087cf26ab4f3c6c0841b8ed3583569bd06))
* **smart-version:** enhance release versioning options ([909d833](https://github.com/darqus/tokyo-modern-vscode-theme/commit/909d833e67146c6b46ecaf1b330d1b8d14f03b1b))
* **static:** add new Tokyo Night Dark screenshot ([34c9392](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34c9392dc638486b242446f62605fbc9325f4430))
* **static:** add screenshot of tokyo night dark theme ([b59d076](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b59d0764c1ba048b6859c3993b411db326f6162d))
* **static:** add screenshot of tokyo night dark theme ([05cb542](https://github.com/darqus/tokyo-modern-vscode-theme/commit/05cb542d86e62df20ba5a6f042225273c0ae18bc))
* **static:** add screenshot of tokyo night dark theme ([02bdf48](https://github.com/darqus/tokyo-modern-vscode-theme/commit/02bdf489109d5a6fe77e81347141246e57c9fae2))
* **static:** add screenshot of tokyo night modern theme ([4e9c0fc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e9c0fc4c64f76b2fcdf26ad1ff94cedbd13ff3e))
* **static:** add screenshot of tokyo night modern theme ([33a6d38](https://github.com/darqus/tokyo-modern-vscode-theme/commit/33a6d38fffc0849e7a61ea62f271eac2f43de796))
* **static:** add tokyo night modern screenshot ([da03f72](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da03f72d80ad75126bfbc30bdc681add976460d7))
* **static:** update screenshot for tokyo night dark theme ([07dc8e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/07dc8e262d7da7e8718a85b64756baf384eac09a))
* **static:** update screenshot for tokyo night dark theme ([b8066f1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8066f107773a61fb9d639b8cbe0275d1710911b))
* **static:** update Tokyo Night Dark screenshot ([fb40787](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fb40787dd6f7c84a6ba9eb2c91744f4c0f311c35))
* **static:** update Tokyo Modern screenshot ([34c0daa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34c0daa20a6610e6bd174589a2f314f6ae933de8))
* **tabs:** unify active and inactive tab backgrounds ([60daff1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/60daff1ff628fd51124f49e5f1d86c5d1ec46955)), closes [#18181](https://github.com/darqus/tokyo-modern-vscode-theme/issues/18181)
* **terminal:** improve hover highlight color and visibility ([c53ef61](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c53ef61f67717bfc192b04e71d7dbda1cc2490c7))
* **tests:** add snapshot test for theme consistency ([7bfec3f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7bfec3f3abba23e78866550800f0944d77cdf8ca))
* **theme:** add adaptive background colors for various components ([7deed60](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7deed607581d9d50e93129d36ce965581d02c132))
* **theme:** add adaptive selection colors for lists and activity bar ([d56c5e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d56c5e23db6274e44eff3ebc2f93f444abfa21fa))
* **theme:** add and reposition Tokyo Night semantic token color generator ([9d6abda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9d6abdab3aee9aef6fe8ed6e8c4f1aacfe116a9d))
* **theme:** add badge colors to interface palette and update related tokens ([6ab553b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6ab553b6e8f789390cfb2bc04cdbb45a24160878))
* **theme:** add button color palette and fix input option alpha value ([b16d10c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b16d10c204885019dc8c5af84343cf711f3ad69b))
* **theme:** add checkbox colors to generated theme ([36db534](https://github.com/darqus/tokyo-modern-vscode-theme/commit/36db53497d122523a63f75603b4acc080ebc4ec1))
* **theme:** add comprehensive colors for SCM Graph view ([70dd867](https://github.com/darqus/tokyo-modern-vscode-theme/commit/70dd8671584511eec4dfcc4027900bff3a0139d9))
* **theme:** add comprehensive palette types and token categories ([3e57259](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3e572594d311d95f020c8617324d4139c362e0fd))
* **theme:** add comprehensive semantic token color definitions for enhanced syntax highlighting ([1180ba1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1180ba1a902601c36117d0bfd884b7b59958ede4))
* **theme:** add comprehensive status bar color customization ([ff2edda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ff2eddad90c9ecf7a5a115222986eb5f53077ae2))
* **theme:** add comprehensive syntax highlighting tokens for Tokyo Night theme ([06e2bcd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/06e2bcdc85effb9cf912a89bd7abc0122e45ea24))
* **theme:** add comprehensive Vue syntax highlighting support ([2d54fe4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d54fe4c69f2fb232003ca1f2ffbfa1ebe7cf95f))
* **theme:** add contrast check script and improve color contrast ([88daad4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/88daad474dc02eaa10c7b65fa2f9283b1c405b68))
* **theme:** add custom colors for SCM graph view ([b9aafda](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b9aafdaf3b7f20e460e8dd46ed86e830174de8c3))
* **theme:** add design tokens for consistent UI styling ([10d20eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10d20eb4cd1f44618fe33c9b3cc52dd91599c9ca))
* **theme:** add detailed punctuation and bracket colors ([a8d53a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a8d53a5793580d7cf72b5272c84f34ea5fb48a05))
* **theme:** add enhanced terminal colors and generate theme variants ([1aabf7f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1aabf7fd1774dbc3bd2b28dc39026d34b3e21865))
* **theme:** add foreground color for icons and hover widgets ([6e29796](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6e29796765554c35bbb0f7d8cd229d371f99c712))
* **theme:** add frosty glass effect to hover widget and notifications ([91c473c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/91c473c9b2f0f862f76b035955d3d267bfa38381))
* **theme:** add git decoration colors and update theme snapshot ([d6bf4af](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d6bf4afa2cdb61cd756038c22eab503b1e85fb88))
* **theme:** add Go, Rust, Haskell support and enhance syntax highlighting ([7615a36](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7615a3681f7ccdbd7954c7b4ff53a235d61703c3))
* **theme:** add icon foreground color ([0ca16f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0ca16f5157d000817f554bacb71166894f6d0e46))
* **theme:** add inline chat and toolbar color configurations ([fe2e7e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe2e7e28df2029f5ada333c4df58b17b128039b2))
* **theme:** add JSON key coloring and enhance object property highlighting ([6679b4d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6679b4dfc92ccb761f4b73e35c374287242d796d))
* **theme:** add light theme and improve theme variants ([6491a93](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6491a93f2226e4acbda85b016bc7625b3e5fd26d))
* **theme:** add list drop background color ([35b88ae](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35b88aefabd04505d57c4310492e7d1617392a61))
* **theme:** add Markdown blockquote styles and adjust tab colors ([f61bcb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f61bcb5bd12724cc8878578a9d131f74a76b168b))
* **theme:** add new color palettes and enhance syntax highlighting ([16e5b97](https://github.com/darqus/tokyo-modern-vscode-theme/commit/16e5b97b140c7bca4db8551138e376c88ae97513))
* **theme:** add new color tokens and update existing ones ([d1153b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d1153b7ca0c2da78c31b8e2d57cb9cf1f204a985))
* **theme:** add new color tokens and update existing ones ([40c5540](https://github.com/darqus/tokyo-modern-vscode-theme/commit/40c554096cb1801b1a75285176dce0497baf5ce5))
* **theme:** add new color variables for enhanced UI and syntax highlighting ([a684bd8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a684bd85b2ad700cb57ab389ae9c3730f02ddefd))
* **theme:** add new UI elements and improve existing ones ([d6958a0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d6958a024e28974030a914b5dfe1f564ed81daf9))
* **theme:** add notebook and debug palette options ([ec97690](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ec9769029c218dcd5a543738bb99a0abf0027346))
* **theme:** add OKLCH-derived shadows and update swatches ([ad19898](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ad198983b5a1140243e77653c5c2e4cfebdc6d11))
* **theme:** add overview ruler and minimap highlight colors ([ff562cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ff562ccd87a6aed39c3f436066c2f625147adc83))
* **theme:** add primary and secondary button styles ([2cd889a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2cd889ae39aed82a00b337c9d1c972bcb0eeda3c))
* **theme:** add SCM Graph colors and improve git blame readability ([767be61](https://github.com/darqus/tokyo-modern-vscode-theme/commit/767be61b1ae38b99ac47d89db891bd757bef636d))
* **theme:** add SCM Graph colors and other improvements ([154011f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/154011f9e4c4983f038bf72f79919317a35bc9ae))
* **theme:** add scm graph colors and update theme snapshot ([c7a2099](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c7a209947b0eaca658a14ea07322f9d500ac6e4c))
* **theme:** add semantic highlighting for Vue/Pinia ([324fbbb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/324fbbbdd5baec6cbef3291a225462ac79796c3a))
* **theme:** add semantic highlighting to tokyo-night-dark-color-theme ([37ceff7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/37ceff784e37d00015bfb3f1c00a407bb98ab4a4))
* **theme:** add semantic token colors ([b00f7fa](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b00f7fa4d0b954b385aec93f309bdfc31c512d08))
* **theme:** add semantic token colors for tokyo night theme ([9e31e7b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9e31e7b59b9fa5e78589ffb912ffee29514856e3))
* **theme:** add semantic token colors to One Dark Pro theme ([f1073c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f1073c93afdcbc2bcd6569e8a9c1b7bcdebd0388))
* **theme:** add semantic token colors to One Monokai theme ([6cae0c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6cae0c940ae4b1068d91476bd150ab8a77137c3b))
* **theme:** add semantic tokens and UI component color definitions ([fbf1a6c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fbf1a6cddf746d8a43c119aa6f6e8818cda701b4)), closes [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* **theme:** add shadow color definitions and update related tokens ([509b879](https://github.com/darqus/tokyo-modern-vscode-theme/commit/509b87954039638aa4a2fa134ce91007adbc3d18))
* **theme:** add shadow colors for scrollbar and sticky scroll elements ([69ec703](https://github.com/darqus/tokyo-modern-vscode-theme/commit/69ec703191d76246484f7917f0dbd4e3f8f0980c))
* **theme:** add shadow colors for widgets and inline chat ([9666da2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9666da2c108fc8d62b08b2ba530a81d9b201461b))
* **theme:** add sticky scroll background colors ([7814a06](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7814a065ac652dd3b9490e886947d8d0d0b7079d))
* **theme:** add sticky scroll colors for editor and panel ([8490316](https://github.com/darqus/tokyo-modern-vscode-theme/commit/84903163b99cd4d69490d6ee135cc1c6f17284c2))
* **theme:** add subtle shadows to UI elements ([eed359c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eed359c1e4e11da39275b647caa307e54e992079))
* **theme:** add support for environment variables and dynamic configuration ([7255099](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7255099a7e4b19fa0b5c5ad62624d23c6a852613))
* **theme:** add support for modern languages and frameworks ([f33ac73](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f33ac737e97cdb7cb77e69c9a802592b121ac14b))
* **theme:** add syntax highlighting for Vue.js ([2f1e64d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f1e64d7c86f1d2fc90499444310a6b15ee31b6e))
* **theme:** add syntax highlighting support for C#, PHP, Ruby, Kotlin, and Swift ([99b188b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/99b188bfc55a7aca9265b66235dd8096d7dfdc62))
* **theme:** add syntax red color to base palette ([261df97](https://github.com/darqus/tokyo-modern-vscode-theme/commit/261df9764b62d46e2c6ff79d6d7026cf4116e730)), closes [#df215](https://github.com/darqus/tokyo-modern-vscode-theme/issues/df215)
* **theme:** add title bar foreground color tokens ([9948393](https://github.com/darqus/tokyo-modern-vscode-theme/commit/99483937eda7a572f468901828ced1f2cc492077))
* **theme:** add tokens for panel title badges ([92fc6db](https://github.com/darqus/tokyo-modern-vscode-theme/commit/92fc6db86449b88e1df05e19234b41b4a3533561))
* **theme:** add Tokyo Night Dark theme for VS Code ([6695693](https://github.com/darqus/tokyo-modern-vscode-theme/commit/669569361db251ae71e75966faf830cbd3a56613))
* **theme:** add VSCodeTheme type definition ([3f9e834](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3f9e834d1544d2a664aa7a5c71261cdfce9981f7))
* **theme:** adjust background colors for better contrast and visibility ([0c7df50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c7df50bab51782367ab5913d1a7aec7f4412405))
* **theme:** adjust badge and activity bar badge colors ([15f27a4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/15f27a4b425a139f46a1f61f8cda0524f8d8bcc4))
* **theme:** adjust border colors and lighten sidebar foreground ([9b9d355](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9b9d355ed236482ba8ff390fc03a7e97dde7e3cd))
* **theme:** adjust dropdown and debug view background colors ([a84153a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a84153a664e5cfa2da5774cada25f81202edf553))
* **theme:** adjust panel title and editor suggest widget colors ([f5ccb9e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5ccb9eaa29e00180b542b1948411ac0aa81dead))
* **theme:** darken activity bar and badge backgrounds for better contrast ([f8f7d5e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f8f7d5ec13190e42f8cd4b0ffdefdf0ebd34212a))
* **theme:** differentiate Pinia state, getters, and actions ([2d3cffb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d3cffba3c8accaa891774b00e2e0bd4fa7076d1))
* **theme:** elevate window title bar and activity bar ([2145722](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2145722772a7c5aba27f68ba6b530b8742a933a3))
* **theme:** enable palette contrast validation on build ([f65be7b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f65be7bb400e0b6d48e701aca13f4f7c91a73ba6))
* **theme:** enhance breadcrumb accessibility and consistency ([a9159b3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a9159b34100ed1622796690907f722e3c0e8968c))
* **theme:** enhance button visibility and color contrast ([6cad645](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6cad645455c0f1f524e181112dfc7c2551995044))
* **theme:** enhance color contrast and update palette for better readability ([100b0dc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/100b0dcee0cc770df60897e8a3ce6eb2d3fd376e))
* **theme:** enhance color system and build process ([091365e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/091365e843f91d08f926474143ebaaaf356079d6))
* **theme:** enhance contrast and add border for search/replace widgets ([24bd4b0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/24bd4b0ed4ad26032620a6f1438bd7422d07b463))
* **theme:** enhance contrast and border consistency ([67ca167](https://github.com/darqus/tokyo-modern-vscode-theme/commit/67ca1679987b3efafc73d919d0dfee375a921550))
* **theme:** enhance contrast and update colors for better visibility ([553617d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/553617df513fa8a967e6ca9cad1a8f5d86ed0e63))
* **theme:** enhance editorCodeLens contrast and configurability ([dc1871f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dc1871ff2c0ef58b8dd6fc64f30caa9f14b3728f))
* **theme:** enhance hover feedback for radio buttons and toolbar items ([6c1d2c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6c1d2c42680529377e87c59c52c7eee11c306a6c))
* **theme:** enhance hover widget and menu appearances ([fcc30cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fcc30cc10f7d0644a0aa2ba6e2303c0863a907f2))
* **theme:** enhance JavaScript and TypeScript syntax highlighting with new token definitions and styling ([1995a7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1995a7dade588fa20ee0df5e87df40ad10a214b5))
* **theme:** enhance markdown list highlighting ([1b7809c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1b7809c71ab4f32171baa936db332c7109975296))
* **theme:** enhance menu and menubar selection colors ([53c4fbf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/53c4fbffed2a162cef87364bdf44fa1036c147f0))
* **theme:** enhance menu colors and contrast in tokyo-night ([d297df7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d297df7df614dd44efbf909d7535664eb27bedee))
* **theme:** enhance peek view and add accessibility improvements ([266cb2d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/266cb2dfbd079a5f1ec6bca8cda319e3bd303c6d))
* **theme:** enhance SCM graph colors and adjust find match highlighting ([311c1f6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/311c1f67ad7b951673877a1782de7429339a0c4e))
* **theme:** enhance status bar color settings and add build task ([f35abc0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f35abc09ccf1fcef43af506404fd1b7c303a099f))
* **theme:** enhance status bar item styles in Tokyo Night theme ([ebb9330](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ebb93303db3b31dfb30da7f13fda2af4b5800182))
* **theme:** enhance terminal and debugging UI ([c55f1ff](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c55f1ff6d926c7899559344fa49809905874b51f))
* **theme:** enhance terminal appearance and add drop background transparency ([ec2bcc5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ec2bcc548d1a72b02744430c757df7f299bb787c))
* **theme:** enhance terminal colors and add text link styles ([cbd8d92](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cbd8d929e927175f1f6493063090b0d06be06aef))
* **theme:** enhance terminal colors and rename terminal file ([b79590a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b79590ae4c12941dfa258dcf0d97473d882fd14b))
* **theme:** enhance validation script with duplicate color detection and improved unused color filtering ([d3c14c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d3c14c93451d2ffc2d4b3631a5c438be8bb8492c))
* **theme:** enhance visual consistency and accessibility ([90dc52b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/90dc52b572b0148c972b775c225660479391ced7))
* **theme:** enhance Vue and add Pinia syntax highlighting ([4671485](https://github.com/darqus/tokyo-modern-vscode-theme/commit/46714853edbfa078dcac6ca0b4bea6b83024e1c5))
* **theme:** expand semantic color system and refactor UI modules ([2f08717](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f087177c89d99f82024216e6b14d9d2d29afdc3))
* **theme:** expand semantic token colors for Tokyo Modern ([18144f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/18144f05dd595dd50f0edb7f63059161d5654674))
* **theme:** expand Tokyo Night theme collection to 18 variants ([9e4b25f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9e4b25ff3331ac51cce308ef526f65e95880de8c))
* **theme:** export PrimitiveColors type from foundation palette ([19e956a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19e956a976334a4ba96a38569b1cdfcb8022b0c1))
* **theme:** implement adaptive button backgrounds ([214cbf2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/214cbf29f8404bd2acfcd614b645899a71fe78b4))
* **theme:** implement color derivation functions and update palette ([f5d1827](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5d1827a9d8b9ca73946ca92c851ad42aea89a71))
* **theme:** implement comprehensive design token system with light theme support ([842dfa7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/842dfa7d3302ca4d6321118882b677961f6a4c69))
* **theme:** implement comprehensive theme validation and improvement ([944e3e3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/944e3e3b92a969fa607996e13ea6100723b118bb))
* **theme:** implement configurable theme generation and plugin system ([aa36112](https://github.com/darqus/tokyo-modern-vscode-theme/commit/aa361125a938100b2d7b49ee72c43bcd8c46784b))
* **theme:** implement modular palette generation and WCAG contrast validation ([b8b5cb8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b8b5cb8200a87160dc5376d6a5843c16f0a1cfe0))
* **theme:** implement modular theme generation pipeline ([4e3afa1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e3afa19a128a15203cf4a8c81cad16ec849a024))
* **theme:** implement nested theme generator and comparer ([a599cd4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a599cd4455c4310f328ca7824ac411bea5c70748))
* **theme:** implement nested token model and flattening utilities ([ac4c2e7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ac4c2e70948d8f0b87f418ee31a5b5be21fc358e))
* **theme:** implement tokyo night color palette with modular architecture ([a7880d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a7880d27be2e24a13dcaab65a266393b45d6d462))
* **theme:** improve button color contrast ([e85d425](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e85d42518782e6403153e5483af2e9f75f75cde9))
* **theme:** improve color transparency and contrast ([3579e6d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3579e6daff49c2a67ecb7a59980f847d763416da))
* **theme:** improve contrast and consistency of syntax highlighting colors ([1b9443d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1b9443dafa62b076d4e08d7f197aa90de539a2cc))
* **theme:** improve contrast and visibility for various UI elements ([92f2a10](https://github.com/darqus/tokyo-modern-vscode-theme/commit/92f2a101ab55289f2332ed5207eafbd41f3ab608))
* **theme:** improve highlight visibility in editor and search ([967cb44](https://github.com/darqus/tokyo-modern-vscode-theme/commit/967cb44398a677dc0a204b2c38556c2cabe9630e))
* **theme:** improve readability and contrast in various components ([6d19637](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6d196370f7a7a0327485ed911eacc5fd1887baac))
* **theme:** improve secondary button appearance with cooler outline ([86ad6f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/86ad6f52b3435ad32428461d4ce66cbaba8639b5))
* **theme:** improve syntax highlighting color diversity ([4b332df](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4b332df718926aaf7eb1fcaa0ed372e5457c3bf4))
* **theme:** improve type safety and refactor theme validation scripts ([29bf650](https://github.com/darqus/tokyo-modern-vscode-theme/commit/29bf65078ef874aeaa45d7fa53ea4d03f3a3d93e))
* **theme:** introduce onAccent text color and adopt semantic typography ([82bd1fe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/82bd1fe7d9bb37b981d9af658489fee6e77a596e))
* **theme:** lighten input, tab, and checkbox border colors ([cd062a7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cd062a7f6a79a64a9f7e19f96ac61a3933c5fb51))
* **theme:** lighten tooltip background for readability ([234904b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/234904bfb929c004a621a45e6b3189ffe7f45eee))
* **theme:** migrate palette architecture to modular system ([edcfd21](https://github.com/darqus/tokyo-modern-vscode-theme/commit/edcfd210ff7531a1ab4b52d11e3b2b5ba5e86233))
* **theme:** mix blue into status bar and activity bar backgrounds ([1a7fb57](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1a7fb57dfce2d1f761058b3abe6060d5aa9a5621))
* **theme:** normalize hex color format for activity bar badge foreground ([b95f19c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b95f19cdc6379c1fd3daede92655c6fdf87c51ad))
* **theme:** overhaul color palette and syntax highlighting ([fe0d9b4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fe0d9b4191051d186c08f804b345237e0b5f87bb))
* **theme:** overhaul color palette for improved harmony and distinction ([61251cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61251ccf907bf9f9a0c8feb79e150cd44a6811cc))
* **theme:** refactor color system and add contrast checks ([35754ec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/35754ec3fc27070e97f60a1ff8a8460cf4872971))
* **theme:** refactor UI color tokens into modular files ([ed603f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed603f09d0b91c6e86e68a74b916b7b0f48e61fa))
* **theme:** refine button colors for enhanced visibility ([ed63cd3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed63cd381188f1cd65308d05475151a59f5db56e))
* **theme:** refine scm graph colors for visual consistency ([b4a675f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b4a675f1a82af8cd7c917927a8742fe4d987be71))
* **theme:** refine secondary button colors ([63f5ea6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/63f5ea668b1b79dc54390333f314a1d6b4539c91))
* **theme:** remove base and workbench palette files ([4502214](https://github.com/darqus/tokyo-modern-vscode-theme/commit/45022141bb601cc6f593eec94c9627626ceed649))
* **theme:** remove deprecated accent color and update color palette ([d35abfe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d35abfe7d382908bbed6dbea704b9172853270f8))
* **theme:** remove unused Tokyo Night theme palette files ([734e365](https://github.com/darqus/tokyo-modern-vscode-theme/commit/734e36501b8e43077f7c6bc61948866e52e32651))
* **theme:** rename and update Tokyo Night theme ([4df5845](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4df584569d212bccad9e2e06a65b258873cfd1b1))
* **theme:** rename and update Tokyo Night theme collection ([0b0ff5f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0b0ff5ff67d72c25056ae593760438b914938921))
* **theme:** replace bright text colors with cooler, subdued tones ([985adb2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/985adb253066927507c1414b37b1c65fc4d7f923)), closes [#97a2d3](https://github.com/darqus/tokyo-modern-vscode-theme/issues/97a2d3) [#6c7097](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6c7097)
* **theme:** replace hardcoded token colors with semantic color references ([2947eb6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2947eb6295200389e1ca2c7ba8818e846d06b43a))
* **theme:** replace Math.pow with exponentiation operator in luminance calculation ([79c3811](https://github.com/darqus/tokyo-modern-vscode-theme/commit/79c38118d4fb55e79887962c36cbaf68adfb1de3))
* **theme:** replace Tokyo Modern with Calm Clarity theme ([f3ce704](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f3ce7046ccc2cfa0ce99bda98156439debb16981))
* **themes:** add placeholder and fold colors for tokyo-modern ([bf47a4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bf47a4a70a7ee9b14973dea309e4bcb8c83742db))
* **theme:** standardize thin borders and enhance color contrast ([c505a3f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c505a3f7da48307c013160a7fe822d79c19c1f62))
* **theme:** unify terminal blue and cyan ANSI colors with link color ([c6a7d04](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c6a7d042ef91012c5675ce3dc2c3fee617afd8c4))
* **theme:** update accent hover color and format token scopes ([881407c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/881407c1037a906b48bedd7fb3f616f2f07912d7)), closes [#6d8](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6d8) [#85c4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/85c4)
* **theme:** update badge colors to azure blue ([5d9937c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5d9937ce2be2efad124520d5bebc8f151df0c9a1)), closes [#0078d4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0078d4) [#7e83b2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7e83b2)
* **theme:** update border colors for activity bar and panel input ([7871660](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7871660b8bfce452357c8d896622ea151dafe47a))
* **theme:** update border colors with semi-transparent alpha value ([e92c99c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e92c99ce16e92e4aa6f9a3679346ec6dbace3d7f))
* **theme:** update button hover color to primary blue ([4e8c2e2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e8c2e2628c3c65f3ed5f4aefd4fa3bdf3bbed66))
* **theme:** update focus border validation logic ([7ea9fec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7ea9fecc239672db67dba0ab25a8c183b66698cd))
* **theme:** update garden theme colors and add semantic token colors ([03f1a9d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/03f1a9d3b5db0a9a8d7691d9eb7802273c30723d))
* **theme:** update history item base ref color to use syntax green ([0ef73ed](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0ef73ed00b0466d5d68de6fde1f82455755655d9))
* **theme:** update input validation colors for tokyo night theme ([e32f93f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e32f93f73117c07291b365ad39396b4d29beb660))
* **theme:** update panel title active border and input border colors ([aa3464e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/aa3464e1d51456671b261193b784c2545a0a7539))
* **theme:** update primitive color palette values ([8faea02](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8faea028bc1974423a0b3bb4ebfb0ccb32247f90))
* **theme:** update purple dark color and add secondary button styles ([3bec61c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3bec61c326c5bb2de7067d855176d6d4e5573aca)), closes [#7256a3](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7256a3)
* **theme:** update search highlight colors to cool blue scheme ([08f4c67](https://github.com/darqus/tokyo-modern-vscode-theme/commit/08f4c677435159d3c90ae13f91f367116baceea9))
* **theme:** update status bar and panel colors ([4a83a11](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4a83a1123c369c949444f8f507b311ed425f7f5f))
* **theme:** update status bar item hover background color ([b6cbfb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b6cbfb57b3e094fa4737b2d47f7908731efa55b1))
* **theme:** update status bar item hover colors ([eddf191](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eddf1918867fd6b85957753918f54a4c1783abaa))
* **theme:** update tab colors and adjust active border position ([9be95c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9be95c4814bad6a69b6182e2c08bdc5c78ce51e3)), closes [#202030](https://github.com/darqus/tokyo-modern-vscode-theme/issues/202030)
* **theme:** update text link colors to use semantic palette values ([60bde70](https://github.com/darqus/tokyo-modern-vscode-theme/commit/60bde701ff9957770dc57a360a6dfbb13c8016e6))
* **theme:** update theme description for enhanced marketing ([10f9dd9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10f9dd957297af7a8f31302ad75012a38f0e8540))
* **theme:** update theme name and improve metadata ([2ded5df](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2ded5df71a563a03c132c182bff30a37b91cf54f))
* **theme:** update Tokyo Modern theme colors ([a8fef5e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a8fef5ee67c0af2eb0fe426666ab160a093db03f))
* **theme:** update VSCode theme type definitions and palette structure ([3066927](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3066927aec44ec696ff68f06b0b5e3ee18b99f9d))
* **titleBar:** adjust title bar foreground colors ([e9958f9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e9958f9e1ac3486220cf43c9a74ee830a764fd03))
* **tokens:** add new editor and inline chat placeholder tokens ([45ba3e0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/45ba3e08edc3b609a446329f62484de886e434e4))
* **tsconfig:** enable stricter TypeScript compiler options ([04ccc7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/04ccc7d85598843ff64655f0478f288b7f31f142))
* **ui:** adjust tab inactive background color ([c8151a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c8151a5c6dbb90626993a696681a0ce2fc82474e))
* update button border and separator colors ([4342c1f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4342c1f3771341ed15d67ce42d74c32c1a108fa3))
* update version to 2.1.2 and add package script ([e582673](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e582673095b59677ef32f017f5f9815edf7af0b9)), closes [#123](https://github.com/darqus/tokyo-modern-vscode-theme/issues/123)
* **validation:** enhance theme validation and color usage analysis ([0e081f5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0e081f54edc0131f238ed7a3b14c2040b6423fc0))

### Bug Fixes

* adjust activity bar background and active background ([8312185](https://github.com/darqus/tokyo-modern-vscode-theme/commit/83121851a02f043bf91b2cb3d659b446b2455dd1))
* adjust editor selection colors for better visibility ([0994bd7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0994bd759349cc0bc38ca48ebebef894f4bfb3ec))
* adjust SCM graph colors for WCAG AA contrast ratio ([4323e45](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4323e45780bad8a2770f68868b5a8a1fd5bced32))
* correct color codes for Tokyo Night theme ([ee351bb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ee351bb14f98d39f7e13a599f3f9d104af021be1)), closes [#484e71](https://github.com/darqus/tokyo-modern-vscode-theme/issues/484e71) [#636986](https://github.com/darqus/tokyo-modern-vscode-theme/issues/636986)
* correct color codes in theme configuration ([07882ef](https://github.com/darqus/tokyo-modern-vscode-theme/commit/07882ef7de56f4b4823ebfbce9e26d7d9d9bb9ec)), closes [#2a2f41](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2a2f41) [#2A3047](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2A3047) [#16161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/16161) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* correct color values and update terminal colors ([9cc54d8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9cc54d80d9d5d3ae3852bedfcbdba92e52b3ce4a))
* correct palette exports and formatting ([72bca50](https://github.com/darqus/tokyo-modern-vscode-theme/commit/72bca50f5a934e0bf12bcedcf1b21c4090474ba7))
* correct the use of process.nextTick ([a2d376a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a2d376ad2d169145d185cf19773d62ed8215cb06))
* correct the use of process.nextTick in favor of setImmediate ([da1f756](https://github.com/darqus/tokyo-modern-vscode-theme/commit/da1f756ce5d983c9adf8638a5500fd0538f5d1ab))
* correct the use of process.nextTick in message handling ([10ee8a9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/10ee8a999c01e3510aba4fb1180482e250f95ccc))
* correct tokenColors import in smoke-compare script ([a83e3ce](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a83e3cedacb12a44733b8f1abad297e65ad0f52a))
* enhance widget and scrollbar shadows, update placeholder color ([c03e47c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c03e47cd092f8824af8951d4101be4ddb29cc755)), closes [#7aa2f733](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7aa2f733) [#747ca1](https://github.com/darqus/tokyo-modern-vscode-theme/issues/747ca1)
* **i18n:** complete translation of smart-version.ts to English ([7b29664](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b296642c33d235a8c94f3067f390841b76892d7))
* **i18n:** translate final console messages to English ([7192dcc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7192dcc3ba299743428a9553347c63ace0d51936))
* improve light theme contrast and accessibility ([b57547e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b57547e306d73156d1322aca6014f01a0ed72535)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#3d4752](https://github.com/darqus/tokyo-modern-vscode-theme/issues/3d4752) [#d1d5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/d1d5)
* **lint:** allow hex values in palette.base.ts ([dfd8c6b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dfd8c6bfac1e1642c6178155d2a3a80a344e3f2f))
* **package.json:** update theme configuration for consistent theming ([b554d51](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b554d51a66930677d2d5e7b21f1c2c230dd3e3ad))
* **package:** correct display name in package.json ([432b964](https://github.com/darqus/tokyo-modern-vscode-theme/commit/432b96487c70f91d11c91a210db90f36b00631b4))
* **palette:** adjust background colors and intensity ([cc0f782](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cc0f782f9cdd448ea59a81eba4a1d25fa342d95c))
* **palette:** adjust base palette white and interface editorFg colors ([fd2f010](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fd2f01004d558efd52915794f87fa7ec1cc7c0c7))
* **palette:** resolve critical contrast issues in light theme ([c04c365](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c04c3659b3dd035d9e7dd24cd44bd2b1db4fb61d))
* **panel:** update color mapping for panel titles and related UI elements ([906f1d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/906f1d232f93e2883f97bd2d793ba9b009f7e338))
* prevent error when getting items from empty localStorage ([f18b99d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f18b99dce4fdc6e7096f937254c445356ee4221a))
* **README:** correct theme name and update marketplace badges ([18f127d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/18f127d1f96fa119535bff48b67a33a71dc22435))
* **release:** improve commit analysis and information display ([8443291](https://github.com/darqus/tokyo-modern-vscode-theme/commit/84432910fb81109695633bce0d45b37f8226e2dc))
* **release:** modify release script and update package.json ([d87e8cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d87e8cd81c2f1d5aedba8f37bc369e0d940bfcd9))
* remove alpha channel from buttonBg color and update snapshots ([e97142d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e97142df390c810768e553f12b17f10afdb8924a))
* Remove JSON key level colors to address highlighting issue ([43de855](https://github.com/darqus/tokyo-modern-vscode-theme/commit/43de8555c5078c9f34ca734978c87a1dbdd07a4b)), closes [#32](https://github.com/darqus/tokyo-modern-vscode-theme/issues/32)
* remove unnecessary newline in color.ts ([7231cd5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7231cd59b22f6f3c5e6c2de4fe142f8c724835bd))
* remove unnecessary whitespace ([ba467cc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba467cca83564608049174e4f693bbd74f2e06c7))
* remove unnecessary whitespace ([b0f493c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b0f493c594d347008af56779f718487f8889ea45))
* resolve theme validation issues and improve accessibility ([0a6651b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0a6651bd8aa805738a5ef034f54b349523d92587)), closes [#787c99](https://github.com/darqus/tokyo-modern-vscode-theme/issues/787c99) [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5)
* **scripts:** handle undefined return value in execSync ([cf288a3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cf288a3f4ba47ce9e1bc9e348daa2ff6ff2ec994))
* **scripts:** improve error handling in release script ([d32ab99](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d32ab9980cd4f46151964b5be4df6a542462de46))
* **scripts:** update code evaluation for server-side rendering ([acd22ee](https://github.com/darqus/tokyo-modern-vscode-theme/commit/acd22ee3f5a5df6f8f8d87ad9a82d2439c49ab68))
* **scripts:** update release type message to English ([21b6176](https://github.com/darqus/tokyo-modern-vscode-theme/commit/21b617674085e68c8dbe142a9c5654675d52bd20))
* **selection:** ensure proper selection background in light themes ([61c9c46](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61c9c46ae1abedad02abd9fcab071937023b85d9))
* **semanticTokenColors:** update variable and punctuation colors ([43df841](https://github.com/darqus/tokyo-modern-vscode-theme/commit/43df8411d418946c482ebf396e535908965b1287))
* **test:** fix smoke tests for new architecture ([5e71f12](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5e71f121fa433fb318712123c661ec5697448653))
* **theme:** исправить значение прозрачного цвета ([1d64834](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1d64834665dea858d6e7d138504103c3e5e73850)), closes [#00000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000) [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **theme:** adjust menu and dropdown color mappings ([a4fe802](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a4fe80287585b9e33c22898ca197a196e475139d))
* **theme:** adjust SCM graph hover label color for better visibility ([e180b4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e180b4af171cb46148aa4c248f47971b39e8ad2b))
* **theme:** adjust scrollbar color for better theme integration ([11fcf79](https://github.com/darqus/tokyo-modern-vscode-theme/commit/11fcf79c9f88ae05419ba6261927a6ba3251188f))
* **theme:** adjust selection background color for better contrast ([f876252](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f87625260adfec169f404f023554a47f7634aba6)), closes [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#4e6ab2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/4e6ab2)
* **theme:** adjust syntax comment color and import order ([a80bf87](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a80bf8701185c3b34ffedcac7ecbf39576bab963))
* **theme:** adjust text colors for better contrast and visibility ([7d323de](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7d323de4b2fca27bad96f957b2b7fd977c9f6a58))
* **theme:** adjust unfocused inactive modified border color ([57927bf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/57927bf0e5392a346fe7e16b0b22495be66d81ef))
* **theme:** boost luminance of colors to pass contrast checks ([0f33db6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0f33db6a3eb787f1c728e95272e1493b917d7938))
* **theme:** brighten primary accent color and update properties ([886209d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/886209d93f2e60e642dcd87e066fff6778d7e6be)), closes [#5a7b9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/5a7b9) [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4)
* **theme:** correct border color values in tokyo-night theme ([3e6a24d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3e6a24d28c8e227eb432a29f3a64f9face1c68a4))
* **theme:** correct color mappings and improve contrast in interface palette ([59369e4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/59369e487574f73a76b1a8e9f8022690474f4770))
* **theme:** correct color values and import order in palette files ([ed8a962](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ed8a962349a0d0e848f6cb58d084f30736541717)), closes [#f768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f768) [#ff768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/ff768)
* **theme:** correct color values for border and background properties ([955c869](https://github.com/darqus/tokyo-modern-vscode-theme/commit/955c869e45c7ed7008c7ebae7a759b8ac3618ca3)), closes [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* **theme:** correct color values in Tokyo Night theme ([762b487](https://github.com/darqus/tokyo-modern-vscode-theme/commit/762b48780b12bdcd082663e481215af712bf472c)), closes [#161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/161) [#16161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/16161) [#116611](https://github.com/darqus/tokyo-modern-vscode-theme/issues/116611) [#14141](https://github.com/darqus/tokyo-modern-vscode-theme/issues/14141)
* **theme:** correct colors for better readability and alignment with original Tokyo Night ([049d0c2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/049d0c27624306b67acf273ffd45e13d50a98efc))
* **theme:** correct hex color values in color-utils tests ([61a24bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61a24bc76964d109f9859de5ee738ae6fe51abd7))
* **theme:** correct hex to HSL conversion and improve hex padding ([6eb2777](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6eb2777af92e210117779cfac6185b866c194fca))
* **theme:** correct typo in status bar item hover background color ([eaa9236](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eaa9236994a211480db2cba2b60b77799b31f20e)), closes [#2022](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2022) [#20222](https://github.com/darqus/tokyo-modern-vscode-theme/issues/20222)
* **theme:** fix tab inactive and selected background colors ([65c74c4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/65c74c4d520d9da5be113bdc10798e82159a446e))
* **theme:** improve accessibility and high contrast themes ([204d447](https://github.com/darqus/tokyo-modern-vscode-theme/commit/204d447f120676e15bce3bdd41641011aa46776e))
* **theme:** improve contrast and accessibility for various components ([47fde07](https://github.com/darqus/tokyo-modern-vscode-theme/commit/47fde073e64e9c7662248353263cecc7d48a750b))
* **theme:** improve contrast and extend semantic token support ([52f5e5a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/52f5e5a90090e3ab23881b748265c2015c21ef47))
* **theme:** improve inline chat text contrast ([f5b32d8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5b32d8a05d6f82463d0d196fd615d3b96e71b43)), closes [#c8d0f6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c8d0f6)
* **theme:** improve syntax contrast and update colors ([13c4c63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/13c4c63b75a049e768602bce4cc20097111f2e31))
* **theme:** improve terminal link hover and text link colors ([573be5c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/573be5cb6c5ba2f1a2a1fb620d4bbf4f705f722e))
* **theme:** improve UI color retrieval with better type safety ([19a6709](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19a6709783498a22bbc0b63d488ee151454cc5de))
* **theme:** increase brightness of primary accent color ([f5d005d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f5d005d3984207652f59cff8d2a3188ffa4dbecf)), closes [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4) [#8ac7](https://github.com/darqus/tokyo-modern-vscode-theme/issues/8ac7)
* **theme:** make token settings optional in VSCodeTheme type ([6ba9395](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6ba9395a6b7f88e9967767deba6eff5a01834c55))
* **theme:** normalize hex color values to lowercase ([d0c68cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d0c68cdcda94a9406010aea852d705de1ab3b022))
* **theme:** remove deprecated Inline Chat and toolbar color properties ([8dcc75e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8dcc75e93cbfd435c5a33fcb2a9a8fb0837d47c0))
* **theme:** remove editor.findMatchHighlightForeground to avoid warnings ([8eb6d34](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8eb6d347f1aae600c362bf8f4284d74ea54ffc4d))
* **theme:** remove sideBySideEditor.border color definition ([e7eab87](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7eab87bdfe2ec72e8c8d63b51eed135ed6a36dc))
* **theme:** resolve validation issues and update deprecated properties ([4e3890e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4e3890e09f62d6d8386a73a3be7be55fe7184d3a))
* **themes:** improve contrast and readability for Tokyo Night theme ([4cc8d11](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4cc8d11cbbb7bc97a6a459896daa3a39cb5d5c67))
* **themes:** update focus border and match highlight colors ([af55d0a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/af55d0ad8d2852ed7395dae16ac0cf09f6401fac)), closes [#7bb2fa66](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa66) [#95abd966](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd966) [#7bb2fa66](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa66) [#7bb2fa99](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2fa99) [#95abd966](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd966) [#95abd999](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd999) [#7bb2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2) [#95abd9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd9) [#7bb2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7bb2) [#95abd9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/95abd9)
* **themes:** update indent guide colors for tokyo-night-dark ([f4c81a9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f4c81a95d288865d5dfcd3b432d6b870ca8ae3c3))
* **theme:** update active line number foreground color ([c1abed8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c1abed8801706a0b932b788af2917688b46150b0)), closes [#d6e3d8](https://github.com/darqus/tokyo-modern-vscode-theme/issues/d6e3d8)
* **theme:** update activityBar inactive foreground color ([733a5fb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/733a5fb1d3742f27c75c2cd5177068a3201b8b24))
* **theme:** update background color values for better contrast and consistency ([9c3c4a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9c3c4a5c50d54b41526330917dfd0050b7dfce61))
* **theme:** update button color tokens for better consistency ([28a3d26](https://github.com/darqus/tokyo-modern-vscode-theme/commit/28a3d264f3cd3afca9cf593793066790a129599f))
* **theme:** update button colors in interface and tokyo-night-dark theme ([82b3ea1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/82b3ea148cdd2ee640c22edac1e9283aaaa0de45))
* **theme:** update darkest gray color to [#0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0)f1722 across palette and theme files ([c58aa4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c58aa4a032d8f738a47f9060596e373be09cfb12)), closes [#0f1722](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0f1722)
* **theme:** update extensionButton prominent hover background color ([9eae568](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9eae568715ac6e006b478d079e2a1758adee0082))
* **theme:** update git decoration colors and build timestamp ([b5b43b1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b5b43b11fb7853e15bcef86706fe3146bcf99165))
* **theme:** update hover background color in tokyo night theme ([00ddee7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/00ddee76a94110ec2b380fd56c2cc817cbc18007)), closes [#13131](https://github.com/darqus/tokyo-modern-vscode-theme/issues/13131) [#1f1f33](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f1f33)
* **theme:** update menu separator background color ([9f394bc](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f394bca48f7c19310a5ce09c8891f8ab5fc4201))
* **theme:** update operator color for better visibility ([2d333f0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d333f02feb421553f939a8edf561be86c9c751e)), closes [#f7768](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f7768) [#f14565](https://github.com/darqus/tokyo-modern-vscode-theme/issues/f14565)
* **theme:** update semanticClass name in calm-clarity theme ([6f5d2ed](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6f5d2ed3400679ae6bd2d9d0b895fb9967c9385c))
* **theme:** update status bar item hover background colors ([490ec03](https://github.com/darqus/tokyo-modern-vscode-theme/commit/490ec03a3d753ed6f9efc08345d1ae09ab5f69ed))
* **theme:** update statusBar debugging background and pink color value ([3b6eb63](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3b6eb63f51a999251236cfbd0555319289f6f5f7)), closes [#e047e0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/e047e0)
* **theme:** update syntax red color references and usage ([b449c4f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b449c4f380f8aec8011a1c2187ba2c4972712da5)), closes [#df215](https://github.com/darqus/tokyo-modern-vscode-theme/issues/df215)
* **theme:** update tab active border style ([712a7f6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/712a7f61ade70ed9ed3f5ee760386ac77e4a69a8))
* types/v3-directive not published ([08a4ac8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/08a4ac8cb08a51020ea6cb9809ada1b2e38a884d))
* types/v3-directive not published ([725bd13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/725bd1322d710fa9168b54ff45eb5c62dd0c4681))
* update author info in package.json ([5467b32](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5467b325772af15aa8f210d57a6327993dd99094))
* update dependencies to resolve security vulnerabilities ([2416bf7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2416bf75ada666bbaa7f679f814c7cd6bebf8595))
* update editor find range highlight colors ([776105f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/776105fec0d62650676ee0dfdce477e7ab73546d))
* update empty code diff to empty commit message ([6dcce34](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6dcce3417d9ed6ef5a112d764383f352b5061f6b))
* update string, operator, and escape char colors ([4bc464a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4bc464a3a7e73740cd82c50c22a84604526297c0)), closes [#4ea044](https://github.com/darqus/tokyo-modern-vscode-theme/issues/4ea044) [#72ac6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/72ac6)
* update text color contrast to meet accessibility standards ([8fe573d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8fe573d5992e8d5bb02f9104fecd70f046f5a02f))
* update text color mappings and adjust token sources ([9f91429](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9f91429bd0dafc85c01d44b129d430eb0b251ea2))
* **utils:** replace string alpha values with numeric values in color functions ([6c0bc46](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6c0bc46dd654386af809a234395d736923d07c61))
* **version:** correct version number in CHANGELOG and package-lock ([2a17857](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2a1785793dcfc4b323246bcec44ddad14e678f82))

* add comprehensive Tokyo Night theme analysis and generator plan ([b0c4504](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b0c45043716e55a69c42dcd7f0b903b7c1bf96a5))
* **docs:** remove architecture documentation files ([8714c96](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8714c961263d9998fd9ed02377ecf672ee80cb0e))
* **theme:** clean up palette and syntax color definitions ([100610c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/100610c83580161c659ae856537cd029724606f1))
* **theme:** migrate to semantic color system and remove legacy scripts ([39d56ac](https://github.com/darqus/tokyo-modern-vscode-theme/commit/39d56ac126591ecde05063f4349d42bbfe36159c))
* **theme:** overhaul color and token system ([cfbf3e4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cfbf3e46d30ec2742015a281db923dfa14b0ea41))
* **theme:** overhaul color system with semantic architecture and optimize palette ([0d6a215](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0d6a215c4d3ea79dd0d906a0cdbd80d1c06e2b6b))
* **theme:** remove legacy theme palette and generators ([27b4eb5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/27b4eb511f2aae91cb8cffce4909af443883fd06))
* **theme:** rename primitiveColors to foundationColors and update imports ([401daf0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/401daf0be8403782feee537b52aac0cde8ffdd24))
* **theme:** update color palette and syntax highlighting across all language modules ([0c25bfd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c25bfd9b92e9524dc6659fe452b006856db407f))

### [2.3.79](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.78...v2.3.79) (2025-10-31)

### Features

* **theme:** adjust dropdown and debug view background colors ([bb29567](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bb2956794bbc8a9610d506199ddb2d6a1ef97f1e))

### [2.3.78](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.77...v2.3.78) (2025-10-31)

### [2.3.77](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.74...v2.3.77) (2025-10-31)

### [2.3.74](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.71...v2.3.74) (2025-10-30)

### Features

* **static:** update Tokyo Modern screenshot ([d9750c2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d9750c2157eb347611ac4c8ca2c3da6c39ab240e))

### [2.3.71](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.55...v2.3.71) (2025-10-29)

### Features

* **theme:** add frosty glass effect to hover widget and notifications ([d3d0ff2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d3d0ff22932a51988d86afb9fdd95a009a7a78f8))
* **theme:** enhance menu and menubar selection colors ([3343bc1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3343bc1924194d6f6619436a1a2966803bcf7ed7))
* **theme:** enhance menu colors and contrast in tokyo-night ([d0eec5b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d0eec5b080fd880d84de14ff0ec22f6282fde6f7))
* **theme:** mix blue into status bar and activity bar backgrounds ([898dd7a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/898dd7a53f686f6fb65636bf382be2d41b95015e))

### Bug Fixes

* **theme:** adjust SCM graph hover label color for better visibility ([56f849f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/56f849f47d2ecf542359e8b2985bd9f68e255a46))
* **theme:** update hover background color in tokyo night theme ([571f7ea](https://github.com/darqus/tokyo-modern-vscode-theme/commit/571f7ea7c6cd270d383fd6f0cdcc5ad7ea8bc159)), closes [#13131](https://github.com/darqus/tokyo-modern-vscode-theme/issues/13131) [#1f1f33](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f1f33)

### [2.3.55](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.53...v2.3.55) (2025-10-28)

### [2.3.53](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.51...v2.3.53) (2025-10-28)

### [2.3.51](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.50...v2.3.51) (2025-10-28)

### Bug Fixes

* **theme:** update statusBar debugging background and pink color value ([a1b00e0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a1b00e09c90caedfe753d87190be88a58d14f251)), closes [#e047e0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/e047e0)

### [2.3.50](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.49...v2.3.50) (2025-10-28)

### Features

* **theme:** update status bar and panel colors ([0c98e10](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c98e10285dea7c0f8748b5afed6158345d8ce5d))

### [2.3.49](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.48...v2.3.49) (2025-10-28)

### [2.3.48](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.47...v2.3.48) (2025-10-28)

### Features

* **theme:** add sticky scroll colors for editor and panel ([db4b45f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/db4b45f4d03357204104443c69401b667535092a))

### [2.3.47](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.46...v2.3.47) (2025-10-28)

### Features

* **theme:** add support for modern languages and frameworks ([af388cd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/af388cd103ab1aa62f645eede605722622089936))

### [2.3.46](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.45...v2.3.46) (2025-10-28)

### [2.3.45](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.36...v2.3.45) (2025-10-28)

### Features

* **theme:** add contrast check script and improve color contrast ([873e400](https://github.com/darqus/tokyo-modern-vscode-theme/commit/873e400e0d9918b25a9061604f9b073d857dd124))
* **theme:** improve syntax highlighting color diversity ([fb2d0ec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fb2d0ecd85769315855cfd493e3eb8f8d12edcea))

### Bug Fixes

* **theme:** improve syntax contrast and update colors ([1ff2071](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1ff20712c6b62cff56b3b3c82bc1925b629e5f8e))

### [2.3.36](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.21...v2.3.36) (2025-10-28)

### Features

* **static:** add screenshot of tokyo night modern theme ([3c9170f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3c9170f4116a3fa45c6216d04e6e11d9eac5b20c))
* **theme:** implement color derivation functions and update palette ([be16a54](https://github.com/darqus/tokyo-modern-vscode-theme/commit/be16a548aa9a5c45ac88a076b4e4908d0901645a))
* **theme:** update tab colors and adjust active border position ([eab6254](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eab625480d9a06fbf592e630e440ef6313f773bd)), closes [#202030](https://github.com/darqus/tokyo-modern-vscode-theme/issues/202030)
* **ui:** adjust tab inactive background color ([24c3480](https://github.com/darqus/tokyo-modern-vscode-theme/commit/24c3480a82ab967c93ceb1c9ed628fa26aae1d8a))

### Bug Fixes

* correct palette exports and formatting ([c2ca16e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c2ca16e7470549ac5755669b192926a972ffbf0f))
* correct the use of process.nextTick in message handling ([996a4db](https://github.com/darqus/tokyo-modern-vscode-theme/commit/996a4db1a08947e3fda13d5ac613426903d18a92))
* **theme:** update tab active border style ([bcd0bf4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bcd0bf40a129be497eb3949c1a5bf680cdf99ff8))

### [2.3.21](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.3.10...v2.3.21) (2025-10-28)

### Features

* **theme:** lighten input, tab, and checkbox border colors ([f88d0d0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f88d0d0cdaa69cc2c906d8fb1cdcedee22a54483))
* **theme:** update panel title active border and input border colors ([1c000e5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1c000e502845f6b6c12143628342052873466583))

### Bug Fixes

* **theme:** adjust unfocused inactive modified border color ([b69f195](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b69f19526f594ef0555e461192259a8a9ad54d1e))

### [2.3.10](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.312...v2.3.10) (2025-10-27)

### Features

* add screenshot of tokyo night modern theme ([5ba40cf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5ba40cf7b7b54a3c2434c20dfb5c90e896bda720))
* **theme:** adjust background colors for better contrast and visibility ([bbafb1b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bbafb1b07a60d866aae701322e3afd54c5e98ac3))
* **theme:** adjust border colors and lighten sidebar foreground ([06dffca](https://github.com/darqus/tokyo-modern-vscode-theme/commit/06dffca7138ce175f5351df21440ee73f3005749))

### Bug Fixes

* **theme:** remove sideBySideEditor.border color definition ([5f6d479](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5f6d479fd7cfad5ce6f4b77429c06a5a7eca05ed))

### [2.2.312](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.166...v2.2.312) (2025-10-27)

### ⚠ BREAKING CHANGES

* Removes legacy color palette and refactoring plan
documents in favor of the new comprehensive analysis approach.
* **theme:** The old theme generation system, including `tokyo-night-generators`, `base-colors`, `primitives`, and various palette utilities, has been completely removed. The theme is now generated solely through the new nested model.
* **docs:** removes architecture documentation that may have
been referenced in external materials

### Features

* **docs:** add comprehensive list of editor and UI color tokens ([daca053](https://github.com/darqus/tokyo-modern-vscode-theme/commit/daca053ec2cc7c618d12bd5682c263eb643f5c64))
* **theme:** add and reposition Tokyo Night semantic token color generator ([97d41be](https://github.com/darqus/tokyo-modern-vscode-theme/commit/97d41be6e303cb7e8b43dd56861e3f5e5739c539))
* **theme:** add checkbox colors to generated theme ([09230d4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/09230d4690a8a42d6a9e56d6ffb66b61d5d173f5))
* **theme:** add comprehensive palette types and token categories ([7410b7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7410b7dea5df1bc0bd4dc96d1f2f50783685a26b))
* **theme:** add custom colors for SCM graph view ([31a9542](https://github.com/darqus/tokyo-modern-vscode-theme/commit/31a954227116179e462c96d13ccaa265ca88e40c))
* **theme:** add enhanced terminal colors and generate theme variants ([84c4c36](https://github.com/darqus/tokyo-modern-vscode-theme/commit/84c4c3679ebf38224129a447d800384c2b1b84a5))
* **theme:** add foreground color for icons and hover widgets ([9bf3b2e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9bf3b2e14ce671cdd5facd4ca055cbefd8336773))
* **theme:** add list drop background color ([ba12a44](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ba12a447a3ddaa4c160dae90ab2902ac9b3e01a6))
* **theme:** add notebook and debug palette options ([3c6e5c2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3c6e5c2d2b959c83b23c756adec3a06000ffbb14))
* **theme:** add primary and secondary button styles ([6a2ec8e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6a2ec8e6a7448f5db1feae4c8f976f25c9535fd9))
* **theme:** add semantic token colors ([7bb8352](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7bb8352c315152d6bc89340816b45af6a89cc055))
* **theme:** add semantic token colors for tokyo night theme ([1ab543b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1ab543b6d4aaa852fde2a208cf381c5a1093627e))
* **theme:** add shadow colors for scrollbar and sticky scroll elements ([78faab1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/78faab1a5761946ffd44a958d3de077dc94e88f1))
* **theme:** add shadow colors for widgets and inline chat ([f6eebca](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f6eebca5e5b1cc24323e4575bda215c7745e9a23))
* **theme:** darken activity bar and badge backgrounds for better contrast ([2a4e4a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2a4e4a5641a644fd2ca614bb05f8c874f557d839))
* **theme:** enable palette contrast validation on build ([5798b36](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5798b368b9a1f3adbd43ca8b334735f3a3e7a89c))
* **theme:** enhance color contrast and update palette for better readability ([1017bc1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1017bc1053fc681f331827067b5fd2f6ef35dab1))
* **theme:** enhance terminal colors and rename terminal file ([0ed2803](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0ed280351b8af42032fe28f213691642051219d0))
* **theme:** expand semantic token colors for Tokyo Modern ([f24bf13](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f24bf135cc00c8e4e152ff3c38ff255e43e51be7))
* **theme:** implement modular palette generation and WCAG contrast validation ([b541482](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b5414821adf229c54ef0b19a0b8f66991211285a))
* **theme:** implement nested theme generator and comparer ([453a51a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/453a51a38ea4853311b10f96da23030d42ace241))
* **theme:** implement nested token model and flattening utilities ([51648d1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/51648d1d634f493092753d43cd303dec51fc74c8))
* **theme:** migrate palette architecture to modular system ([a36e312](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a36e3124415218743be55df07212c737d40a1ab3))
* **theme:** normalize hex color format for activity bar badge foreground ([6e11f5a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6e11f5a80ec0681162a12096b948070fa93db471))
* **theme:** overhaul color palette for improved harmony and distinction ([bbda6b8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bbda6b8ae4c8455b7e07dc04e3b3dc91df399c60))
* **theme:** refine button colors for enhanced visibility ([6dd31af](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6dd31afd5b506d744884d0164cde3a0dbd37bce4))
* **theme:** refine scm graph colors for visual consistency ([fc69f24](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fc69f24d6851348000eb8affd73a7bcf1c3eec0c))
* **theme:** refine secondary button colors ([9480316](https://github.com/darqus/tokyo-modern-vscode-theme/commit/94803167407ba4fda4378ed2b0653385ea2f4e0b))
* **theme:** remove base and workbench palette files ([6b7df4c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6b7df4c3ce0633ebd75fb1859e0109f167d6a2d7))
* **theme:** remove unused Tokyo Night theme palette files ([8d19c7c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8d19c7c07b2d5e875066743129099bca8183e994))
* **theme:** replace Math.pow with exponentiation operator in luminance calculation ([b68ba26](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b68ba26c9b00a025da2992bf90866bcfbe276025))
* **theme:** replace Tokyo Modern with Calm Clarity theme ([2811a02](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2811a023aeabc7983cf502f323f45452ddab4893))
* **theme:** update accent hover color and format token scopes ([47a4d06](https://github.com/darqus/tokyo-modern-vscode-theme/commit/47a4d06046388d9cae4dffdbb60b5160ebb12ff8)), closes [#6d8](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6d8) [#85c4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/85c4)
* **theme:** update badge colors to azure blue ([86030a8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/86030a8884d3827f41a98793f4696d00920706ed)), closes [#0078d4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0078d4) [#7e83b2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/7e83b2)
* **theme:** update border colors for activity bar and panel input ([e0aae4e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e0aae4eb235951e35feffe375d0a44acec855d64))
* **theme:** update border colors with semi-transparent alpha value ([8b0c2b6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8b0c2b6827c9ade42068d80b4fc1bafed6090cce))
* **theme:** update status bar item hover background color ([dae765b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dae765b8817e231d9d38de3af8db51873230d618))

### Bug Fixes

* adjust SCM graph colors for WCAG AA contrast ratio ([eca4b46](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eca4b46359263226f2ee5675fea6316d972f312b))
* correct the use of process.nextTick ([4ee5ebe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4ee5ebe914bf0ef37cafb3de1071a9533b0b1b57))
* **theme:** adjust syntax comment color and import order ([29308bf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/29308bf6b0fb51ba7bc5b1748d4266cf4e3cd701))
* **theme:** boost luminance of colors to pass contrast checks ([2ddca93](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2ddca9326fffd407a7bdaa05748fb6b647e16396))
* **theme:** brighten primary accent color and update properties ([879fc99](https://github.com/darqus/tokyo-modern-vscode-theme/commit/879fc995bf3170239ab0c4def790ae823c4b7087)), closes [#5a7b9](https://github.com/darqus/tokyo-modern-vscode-theme/issues/5a7b9) [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4)
* **theme:** correct border color values in tokyo-night theme ([30d419b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/30d419b1f6ea8ad930987791154757bdc083615c))
* **theme:** correct color values for border and background properties ([cd23546](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cd235464fd4463e200ecf329664d07154df241cf)), closes [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-modern-vscode-theme/issues/101014)
* **theme:** correct color values in Tokyo Night theme ([b9e5288](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b9e528861f8b673c6048125ae34d52465bf7886b)), closes [#161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/161) [#16161](https://github.com/darqus/tokyo-modern-vscode-theme/issues/16161) [#116611](https://github.com/darqus/tokyo-modern-vscode-theme/issues/116611) [#14141](https://github.com/darqus/tokyo-modern-vscode-theme/issues/14141)
* **theme:** correct hex color values in color-utils tests ([063c5a5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/063c5a5997666a0990a423799556c68c19cd3344))
* **theme:** correct typo in status bar item hover background color ([2f21395](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f213950ad7fa832108be9cf62fcfe958ec3e869)), closes [#2022](https://github.com/darqus/tokyo-modern-vscode-theme/issues/2022) [#20222](https://github.com/darqus/tokyo-modern-vscode-theme/issues/20222)
* **theme:** improve UI color retrieval with better type safety ([843a609](https://github.com/darqus/tokyo-modern-vscode-theme/commit/843a60987d4cd5a42a5f6c8182f8eb5d75de30b8))
* **theme:** increase brightness of primary accent color ([eaca14d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eaca14d2cfee7ba8566602c795ee96a6c63c219e)), closes [#70b4](https://github.com/darqus/tokyo-modern-vscode-theme/issues/70b4) [#8ac7](https://github.com/darqus/tokyo-modern-vscode-theme/issues/8ac7)
* **theme:** update menu separator background color ([03b7300](https://github.com/darqus/tokyo-modern-vscode-theme/commit/03b73005f29e2f35aec00e40a35eb2f624c497a3))
* **theme:** update syntax red color references and usage ([b5d8608](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b5d86084b8dff318dc2457d8d13a621a4a98a47b)), closes [#df215](https://github.com/darqus/tokyo-modern-vscode-theme/issues/df215)
* update author info in package.json ([a0e3e26](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a0e3e260d07553440f185f815853e52d3973a7c0))

* add comprehensive Tokyo Night theme analysis and generator plan ([a25389d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a25389d83042b01718062d592eac021b40d81426))
* **docs:** remove architecture documentation files ([2ede8b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2ede8b7132747b8f7d4aa4659dcd444370a9a404))
* **theme:** remove legacy theme palette and generators ([26e5b98](https://github.com/darqus/tokyo-modern-vscode-theme/commit/26e5b984a9d8be42986e0c67bc43fe1a670f2d8f))

### [2.2.166](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.165...v2.2.166) (2025-10-17)

### [2.2.165](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.117...v2.2.165) (2025-10-17)

### ⚠ BREAKING CHANGES

* **theme:** Direct usage of `foundationColors` in UI modules is deprecated. All UI components must now use semantic tokens via the `getToken()` utility to ensure architectural consistency.
* **theme:** Legacy color references replaced with semantic color system
* **theme:** The structure of TypeScript syntax color definitions has been refactored. Colors are now defined as direct string values instead of nested objects with a 'base' property. This simplifies the theme structure but may affect integrations that relied on the previous object shape.
* **theme:** primitiveColors has been renamed to foundationColors
* **theme:** The 'migration' utility object, including 'getLegacyMapping' and 'migrateColor' functions, has been removed from the theme palette.
* **theme:** Token access now requires using getToken() function instead of direct palette access

### Features

* **theme:** add comprehensive colors for SCM Graph view ([61ca65b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61ca65b0900082c2502790bcf813c6b833440388))
* **theme:** add comprehensive semantic token color definitions for enhanced syntax highlighting ([ac0d1fd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ac0d1fd696dbe2f1d7018c9152417e5fea1891e8))
* **theme:** add comprehensive Vue syntax highlighting support ([233b882](https://github.com/darqus/tokyo-modern-vscode-theme/commit/233b882ac3f1c6f95508777bcf21bf5f7cc8be44))
* **theme:** add design tokens for consistent UI styling ([5220a14](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5220a141c530abd12fa00e39db5fdf61838b2786))
* **theme:** add new color palettes and enhance syntax highlighting ([75232d0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/75232d0d76be4f0a34d210acf32bae0fb9d1a9d8))
* **theme:** add syntax highlighting support for C#, PHP, Ruby, Kotlin, and Swift ([211b06c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/211b06c46cef13f8f2cdad2dd501531736685c49))
* **theme:** enhance JavaScript and TypeScript syntax highlighting with new token definitions and styling ([cd873d9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cd873d92bf9b399c2c9242349a0550e33051ebb5))
* **theme:** enhance markdown list highlighting ([e629f4d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e629f4dd4272bbaa12a9a1b4d5226cd862ddd29a))
* **theme:** enhance validation script with duplicate color detection and improved unused color filtering ([e041277](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e0412776e2097701d408e4272160e916347cd179))
* **theme:** expand semantic color system and refactor UI modules ([2f0cd74](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2f0cd741bfc6f71157cd18afefef1541bb30cbb8))
* **theme:** export PrimitiveColors type from foundation palette ([db9d9ca](https://github.com/darqus/tokyo-modern-vscode-theme/commit/db9d9ca83feae8ea331730200bd63d80dc065511))
* **theme:** implement comprehensive design token system with light theme support ([2b2d9af](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2b2d9af3c08f90baca109500ab4195bbf0417369))
* **theme:** improve type safety and refactor theme validation scripts ([bd6c5d7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bd6c5d727b4fb398f5972714be291f5787a9479f))
* **theme:** introduce onAccent text color and adopt semantic typography ([e20d270](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e20d270ac1ffa554923c1fb5128b5c62917f8a01))
* **theme:** replace bright text colors with cooler, subdued tones ([eed7ea1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/eed7ea1dbdf6af9af4bf99f507ced5b70d3470af)), closes [#97a2d3](https://github.com/darqus/tokyo-modern-vscode-theme/issues/97a2d3) [#6c7097](https://github.com/darqus/tokyo-modern-vscode-theme/issues/6c7097)
* **theme:** update primitive color palette values ([7b6194d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b6194d8f0cc6e0092b7052cfca683915231c4f1))
* **tsconfig:** enable stricter TypeScript compiler options ([9d24f1b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9d24f1b1ede3acd780c7296a0f0bbfd01ea11441))

### Bug Fixes

* **theme:** исправить значение прозрачного цвета ([ad84897](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ad8489708d6fb741357a2c4d9bd3548e046d46b7)), closes [#00000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000) [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **theme:** update darkest gray color to [#0](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0)f1722 across palette and theme files ([c3f3bb4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c3f3bb42d54db1cf5c50c4d0e3f6e1b38ee754dd)), closes [#0f1722](https://github.com/darqus/tokyo-modern-vscode-theme/issues/0f1722)
* **theme:** update status bar item hover background colors ([7cdc67e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7cdc67e92aa6b93dc1872c672a0c6e7dc4f69acf))

* **theme:** clean up palette and syntax color definitions ([c42182f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c42182fc53880235586f62c1834763ae5387a979))
* **theme:** migrate to semantic color system and remove legacy scripts ([089aa0c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/089aa0c772dc36332f800865870b8c17408636c3))
* **theme:** rename primitiveColors to foundationColors and update imports ([af7b398](https://github.com/darqus/tokyo-modern-vscode-theme/commit/af7b398fa32a4c5088dda58f955cf15784d67d89))

### [2.2.117](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.109...v2.2.117) (2025-10-14)

### Features

* **theme:** update text link colors to use semantic palette values ([1ef6094](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1ef60949fe49d1d2ede1c0d86463097b4fd77e85))

### [2.2.109](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.92...v2.2.109) (2025-10-14)

### ⚠ BREAKING CHANGES

* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design. Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

* Implement semantic color system with primitive → semantic → UI → syntax hierarchy
* Reduce color palette from 4503 to 174 colors (97% reduction)
* Replace legacy color references with semantic tokens
* Add comprehensive documentation for new color system
* Update all UI modules to use new semantic color mapping
* Improve theme performance and maintainability

### Features

* **theme:** add button color palette and fix input option alpha value ([a68e467](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a68e467c66bced68eef78c51288f427ca40eaf0f))
* **theme:** add git decoration colors and update theme snapshot ([3579b86](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3579b86b3f2ea697d12980d0cdeafab1a578652b))
* **theme:** add scm graph colors and update theme snapshot ([5e6304f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5e6304f4c01cf6d42296f9f6ab50b66c1053629a))

### Bug Fixes

* **theme:** update git decoration colors and build timestamp ([4bab327](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4bab32704069d18e7d80d6b9d2b7209b9bdbe670))

* **theme:** overhaul color system with semantic architecture and optimize palette ([044af86](https://github.com/darqus/tokyo-modern-vscode-theme/commit/044af860f7b6baa8923294c66ee5b3a0c0367910))

### [2.2.92](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.90...v2.2.92) (2025-10-13)

### [2.2.90](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.87...v2.2.90) (2025-10-13)

### [2.2.87](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.86...v2.2.87) (2025-10-13)

### [2.2.86](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.85...v2.2.86) (2025-10-12)

### Features

* **theme:** add sticky scroll background colors ([919bfd9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/919bfd93cf0c8b8fe5b41ccc40b8d24ab3222a89))

### [2.2.85](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.79...v2.2.85) (2025-10-12)

### [2.2.79](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.78...v2.2.79) (2025-10-12)

### [2.2.78](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.2.4...v2.2.78) (2025-10-12)

### ⚠ BREAKING CHANGES

* **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design.
* **theme:** The entire color palette and syntax highlighting rules have been replaced, resulting in a significant visual change to the theme.
* **theme:** Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

### Features

* **build:** dynamically read version from package.json for vsix name ([e8400fd](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e8400fd65035418af6c5ef7da864ae8e95716e65))
* **tests:** add snapshot test for theme consistency ([205158f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/205158f4cc4050164ddd9569f803ccb8847d5c93))
* **theme:** add comprehensive status bar color customization ([7e7890b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7e7890b1bd8612d5c20de89ee735ec1ca4f186be))
* **theme:** add comprehensive syntax highlighting tokens for Tokyo Night theme ([e640ec3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e640ec3b011a42d47ee70f3474c2f0e1956fd92d))
* **theme:** add Go, Rust, Haskell support and enhance syntax highlighting ([6d6453e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6d6453eb0fcc58735a5695fd6ed11d4b811327fd))
* **theme:** add new color variables for enhanced UI and syntax highlighting ([2a0d37a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2a0d37a1e2bd8b3019f2a2318caeaad22ab594ca))
* **theme:** add semantic highlighting for Vue/Pinia ([295cbed](https://github.com/darqus/tokyo-modern-vscode-theme/commit/295cbed232aa2c9e29d86feee9b6e91a739d3ca9))
* **theme:** add syntax highlighting for Vue.js ([a816548](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a816548e642b9f73567de171ad9259248cbf5dec))
* **theme:** differentiate Pinia state, getters, and actions ([e006c55](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e006c55f4c0c0bf602239f3fc0a5cb08dd9d319d))
* **theme:** enhance Vue and add Pinia syntax highlighting ([dfd9078](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dfd9078ef45a331164bda1cb8c368b6512939e12))
* **theme:** overhaul color palette and syntax highlighting ([50ccafb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/50ccafbd8b30fcaac6ad2ce816eecbe5c92b6388))
* **theme:** refactor UI color tokens into modular files ([a34064b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a34064b9c3f4835db68be7db9a252ca1c16fb6d4))

### Bug Fixes

* **theme:** adjust scrollbar color for better theme integration ([0364ac8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0364ac842e5cf5081dd1690ce14d6a22971335a2))
* **theme:** adjust selection background color for better contrast ([8ecd898](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8ecd898d21b920b442fd39fda55969f719b171a5)), closes [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#4e6ab2](https://github.com/darqus/tokyo-modern-vscode-theme/issues/4e6ab2)

* **theme:** overhaul color and token system ([e0e0c97](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e0e0c978bc0a4eed6b831a45165fb071346aa1b7))
* **theme:** update color palette and syntax highlighting across all language modules ([7fb69b4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7fb69b4d7015ea84668539ed95b1fd06f340ea13))

### [2.2.4](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.1.0...v2.2.4) (2025-10-10)

### Features

* update version to 2.1.2 and add package script ([d9080b7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d9080b72ac625d1882d75146ec893d5691eddb98)), closes [#123](https://github.com/darqus/tokyo-modern-vscode-theme/issues/123)

## [2.1.0](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.0.33...v2.1.0) (2025-10-10)

### Features

* **theme:** implement modular theme generation pipeline ([81c2b26](https://github.com/darqus/tokyo-modern-vscode-theme/commit/81c2b26dccbc1c04dda7aeedea9fa80fbaf01af5))

### [2.0.33](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v2.0.6...v2.0.33) (2025-09-30)

### Features

* **colors:** enhance search and selection highlighting ([c60faec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c60faecbceed2857c59e8ffa1b42c756425c679b))
* **core:** improve color contrast and readability ([d49b596](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d49b5960b5bda0970351cbeda502b6d7022a67bc))
* **theme:** add new color tokens and update existing ones ([3984da3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3984da3b11e46cf051aca3e725e832903cf81042))
* **theme:** add title bar foreground color tokens ([5ca1646](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5ca164613573a362147c9b1fa12d47298761d212))
* **theme:** implement configurable theme generation and plugin system ([8264906](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8264906edf79f40f8d4d26fa61db45050ed3c4a0))
* **themes:** add placeholder and fold colors for tokyo-modern ([5fbb95b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5fbb95bc1b578c8a89846a03d57a1dc37ac997fc))
* **tokens:** add new editor and inline chat placeholder tokens ([040ca44](https://github.com/darqus/tokyo-modern-vscode-theme/commit/040ca44dd5040fbaedb57aa7a3f85346129d10e1))

### [2.0.6](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.18.19...v2.0.6) (2025-09-25)

### Bug Fixes

* correct the use of process.nextTick in favor of setImmediate ([0a3d76b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0a3d76ba8adf3af3e0dfefbd9d20464972db512e))

## [2.0.0](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.18.19...v2.0.0) (2025-09-25)

### ⚠️ BREAKING CHANGES

* Полностью удалены legacy-файлы: `src/generators/interfaceMapping.ts`, `src/core/themeEngine.ts`, `src/types/themeEngine.ts`.
* Единственным источником маппинга токенов теперь является `modernInterfaceMapping.ts` (DSL).
* Любые внешние импорты из перечисленных legacy-файлов больше не работают — требуется перейти на DSL API (`createTokens` / `colorMappings` из `modernInterfaceMapping`).

### Изменения

* Удаление устаревшего движка ThemeEngine и связанных типов.
* Удаление shim-файла `interfaceMapping.ts` (ранее выводил предупреждение).
* Мажорный bump версии до 2.0.0 для фиксации границы совместимости.
* Добавлены частичные снапшоты (`core`, `lists_panels`, `terminal_widgets`) для более точечных диффов.
* Генерация документации по токенам автоматизирована (`docs:tokens`).

### Миграция

1. Замените импорт
   `import { colorMappings } from './generators/interfaceMapping'` → `import { createTokens as colorMappings } from './generators/modernInterfaceMapping'`.
2. Если использовались типы ThemeEngine / ThemePlugin — перенесите логику напрямую в слой генерации темы или используйте собственную обёртку.
3. Обновите скрипты: убедитесь, что не осталось ссылок на удалённые файлы.

### Причина изменения

Старый движок создавал путаницу, дублировал ответственность и замедлял внедрение новых токенов. DSL предоставляет:

* Декларативность и прозрачность.
* Единый источник правды для генерации и документации.
* Простую валидацию и подсчёт стабильного количества токенов.

### Верификация

* Все тесты пройдены после удаления (см. частичные снапшоты и счётчик токенов).
* Количество color tokens остаётся стабильным (guard тест не изменён).

---

### [1.18.19](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.17.42...v1.18.19) (2025-09-24)

### Features

* add statusBarItem.hoverForeground token ([7e78e62](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7e78e62f47b431a4e4dec31a311d706feb82094d))
* enhance statusBarItem colors and add compact hover effect ([d55ba92](https://github.com/darqus/tokyo-modern-vscode-theme/commit/d55ba9250bdc3025d678ef4ecfd26542fbb52de6))
* **menu:** update selection background to transparent ([e7b1b22](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7b1b22c0b2be030557f1ed4e0032b62ee9da1a0)), closes [#00000000](https://github.com/darqus/tokyo-modern-vscode-theme/issues/00000000)
* **static:** add tokyo night modern screenshot ([5e11f7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5e11f7d742032a60bd99e63cdb53ddbf37c3e1e8))
* **theme:** add overview ruler and minimap highlight colors ([ccd0410](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ccd0410272717593edbfd21f2f6b4fa3a30bede5))
* **theme:** add tokens for panel title badges ([1f86e7c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1f86e7cf6336559089939f116109fa179be8ce66))
* **theme:** enhance visual consistency and accessibility ([cfde3a0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/cfde3a089914ec8625707133258aa633208fcdc1))
* **theme:** update search highlight colors to cool blue scheme ([2cd4422](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2cd442271bbc44a89eb9fa4c0047b8c75e779493))

### [1.17.42](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.17.41...v1.17.42) (2025-09-23)

### [1.17.41](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.16.20...v1.17.41) (2025-09-23)

### Features

* **.vscode:** add new VSCode task and update tab background colors ([58bb515](https://github.com/darqus/tokyo-modern-vscode-theme/commit/58bb515052cf3c88572bea5a573fbec1067b82f2))
* add missing PeekView token mappings and update theme ([c43e311](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c43e311f87eec7caf14a9f4fcb7166182d2ee3e2))
* change editor hover widget background to base ([5faf5ef](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5faf5efcb0d049dce33b938714699be45c5055be))
* **color-theme:** enhance hover widget readability and add foreground token ([8181ece](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8181ece46e20c08cab5416d88760f859eb41bab0))
* **core:** adjust editor line number colors ([28aeb8d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/28aeb8d7d97224716d91b955ad5e31979cd82636))
* **core:** change warning state color to purple ([8025418](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8025418c91223e1a5ec379222acbb3c4a43d5bf8))
* **core:** rename skyblue to badgeBlue for badge background color ([32978f1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/32978f153bc715840f00f9a7e503a1bff1bd07c1))
* **core:** update link and icon colors in theme ([922d7c0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/922d7c036688c15f45d22484592bb7f2c5dda9d9)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5)
* **core:** update link and icon colors to primaryBlue ([f2dd3c9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/f2dd3c94397057e6e02af54e269f778c9cb67dc6))
* **extensions:** add sticky scroll theming for TypeScript 5.2+ ([a5c8015](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a5c8015d43d5de53d568a41f876e19ff47a84dff))
* **theme:** add icon foreground color ([68c2cf6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/68c2cf628a463e68818882aef93b3578f3d020a7))
* **theme:** add Markdown blockquote styles and adjust tab colors ([fa0e0af](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fa0e0afaf7fe0904bdc00bf3ba7c8c8bb0d29532))
* **theme:** adjust panel title and editor suggest widget colors ([b463197](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b463197559aa9654e4243cf6caa08aa30dc0ec63))
* **theme:** lighten tooltip background for readability ([519926d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/519926d498297e15e6a0ac312d8b01b17b61b253))
* **titleBar:** adjust title bar foreground colors ([350f9a3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/350f9a34529e299d3c40998d2a54dbab21963396))

### Bug Fixes

* adjust activity bar background and active background ([4810dec](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4810deceebe63585e6d4d8f537d0753130b31904))
* **panel:** update color mapping for panel titles and related UI elements ([4dc0b7d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/4dc0b7d51441b8c362063e6d24b03d06bf067737))
* **theme:** adjust menu and dropdown color mappings ([924efe8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/924efe8c8a59232900aaca229968ce6299be948e))
* **theme:** correct color mappings and improve contrast in interface palette ([7b420fe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7b420fe8d3639cf0d1041b221e879149997eb47a))

### [1.16.20](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.15.35...v1.16.20) (2025-09-22)

### Features

* add modern interface mapping for editor groups ([df66e4f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/df66e4ffade3755cb747fcfa1f95c5eb46e79358))
* add new editor debug tokens and update theme ([583c73e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/583c73ed381537a54b389a4777bce1b1446ed03e))
* add title bar color tokens ([b58bba5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b58bba52dfd593be2efc14a15bf96cae4765efb0))
* **colors:** add CTA colors and update button styles ([9fdc9b1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9fdc9b1cd11511472d0f23a1fc49dc3815e87c06))
* **core:** adjust non-bright white in terminal to reduce glare ([61ade4a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/61ade4a1c57df31352fe2e6280eb3afa3dd5e5e6))
* **theme:** add badge colors to interface palette and update related tokens ([dc3d210](https://github.com/darqus/tokyo-modern-vscode-theme/commit/dc3d21036b6a209965c2ced3322f5d639b94b56f))
* **theme:** add new color tokens and update existing ones ([0c6c683](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c6c683e4e9512780f40fe4148edb11468bb4893))
* **theme:** enhance terminal and debugging UI ([025da0f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/025da0f670db2f5561c52cccd78cda9fa2342f64))

### Bug Fixes

* **theme:** adjust text colors for better contrast and visibility ([247df3a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/247df3abe9042e3511d0fbcc0c7bca31d0880a15))

### [1.15.35](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.54...v1.15.35) (2025-09-22)

### Features

* **.vscode:** add task to run tests and update theme colors ([2e38d23](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2e38d237b7f528ef13912c6f10539afa65cf4dae))
* **accessibility:** improve contrast ratios for better readability ([ae5502d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ae5502da290e5793888941d42efa7eb2194a6bda))
* add color token for editorCodeLens.foreground ([76c4dca](https://github.com/darqus/tokyo-modern-vscode-theme/commit/76c4dca04d934f8d25b73a7a16231601215244cc))
* **breadcrumb:** improve focus and hover readability ([8034a4e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8034a4e3e03925a288bfaa12cf4aba5e8c4d2da4))
* **contrast:** enhance text contrast against overlay background ([ea0338a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/ea0338ad8ad4e4eb92138cb54ae189016fd2c750))
* **core:** add OKLCH color utilities and enhance theme tokens ([c70ba64](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c70ba64dd573186aaa520dff995c86b0d4d915e5))
* **core:** add tokens for menu bar, panel section header, and CodeLens ([56c9901](https://github.com/darqus/tokyo-modern-vscode-theme/commit/56c9901934964119e6d12a73ecf3fd5e6da7620b))
* **core:** implement caching for color operations and add surfaces system ([8697f9b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8697f9b64e2183a7c2c7caea7c2ab3210113b170))
* **docs:** add token registry generator and update CI scripts ([9471d90](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9471d9032cec8764262250849a9a53aae94256f6))
* **shadow:** adjust widget shadow with cool tone and translucency ([2b552eb](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2b552eb638d92663adb76c26fc542a1cc12c1504))
* **terminal:** improve hover highlight color and visibility ([30b724f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/30b724fc92d4c47fb4d057a726004c0cac77b4a7))
* **theme:** add OKLCH-derived shadows and update swatches ([e7b6235](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7b6235aa8629aa5cebc8c40b4fedee33f0783ee))
* **theme:** add shadow color definitions and update related tokens ([a025657](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a025657cffa6f954fd6d3a9eeea5982d82dc494e))
* **theme:** enhance contrast and border consistency ([e6f4052](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e6f40528f458fcb2ab0f42c6b9d276e0ca45c50f))
* **theme:** enhance editorCodeLens contrast and configurability ([a9f3fca](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a9f3fca9611f2aa47692f3301dc8227b8d2dee19))
* **theme:** enhance peek view and add accessibility improvements ([6dd660f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6dd660f514beb62919c09e7cbc75cd77aec80ba1))
* **theme:** refactor color system and add contrast checks ([19b9986](https://github.com/darqus/tokyo-modern-vscode-theme/commit/19b998660d1bf76d2cb1582f39cd8887bef44419))
* **theme:** standardize thin borders and enhance color contrast ([1d63ed5](https://github.com/darqus/tokyo-modern-vscode-theme/commit/1d63ed5b23fd8fb809b0f1fc2192f9aafcb3cb6c))

### Bug Fixes

* **theme:** update activityBar inactive foreground color ([6f222d2](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6f222d249501066215e8a44850d4a16ba96d43bc))
* update text color contrast to meet accessibility standards ([9de9fc6](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9de9fc6bd06f1900ccefc2142c3bf7aa288c973a))
* update text color mappings and adjust token sources ([86e7d39](https://github.com/darqus/tokyo-modern-vscode-theme/commit/86e7d39a43fcaa2c1092197ae13c4ef87b31fcf9))

### [1.14.54](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.52...v1.14.54) (2025-09-21)

### Bug Fixes

* **theme:** remove editor.findMatchHighlightForeground to avoid warnings ([084be1a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/084be1a33ba606fccdedd159cf61311f28d9ee63))

### [1.14.52](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.33...v1.14.52) (2025-09-21)

### Features

* **button:** adjust hover and separator colors for improved contrast and visibility ([c522444](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c5224447a0fbef23c133e0545406fa086405f2d7))
* **interface:** add darkened base background color ([aa880ac](https://github.com/darqus/tokyo-modern-vscode-theme/commit/aa880ac5990e8ab33f90b327c4e1f138762d7c50))
* **theme:** enhance SCM graph colors and adjust find match highlighting ([666870f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/666870ff90a96a15e6a7d73444a0a27792387208))
* **theme:** update theme description for enhanced marketing ([3bb436a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/3bb436acdfb740eb66d94dea390de673ce330566))

### Bug Fixes

* **theme:** update extensionButton prominent hover background color ([5c883e8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/5c883e84420912d89437d38b8fa10363fec9386f))

### [1.14.33](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.32...v1.14.33) (2025-09-21)

### Features

* **interface:** add blockquote colors to interface palette ([b4214f3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b4214f3c463733634f6220a54074a42e46dba1a0))

### [1.14.32](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.29...v1.14.32) (2025-09-21)

### Features

* **button:** enhance button contrast and adjust color scheme ([9eff309](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9eff30964722e98792ac03b6328f525d545f5181))
* **core:** add dropdown control palette ([bca051d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/bca051d245afafe42156320df586cffd7a934bd1))
* **interface:** expand button color palette and adjust generated colors ([2e5c73e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2e5c73eb0588dd818c6cb1e749d246981f392e3f))

### [1.14.29](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.23...v1.14.29) (2025-09-20)

### Features

* **docs:** add release versioning information and update README metrics ([acf7fa8](https://github.com/darqus/tokyo-modern-vscode-theme/commit/acf7fa83065ed3660df5a7b3f5ec51c5a0f82485))
* **interface:** add inlineChat background color ([a02248f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a02248f3d4729242e60cbf96b2f24813df466a99))

### [1.14.23](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.22...v1.14.23) (2025-09-20)

### Features

* **release:** incorporate commit count into version bump ([c146ac4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c146ac4d05ea3733372513e83d3b981e9c516a81))

### [1.14.22](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.21...v1.14.22) (2025-09-20)

### Features

* **package:** add test:update script for updating snapshots ([7aa7626](https://github.com/darqus/tokyo-modern-vscode-theme/commit/7aa7626cea8771c67064809e7fd7757b62238ae0))
* **theme:** add inline chat and toolbar color configurations ([0a9e828](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0a9e828e225d234f5fad6faafd386d5111d460da))
* **theme:** improve secondary button appearance with cooler outline ([1600237](https://github.com/darqus/tokyo-modern-vscode-theme/commit/160023764a9d81b2aafaafb71dd875efa508fd18))
* **theme:** unify terminal blue and cyan ANSI colors with link color ([c995844](https://github.com/darqus/tokyo-modern-vscode-theme/commit/c99584410ccd2783c6923cf645b1adcc963fadda))
* **theme:** update Tokyo Modern theme colors ([8ddcda1](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8ddcda18516afb4ed6957f33bd206212a358913d))

### Bug Fixes

* **theme:** improve inline chat text contrast ([2d96606](https://github.com/darqus/tokyo-modern-vscode-theme/commit/2d966068085ff51460a02563d78316b21e02cb7f)), closes [#c8d0f6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c8d0f6)
* **theme:** improve terminal link hover and text link colors ([87446ae](https://github.com/darqus/tokyo-modern-vscode-theme/commit/87446ae4ce72b7e765850a8b754a1ebd8db5cfd6))
* **theme:** remove deprecated Inline Chat and toolbar color properties ([05f1cef](https://github.com/darqus/tokyo-modern-vscode-theme/commit/05f1cef07f85fa9a17d2884c5c1711b824ee6476))

### [1.14.21](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.20...v1.14.21) (2025-09-20)

### [1.14.20](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.19...v1.14.20) (2025-09-20)

### Features

* **colors:** unify search highlight colors across editor, terminal, and list ([e2434e9](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e2434e96636b049362ee652787d09de6d13bc5e9))
* **interface:** autogenerate button colors and update theme ([a88fdbe](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a88fdbe87f85c782a2365b74e5e7cd0edbfdcfaf))
* **theme:** enhance terminal appearance and add drop background transparency ([0304f3d](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0304f3d14bdd6710834dba73d3d484af5b5c5064))
* **theme:** enhance terminal colors and add text link styles ([262dc5b](https://github.com/darqus/tokyo-modern-vscode-theme/commit/262dc5bd138bbe1a3645178e77b4a991a4ea69e3))

### [1.14.19](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.18...v1.14.19) (2025-09-09)

### [1.14.18](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.17...v1.14.18) (2025-09-09)

### Features

* **static:** add screenshot of tokyo night modern theme ([55f5ac3](https://github.com/darqus/tokyo-modern-vscode-theme/commit/55f5ac3a9f7d9a066b0da84f41a55dbd9b57da0b))

### [1.14.17](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.16...v1.14.17) (2025-09-09)

### Features

* **interface:** add lineNumber and lineNumberActive colors ([9255047](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9255047c2421a4066db08833345f2a8b72da9b61))

### [1.14.16](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.15...v1.14.16) (2025-09-09)

### Bug Fixes

* **package.json:** update theme configuration for consistent theming ([023da5f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/023da5f94ae2911cd845da546d5abefe3d9f68a9))

### [1.14.15](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.14...v1.14.15) (2025-09-09)

### Features

* **theme:** add support for environment variables and dynamic configuration ([34f703f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/34f703f46339106027ff329ab76ad55c50bd7017))
* **theme:** rename and update Tokyo Night theme ([a91e620](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a91e620a15d4def9a06dc5e4f1fb239276ea368b))
* **theme:** rename and update Tokyo Night theme collection ([6c78a1a](https://github.com/darqus/tokyo-modern-vscode-theme/commit/6c78a1a55692f18e155da8b826607041d2bdf0c6))

### [1.14.14](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.13...v1.14.14) (2025-09-03)

### Features

* **theme:** enhance color system and build process ([b3422ad](https://github.com/darqus/tokyo-modern-vscode-theme/commit/b3422ad6035a65529494468322277ee243e1f8a9))

### [1.14.13](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.12...v1.14.13) (2025-09-03)

### Bug Fixes

* **version:** correct version number in CHANGELOG and package-lock ([fd8b7ad](https://github.com/darqus/tokyo-modern-vscode-theme/commit/fd8b7addf12a4f75c367353a703483731b6f1c66))

### [1.14.12](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.10...v1.14.12) (2025-09-03)

### [1.14.6](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.3...v1.14.6) (2025-09-02)

### [1.14.4](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.14.1...v1.14.4) (2025-09-02)

### [1.14.2](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.13.0...v1.14.2) (2025-09-02)

## [1.14.0](https://github.com/darqus/tokyo-modern-vscode-theme/compare/v1.11.0...v1.14.0) (2025-09-02)

### Features

* Implement placeholder color analysis and optimization plan ([e7d8da0](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e7d8da0b69f8e690e269a17c935c6c71333704f8))
* **release:** add automated release script ([04e323c](https://github.com/darqus/tokyo-modern-vscode-theme/commit/04e323c35eb7c8b05972f9a1314b3ffa9ca26288))
* **theme:** add SCM Graph colors and other improvements ([9e59e4e](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9e59e4efee601b76da41c4177a871f98c8473a10))
* **theme:** add semantic token colors to One Monokai theme ([e527bcf](https://github.com/darqus/tokyo-modern-vscode-theme/commit/e527bcffd74d8f157114e4a6227cb721a192ceb5))
* **theme:** add Tokyo Night Dark theme for VS Code ([a6c2fd4](https://github.com/darqus/tokyo-modern-vscode-theme/commit/a6c2fd4796cab91530f4820df36f3616087b048b))

### Bug Fixes

* improve light theme contrast and accessibility ([8cece28](https://github.com/darqus/tokyo-modern-vscode-theme/commit/8cece284cc570d514b5c5f9862bf9a4c61469b51)), closes [#c0caf5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/c0caf5) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#a9b1d6](https://github.com/darqus/tokyo-modern-vscode-theme/issues/a9b1d6) [#1f2328](https://github.com/darqus/tokyo-modern-vscode-theme/issues/1f2328) [#3d4752](https://github.com/darqus/tokyo-modern-vscode-theme/issues/3d4752) [#d1d5](https://github.com/darqus/tokyo-modern-vscode-theme/issues/d1d5)
* **release:** modify release script and update package.json ([9dc2089](https://github.com/darqus/tokyo-modern-vscode-theme/commit/9dc20892a905e9a0f5c9abc996a3d9e1cabbc609))
* **scripts:** handle undefined return value in execSync ([25fb44f](https://github.com/darqus/tokyo-modern-vscode-theme/commit/25fb44f7463429b8ff8f437a07510690f2427bc7))
* **scripts:** improve error handling in release script ([0c400a7](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0c400a7f136f317e4e1a69b08ce1c5ca92b9f52d))
* **theme:** resolve validation issues and update deprecated properties ([0a743ae](https://github.com/darqus/tokyo-modern-vscode-theme/commit/0a743aef7fef2baf580ca50a522a7e0666179681))

## [1.12.0] - 2025-01-02

### 🧹 Cleanup & Optimization

* **BREAKING**: Removed legacy build system and scripts

* **BREAKING**: Simplified package.json scripts
* Removed outdated analysis files and reports
* Cleaned up development dependencies
* Streamlined project structure

### 📚 Documentation

* Updated architecture documentation

* Refreshed development guide
* Simplified README structure
* Removed obsolete documentation files

### 🔧 Technical Improvements

* Consolidated build process to single `src/build.ts`

* Removed redundant validation and testing scripts
* Optimized project structure for maintainability
* Kept core functionality: palette system, theme generation, CLI tools

### 🎯 Focus Areas

* Maintained 17 theme variants generation

* Preserved adaptive palette system
* Kept zero hardcoded colors architecture
* Retained CLI tools for custom themes

## [1.11.0] - Previous Release

* Full adaptive palette system implementation

* 17 theme variants with seasonal and accessibility options
* Comprehensive CLI tools for theme customization
