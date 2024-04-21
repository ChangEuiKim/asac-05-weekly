import { TypedConsole } from '../utils/TypedConsole.js';
import { Validation } from '../utils/Validation.js';

const GUIDE_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  ROUNDS: '시도할 횟수는 몇 회인가요?',
};

class RacingCarInputView {
  /**
   * 사용자 입력값을 받아 자동차 이름 배열을 반환하는 메서드
   * @returns {string[]} 자동차 이름 배열
   */
  static async getRacingCarInput() {
    const cars_array = await TypedConsole.readArrayAsync(
      GUIDE_MESSAGE.CAR_NAMES,
    );
    cars_array.forEach((each) => {
      Validation.setMinMaxLength(0, 5).check(each);
    });
    return cars_array;
  }

  /**
   * 사용자 입력값을 받아 시도할 횟수를 반환하는 메서드
   * @returns {number} 시도할 횟수
   */
  static async getRoundInput() {
    const round_number = await TypedConsole.readNumberAsync(
      GUIDE_MESSAGE.ROUNDS,
    );
    return round_number;
  }
}
