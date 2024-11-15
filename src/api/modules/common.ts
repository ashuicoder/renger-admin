import { BaseHttp } from '../index'

export function globalUpload(data: FormData) {
	return BaseHttp.request({
		url: '/upload',
		method: 'post',
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		data
	})
}
