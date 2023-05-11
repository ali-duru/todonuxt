exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=left-add.js.map