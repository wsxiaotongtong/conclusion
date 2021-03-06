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
              "value": "总结",
              "heading": "总结"
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
              "value": "编译器和转译器",
              "heading": "编译器和转译器"
            },
            {
              "depth": 4,
              "value": "babel 编译流程",
              "heading": "babel-编译流程"
            },
            {
              "depth": 4,
              "value": "AST 节点",
              "heading": "ast-节点"
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
              "value": "移动零",
              "heading": "移动零"
            },
            {
              "depth": 4,
              "value": "盛最多水的容器",
              "heading": "盛最多水的容器"
            },
            {
              "depth": 4,
              "value": "三数之和",
              "heading": "三数之和"
            },
            {
              "depth": 4,
              "value": "移除元素",
              "heading": "移除元素"
            },
            {
              "depth": 4,
              "value": "旋转数组",
              "heading": "旋转数组"
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
              "value": "两两交换链表中的节点",
              "heading": "两两交换链表中的节点"
            },
            {
              "depth": 4,
              "value": "反转链表",
              "heading": "反转链表"
            },
            {
              "depth": 4,
              "value": "两数相加",
              "heading": "两数相加"
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
              "value": "有效的括号",
              "heading": "有效的括号"
            },
            {
              "depth": 4,
              "value": "有效的括号",
              "heading": "有效的括号-1"
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
              "value": "根据 Promise/A+ 规范实现 Promise",
              "heading": "根据-promisea-规范实现-promise"
            },
            {
              "depth": 4,
              "value": "1.Promise 状态",
              "heading": "1promise-状态"
            },
            {
              "depth": 4,
              "value": "2.then 方法",
              "heading": "2then-方法"
            },
            {
              "depth": 4,
              "value": "3.Promise 解决程序 [[Resolve]](promise, x)",
              "heading": "3promise-解决程序-resolvepromise-x"
            },
            {
              "depth": 4,
              "value": "4.promise 实现",
              "heading": "4promise-实现"
            },
            {
              "depth": 4,
              "value": "5.测试 promise",
              "heading": "5测试-promise"
            }
          ],
          "title": "根据 Promise/A+ 规范实现 Promise",
          "group": {
            "path": "/promise",
            "title": "Promise"
          }
        },
        "title": "根据 Promise/A+ 规范实现 Promise"
      },
      {
        "path": "/浏览器方面/宏观看浏览器",
        "component": require('/Users/wangshun/Desktop/conclusion/src/浏览器方面/宏观看浏览器.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/浏览器方面/宏观看浏览器.md",
          "updatedTime": 1628154593138,
          "slugs": [
            {
              "depth": 3,
              "value": "浏览器\b",
              "heading": "浏览器\b"
            },
            {
              "depth": 4,
              "value": "浏览器多进程架构",
              "heading": "浏览器多进程架构"
            },
            {
              "depth": 4,
              "value": "TCP协议",
              "heading": "tcp协议"
            },
            {
              "depth": 5,
              "value": "你怎么理解 HTTP 和 TCP 的关系？",
              "heading": "你怎么理解-http-和-tcp-的关系？"
            },
            {
              "depth": 4,
              "value": "HTTP请求流程",
              "heading": "http请求流程"
            },
            {
              "depth": 4,
              "value": "URL输入到页面展示经历了什么？",
              "heading": "url输入到页面展示经历了什么？"
            },
            {
              "depth": 5,
              "value": "用户输入",
              "heading": "用户输入"
            },
            {
              "depth": 5,
              "value": "URL 请求",
              "heading": "url-请求"
            },
            {
              "depth": 5,
              "value": "准备渲染进程",
              "heading": "准备渲染进程"
            },
            {
              "depth": 5,
              "value": "提交文档",
              "heading": "提交文档"
            },
            {
              "depth": 5,
              "value": "渲染",
              "heading": "渲染"
            }
          ],
          "title": "浏览器\b",
          "group": {
            "path": "/浏览器方面",
            "title": "浏览器方面"
          }
        },
        "title": "浏览器\b"
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
        "path": "/浏览器方面",
        "meta": {},
        "exact": true,
        "redirect": "/浏览器方面/宏观看浏览器"
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
