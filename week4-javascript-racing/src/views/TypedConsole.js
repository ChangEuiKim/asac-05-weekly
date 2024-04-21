import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = {
  NO_INPUT: '[ERROR] 입력값이 없습니다. 다시 입력해주세요.',
};

export default class TypedConsole {
  /**
   * 사용자 입력값을 받아 구분자로 나누고 올바른 입력이면 자동차 이름 배열을 반환하는 메서드
   * @returns 자동차 이름 배열을 반환한다.
   * @throws {Error} 입력값이 없을 경우
   * @returns {string[]} 자동차 이름 배열
   */
  static async readArrayAsync(GUIDE_MESSAGE) {
    const stringLine = await Console.readLineAsync(GUIDE_MESSAGE);

    if (!stringLine?.length) {
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }

    return stringLine.split(',').map((item) => item.trim());
  }

  /**
   * 사용자 입력값을 받아 올바른 입력이면 시도할 횟수를 반환하는 메서드
   * @throws {Error} 입력값이 없을 경우
   * @returns {number} 시도할 횟수
   */
  static async readNumberAsync(GUIDE_MESSAGE) {
    const string = await Console.readLineAsync(GUIDE_MESSAGE);

    if (!string?.length) {
      throw new Error(ERROR_MESSAGE.NO_INPUT);
    }

    return parseInt(string, 10);
  }
}
