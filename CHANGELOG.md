# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.45](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.3.36...v2.3.45) (2025-10-28)


### Features

* **theme:** add contrast check script and improve color contrast ([873e400](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/873e400e0d9918b25a9061604f9b073d857dd124))
* **theme:** improve syntax highlighting color diversity ([fb2d0ec](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/fb2d0ecd85769315855cfd493e3eb8f8d12edcea))


### Bug Fixes

* **theme:** improve syntax contrast and update colors ([1ff2071](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1ff20712c6b62cff56b3b3c82bc1925b629e5f8e))

### [2.3.36](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.3.21...v2.3.36) (2025-10-28)


### Features

* **static:** add screenshot of tokyo night modern theme ([3c9170f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3c9170f4116a3fa45c6216d04e6e11d9eac5b20c))
* **theme:** implement color derivation functions and update palette ([be16a54](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/be16a548aa9a5c45ac88a076b4e4908d0901645a))
* **theme:** update tab colors and adjust active border position ([eab6254](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/eab625480d9a06fbf592e630e440ef6313f773bd)), closes [#202030](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/202030)
* **ui:** adjust tab inactive background color ([24c3480](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/24c3480a82ab967c93ceb1c9ed628fa26aae1d8a))


### Bug Fixes

* correct palette exports and formatting ([c2ca16e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c2ca16e7470549ac5755669b192926a972ffbf0f))
* correct the use of process.nextTick in message handling ([996a4db](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/996a4db1a08947e3fda13d5ac613426903d18a92))
* **theme:** update tab active border style ([bcd0bf4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/bcd0bf40a129be497eb3949c1a5bf680cdf99ff8))

### [2.3.21](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.3.10...v2.3.21) (2025-10-28)


### Features

* **theme:** lighten input, tab, and checkbox border colors ([f88d0d0](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/f88d0d0cdaa69cc2c906d8fb1cdcedee22a54483))
* **theme:** update panel title active border and input border colors ([1c000e5](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1c000e502845f6b6c12143628342052873466583))


### Bug Fixes

* **theme:** adjust unfocused inactive modified border color ([b69f195](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b69f19526f594ef0555e461192259a8a9ad54d1e))

### [2.3.10](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.312...v2.3.10) (2025-10-27)


### Features

* add screenshot of tokyo night modern theme ([5ba40cf](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5ba40cf7b7b54a3c2434c20dfb5c90e896bda720))
* **theme:** adjust background colors for better contrast and visibility ([bbafb1b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/bbafb1b07a60d866aae701322e3afd54c5e98ac3))
* **theme:** adjust border colors and lighten sidebar foreground ([06dffca](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/06dffca7138ce175f5351df21440ee73f3005749))


### Bug Fixes

* **theme:** remove sideBySideEditor.border color definition ([5f6d479](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5f6d479fd7cfad5ce6f4b77429c06a5a7eca05ed))

### [2.2.312](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.166...v2.2.312) (2025-10-27)


### ⚠ BREAKING CHANGES

* Removes legacy color palette and refactoring plan
documents in favor of the new comprehensive analysis approach.
* **theme:** The old theme generation system, including `tokyo-night-generators`, `base-colors`, `primitives`, and various palette utilities, has been completely removed. The theme is now generated solely through the new nested model.
* **docs:** removes architecture documentation that may have
been referenced in external materials

### Features

* **docs:** add comprehensive list of editor and UI color tokens ([daca053](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/daca053ec2cc7c618d12bd5682c263eb643f5c64))
* **theme:** add and reposition Tokyo Night semantic token color generator ([97d41be](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/97d41be6e303cb7e8b43dd56861e3f5e5739c539))
* **theme:** add checkbox colors to generated theme ([09230d4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/09230d4690a8a42d6a9e56d6ffb66b61d5d173f5))
* **theme:** add comprehensive palette types and token categories ([7410b7d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7410b7dea5df1bc0bd4dc96d1f2f50783685a26b))
* **theme:** add custom colors for SCM graph view ([31a9542](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/31a954227116179e462c96d13ccaa265ca88e40c))
* **theme:** add enhanced terminal colors and generate theme variants ([84c4c36](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/84c4c3679ebf38224129a447d800384c2b1b84a5))
* **theme:** add foreground color for icons and hover widgets ([9bf3b2e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9bf3b2e14ce671cdd5facd4ca055cbefd8336773))
* **theme:** add list drop background color ([ba12a44](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ba12a447a3ddaa4c160dae90ab2902ac9b3e01a6))
* **theme:** add notebook and debug palette options ([3c6e5c2](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3c6e5c2d2b959c83b23c756adec3a06000ffbb14))
* **theme:** add primary and secondary button styles ([6a2ec8e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6a2ec8e6a7448f5db1feae4c8f976f25c9535fd9))
* **theme:** add semantic token colors ([7bb8352](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7bb8352c315152d6bc89340816b45af6a89cc055))
* **theme:** add semantic token colors for tokyo night theme ([1ab543b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1ab543b6d4aaa852fde2a208cf381c5a1093627e))
* **theme:** add shadow colors for scrollbar and sticky scroll elements ([78faab1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/78faab1a5761946ffd44a958d3de077dc94e88f1))
* **theme:** add shadow colors for widgets and inline chat ([f6eebca](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/f6eebca5e5b1cc24323e4575bda215c7745e9a23))
* **theme:** darken activity bar and badge backgrounds for better contrast ([2a4e4a5](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2a4e4a5641a644fd2ca614bb05f8c874f557d839))
* **theme:** enable palette contrast validation on build ([5798b36](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5798b368b9a1f3adbd43ca8b334735f3a3e7a89c))
* **theme:** enhance color contrast and update palette for better readability ([1017bc1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1017bc1053fc681f331827067b5fd2f6ef35dab1))
* **theme:** enhance terminal colors and rename terminal file ([0ed2803](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/0ed280351b8af42032fe28f213691642051219d0))
* **theme:** expand semantic token colors for Tokyo Night Modern ([f24bf13](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/f24bf135cc00c8e4e152ff3c38ff255e43e51be7))
* **theme:** implement modular palette generation and WCAG contrast validation ([b541482](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b5414821adf229c54ef0b19a0b8f66991211285a))
* **theme:** implement nested theme generator and comparer ([453a51a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/453a51a38ea4853311b10f96da23030d42ace241))
* **theme:** implement nested token model and flattening utilities ([51648d1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/51648d1d634f493092753d43cd303dec51fc74c8))
* **theme:** migrate palette architecture to modular system ([a36e312](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a36e3124415218743be55df07212c737d40a1ab3))
* **theme:** normalize hex color format for activity bar badge foreground ([6e11f5a](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6e11f5a80ec0681162a12096b948070fa93db471))
* **theme:** overhaul color palette for improved harmony and distinction ([bbda6b8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/bbda6b8ae4c8455b7e07dc04e3b3dc91df399c60))
* **theme:** refine button colors for enhanced visibility ([6dd31af](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6dd31afd5b506d744884d0164cde3a0dbd37bce4))
* **theme:** refine scm graph colors for visual consistency ([fc69f24](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/fc69f24d6851348000eb8affd73a7bcf1c3eec0c))
* **theme:** refine secondary button colors ([9480316](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/94803167407ba4fda4378ed2b0653385ea2f4e0b))
* **theme:** remove base and workbench palette files ([6b7df4c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/6b7df4c3ce0633ebd75fb1859e0109f167d6a2d7))
* **theme:** remove unused Tokyo Night theme palette files ([8d19c7c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8d19c7c07b2d5e875066743129099bca8183e994))
* **theme:** replace Math.pow with exponentiation operator in luminance calculation ([b68ba26](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b68ba26c9b00a025da2992bf90866bcfbe276025))
* **theme:** replace Tokyo Night Modern with Calm Clarity theme ([2811a02](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2811a023aeabc7983cf502f323f45452ddab4893))
* **theme:** update accent hover color and format token scopes ([47a4d06](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/47a4d06046388d9cae4dffdbb60b5160ebb12ff8)), closes [#6d8](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/6d8) [#85c4](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/85c4)
* **theme:** update badge colors to azure blue ([86030a8](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/86030a8884d3827f41a98793f4696d00920706ed)), closes [#0078d4](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/0078d4) [#7e83b2](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/7e83b2)
* **theme:** update border colors for activity bar and panel input ([e0aae4e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e0aae4eb235951e35feffe375d0a44acec855d64))
* **theme:** update border colors with semi-transparent alpha value ([8b0c2b6](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/8b0c2b6827c9ade42068d80b4fc1bafed6090cce))
* **theme:** update status bar item hover background color ([dae765b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/dae765b8817e231d9d38de3af8db51873230d618))


### Bug Fixes

* adjust SCM graph colors for WCAG AA contrast ratio ([eca4b46](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/eca4b46359263226f2ee5675fea6316d972f312b))
* correct the use of process.nextTick ([4ee5ebe](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/4ee5ebe914bf0ef37cafb3de1071a9533b0b1b57))
* **theme:** adjust syntax comment color and import order ([29308bf](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/29308bf6b0fb51ba7bc5b1748d4266cf4e3cd701))
* **theme:** boost luminance of colors to pass contrast checks ([2ddca93](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2ddca9326fffd407a7bdaa05748fb6b647e16396))
* **theme:** brighten primary accent color and update properties ([879fc99](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/879fc995bf3170239ab0c4def790ae823c4b7087)), closes [#5a7b9](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/5a7b9) [#70b4](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/70b4)
* **theme:** correct border color values in tokyo-night theme ([30d419b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/30d419b1f6ea8ad930987791154757bdc083615c))
* **theme:** correct color values for border and background properties ([cd23546](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/cd235464fd4463e200ecf329664d07154df241cf)), closes [#1014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/101014) [#1014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/1014) [#101014](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/101014)
* **theme:** correct color values in Tokyo Night theme ([b9e5288](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b9e528861f8b673c6048125ae34d52465bf7886b)), closes [#161](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/161) [#16161](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/16161) [#116611](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/116611) [#14141](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/14141)
* **theme:** correct hex color values in color-utils tests ([063c5a5](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/063c5a5997666a0990a423799556c68c19cd3344))
* **theme:** correct typo in status bar item hover background color ([2f21395](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2f213950ad7fa832108be9cf62fcfe958ec3e869)), closes [#2022](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/2022) [#20222](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/20222)
* **theme:** improve UI color retrieval with better type safety ([843a609](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/843a60987d4cd5a42a5f6c8182f8eb5d75de30b8))
* **theme:** increase brightness of primary accent color ([eaca14d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/eaca14d2cfee7ba8566602c795ee96a6c63c219e)), closes [#70b4](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/70b4) [#8ac7](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/8ac7)
* **theme:** update menu separator background color ([03b7300](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/03b73005f29e2f35aec00e40a35eb2f624c497a3))
* **theme:** update syntax red color references and usage ([b5d8608](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/b5d86084b8dff318dc2457d8d13a621a4a98a47b)), closes [#df215](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/df215)
* update author info in package.json ([a0e3e26](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a0e3e260d07553440f185f815853e52d3973a7c0))


* add comprehensive Tokyo Night theme analysis and generator plan ([a25389d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a25389d83042b01718062d592eac021b40d81426))
* **docs:** remove architecture documentation files ([2ede8b7](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2ede8b7132747b8f7d4aa4659dcd444370a9a404))
* **theme:** remove legacy theme palette and generators ([26e5b98](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/26e5b984a9d8be42986e0c67bc43fe1a670f2d8f))

### [2.2.166](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.165...v2.2.166) (2025-10-17)

### [2.2.165](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.117...v2.2.165) (2025-10-17)


### ⚠ BREAKING CHANGES

* **theme:** Direct usage of `foundationColors` in UI modules is deprecated. All UI components must now use semantic tokens via the `getToken()` utility to ensure architectural consistency.
* **theme:** Legacy color references replaced with semantic color system
* **theme:** The structure of TypeScript syntax color definitions has been refactored. Colors are now defined as direct string values instead of nested objects with a 'base' property. This simplifies the theme structure but may affect integrations that relied on the previous object shape.
* **theme:** primitiveColors has been renamed to foundationColors
* **theme:** The 'migration' utility object, including 'getLegacyMapping' and 'migrateColor' functions, has been removed from the theme palette.
* **theme:** Token access now requires using getToken() function instead of direct palette access

### Features

* **theme:** add comprehensive colors for SCM Graph view ([61ca65b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/61ca65b0900082c2502790bcf813c6b833440388))
* **theme:** add comprehensive semantic token color definitions for enhanced syntax highlighting ([ac0d1fd](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ac0d1fd696dbe2f1d7018c9152417e5fea1891e8))
* **theme:** add comprehensive Vue syntax highlighting support ([233b882](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/233b882ac3f1c6f95508777bcf21bf5f7cc8be44))
* **theme:** add design tokens for consistent UI styling ([5220a14](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5220a141c530abd12fa00e39db5fdf61838b2786))
* **theme:** add new color palettes and enhance syntax highlighting ([75232d0](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/75232d0d76be4f0a34d210acf32bae0fb9d1a9d8))
* **theme:** add syntax highlighting support for C#, PHP, Ruby, Kotlin, and Swift ([211b06c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/211b06c46cef13f8f2cdad2dd501531736685c49))
* **theme:** enhance JavaScript and TypeScript syntax highlighting with new token definitions and styling ([cd873d9](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/cd873d92bf9b399c2c9242349a0550e33051ebb5))
* **theme:** enhance markdown list highlighting ([e629f4d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e629f4dd4272bbaa12a9a1b4d5226cd862ddd29a))
* **theme:** enhance validation script with duplicate color detection and improved unused color filtering ([e041277](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e0412776e2097701d408e4272160e916347cd179))
* **theme:** expand semantic color system and refactor UI modules ([2f0cd74](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2f0cd741bfc6f71157cd18afefef1541bb30cbb8))
* **theme:** export PrimitiveColors type from foundation palette ([db9d9ca](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/db9d9ca83feae8ea331730200bd63d80dc065511))
* **theme:** implement comprehensive design token system with light theme support ([2b2d9af](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/2b2d9af3c08f90baca109500ab4195bbf0417369))
* **theme:** improve type safety and refactor theme validation scripts ([bd6c5d7](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/bd6c5d727b4fb398f5972714be291f5787a9479f))
* **theme:** introduce onAccent text color and adopt semantic typography ([e20d270](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/e20d270ac1ffa554923c1fb5128b5c62917f8a01))
* **theme:** replace bright text colors with cooler, subdued tones ([eed7ea1](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/eed7ea1dbdf6af9af4bf99f507ced5b70d3470af)), closes [#97a2d3](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/97a2d3) [#6c7097](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/6c7097)
* **theme:** update primitive color palette values ([7b6194d](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7b6194d8f0cc6e0092b7052cfca683915231c4f1))
* **tsconfig:** enable stricter TypeScript compiler options ([9d24f1b](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/9d24f1b1ede3acd780c7296a0f0bbfd01ea11441))


### Bug Fixes

* **theme:** исправить значение прозрачного цвета ([ad84897](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/ad8489708d6fb741357a2c4d9bd3548e046d46b7)), closes [#00000](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/00000) [#00000000](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/00000000)
* **theme:** update darkest gray color to [#0](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/0)f1722 across palette and theme files ([c3f3bb4](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c3f3bb42d54db1cf5c50c4d0e3f6e1b38ee754dd)), closes [#0f1722](https://github.com/darqus/tokyo-night-modern-vscode-theme/issues/0f1722)
* **theme:** update status bar item hover background colors ([7cdc67e](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/7cdc67e92aa6b93dc1872c672a0c6e7dc4f69acf))


* **theme:** clean up palette and syntax color definitions ([c42182f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/c42182fc53880235586f62c1834763ae5387a979))
* **theme:** migrate to semantic color system and remove legacy scripts ([089aa0c](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/089aa0c772dc36332f800865870b8c17408636c3))
* **theme:** rename primitiveColors to foundationColors and update imports ([af7b398](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/af7b398fa32a4c5088dda58f955cf15784d67d89))

### [2.2.117](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.109...v2.2.117) (2025-10-14)

### Features

- **theme:** update text link colors to use semantic palette values ([1ef6094](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/1ef60949fe49d1d2ede1c0d86463097b4fd77e85))

### [2.2.109](https://github.com/darqus/tokyo-night-modern-vscode-theme/compare/v2.2.92...v2.2.109) (2025-10-14)

### ⚠ BREAKING CHANGES

- **theme:** The theme's visual appearance has been completely changed. The new color palette is not backward-compatible with the previous design. Color values have been updated across the entire theme, affecting visual appearance of syntax highlighting and UI elements.

- Implement semantic color system with primitive → semantic → UI → syntax hierarchy
- Reduce color palette from 4503 to 174 colors (97% reduction)
- Replace legacy color references with semantic tokens
- Add comprehensive documentation for new color system
- Update all UI modules to use new semantic color mapping
- Improve theme performance and maintainability

### Features

- **theme:** add button color palette and fix input option alpha value ([a68e467](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/a68e467c66bced68eef78c51288f427ca40eaf0f))
- **theme:** add git decoration colors and update theme snapshot ([3579b86](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/3579b86b3f2ea697d12980d0cdeafab1a578652b))
- **theme:** add scm graph colors and update theme snapshot ([5e6304f](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/5e6304f4c01cf6d42296f9f6ab50b66c1053629a))

### Bug Fixes

- **theme:** update git decoration colors and build timestamp ([4bab327](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/4bab32704069d18e7d80d6b9d2b7209b9bdbe670))

- **theme:** overhaul color system with semantic architecture and optimize palette ([044af86](https://github.com/darqus/tokyo-night-modern-vscode-theme/commit/044af860f7b6baa8923294c66ee5b3a0c0367910))

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
- Comprehensive CLI tools for theme customization
