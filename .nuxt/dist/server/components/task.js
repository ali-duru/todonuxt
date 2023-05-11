exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=task.js.map