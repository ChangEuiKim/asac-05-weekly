import Input from '../../src/views/Input';
import Validate from '../../src/utils/Validate';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('Input 클래스의 메서드 테스트', () => {
  let input;

  beforeEach(() => {
    // Validate의 모든 메서드를 모킹
    Validate.prototype.validateNameArray = jest.fn();
    Validate.prototype.validateRounds = jest.fn();
    input = new Input();
  });

  describe('readCarNames 메서드', () => {
    test('올바른 자동차 이름을 입력받으면, 이름 배열을 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('pobi,wuri,jun');
      const nameArray = ['pobi', 'wuri', 'jun'];
      Validate.prototype.validateNameArray.mockImplementation(() => {});

      // when
      const result = input.readCarNames();

      // then
      await expect(result).resolves.toEqual(nameArray);
    });

    test('validateNameArray에서 에러가 발생하면, 에러를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('pobi');
      const ERROR_MESSAGE = '[ERROR]';
      Validate.prototype.validateNameArray.mockImplementation(() => {
        throw new Error(ERROR_MESSAGE);
      });

      // when
      const result = input.readCarNames();

      // then
      await expect(result).rejects.toThrow(ERROR_MESSAGE);
    });
  });

  describe('readRounds 메서드', () => {
    test('올바른 시도할 횟수를 입력받으면, 이를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('5');
      const rounds = 5;
      Validate.prototype.validateRounds.mockImplementation(() => {});

      // when
      const result = input.readRounds();

      // then
      await expect(result).resolves.toEqual(rounds);
    });

    test('validateRounds에서 에러가 발생하면, 에러를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('0');
      const ERROR_MESSAGE = '[ERROR]';
      Validate.prototype.validateRounds.mockImplementation(() => {
        throw new Error(ERROR_MESSAGE);
      });

      // when
      const result = input.readRounds();

      // then
      await expect(result).rejects.toThrow(ERROR_MESSAGE);
    });
  });
});
