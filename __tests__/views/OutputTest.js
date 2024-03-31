import Output from '../../src/views/Output';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Output 클래스 테스트', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test('showGame 메서드가 넘겨받은 게임 정보를 올바르게 출력한다.', () => {
    const printInfo = [
      { name: '일', count: 1 },
      { name: '이', count: 2 },
      { name: '삼', count: 3 },
    ];

    Output.showGame(printInfo);

    expect(logSpy).toHaveBeenCalledTimes(printInfo.length);
    expect(logSpy).toHaveBeenCalledWith('일 : -');
    expect(logSpy).toHaveBeenCalledWith('이 : --');
    expect(logSpy).toHaveBeenCalledWith('삼 : ---');
  });

  test('showResult 메서드가 넘겨받은 최종 우승자 정보를 올바르게 출력한다.', () => {
    const winners = ['이', '삼'];

    Output.showResult(winners);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : 이, 삼');
  });

  afterEach(() => {
    logSpy.mockRestore();
  });
});
