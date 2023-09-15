module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss",
  ],
  rules: {
    "scss/operator-no-newline-after": null,
    "at-rule-no-unknown": null,
    "color-hex-length": "long",

    "declaration-property-value-disallowed-list": {
      "/^transition/": ["/all/"],
    },
    "max-nesting-depth": 3,
    "no-empty-source": true,
    "order/properties-alphabetical-order": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "scss/at-else-if-parentheses-space-before": "never",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/map-keys-quotes": "always", // $test: ("foo": 14px, "bar": 25px);
    "scss/no-duplicate-dollar-variables": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "unit-allowed-list": [
      "fr",
      "rem",
      "px",
      "%",
      "s",
      "ms",
      "em",
      "deg",
      "vh",
      "vw",
      "rpx",
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ],
    "selector-class-pattern":
      "^[a-z0-9\\-]+(__[a-z0-9\\-]+)?(--[a-z0-9\\-]+)?$",
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
  },
};
