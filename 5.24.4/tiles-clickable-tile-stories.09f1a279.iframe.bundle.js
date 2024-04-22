"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[3719],{"./src/tiles/clickable-tile.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithLayers:()=>WithLayers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layer/index.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tiles/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tiles/Clickable",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_2__.i$,_layer__WEBPACK_IMPORTED_MODULE_1__.D]})],component:___WEBPACK_IMPORTED_MODULE_2__.Oh},Basic=(args=>({props:args,template:'\n        <cds-clickable-tile\n            [disabled]="disabled"\n            [href]="href"\n            target="_blank">\n            Click the tile to open the Carbon Design System\n        </cds-clickable-tile>\n    '})).bind({});Basic.args={href:"https://www.carbondesignsystem.com/"};const WithLayers=(args=>({props:args,template:"\n        <cds-clickable-tile>\n            First layer\n        </cds-clickable-tile>\n        <div cdsLayer>\n            <cds-clickable-tile>\n                Second layer\n            </cds-clickable-tile>\n            <div cdsLayer>\n                <cds-clickable-tile>Third layer</cds-clickable-tile>\n            </div>\n        </div>\n    "})).bind({});WithLayers.parameters={controls:{disable:!0}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => ({\n  props: args,\n  template: `\n        <cds-clickable-tile\n            [disabled]="disabled"\n            [href]="href"\n            target="_blank">\n            Click the tile to open the Carbon Design System\n        </cds-clickable-tile>\n    `\n})',...Basic.parameters?.docs?.source}}},WithLayers.parameters={...WithLayers.parameters,docs:{...WithLayers.parameters?.docs,source:{originalSource:"args => ({\n  props: args,\n  template: `\n        <cds-clickable-tile>\n            First layer\n        </cds-clickable-tile>\n        <div cdsLayer>\n            <cds-clickable-tile>\n                Second layer\n            </cds-clickable-tile>\n            <div cdsLayer>\n                <cds-clickable-tile>Third layer</cds-clickable-tile>\n            </div>\n        </div>\n    `\n})",...WithLayers.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","WithLayers"]}}]);