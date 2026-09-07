# 설치
## next.js
```shell
pnpm dlx create-next-app@latest
```
## 의존성
### prettier
```shell
pnpm add -D prettier @trivago/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```
### svgr
```shell
pnpm add -D @svgr/webpack
```
### tanstack query
```shell
pnpm add @tanstack/react-query
```
### zustand
```shell
pnpm add zustand
```
### react hook form
```shell
pnpm add react-hook-form
```
### zod
```shell
pnpm add zod
```

## 
# 구조
```
next.js-structure
┣ .github
┃ ┣ ISSUE_TEMPLATE
┃ ┃ ┣ bug-report-template.md
┃ ┃ ┗ feature-request-template.md
┃ ┣ workflows
┃ ┃ ┣ dev-deploy.yml
┃ ┃ ┗ main-deploy.yml
┃ ┣ CODEOWNERS
┃ ┗ PULL_REQUEST_TEMPLATE.md
┣ scripts
┃ ┗ .gitkeep
┣ src
┃ ┣ apis
┃ ┃ ┗ $Apis.ts
┃ ┣ app
┃ ┃ ┣ actions
┃ ┃ ┃ ┗ $Actoins.ts
┃ ┃ ┣ api
┃ ┃ ┃ ┗ route.ts
┃ ┃ ┣ layout.tsx
┃ ┃ ┗ page.tsx
┃ ┣ assets
┃ ┃ ┣ fonts
┃ ┃ ┃ ┗ PretendardVariable.woff2
┃ ┃ ┣ images
┃ ┃ ┃ ┗ .gitkeep
┃ ┃ ┗ svgs
┃ ┃ ┃ ┗ icons.ts
┃ ┣ components
┃ ┃ ┣ layout
┃ ┃ ┃ ┗ .gitkeep
┃ ┃ ┗ ui
┃ ┃ ┃ ┗ .gitkeep
┃ ┣ config
┃ ┃ ┣ env.ts
┃ ┃ ┗ httpRequestHeaders.ts
┃ ┣ constants
┃ ┃ ┣ apiEndpoints.ts
┃ ┃ ┣ httpMethod.ts
┃ ┃ ┣ index.ts
┃ ┃ ┣ routes.ts
┃ ┃ ┗ timeConstants.ts
┃ ┣ contexts
┃ ┃ ┗ $StoreContext.ts
┃ ┣ hooks
┃ ┃ ┣ disclosure
┃ ┃ ┃ ┗ useDisclosure.ts
┃ ┃ ┣ state
┃ ┃ ┃ ┣ use$ZustandStore.ts
┃ ┃ ┃ ┗ useContext.ts
┃ ┃ ┣ tanstack
┃ ┃ ┃ ┣ mutations
┃ ┃ ┃ ┃ ┗ use$Mutation.ts
┃ ┃ ┃ ┣ queries
┃ ┃ ┃ ┃ ┗ use$Query.ts
┃ ┃ ┃ ┗ queryKeys
┃ ┃ ┃ ┃ ┣ $QueryKeys.ts
┃ ┃ ┃ ┃ ┗ index.ts
┃ ┃ ┗ .DS_Store
┃ ┣ lib
┃ ┃ ┗ .gitkeep
┃ ┣ providers
┃ ┃ ┣ QueryProvider.tsx
┃ ┃ ┗ ZustandStoreProvider.tsx
┃ ┣ schemas
┃ ┃ ┣ $zodSchemas.ts
┃ ┃ ┗ index.ts
┃ ┣ stores
┃ ┃ ┗ $Store.ts
┃ ┣ styles
┃ ┃ ┣ tailwindStyles
┃ ┃ ┃ ┗ index.ts
┃ ┃ ┗ globals.css
┃ ┣ types
┃ ┃ ┣ api
┃ ┃ ┃ ┣ errorTypes.ts
┃ ┃ ┃ ┣ index.ts
┃ ┃ ┃ ┗ responseTypes.ts
┃ ┃ ┣ $Types.ts
┃ ┃ ┣ index.ts
┃ ┃ ┣ svgr.d.ts
┃ ┃ ┗ typeUtils.ts
┃ ┣ utils
┃ ┃ ┣ cookie.ts
┃ ┃ ┣ handleError.ts
┃ ┃ ┣ stateUtills.ts
┃ ┃ ┣ stringUtils.ts
┃ ┃ ┗ timeCalculation.ts
┃ ┗ proxy.ts
┣ .env.local
┣ .gitignore
┣ .prettierignore
┣ .prettierrc
┣ README.md
┣ eslint.config.mjs
┣ next.config.ts
┣ package.json
┣ pnpm-lock.yaml
┣ pnpm-workspace.yaml
┣ postcss.config.mjs
┗ tsconfig.json
 ```
