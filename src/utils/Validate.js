class Validate {

  /**
   * 배열 이름에 대한 검증 함수들을 호출하고, 문제가 없다면 반환하고, 문제가 있다면 해당 에러를 반환한다.
   */
  validateNameArray(nameArray) {
    // 검증 함수 목록
    const validators = [
      this.isNotNull,
      this.isNotUndefined,
      this.checkMultiPlayer,
      this.checkNameMaxLength,
      this.checkNameUnique,
    ];

    // 검증 함수 목록을 순회해서 이름 배열을 검증한다.
    for (const validator of validators) {
      const errorMessage = validator(nameArray);
      if (errorMessage) {
        throw new Error(`[ERROR] ${errorMessage}`);
      }
    }
  }

  /**
   * 시도할 횟수에 대한 검증 함수들을 호출하고, 문제가 없다면 반환하고, 문제가 있다면 해당 에러를 반환한다.
   */
  validateRounds(rounds) {
    // 검증 함수 목록
    const validators = [
      this.isNotNull,
      this.isNotUndefined,
      this.isNaturalNumber,
    ];

    // 검증 함수 목록을 순회해서 시도할 횟수를 검증한다.
    for (const validator of validators) {
      const errorMessage = validator(rounds);
      if (errorMessage) {
        throw new Error(`[ERROR] ${errorMessage}`);
      }
    }
  }

  isNotNull(value) {
    return value !== null ? null : '입력값이 null입니다.';
  }

  isNotUndefined(value) {
    return value !== undefined ? null : '입력값이 undefined입니다.' ;
  }

  checkMultiPlayer(nameArray) {
    return Array.isArray(nameArray) && nameArray.length > 1 ? null : '플레이어는 두 명 이상이어야 합니다.';
  }

  checkNameMaxLength(nameArray) {
    return nameArray.every(name => name.length <= 5) ? null : '자동차 이름은 5자 이하만 가능합니다.';
  }

  checkNameUnique(nameArray) {
    const nameSet = new Set(nameArray);
    return nameSet.size === nameArray.length ? null : '자동차 이름은 중복될 수 없습니다.';
  }

  isNaturalNumber(rounds) {
    return Number.isInteger(rounds) && rounds > 0 ? null : '시도할 횟수는 자연수여야 합니다.';
  }

}

export default Validate;
