"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/TutorialSteps/Windows/Steps/WindowsStepFive.tsx":
/*!************************************************************************!*\
  !*** ./src/components/TutorialSteps/Windows/Steps/WindowsStepFive.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable */ \"(app-pages-browser)/./node_modules/react-swipeable/es/index.js\");\n/* harmony import */ var _Steps_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Steps-styles */ \"(app-pages-browser)/./src/components/TutorialSteps/Steps-styles.tsx\");\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _Common_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Common/Modal/Modal */ \"(app-pages-browser)/./src/components/Common/Modal/Modal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst WindowsStepFive = ()=>{\n    _s();\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedImage, setSelectedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/images/Windows/WindowsStepFive.webp\");\n    const [modalImages, setModalImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const images = [\n        {\n            src: \"/images/Windows/WindowsStepFive.webp\",\n            alt: \"step1\"\n        },\n        {\n            src: \"/images/Windows/WindowsStepFive2.webp\",\n            alt: \"step2\"\n        }\n    ];\n    // Only re-render the modal when the openModal state changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (openModal) {\n            setModalImages([\n                selectedImage,\n                ...images.filter((img)=>img.src !== selectedImage).map((img)=>img.src)\n            ]);\n        }\n    }, [\n        openModal\n    ]);\n    const imageSwipeHandlers = (0,react_swipeable__WEBPACK_IMPORTED_MODULE_4__.useSwipeable)({\n        onSwipedLeft: ()=>setSelectedImage((prevState)=>{\n                const currentIndex = images.findIndex((image)=>image.src === prevState);\n                const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;\n                return images[nextIndex].src;\n            }),\n        onSwipedRight: ()=>setSelectedImage((prevState)=>{\n                const currentIndex = images.findIndex((image)=>image.src === prevState);\n                const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;\n                return images[nextIndex].src;\n            }),\n        swipeDuration: 500,\n        preventScrollOnSwipe: true,\n        trackMouse: true\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.StepCard, {\n                container: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: true,\n                        lg: 6,\n                        md: 12,\n                        sm: 12,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.StepColumn, {\n                            container: true,\n                            direction: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.MuseoFont, {\n                                    variant: \"h3\",\n                                    children: [\n                                        \"If your core is not running when launching the Qortal UI, you will be automatically prompted to start it. Click the button\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            style: {\n                                                fontWeight: \"bold\"\n                                            },\n                                            children: \"START QORTAL CORE\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \" to start the core.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.MuseoFont, {\n                                    variant: \"h3\",\n                                    children: \"You may optionally choose to have the core start automatically when you launch the Qortal UI by checking the box at the bottom of the modal.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.MuseoFont, {\n                                    variant: \"h3\",\n                                    children: \"This option can later be changed by right clicking on the Qortal UI icon in the bottom right\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.ScreenshotColumn, {\n                        ...imageSwipeHandlers,\n                        item: true,\n                        lg: 6,\n                        md: 12,\n                        xs: 12,\n                        sx: {\n                            objectFit: \"contain\",\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\"\n                        },\n                        children: [\n                            images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.ScreenshotContainer, {\n                                    onClick: ()=>{\n                                        setOpenModal(true);\n                                        setSelectedImage(image.src);\n                                    },\n                                    style: {\n                                        display: image.src === selectedImage ? \"block\" : \"none\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.Screenshot, {\n                                            sx: {\n                                                objectFit: \"contain\"\n                                            },\n                                            src: image.src,\n                                            alt: image.alt\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.MagnifyingGlass, {\n                                            id: \"magnifying-glass\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.ImageToggleRow, {\n                                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Steps_styles__WEBPACK_IMPORTED_MODULE_2__.ImageToggleDot, {\n                                        onClick: ()=>setSelectedImage(image.src),\n                                        selected: image.src === selectedImage\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                images: modalImages,\n                onImageChangeFunc: (image)=>setSelectedImage(image),\n                openModal: openModal,\n                onClickFunc: ()=>setOpenModal(false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justi\\\\Documentos\\\\qortal-marketing-page\\\\src\\\\components\\\\TutorialSteps\\\\Windows\\\\Steps\\\\WindowsStepFive.tsx\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WindowsStepFive, \"IfjwTn+74dTOewyvwzPR9JCZPFo=\", false, function() {\n    return [\n        react_swipeable__WEBPACK_IMPORTED_MODULE_4__.useSwipeable\n    ];\n});\n_c = WindowsStepFive;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindowsStepFive);\nvar _c;\n$RefreshReg$(_c, \"WindowsStepFive\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1R1dG9yaWFsU3RlcHMvV2luZG93cy9TdGVwcy9XaW5kb3dzU3RlcEZpdmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRDtBQVduQjtBQUNxQjtBQUNEO0FBSWhELE1BQU1jLGtCQUE0Qzs7SUFDaEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNpQixlQUFlQyxpQkFBaUIsR0FBR2xCLCtDQUFRQSxDQUFTO0lBQzNELE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFXLEVBQUU7SUFHM0QsTUFBTXFCLFNBQVM7UUFDYjtZQUNFQyxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsS0FBSztRQUNQO0tBQ0Q7SUFFQyw0REFBNEQ7SUFFNUR0QixnREFBU0EsQ0FBQztRQUNSLElBQUljLFdBQVc7WUFDYkssZUFBZTtnQkFDYkg7bUJBQ0dJLE9BQ0FHLE1BQU0sQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSCxHQUFHLEtBQUtMLGVBQzVCUyxHQUFHLENBQUMsQ0FBQ0QsTUFBUUEsSUFBSUgsR0FBRzthQUN4QjtRQUNIO0lBQ0YsR0FBRztRQUFDUDtLQUFVO0lBR2hCLE1BQU1ZLHFCQUFxQnpCLDZEQUFZQSxDQUFDO1FBQ3RDMEIsY0FBYyxJQUNaVixpQkFBaUIsQ0FBQ1c7Z0JBQ2hCLE1BQU1DLGVBQWVULE9BQU9VLFNBQVMsQ0FDbkMsQ0FBQ0MsUUFBVUEsTUFBTVYsR0FBRyxLQUFLTztnQkFFM0IsTUFBTUksWUFDSkgsaUJBQWlCLElBQUlULE9BQU9hLE1BQU0sR0FBRyxJQUFJSixlQUFlO2dCQUMxRCxPQUFPVCxNQUFNLENBQUNZLFVBQVUsQ0FBQ1gsR0FBRztZQUM5QjtRQUNGYSxlQUFlLElBQ2JqQixpQkFBaUIsQ0FBQ1c7Z0JBQ2hCLE1BQU1DLGVBQWVULE9BQU9VLFNBQVMsQ0FDbkMsQ0FBQ0MsUUFBVUEsTUFBTVYsR0FBRyxLQUFLTztnQkFFM0IsTUFBTUksWUFDSkgsaUJBQWlCVCxPQUFPYSxNQUFNLEdBQUcsSUFBSSxJQUFJSixlQUFlO2dCQUMxRCxPQUFPVCxNQUFNLENBQUNZLFVBQVUsQ0FBQ1gsR0FBRztZQUM5QjtRQUNGYyxlQUFlO1FBQ2ZDLHNCQUFzQjtRQUN0QkMsWUFBWTtJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDNUIsbURBQVFBO2dCQUFDNkIsU0FBUzs7a0NBQ2pCLDhEQUFDM0IsZ0ZBQUlBO3dCQUFDNEIsSUFBSTt3QkFBQ0MsSUFBSTt3QkFBR0MsSUFBSTt3QkFBSUMsSUFBSTt3QkFBSUMsSUFBSTtrQ0FDcEMsNEVBQUNqQyxxREFBVUE7NEJBQUM0QixTQUFTOzRCQUFDTSxXQUFVOzs4Q0FDOUIsOERBQUN2QyxvREFBU0E7b0NBQUN3QyxTQUFROzt3Q0FBSzt3Q0FFa0M7c0RBQ3hELDhEQUFDQzs0Q0FBS0MsT0FBTztnREFBRUMsWUFBWTs0Q0FBTztzREFBRzs7Ozs7O3dDQUF3Qjs7Ozs7Ozs4Q0FHL0QsOERBQUMzQyxvREFBU0E7b0NBQUN3QyxTQUFROzhDQUFLOzs7Ozs7OENBS3hCLDhEQUFDeEMsb0RBQVNBO29DQUFDd0MsU0FBUTs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTVCLDhEQUFDdEMsMkRBQWdCQTt3QkFDZCxHQUFHbUIsa0JBQWtCO3dCQUN0QmEsSUFBSTt3QkFDSkMsSUFBSTt3QkFDSkMsSUFBSTt3QkFDSkUsSUFBSTt3QkFDSk0sSUFBSTs0QkFDRkMsV0FBVzs0QkFDWEMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsZ0JBQWdCO3dCQUNsQjs7NEJBRUNqQyxPQUFPSyxHQUFHLENBQUMsQ0FBQ00sT0FBT3VCLHNCQUNsQiw4REFBQzlDLDhEQUFtQkE7b0NBRWxCK0MsU0FBUzt3Q0FDUHhDLGFBQWE7d0NBQ2JFLGlCQUFpQmMsTUFBTVYsR0FBRztvQ0FDNUI7b0NBQ0EwQixPQUFPO3dDQUNMSSxTQUFTcEIsTUFBTVYsR0FBRyxLQUFLTCxnQkFBZ0IsVUFBVTtvQ0FDbkQ7O3NEQUVBLDhEQUFDVixxREFBVUE7NENBQ1QyQyxJQUFJO2dEQUFFQyxXQUFXOzRDQUFVOzRDQUMzQjdCLEtBQUtVLE1BQU1WLEdBQUc7NENBQ2RDLEtBQUtTLE1BQU1ULEdBQUc7Ozs7OztzREFFaEIsOERBQUNsQiwwREFBZUE7NENBQUNvRCxJQUFHOzs7Ozs7O21DQWRmRjs7Ozs7MENBaUJULDhEQUFDbkQseURBQWNBOzBDQUNaaUIsT0FBT0ssR0FBRyxDQUFDLENBQUNNLE9BQU91QixzQkFDbEIsOERBQUNwRCx5REFBY0E7d0NBRWJxRCxTQUFTLElBQU10QyxpQkFBaUJjLE1BQU1WLEdBQUc7d0NBQ3pDb0MsVUFBVTFCLE1BQU1WLEdBQUcsS0FBS0w7dUNBRm5Cc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRZHhDLDJCQUNDLDhEQUFDRiwyREFBS0E7Z0JBQ0pRLFFBQVFGO2dCQUNSd0MsbUJBQW1CLENBQUMzQixRQUFVZCxpQkFBaUJjO2dCQUMvQ2pCLFdBQVdBO2dCQUNYNkMsYUFBYSxJQUFNNUMsYUFBYTs7Ozs7Ozs7QUFLMUM7R0FsSU1GOztRQStCdUJaLHlEQUFZQTs7O0tBL0JuQ1k7QUFvSU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHV0b3JpYWxTdGVwcy9XaW5kb3dzL1N0ZXBzL1dpbmRvd3NTdGVwRml2ZS50c3g/NzgzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTd2lwZWFibGUgfSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgSW1hZ2VUb2dnbGVEb3QsXHJcbiAgSW1hZ2VUb2dnbGVSb3csXHJcbiAgTWFnbmlmeWluZ0dsYXNzLFxyXG4gIE11c2VvRm9udCxcclxuICBTY3JlZW5zaG90LFxyXG4gIFNjcmVlbnNob3RDb2x1bW4sXHJcbiAgU2NyZWVuc2hvdENvbnRhaW5lcixcclxuICBTdGVwQ2FyZCxcclxuICBTdGVwQ29sdW1uLFxyXG59IGZyb20gXCIuLi8uLi9TdGVwcy1zdHlsZXNcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vLi4vQ29tbW9uL01vZGFsL01vZGFsXCI7XHJcblxyXG5pbnRlcmZhY2UgV2luZG93c1N0ZXBGaXZlUHJvcHMge31cclxuXHJcbmNvbnN0IFdpbmRvd3NTdGVwRml2ZTogRkM8V2luZG93c1N0ZXBGaXZlUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIi9pbWFnZXMvV2luZG93cy9XaW5kb3dzU3RlcEZpdmUud2VicFwiKTtcclxuICBjb25zdCBbbW9kYWxJbWFnZXMsIHNldE1vZGFsSW1hZ2VzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcblxyXG5cclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL1dpbmRvd3MvV2luZG93c1N0ZXBGaXZlLndlYnBcIixcclxuICAgICAgYWx0OiBcInN0ZXAxXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9XaW5kb3dzL1dpbmRvd3NTdGVwRml2ZTIud2VicFwiLFxyXG4gICAgICBhbHQ6IFwic3RlcDJcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgICAvLyBPbmx5IHJlLXJlbmRlciB0aGUgbW9kYWwgd2hlbiB0aGUgb3Blbk1vZGFsIHN0YXRlIGNoYW5nZXNcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAob3Blbk1vZGFsKSB7XHJcbiAgICAgICAgc2V0TW9kYWxJbWFnZXMoW1xyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZSxcclxuICAgICAgICAgIC4uLmltYWdlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChpbWcpID0+IGltZy5zcmMgIT09IHNlbGVjdGVkSW1hZ2UpXHJcbiAgICAgICAgICAgIC5tYXAoKGltZykgPT4gaW1nLnNyYyksXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtvcGVuTW9kYWxdKTtcclxuICBcclxuXHJcbiAgY29uc3QgaW1hZ2VTd2lwZUhhbmRsZXJzID0gdXNlU3dpcGVhYmxlKHtcclxuICAgIG9uU3dpcGVkTGVmdDogKCkgPT5cclxuICAgICAgc2V0U2VsZWN0ZWRJbWFnZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gaW1hZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgIChpbWFnZSkgPT4gaW1hZ2Uuc3JjID09PSBwcmV2U3RhdGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9XHJcbiAgICAgICAgICBjdXJyZW50SW5kZXggPT09IDAgPyBpbWFnZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlc1tuZXh0SW5kZXhdLnNyYztcclxuICAgICAgfSksXHJcbiAgICBvblN3aXBlZFJpZ2h0OiAoKSA9PlxyXG4gICAgICBzZXRTZWxlY3RlZEltYWdlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBpbWFnZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgKGltYWdlKSA9PiBpbWFnZS5zcmMgPT09IHByZXZTdGF0ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID1cclxuICAgICAgICAgIGN1cnJlbnRJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICByZXR1cm4gaW1hZ2VzW25leHRJbmRleF0uc3JjO1xyXG4gICAgICB9KSxcclxuICAgIHN3aXBlRHVyYXRpb246IDUwMCxcclxuICAgIHByZXZlbnRTY3JvbGxPblN3aXBlOiB0cnVlLFxyXG4gICAgdHJhY2tNb3VzZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdGVwQ2FyZCBjb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBsZz17Nn0gbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0+XHJcbiAgICAgICAgICA8U3RlcENvbHVtbiBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxNdXNlb0ZvbnQgdmFyaWFudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgSWYgeW91ciBjb3JlIGlzIG5vdCBydW5uaW5nIHdoZW4gbGF1bmNoaW5nIHRoZSBRb3J0YWwgVUksIHlvdSB3aWxsXHJcbiAgICAgICAgICAgICAgYmUgYXV0b21hdGljYWxseSBwcm9tcHRlZCB0byBzdGFydCBpdC4gQ2xpY2sgdGhlIGJ1dHRvbntcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5TVEFSVCBRT1JUQUwgQ09SRTwvc3Bhbj4gdG9cclxuICAgICAgICAgICAgICBzdGFydCB0aGUgY29yZS5cclxuICAgICAgICAgICAgPC9NdXNlb0ZvbnQ+XHJcbiAgICAgICAgICAgIDxNdXNlb0ZvbnQgdmFyaWFudD1cImgzXCI+XHJcbiAgICAgICAgICAgICAgWW91IG1heSBvcHRpb25hbGx5IGNob29zZSB0byBoYXZlIHRoZSBjb3JlIHN0YXJ0IGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgICB3aGVuIHlvdSBsYXVuY2ggdGhlIFFvcnRhbCBVSSBieSBjaGVja2luZyB0aGUgYm94IGF0IHRoZSBib3R0b20gb2ZcclxuICAgICAgICAgICAgICB0aGUgbW9kYWwuXHJcbiAgICAgICAgICAgIDwvTXVzZW9Gb250PlxyXG4gICAgICAgICAgICA8TXVzZW9Gb250IHZhcmlhbnQ9XCJoM1wiPlxyXG4gICAgICAgICAgICAgIFRoaXMgb3B0aW9uIGNhbiBsYXRlciBiZSBjaGFuZ2VkIGJ5IHJpZ2h0IGNsaWNraW5nIG9uIHRoZSBRb3J0YWxcclxuICAgICAgICAgICAgICBVSSBpY29uIGluIHRoZSBib3R0b20gcmlnaHRcclxuICAgICAgICAgICAgPC9NdXNlb0ZvbnQ+XHJcbiAgICAgICAgICA8L1N0ZXBDb2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxTY3JlZW5zaG90Q29sdW1uXHJcbiAgICAgICAgICB7Li4uaW1hZ2VTd2lwZUhhbmRsZXJzfVxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgbGc9ezZ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFNjcmVlbnNob3RDb250YWluZXJcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE9wZW5Nb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSW1hZ2UoaW1hZ2Uuc3JjKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbWFnZS5zcmMgPT09IHNlbGVjdGVkSW1hZ2UgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNjcmVlbnNob3RcclxuICAgICAgICAgICAgICAgIHN4PXt7IG9iamVjdEZpdDogXCJjb250YWluXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TWFnbmlmeWluZ0dsYXNzIGlkPVwibWFnbmlmeWluZy1nbGFzc1wiIC8+XHJcbiAgICAgICAgICAgIDwvU2NyZWVuc2hvdENvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPEltYWdlVG9nZ2xlUm93PlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlRG90XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJbWFnZShpbWFnZS5zcmMpfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2ltYWdlLnNyYyA9PT0gc2VsZWN0ZWRJbWFnZX1cclxuICAgICAgICAgICAgICA+PC9JbWFnZVRvZ2dsZURvdD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ltYWdlVG9nZ2xlUm93PlxyXG4gICAgICAgIDwvU2NyZWVuc2hvdENvbHVtbj5cclxuICAgICAgPC9TdGVwQ2FyZD5cclxuICAgICAge29wZW5Nb2RhbCAmJiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBpbWFnZXM9e21vZGFsSW1hZ2VzfVxyXG4gICAgICAgICAgb25JbWFnZUNoYW5nZUZ1bmM9eyhpbWFnZSkgPT4gc2V0U2VsZWN0ZWRJbWFnZShpbWFnZSl9XHJcbiAgICAgICAgICBvcGVuTW9kYWw9e29wZW5Nb2RhbH1cclxuICAgICAgICAgIG9uQ2xpY2tGdW5jPXsoKSA9PiBzZXRPcGVuTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgID48L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3NTdGVwRml2ZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU3dpcGVhYmxlIiwiSW1hZ2VUb2dnbGVEb3QiLCJJbWFnZVRvZ2dsZVJvdyIsIk1hZ25pZnlpbmdHbGFzcyIsIk11c2VvRm9udCIsIlNjcmVlbnNob3QiLCJTY3JlZW5zaG90Q29sdW1uIiwiU2NyZWVuc2hvdENvbnRhaW5lciIsIlN0ZXBDYXJkIiwiU3RlcENvbHVtbiIsIkdyaWQiLCJNb2RhbCIsIldpbmRvd3NTdGVwRml2ZSIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwibW9kYWxJbWFnZXMiLCJzZXRNb2RhbEltYWdlcyIsImltYWdlcyIsInNyYyIsImFsdCIsImZpbHRlciIsImltZyIsIm1hcCIsImltYWdlU3dpcGVIYW5kbGVycyIsIm9uU3dpcGVkTGVmdCIsInByZXZTdGF0ZSIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsImltYWdlIiwibmV4dEluZGV4IiwibGVuZ3RoIiwib25Td2lwZWRSaWdodCIsInN3aXBlRHVyYXRpb24iLCJwcmV2ZW50U2Nyb2xsT25Td2lwZSIsInRyYWNrTW91c2UiLCJjb250YWluZXIiLCJpdGVtIiwibGciLCJtZCIsInNtIiwieHMiLCJkaXJlY3Rpb24iLCJ2YXJpYW50Iiwic3BhbiIsInN0eWxlIiwiZm9udFdlaWdodCIsInN4Iiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImluZGV4Iiwib25DbGljayIsImlkIiwic2VsZWN0ZWQiLCJvbkltYWdlQ2hhbmdlRnVuYyIsIm9uQ2xpY2tGdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TutorialSteps/Windows/Steps/WindowsStepFive.tsx\n"));

/***/ })

});