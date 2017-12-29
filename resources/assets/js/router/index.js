/**
 * @summary 앱의 클라이언트 라우터 설정
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [{
		path: '/home',
		name: 'Home',
		components: {
		},
	}],
});

export default router;