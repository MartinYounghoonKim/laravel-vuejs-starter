/**
 * @summary { api.core }
 * @desc api core에 대한 Class 선언
 */

import axios from "axios/index";

export default class APIBaseResource {
	constructor (options) {
		this._axios = axios.create({
			baseURL: options.baseUrl,
		});
		this.uri = options.uri;
	}

	get (uri) {
		return this._axios.get(uri)
			.then( res => {
				return {
					serviceStatus: res.data.serviceStatus,
					serviceData: res.data.serviceData
				};
			});
	}

	post (uri, payload) {
		return this._axios.post(uri, payload)
			.then( res => {
				return {
					serviceStatus: res.data.serviceStatus,
					serviceData: res.data.serviceData
				};
			});
	}

	put (uri, payload) {
		return this._axios.put(uri, payload)
			.then( res => {
				return {
					serviceStatus: res.data.serviceStatus,
					serviceData: res.data.serviceData
				};
			});

	}

	delete (uri, payload) {
		return this._axios.delete(uri, payload)
			.then( res => {
				return {
					serviceStatus: res.data.serviceStatus,
					serviceData: res.data.serviceData
				};
			});
	}
}
