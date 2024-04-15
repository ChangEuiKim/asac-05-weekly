/**
 * 자동차의 정보를 담은 클래스
 */
class Car {
  #name;
  #count;

  constructor(name) {
    this.#name = name;
    this.#count = 0;
  }

  move() {
    this.#count++;
  }

  getName() {
    return this.#name;
  }

  getCount() {
    return this.#count;
  }
}

export default Car;
