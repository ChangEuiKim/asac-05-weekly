import { Console } from '@woowacourse/mission-utils';

/**
 * `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 사용자의 입력을 받는 클래스
 */
export default class Input {
  /**
   * 사용자 입력값을 받아 구분자로 나누고 결괏값을 검증하는 메서드
   * @returns 자동차 이름 배열을 반환한다.
   */
  async readCarNames() {
    try {
      const MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
      const nameInput = await Console.readLineAsync(MESSAGE);
      const nameArray = nameInput.split(',').map(name => name.trim());
      
      // Validate 한다

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
      const rounds = await Console.readLineAsync(MESSAGE);
      
      // Validate 한다

      Console.print(rounds);
      return rounds;
    } catch (error) {
      throw error;
    }    
  }
}
