import GameController from '../../src/controller/GameController';
import { Console } from '@woowacourse/mission-utils';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('runGame을 호출해 게임을 실행한다.', () => {
  test('실행 결과 예시와 동일한 출력 패턴인지 확인한다.', async () => {
    // given
    const inputs = ['일,이,삼', '3'];
    mockQuestions(inputs);
    const logSpy = getLogSpy();

    // when
    const gameController = new GameController();
    await gameController.runGame();

    // then
    // 터미널에서 npx jest --verbose로 확인한다.

    logSpy.mockRestore();
  });
});
