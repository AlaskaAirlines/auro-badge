# Semantic Release Automated Changelog

## [5.0.3](https://github.com/AlaskaAirlines/auro-badge/compare/v5.0.2...v5.0.3) (2025-08-15)


### Bug Fixes

* update auro-library to latest version ([84b9228](https://github.com/AlaskaAirlines/auro-badge/commit/84b922829f831aa59421e287460f763c91c0fcf1))

## [5.0.2](https://github.com/AlaskaAirlines/auro-badge/compare/v5.0.1...v5.0.2) (2025-07-02)


### Bug Fixes

* add type classes integration ([fa3c1a4](https://github.com/AlaskaAirlines/auro-badge/commit/fa3c1a4f5bda8d41f5fe150496519ad33722ae37))
* update docs head content ([bbf8840](https://github.com/AlaskaAirlines/auro-badge/commit/bbf8840e2efe1683c7420a2ff995f3a2dae32038))

## [5.0.1](https://github.com/AlaskaAirlines/auro-badge/compare/v5.0.0...v5.0.1) (2025-05-23)


### Bug Fixes

* re-add mvp tier badge support using new variant attribute and mark them deprecated ([df39e9d](https://github.com/AlaskaAirlines/auro-badge/commit/df39e9d5556320562357dba24a6dac849b6c5e31))

# [5.0.0](https://github.com/AlaskaAirlines/auro-badge/compare/v4.0.2...v5.0.0) (2025-04-30)


### Bug Fixes

* address missed variant attribute style ([6763076](https://github.com/AlaskaAirlines/auro-badge/commit/676307662f4ebf2345ef26058ac63e618db4d95d))


### Features

* add variant attribute ([2ea57d5](https://github.com/AlaskaAirlines/auro-badge/commit/2ea57d5cde9977cadd15df2e68002d07e6c5f9a5))
* implement new color tokens and attributes [#133](https://github.com/AlaskaAirlines/auro-badge/issues/133) ([b3c9a0e](https://github.com/AlaskaAirlines/auro-badge/commit/b3c9a0e807592c31d959309626a8ab5938403899))


### BREAKING CHANGES

* Replace UI attribtues with singular variant attribute.
* mvp tier statuses are no longer supported badge variants

## [4.0.2](https://github.com/AlaskaAirlines/auro-badge/compare/v4.0.1...v4.0.2) (2025-04-15)


### Performance Improvements

* add wca script for docs api ([e4c3389](https://github.com/AlaskaAirlines/auro-badge/commit/e4c3389490057667567bea6fe6e60a0d8ce888d9))

## [4.0.1](https://github.com/AlaskaAirlines/auro-badge/compare/v4.0.0...v4.0.1) (2025-03-11)


### Performance Improvements

* update component registration method and version numbers [#120](https://github.com/AlaskaAirlines/auro-badge/issues/120) ([4a7d0bd](https://github.com/AlaskaAirlines/auro-badge/commit/4a7d0bd84b76b8aef027e7c9c99c24fb5e3c514e))

# [4.0.0](https://github.com/AlaskaAirlines/auro-badge/compare/v3.3.3...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([3d31b02](https://github.com/AlaskaAirlines/auro-badge/commit/3d31b026f8a0d339e9753d3f9bb31880930b5967))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.3.3](https://github.com/AlaskaAirlines/auro-badge/compare/v3.3.2...v3.3.3) (2025-02-08)


### Performance Improvements

* update dependencies ([a20e19a](https://github.com/AlaskaAirlines/auro-badge/commit/a20e19ade93f34ee509adda84c11d78f9cba16cc))

## [3.3.2](https://github.com/AlaskaAirlines/auro-badge/compare/v3.3.1...v3.3.2) (2024-12-21)


### Performance Improvements

* update node to version 22 ([d283515](https://github.com/AlaskaAirlines/auro-badge/commit/d2835154507e13c68aa81085470258a987c3504e))

## [3.3.1](https://github.com/AlaskaAirlines/auro-badge/compare/v3.3.0...v3.3.1) (2024-12-17)


### Bug Fixes

* update incorrect Sass var injections [#123](https://github.com/AlaskaAirlines/auro-badge/issues/123) ([05649e8](https://github.com/AlaskaAirlines/auro-badge/commit/05649e8581096f550cda2c67c46912f80fc2b220))

# [3.3.0](https://github.com/AlaskaAirlines/auro-badge/compare/v3.2.0...v3.3.0) (2024-11-15)


### Bug Fixes

* change a custom color token on pill example doc ([739c1b9](https://github.com/AlaskaAirlines/auro-badge/commit/739c1b917dae44ace2eb40b5235915f7b489fe8a))


### Features

* upgrade auro-library to 3.0.1 ([d343934](https://github.com/AlaskaAirlines/auro-badge/commit/d343934ced73e5cc55c2f8f23afce30a511c333e))


### Performance Improvements

* update library to 3.0.2 ([c7bc246](https://github.com/AlaskaAirlines/auro-badge/commit/c7bc2464a099497dc1061532bde5a64d8f981e12))

# [3.2.0](https://github.com/AlaskaAirlines/auro-badge/compare/v3.1.0...v3.2.0) (2024-11-01)


### Bug Fixes

* remove customsize attribute [#117](https://github.com/AlaskaAirlines/auro-badge/issues/117) ([ae610cd](https://github.com/AlaskaAirlines/auro-badge/commit/ae610cd1020b15db14e70dee39d8bab7c61f4539))
* set size of icon to lock it for this component [#117](https://github.com/AlaskaAirlines/auro-badge/issues/117) ([e4f7fd4](https://github.com/AlaskaAirlines/auro-badge/commit/e4f7fd46486a141de1a7cea1d77c374a51ca33c5))


### Features

* apply latest token ds-auro-icon-size [#117](https://github.com/AlaskaAirlines/auro-badge/issues/117) ([c21eab4](https://github.com/AlaskaAirlines/auro-badge/commit/c21eab413f59cd7781557c43f1b5caac8c695ab1))
* update auro-icon package [#117](https://github.com/AlaskaAirlines/auro-badge/issues/117) ([3bdd553](https://github.com/AlaskaAirlines/auro-badge/commit/3bdd553e2d3daeedf70f0baf65c9f15ba2a60cc4))


### Performance Improvements

* update dependencies ([3934a10](https://github.com/AlaskaAirlines/auro-badge/commit/3934a104b878e14f19bda087a85d7de24a303562))

# [3.1.0](https://github.com/AlaskaAirlines/auro-badge/compare/v3.0.1...v3.1.0) (2024-10-24)


### Features

* **api:** add register static method [#115](https://github.com/AlaskaAirlines/auro-badge/issues/115) ([e2d8e34](https://github.com/AlaskaAirlines/auro-badge/commit/e2d8e341005a380c3c024da945e9b8832b153622))


### Performance Improvements

* update dependency versions ([0dc805e](https://github.com/AlaskaAirlines/auro-badge/commit/0dc805eb5f746e1df233e6168285d282aa3a500c))

## [3.0.1](https://github.com/AlaskaAirlines/auro-badge/compare/v3.0.0...v3.0.1) (2024-10-09)


### Bug Fixes

* make auro-library a normal dep instead of devDep ([c0051c9](https://github.com/AlaskaAirlines/auro-badge/commit/c0051c95bcfcf7e8e3e3405cdb3304d2d7853182))

# [3.0.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.5.0...v3.0.0) (2024-09-30)


### Bug Fixes

* update commitlint rules config ([560b7a2](https://github.com/AlaskaAirlines/auro-badge/commit/560b7a2d5357406e3010f29ab83eb4b894efff2f))


### Features

* add all code necessary for theme support ([c2cd6f4](https://github.com/AlaskaAirlines/auro-badge/commit/c2cd6f4907dc9d51746732a3155157359422a850))
* force version bump and release ([921689a](https://github.com/AlaskaAirlines/auro-badge/commit/921689a42a90c477e92e55147e1f3ec294217a3d))


### Performance Improvements

* refactor custom component registration config ([70c1cb2](https://github.com/AlaskaAirlines/auro-badge/commit/70c1cb2e6f690524dea920c77dfae57db43bd6e1))
* update dependencies ([3df2530](https://github.com/AlaskaAirlines/auro-badge/commit/3df253079701ef652ad17a21452b211810fc74d7))


### BREAKING CHANGES

* trigger major release for color theme support #95

# [2.5.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.10...v2.5.0) (2024-07-04)


### Features

* add tier badges [#96](https://github.com/AlaskaAirlines/auro-badge/issues/96) ([7630a84](https://github.com/AlaskaAirlines/auro-badge/commit/7630a848fcec092d7a5a626e16a18f18e4e16d6a))
* **mvp:** add mvpgold75k variant ([11d7600](https://github.com/AlaskaAirlines/auro-badge/commit/11d76007e88e0ec49e237c92eeab8144a4de3746))

## [2.4.10](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.9...v2.4.10) (2024-02-29)


### Bug Fixes

* address issues with misconfigs ([3b27142](https://github.com/AlaskaAirlines/auro-badge/commit/3b27142bffca52ea648f088d5301ae8850b6da8a))


### Performance Improvements

* update dependencies ([8df9c7d](https://github.com/AlaskaAirlines/auro-badge/commit/8df9c7d98dca6c3fe4e3b96d5cce92f417ee8fcf))

## [2.4.9](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.8...v2.4.9) (2024-02-23)


### Performance Improvements

* **docs:** correct api doc build ([f11161f](https://github.com/AlaskaAirlines/auro-badge/commit/f11161f9a9974aac02098b56fd0edfb6a71303e6))

## [2.4.8](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.7...v2.4.8) (2024-02-13)


### Performance Improvements

* update auro dependencies ([f67d8d2](https://github.com/AlaskaAirlines/auro-badge/commit/f67d8d2a9b135d1437c01234757e1c6e2b110b32))

## [2.4.7](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.6...v2.4.7) (2024-02-10)


### Performance Improvements

* update postinstall to alert of peer dep ([73d904a](https://github.com/AlaskaAirlines/auro-badge/commit/73d904aca59594e922f7e7c28baa388b6cdd2f24))

## [2.4.6](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.5...v2.4.6) (2024-02-10)


### Performance Improvements

* update peer dependencies ([a5cab50](https://github.com/AlaskaAirlines/auro-badge/commit/a5cab5021aa90617201b75f20efa1f0565a0bd34))
* update peer dependencies ([ad253cc](https://github.com/AlaskaAirlines/auro-badge/commit/ad253cc6f0922e68ae92a8155c9d244ed08f06fa))

## [2.4.5](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.4...v2.4.5) (2024-02-10)


### Performance Improvements

* update SVG dependency ([1870744](https://github.com/AlaskaAirlines/auro-badge/commit/1870744499e89cf1b7160ea3a71df567f72ab651))

## [2.4.4](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.3...v2.4.4) (2024-02-10)


### Performance Improvements

* update dependencies - ES6 compatibility ([d0cb83a](https://github.com/AlaskaAirlines/auro-badge/commit/d0cb83a5a032a5d029199649e79df274034757da))

## [2.4.3](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.2...v2.4.3) (2024-02-09)


### Performance Improvements

* remove unused dependencies ([ee3710d](https://github.com/AlaskaAirlines/auro-badge/commit/ee3710dd0b16db07af684ddb8ca8cfa844daf7eb))
* update icons dependency ([aeabb6b](https://github.com/AlaskaAirlines/auro-badge/commit/aeabb6b93df6a2d7c86e490ec690ec10b911a923))

## [2.4.2](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.1...v2.4.2) (2024-02-09)


### Performance Improvements

* modernize documentation-related generator ([4130e6d](https://github.com/AlaskaAirlines/auro-badge/commit/4130e6d9027e72db26de76dfb890183b686d3973))

## [2.4.1](https://github.com/AlaskaAirlines/auro-badge/compare/v2.4.0...v2.4.1) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([07f22ec](https://github.com/AlaskaAirlines/auro-badge/commit/07f22ec2165120a2561507802d0c0265722e285e))
* **cdn:** update all references from unpkg to jsdelivr ([e40bbb1](https://github.com/AlaskaAirlines/auro-badge/commit/e40bbb1c2d9523a95f422b2f8855cdbb1643c2fc))

# [2.4.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.3.1...v2.4.0) (2024-01-18)


### Features

* add suport for SSR projects ([7980ca4](https://github.com/AlaskaAirlines/auro-badge/commit/7980ca47db5b9efcdc421ea9f0132b184c2eba8f))

## [2.3.1](https://github.com/AlaskaAirlines/auro-badge/compare/v2.3.0...v2.3.1) (2023-11-28)


### Performance Improvements

* **deps:** update WCSS peerDependencies ([818e48b](https://github.com/AlaskaAirlines/auro-badge/commit/818e48b38c26c99d6b2229ccc1a4ab7ea6ad1e5b))

# [2.3.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.2.1...v2.3.0) (2023-11-08)


### Features

* update to support new tokens and WCSS ([0fdf4e1](https://github.com/AlaskaAirlines/auro-badge/commit/0fdf4e1eea4f5f3158606f623a381bd5eed4fdfe))
* update to support Node 20 ([0677ff9](https://github.com/AlaskaAirlines/auro-badge/commit/0677ff9046a626356d79a41f93a6409177aedcfd))

## [2.2.1](https://github.com/AlaskaAirlines/auro-badge/compare/v2.2.0...v2.2.1) (2023-07-13)


### Performance Improvements

* update npm and git ignore files [#65](https://github.com/AlaskaAirlines/auro-badge/issues/65) ([a7a4d06](https://github.com/AlaskaAirlines/auro-badge/commit/a7a4d06543188195ae786c7cce4b8f9525e66500))

# [2.2.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.1.0...v2.2.0) (2023-06-12)


### Features

* add oneworld badges [#75](https://github.com/AlaskaAirlines/auro-badge/issues/75) ([a39ab83](https://github.com/AlaskaAirlines/auro-badge/commit/a39ab83b1b246e5a6ef2262a277cbc4f757072fd))

# [2.1.0](https://github.com/AlaskaAirlines/auro-badge/compare/v2.0.3...v2.1.0) (2023-06-12)


### Features

* ability to add icons to badges [#28](https://github.com/AlaskaAirlines/auro-badge/issues/28) ([690d790](https://github.com/AlaskaAirlines/auro-badge/commit/690d79013244e8f1a674f2aa0170294f50eb6a2c))


### Performance Improvements

* change ternary to if else per eslint ([813ad56](https://github.com/AlaskaAirlines/auro-badge/commit/813ad566e9b2479be1942640f20ddda6d71c981a))
* **icon:** improve usage of icons in content ([90c4cdf](https://github.com/AlaskaAirlines/auro-badge/commit/90c4cdf09c01acae46c98eb5cbd122b961192d33))

## [2.0.3](https://github.com/AlaskaAirlines/auro-badge/compare/v2.0.2...v2.0.3) (2023-05-12)


### Performance Improvements

* update depdenncy graph ([a76065e](https://github.com/AlaskaAirlines/auro-badge/commit/a76065ebdc7463dabde3d49adb602c0969091be0))

## [2.0.2](https://github.com/AlaskaAirlines/auro-badge/compare/v2.0.1...v2.0.2) (2023-04-18)


### Bug Fixes

* **npm:** update package config [#86](https://github.com/AlaskaAirlines/auro-badge/issues/86) ([caeb52f](https://github.com/AlaskaAirlines/auro-badge/commit/caeb52f7a8b59793cfac22cae1883bd7eb8f658a))

## [2.0.1](https://github.com/AlaskaAirlines/auro-badge/compare/v2.0.0...v2.0.1) (2023-04-18)


### Bug Fixes

* **npm:** update ignore to include src assets [#56](https://github.com/AlaskaAirlines/auro-badge/issues/56) ([d446c25](https://github.com/AlaskaAirlines/auro-badge/commit/d446c25a90f1093aaf6a7e72d196e80200f8c4ac))

# [2.0.0](https://github.com/AlaskaAirlines/auro-badge/compare/v1.2.4...v2.0.0) (2023-04-13)


### Documentation

* **npm:** update npm namespace [#37](https://github.com/AlaskaAirlines/auro-badge/issues/37) ([ebe7baa](https://github.com/AlaskaAirlines/auro-badge/commit/ebe7baa030903dc0a82b52faba2a1d2e8fd71b14))


### Features

* **ts:** add support for typescript users [#39](https://github.com/AlaskaAirlines/auro-badge/issues/39) ([6d960f0](https://github.com/AlaskaAirlines/auro-badge/commit/6d960f024e9c5227653b1a79332c142889f31623))


### Performance Improvements

* **demo styles:** remove local dependency [#34](https://github.com/AlaskaAirlines/auro-badge/issues/34) ([8d3dc13](https://github.com/AlaskaAirlines/auro-badge/commit/8d3dc139af200d6e11618db21b04cddcf36df1d3))
* **es5:** remove legacy bundle build process [#35](https://github.com/AlaskaAirlines/auro-badge/issues/35) ([5166da4](https://github.com/AlaskaAirlines/auro-badge/commit/5166da4e5046fda301b8a52dc8eba329b43ef0b9))
* **extend:** move customElements.define function to root [#44](https://github.com/AlaskaAirlines/auro-badge/issues/44) ([44ad8c8](https://github.com/AlaskaAirlines/auro-badge/commit/44ad8c86715e525590eeba7b73179f6f7589898c))
* **husky:** update to current version [#43](https://github.com/AlaskaAirlines/auro-badge/issues/43) ([f14f563](https://github.com/AlaskaAirlines/auro-badge/commit/f14f563fe871aac20b411c735343ebe32dfd6c35))
* **lit:** update component to Lit2.0 [#32](https://github.com/AlaskaAirlines/auro-badge/issues/32) ([2dbf150](https://github.com/AlaskaAirlines/auro-badge/commit/2dbf15073be19ba40f79649abdef4d72caae21b8))
* **node18:** update repo to support Node 18+ [#31](https://github.com/AlaskaAirlines/auro-badge/issues/31) ([8617c36](https://github.com/AlaskaAirlines/auro-badge/commit/8617c36d0867314bdf7ef1ea0183d41b2bb5ea64))
* **postCss:** remove legacy build services [#40](https://github.com/AlaskaAirlines/auro-badge/issues/40) ([651fcb7](https://github.com/AlaskaAirlines/auro-badge/commit/651fcb796725e4096562c5c99bf12f12da2d7817))
* **sass:** update to dart-sass [#42](https://github.com/AlaskaAirlines/auro-badge/issues/42) ([d8f40ff](https://github.com/AlaskaAirlines/auro-badge/commit/d8f40ffb8196e73ceff63d4d45ccc7e15fbd1087))
* **server:** update to use single shell [#33](https://github.com/AlaskaAirlines/auro-badge/issues/33) ([181aba8](https://github.com/AlaskaAirlines/auro-badge/commit/181aba8a283174b25abf65d7699b305f962b5efe))


### BREAKING CHANGES

* **npm:** This update will redefine the npm namespace
for the auro-badge element.

Changes to be committed:
modified:   README.md
modified:   package.json

## [1.2.4](https://github.com/AlaskaAirlines/auro-badge/compare/v1.2.3...v1.2.4) (2022-02-16)


### Bug Fixes

* adjustments to label variant [#19](https://github.com/AlaskaAirlines/auro-badge/issues/19) ([1528cb9](https://github.com/AlaskaAirlines/auro-badge/commit/1528cb9490bafdba4055a830e7576daf99df4759))

## [1.2.3](https://github.com/AlaskaAirlines/auro-badge/compare/v1.2.2...v1.2.3) (2021-05-27)


### Bug Fixes

* reflect attributes used for styling ([cb2188b](https://github.com/AlaskaAirlines/auro-badge/commit/cb2188bf9b34b32028f214395d65e241447393a5))

## [1.2.2](https://github.com/AlaskaAirlines/auro-badge/compare/v1.2.1...v1.2.2) (2021-03-02)


### Bug Fixes

* update label border color ([40a61e4](https://github.com/AlaskaAirlines/auro-badge/commit/40a61e4ebe69fa2e729da530b173becff190524f))

## [1.2.1](https://github.com/AlaskaAirlines/auro-badge/compare/v1.2.0...v1.2.1) (2021-01-29)


### Bug Fixes

* address miss in version update ([74bc2ef](https://github.com/AlaskaAirlines/auro-badge/commit/74bc2ef2f5b09ea015468f3dfb0e3b247b7b3689))

# [1.2.0](https://github.com/AlaskaAirlines/auro-badge/compare/v1.1.0...v1.2.0) (2021-01-28)


### Features

* **label:** add 'label option for new flightresult component' option ([3fe97f1](https://github.com/AlaskaAirlines/auro-badge/commit/3fe97f1b1ffde6371b3619dec5644e48566ecbb0))

# [1.1.0](https://github.com/AlaskaAirlines/auro-badge/compare/v1.0.0...v1.1.0) (2020-12-18)


### Features

* add px fixed feature ([9964c2b](https://github.com/AlaskaAirlines/auro-badge/commit/9964c2b54a6f555a9729f0b09686772876683d0a))

# 1.0.0 (2020-12-18)


### Bug Fixes

* a11y role ([400bb5b](https://github.com/AlaskaAirlines/auro-badge/commit/400bb5bc0ed87af10190baef4b294baee091b6b9))


### Features

* a11y for button action ([6f36221](https://github.com/AlaskaAirlines/auro-badge/commit/6f36221ccaf91a61ebefbc5c008b1cb8bcc7fa79))
* add badge action tests ([8f3451b](https://github.com/AlaskaAirlines/auro-badge/commit/8f3451ba9ca191442c573a9b24b54d2071a69b3d))
* add tests ([804fced](https://github.com/AlaskaAirlines/auro-badge/commit/804fced593bf0eea847f164db2921db038bdaf11))
* fixes test and addresses PR feedback ([77d50ff](https://github.com/AlaskaAirlines/auro-badge/commit/77d50ffb2958dccc79962780efb75e8ddab68a3a))
* initial badge impl ([5c70630](https://github.com/AlaskaAirlines/auro-badge/commit/5c7063050873d3344d64fddf9fd7212e10f36a33))
