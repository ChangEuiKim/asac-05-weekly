import Racing from '../../src/model/Racing';
import Car from '../../src/model/Car';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Racing 클래스 테스트', () => {
  let carList;
  let racing;
  const MOVE = 4;
  const STOP = 3;

  beforeEach(() => {
    const randoms = [MOVE, MOVE, MOVE, STOP, MOVE, MOVE, STOP, STOP, MOVE];
    carList = [new Car('일'), new Car('이'), new Car('삼')];
    racing = new Racing(carList);
    mockRandoms([...randoms]);
    racing.race();
    racing.race();
    racing.race();
  });

  test('race 함수를 호출해 최종 우승자가 변경되는지 확인한다.', () => {
    // given
    const winnerBeforeRace = racing.getWinners();
    const randoms = [STOP, MOVE, STOP];
    mockRandoms([...randoms]);

    // when
    racing.race();

    // then
    expect(racing.getWinners()).not.toEqual(winnerBeforeRace);
  });

  test('getPrintInfo 함수를 호출해 객체 배열을 반환받는다.', () => {
    // given
    const printInfo = [
      { name: '일', count: 1 },
      { name: '이', count: 2 },
      { name: '삼', count: 3 },
    ];

    // when
    const result = racing.getPrintInfo();

    // then
    expect(result).toEqual(printInfo);
  });

  test('getWinner 함수를 호출해 우승자 배열을 반환받는다.', () => {
    // given
    const winners = ['삼'];

    // when
    const result = racing.getWinners();

    // then
    expect(result).toEqual(winners);
  });
});
