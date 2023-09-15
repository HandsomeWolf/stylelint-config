# 使用说明

## @handsomewolf/stylelint-config

1. 先安装依赖

如果是vue项目，需要安装postcss-html；如果是纯sass，与vue无关的项目只需要安装@handsomewolf/stylelint-config

```base
npm i stylelint postcss-html @handsomewolf/stylelint-config -D

或

pnpm i stylelint postcss-html @handsomewolf/stylelint-config -D
```

2. 在项目根目录新增 `.stylelintrc.json` 文件，内容为：

```json
{
  "extends": ["@handsomewolf/stylelint-config"]
}
```

3. 如果是vscode编辑器，请在根目录的 `.vscode/settings.json` 文件中新增

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": ["css", "scss", "less", "vue", "postcss"]
}
```

默认格式化工具使用prettier，因为stylelint官方会在将来废弃掉与格式化相关的配置。
