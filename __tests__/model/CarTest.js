import Car from '../../src/model/Car';

describe('Car 클래스 테스트', () => {
  const TEST_NAME = '테스트 자동차';

  test('자동차의 이름을 저장한다. 그리고 외부에서 접근할 수 있다.', () => {
    // given
    const car = new Car(TEST_NAME);

    // when
    const result = car.getName();

    // then
    expect(result).toBe(TEST_NAME);
  });

  test('자동차의 전진한 횟수를 저장한다. 그리고 외부에서 접근할 수 있다.', () => {
    // given
    const car = new Car(TEST_NAME);

    // when
    const result = car.getCount();

    // then
    expect(result).toBe(0);
  });

  test('자동차의 전진한 횟수를 증가시킬 수 있다.', () => {
    // given
    const car = new Car(TEST_NAME);

    // when
    car.move();

    // then
    const result = car.getCount();
    expect(result).toBe(1);
  });
});
