exports.ids = [4,1,3];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Left/Add.vue?vue&type=template&id=d731b856&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"mt-10 sm:mx-auto sm:w-full sm:max-w-sm\"><img src=\"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600\" alt class=\"mx-auto h-10 w-auto\"> <h2 class=\"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900\">\n      Add a new To - Do\n    </h2></div> <div class=\"mt-10 sm:mx-auto sm:w-full sm:max-w-sm\"><form action=\"#\" method=\"POST\" class=\"space-y-6\"><div><div class=\"mt-2\"><input id=\"todo\" name=\"todo\" type=\"text\" autocomplete=\"off\" required=\"required\"" + _vm._ssrAttr("value", _vm.newTask) + " class=\"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 text-center\"></div></div> <div><button type=\"submit\" class=\"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\">\n          ADD\n        </button></div></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Left/Add.vue?vue&type=template&id=d731b856&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Left/Add.vue?vue&type=script&lang=js&
/* harmony default export */ var Addvue_type_script_lang_js_ = ({
  name: 'LeftAdd',
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Left/Add.vue?vue&type=script&lang=js&
 /* harmony default export */ var Left_Addvue_type_script_lang_js_ = (Addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Left/Add.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Left_Addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7598782d"
  
)

/* harmony default export */ var Add = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Task.vue?vue&type=template&id=1b8fdaf8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex flex-col h-80 justify-between text-center p-5 w-64 overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",
    class: `task ${_vm.task.done ? 'bg-gray-200' : ''}`
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, `task ${_vm.task.done ? 'line-through' : ''}`) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.task.content) + "\n  ") + "</div> <div><div class=\"flex-1 justify-around w-full\"><button class=\"rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.task.done ? 'Undone' : 'Done') + "\n      ") + "</button> <button class=\"rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\">\n        Delete\n      </button></div> <button class=\"rounded-md mt-2 w-full border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\">\n      Details\n    </button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Task.vue?vue&type=template&id=1b8fdaf8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Task.vue?vue&type=script&lang=js&
/* harmony default export */ var Taskvue_type_script_lang_js_ = ({
  name: 'NuxtTask',
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task);
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task);
    },
    detail() {
      console.log(this.task.content);
    }
  }
});
// CONCATENATED MODULE: ./components/Task.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Taskvue_type_script_lang_js_ = (Taskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Task.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Taskvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1c26d339"
  
)

/* harmony default export */ var Task = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7dca6702&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10 place-items-stretch gap-4 h-screen"
  }, [_c('LeftAdd', {
    staticClass: "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex w-full gap-10 justify-center mt-10 flex-wrap\">", "</div>", _vm._l(_vm.$store.state.tasks, function (task, i) {
    return _c('Task', {
      key: i,
      attrs: {
        "task": task
      }
    });
  }), 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7dca6702&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Index'
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e409602"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LeftAdd: __webpack_require__(24).default,Task: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=index.js.map