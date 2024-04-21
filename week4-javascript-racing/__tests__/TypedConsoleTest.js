import { Console } from '@woowacourse/mission-utils';
import TypedConsole from '../src/views/TypedConsole';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('TypedConsole 클래스의 메서드 테스트', () => {
  describe('readArrayAsync 메서드', () => {
    test('올바른 자동차 이름을 입력받으면, 이름 배열을 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('pobi,wuri,jun');
      const car_array = ['pobi', 'wuri', 'jun'];

      // when
      const result = TypedConsole.readArrayAsync();

      // then
      await expect(result).resolves.toEqual(car_array);
    });

    test('입력값이 없으면, 에러를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('');

      // when
      const result = TypedConsole.readArrayAsync();

      // then
      await expect(result).rejects.toThrow();
    });
  });

  describe('readNumberAsync 메서드', () => {
    test('올바른 시도할 횟수를 입력받으면, 이를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('5');
      const rounds = 5;

      // when
      const result = TypedConsole.readNumberAsync();

      // then
      await expect(result).resolves.toEqual(rounds);
    });

    test('입력값이 없으면, 에러를 반환해야 한다', async () => {
      // given
      Console.readLineAsync.mockResolvedValueOnce('');

      // when
      const result = TypedConsole.readNumberAsync();

      // then
      await expect(result).rejects.toThrow();
    });
  });
});
