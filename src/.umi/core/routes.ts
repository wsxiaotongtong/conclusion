// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/wangshun/Desktop/conclusion/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/wangshun/Desktop/conclusion/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/wangshun/Desktop/conclusion/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/wangshun/Desktop/conclusion/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/wangshun/Desktop/conclusion/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/react/element",
        "component": require('/Users/wangshun/Desktop/conclusion/src/React/element.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/React/element.md",
          "updatedTime": 1617269408000,
          "slugs": [
            {
              "depth": 2,
              "value": "ReactElement",
              "heading": "reactelement"
            },
            {
              "depth": 5,
              "value": "??????",
              "heading": "??????"
            }
          ],
          "title": "ReactElement",
          "group": {
            "path": "/react",
            "title": "React"
          }
        },
        "title": "ReactElement"
      },
      {
        "path": "/react",
        "component": require('/Users/wangshun/Desktop/conclusion/src/React/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/React/index.md",
          "updatedTime": 1616751089000,
          "slugs": [
            {
              "depth": 2,
              "value": "React API",
              "heading": "react-api"
            },
            {
              "depth": 3,
              "value": "React.Children",
              "heading": "reactchildren"
            },
            {
              "depth": 3,
              "value": "React.createRef",
              "heading": "reactcreateref"
            },
            {
              "depth": 3,
              "value": "Component & PureComponent",
              "heading": "component--purecomponent"
            },
            {
              "depth": 3,
              "value": "createContext",
              "heading": "createcontext"
            },
            {
              "depth": 3,
              "value": "createElement",
              "heading": "createelement"
            }
          ],
          "title": "React API",
          "group": {
            "path": "/react",
            "title": "React"
          }
        },
        "title": "React API"
      },
      {
        "path": "/babel",
        "component": require('/Users/wangshun/Desktop/conclusion/src/babel/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/babel/index.md",
          "updatedTime": 1622721509000,
          "slugs": [
            {
              "depth": 2,
              "value": "Babel",
              "heading": "babel"
            },
            {
              "depth": 4,
              "value": "?????????????????????",
              "heading": "?????????????????????"
            },
            {
              "depth": 4,
              "value": "babel ????????????",
              "heading": "babel-????????????"
            },
            {
              "depth": 4,
              "value": "AST ??????",
              "heading": "ast-??????"
            }
          ],
          "title": "Babel",
          "group": {
            "path": "/babel",
            "title": "Babel"
          }
        },
        "title": "Babel"
      },
      {
        "path": "/leetcode",
        "component": require('/Users/wangshun/Desktop/conclusion/src/leetcode/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/leetcode/index.md",
          "updatedTime": 1618151108512,
          "slugs": [
            {
              "depth": 2,
              "value": "Array",
              "heading": "array"
            },
            {
              "depth": 4,
              "value": "?????????",
              "heading": "?????????"
            },
            {
              "depth": 4,
              "value": "?????????????????????",
              "heading": "?????????????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "title": "Array",
          "group": {
            "path": "/leetcode",
            "title": "Leetcode"
          }
        },
        "title": "Array"
      },
      {
        "path": "/leetcode/link",
        "component": require('/Users/wangshun/Desktop/conclusion/src/leetcode/link.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/leetcode/link.md",
          "updatedTime": 1618151108544,
          "slugs": [
            {
              "depth": 2,
              "value": "LinkList",
              "heading": "linklist"
            },
            {
              "depth": 4,
              "value": "??????????????????????????????",
              "heading": "??????????????????????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "title": "LinkList",
          "group": {
            "path": "/leetcode",
            "title": "Leetcode"
          }
        },
        "title": "LinkList"
      },
      {
        "path": "/leetcode/stack",
        "component": require('/Users/wangshun/Desktop/conclusion/src/leetcode/stack.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/leetcode/stack.md",
          "updatedTime": 1618151108558,
          "slugs": [
            {
              "depth": 2,
              "value": "Stack",
              "heading": "stack"
            },
            {
              "depth": 4,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 4,
              "value": "???????????????",
              "heading": "???????????????-1"
            }
          ],
          "title": "Stack",
          "group": {
            "path": "/leetcode",
            "title": "Leetcode"
          }
        },
        "title": "Stack"
      },
      {
        "path": "/promise/impl-promise",
        "component": require('/Users/wangshun/Desktop/conclusion/src/promise/implPromise.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/promise/implPromise.md",
          "updatedTime": 1617096626000,
          "slugs": [
            {
              "depth": 3,
              "value": "?????? Promise/A+ ???????????? Promise",
              "heading": "??????-promisea-????????????-promise"
            },
            {
              "depth": 4,
              "value": "1.Promise ??????",
              "heading": "1promise-??????"
            },
            {
              "depth": 4,
              "value": "2.then ??????",
              "heading": "2then-??????"
            },
            {
              "depth": 4,
              "value": "3.Promise ???????????? [[Resolve]](promise, x)",
              "heading": "3promise-????????????-resolvepromise-x"
            },
            {
              "depth": 4,
              "value": "4.promise ??????",
              "heading": "4promise-??????"
            },
            {
              "depth": 4,
              "value": "5.?????? promise",
              "heading": "5??????-promise"
            }
          ],
          "title": "?????? Promise/A+ ???????????? Promise",
          "group": {
            "path": "/promise",
            "title": "Promise"
          }
        },
        "title": "?????? Promise/A+ ???????????? Promise"
      },
      {
        "path": "/???????????????/??????????????????",
        "component": require('/Users/wangshun/Desktop/conclusion/src/???????????????/??????????????????.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/???????????????/??????????????????.md",
          "updatedTime": 1628154593138,
          "slugs": [
            {
              "depth": 3,
              "value": "?????????\b",
              "heading": "?????????\b"
            },
            {
              "depth": 4,
              "value": "????????????????????????",
              "heading": "????????????????????????"
            },
            {
              "depth": 4,
              "value": "TCP??????",
              "heading": "tcp??????"
            },
            {
              "depth": 5,
              "value": "??????????????? HTTP ??? TCP ????????????",
              "heading": "???????????????-http-???-tcp-????????????"
            },
            {
              "depth": 4,
              "value": "HTTP????????????",
              "heading": "http????????????"
            },
            {
              "depth": 4,
              "value": "URL???????????????????????????????????????",
              "heading": "url???????????????????????????????????????"
            },
            {
              "depth": 5,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 5,
              "value": "URL ??????",
              "heading": "url-??????"
            },
            {
              "depth": 5,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 5,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 5,
              "value": "??????",
              "heading": "??????"
            }
          ],
          "title": "?????????\b",
          "group": {
            "path": "/???????????????",
            "title": "???????????????"
          }
        },
        "title": "?????????\b"
      },
      {
        "path": "/",
        "component": require('/Users/wangshun/Desktop/conclusion/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1616751089000,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello XTT!",
              "heading": "hello-xtt"
            }
          ],
          "title": "Hello XTT!"
        },
        "title": "Hello XTT!"
      },
      {
        "path": "/promise",
        "meta": {},
        "exact": true,
        "redirect": "/promise/impl-promise"
      },
      {
        "path": "/???????????????",
        "meta": {},
        "exact": true,
        "redirect": "/???????????????/??????????????????"
      }
    ],
    "title": "XTT",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
