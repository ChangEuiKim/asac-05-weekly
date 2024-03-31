import Validate from "../src/utils/Validate";

describe('Validate 클래스 테스트', () => {
  const validate = new Validate();

  describe('validateNameArray 메서드 테스트', () => {
    test('올바른 이름 배열이 들어왔을 때, 에러를 던지지 않는다.', () => {
      const nameArray = ['pobi', 'woni', 'jun'];

      expect(() => validate.validateNameArray(nameArray)).not.toThrow();
    });

    test('이름 배열의 값이 null이라면, 에러를 던진다.', () => {
      const nameArray = null;

      expect(() => validate.validateNameArray(nameArray)).toThrow('[ERROR]');
    });

    test('이름 배열의 값이 undefined이라면, 에러를 던진다.', () => {
      const nameArray = undefined;

      expect(() => validate.validateNameArray(nameArray)).toThrow('[ERROR]');
    });

    test('이름 배열에 2명 이상의 플레이어가 없다면, 에러를 던진다', () => {
      const nameArray = ['pobi'];

      expect(() => validate.validateNameArray(nameArray)).toThrow('[ERROR]');
    });

    test('이름 배열에 5자를 초과하는 이름이 있다면, 에러를 던진다', () => {
      const nameArray = ['pobipobi'];

      expect(() => validate.validateNameArray(nameArray)).toThrow('[ERROR]');
    });

    test('이름 배열에 중복되는 이름이 있다면, 에러를 던진다', () => {
      const nameArray = ['pobi', 'pobi'];

      expect(() => validate.validateNameArray(nameArray)).toThrow('[ERROR]');
    });
  });

  describe('validateRounds 메서드 테스트', () => {
    test('올바른 시도할 횟수가 들어왔을 때, 에러를 던지지 않는다.', () => {
      const rounds = 5;

      expect(() => validate.validateRounds(rounds)).not.toThrow();
    });

    test('시도할 횟수의 값이 null이라면, 에러를 던진다.', () => {
      const rounds = null;

      expect(() => validate.validateRounds(rounds)).toThrow('[ERROR]');
    });

    test('시도할 횟수의 값이 undefined이라면, 에러를 던진다.', () => {
      const rounds = undefined;

      expect(() => validate.validateRounds(rounds)).toThrow('[ERROR]');
    });

    test('시도할 횟수의 값이 자연수가 아니라면, 에러를 던진다', () => {
      const rounds = 0;

      expect(() => validate.validateRounds(rounds)).toThrow('[ERROR]');
    });
  });  

  describe('검증 메서드 테스트', () => {
    const nameArray = ['pobi', 'woni', 'jun'];
    const rounds = 5;

    test('isNotNull 함수는 null이 아닌 값을 검증한다.', () => {
      expect(validate.isNotNull(nameArray)).toBeNull();
      expect(validate.isNotNull(rounds)).toBeNull();
      expect(validate.isNotNull(null)).toBe('입력값이 null입니다.');
    });

    test('isNotUndefined 함수는 undefined가 아닌 값을 검증한다.', () => {
      expect(validate.isNotUndefined(nameArray)).toBeNull();
      expect(validate.isNotUndefined(rounds)).toBeNull();
      expect(validate.isNotUndefined(undefined)).toBe('입력값이 undefined입니다.');
    });

    test('checkMultiPlayer 함수는 플레이어가 2명 이상인지 검증한다.', () => {
      expect(validate.checkMultiPlayer(nameArray)).toBeNull();      
      expect(validate.checkMultiPlayer(['pobi'])).toBe('플레이어는 두 명 이상이어야 합니다.');
    });

    test('checkNameMaxLength 함수는 자동차 이름의 길이가 5자 이하인지 검증한다.', () => {
      expect(validate.checkNameMaxLength(nameArray)).toBeNull();      
      expect(validate.checkNameMaxLength(['pobipobi'])).toBe('자동차 이름은 5자 이하만 가능합니다.');
    });

    test('checkNameUnique 함수는 자동차 이름이 고유한지 검증한다.', () => {
      expect(validate.checkNameUnique(nameArray)).toBeNull();      
      expect(validate.checkNameUnique(['pobi', 'pobi'])).toBe('자동차 이름은 중복될 수 없습니다.');
    });

    test('isNaturalNumber 함수는 시도할 횟수가 자연수인지 검증한다.', () => {
      expect(validate.isNaturalNumber(rounds)).toBeNull();      
      expect(validate.isNaturalNumber(0)).toBe('시도할 횟수는 자연수여야 합니다.');
    });
  });
});
