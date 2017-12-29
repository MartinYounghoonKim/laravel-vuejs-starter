/**
 * @summary appi.js 에 대한 app entry 파일 설정
 */
import Vue from 'vue';
import router from './router';
import App from './app.vue';

/**
 * @summary {bootstrap-vue} 사용
 */
import bootstrap from './bootstrap';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

let originalVueComponent = Vue.component;
// 현 Vue-bootstrap 자체 bug fix를 위한 코드 추가
// 참고: https://github.com/bootstrap-vue/bootstrap-vue/issues/1201
Vue.component = function (name, definition) {
	if (name === 'bFormCheckboxGroup' || name === 'bCheckboxGroup' ||
		name === 'bCheckGroup' || name === 'bFormRadioGroup') {
		definition.components = { BFormCheckboxGroup: definition.components[0] };
	}
	originalVueComponent.apply(this, [name, definition]);
};
Vue.use(BootstrapVue);
Vue.component = originalVueComponent;
Vue.use(bootstrap);

/**
 * @summary {vue-js-toggle-button} Toggle버튼 플러그인 사용
 */
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton);

/**
 * @summary { VeeValidate } 사용
 * @desc global하게 사용되는 validator
 */
import ko from 'vee-validate/dist/locale/ko.js';

const config = {
	locale: 'ko',
	dictionary: {
		ko,
	},
	fieldsBagName: 'formFields',
};
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, config);

/**
 * @summary Store 사용
 */
import store from './stores/index';

/*eslint-disable-next-line */
const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});