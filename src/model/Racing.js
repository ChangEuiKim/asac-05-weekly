import { Random } from '@woowacourse/mission-utils';

/**
 * 레이스 정보를 담은 클래스
 */
class Racing {
  #carList;
  #maxCount;

  constructor(carList) {
    this.#carList = carList;
    this.#maxCount = 0;
  }

  /**
   * 시도할 횟수마다 Random을 사용해 통과한 자동차만 전진한다.
   */
  race() {
    for (const car of this.#carList) {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.move();
        this.#maxCount = Math.max(this.#maxCount, car.getCount());
      }
    }
  }

  /**
   * 각 차수별 실행 결과의 출력에 필요한 객체 배열을 생성한다.
   * @returns {Array} 객체 배열을 반환한다.
   */
  getPrintInfo() {
    return this.#carList.map(car => ({
      name: car.getName(),
      count: car.getCount(),
    }));
  }

  /**
   * 최대 전진 횟수를 활용해 최종 우승자 배열을 생성한다.
   */
  getWinners() {
    const winners = this.#carList
      .filter(car => car.getCount() === this.#maxCount)
      .map(car => car.getName());
    return winners;
  }
}

export default Racing;
