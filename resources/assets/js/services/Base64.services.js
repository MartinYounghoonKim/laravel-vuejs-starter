/**
 * @summary Base64에 대한 인코딩/디코딩에 대한 Class 정의
 */

import { Base64 } from 'js-base64';

class Base64Service {

	encoding (value) {
		return Base64.encode(value);
	}

	decoding (value) {
		return Base64.decode(value);
	}
}


export const base64Service = new Base64Service;
