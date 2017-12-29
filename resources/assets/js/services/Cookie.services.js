/**
 * @summary Cookie에 대한 Class 정의
 */
import Cookie from 'js-cookie';
import { base64Service } from 'js/services/Base64.services';

class CookieService {
	constructor () {
		this.convertor = new CookieConverter;
	}

	setCookie ( name, value ) {
		const encodedValue = this.convertor.encryptValue(value);

		Cookie.set(name, encodedValue);
	}

	getCookie ( name ) {
		const value = Cookie.get(name);

		if( value === undefined ){
			return false;
		}

		const decodedValue =  this.convertor.decryptValue(value);

		return decodedValue;
	}

	deleteCookie ( name ) {
		Cookie.remove(name);
	}
}

class CookieConverter {
	encryptValue (value) {
		return base64Service.encoding(value)
	}

	decryptValue (value) {
		return base64Service.decoding(value);
	}
}

export const cookieService = new CookieService;