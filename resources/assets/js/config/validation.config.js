/**
 * @summary validator.config 에 대한 설정
 */

import { Validator } from 'vee-validate';

/**
 * @constant { dictionary }
 * @desc 입력을 안했을 경우 기본적으로 노출되는 message
 */
const dictionary = {
	custom: {
		userId: {
			required: '아이디는 필수 입력란 입니다.',
		},
		userPassword: {
			required: '비밀번호는 필수입력란 입니다.',
		},
		userPasswordConfirm: {
			required: '비밀번호 확인은 필수입력란 입니다.',
			confirmed: '입력하신 비밀번호와 일치하지 않습니다.',
		}
	},
};

Validator.localize('ko', dictionary);

/**
 * @constant { ValidatorPolicy }
 * @summary validation 정책 적용
 */
export const ValidatorPolicy = {
	userId: {
		regex: /^[a-z0-9_]{4,16}$/,
		message: '영문, 숫자 4~16자리로 입력해주세요.',
		isExist: '이미 존재하는 아이디입니다.',
	},
	userPassword: {
		regex: /^(?=.*[a-zA-Z])(?=.*[#\&\\+\-%@=\/\\\:;,\.\'\"\^`~\_|\!\/\?\*$#<>()\[\]\{\}])(?=.*[0-9])/,
		message: '영문, 숫자, 특수문자를 포함한 8자~50자 이하로 입력해주세요.',
	},
	userName: {
		regex: /^[가-힣\s]{2,4}$/,
		message: '성함은 한글로 2자 이상 입력해주세요.',
	},
	userMailAddress: {
		regex: /^([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i,
		message: '이메일 주소를 정확히 입력해주세요.',
	},
	userPhoneNumber: {
		regex: /^[0-9]{10,11}$/,
		message: '휴대폰 번호는 -을 제외한 숫자만 입력해주세요.',
	},
	authenticationNumber: {
		regex: /^[0-9]*$/,
		message: '인증번호는 숫자만 입력해주세요.',
	},
};

