import { BaseHttp } from '../index'

export function list(data: Recordable) {
	return BaseHttp.request({
		url: '/user/list',
		method: 'post',
		data
	})
}
