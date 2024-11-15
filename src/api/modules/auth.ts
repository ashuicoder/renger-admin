import { BaseHttp } from '../index'

export function userLogin(data: Recordable) {
	return BaseHttp.request({
		url: '/user/login',
		method: 'post',
		data
	})
}

export function userDetail() {
	return BaseHttp.request({
		url: '/user/detail',
		method: 'post'
	})
}

/**
 * 获取菜单权限
 */
export function userMenu(data: Recordable) {
	return BaseHttp.request({
		url: '/unity/sysRole/getMyMenu',
		method: 'post',
		data
	})
}

/**
 * 获取按钮权限
 */
export function userBtn(data: Recordable) {
	return BaseHttp.request({
		url: '/unity/sysRole/getMyBtnCode',
		method: 'post',
		data
	})
}

export function userLogout() {
	return BaseHttp.request({
		url: '/user/loginout',
		method: 'post'
	})
}

export function userPassword(data: Recordable) {
	return BaseHttp.request({
		url: '/user/password',
		method: 'post',
		data
	})
}
