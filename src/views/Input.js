import { Console } from '@woowacourse/mission-utils';
import Validate from '../utils/Validate';

/**
 * `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 사용자의 입력을 받는 클래스
 */
export default class Input {
  constructor() {
    this.validate = new Validate();
  }

  /**
   * 사용자 입력값을 받아 구분자로 나누고 결괏값을 검증하는 메서드
   * @returns 자동차 이름 배열을 반환한다.
   */
  async readCarNames() {
    try {
      const MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
      const nameInput = await Console.readLineAsync(MESSAGE);
      // 입력값을 쉼표를 기준으로 파싱하고 좌우 공백을 삭제한다.
      const nameArray = nameInput.split(',').map(name => name.trim());
      // 파싱한 입력값에 대한 검증 함수를 호출한다. 실패시 에러를 반환한다.
      this.validate.validateNameArray(nameArray);
      // 정상 입력값을 호출하고 결과를 반환한다.
      Console.print(nameArray);
      return nameArray;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 사용자 입력값을 받아 검증하는 메서드
   * @returns 시도할 횟수를 반환한다.
   */
  async readRounds() {
    try {
      const MESSAGE = '시도할 횟수는 몇 회인가요?';
      const roundsInput = await Console.readLineAsync(MESSAGE);
      // 문자열로 읽은 숫자를 정수로 형변환한다.
      const rounds = parseInt(roundsInput, 10);
      // 변환한 입력값에 대한 검증 함수를 호출한다. 실패시 에러를 반환한다.
      this.validate.validateRounds(rounds);
      // 정상 입력값을 호출하고 결과를 반환한다.
      Console.print(rounds);
      return rounds;
    } catch (error) {
      throw error;
    }    
  }
}
