const ERROR_MESSAGE = {
  LENGTH_ERROR: (min, max, car_name) =>
    `당신이 입력한 문자열의 길이는 최소 ${min}자, 최대 ${max}자 여야합니다 : ${car_name}`,
};

export default class Validation {
  /**
   * 자동차 이름의 길이를 min과 max 사이로 제한하는 메서드
   * @param {number} min check할 문자열의 최소 길이
   * @param {number} max check할 문자열의 최대 길이
   * @returns {object} check 메서드를 가진 객체
   */
  static setMinMaxLength(min, max) {
    return {
      /**
       * 자동차 이름의 길이가 min과 max 사이인지 확인하는 메서드
       * @param {string} car_name check할 문자열
       * @throws {Error} 문자열의 길이가 min과 max 사이가 아닐 경우
       */
      check(car_name) {
        if (car_name.length < min || max < car_name.length) {
          throw new Error(ERROR_MESSAGE.LENGTH_ERROR(min, max, car_name));
        }
      },
    };
  }
}
