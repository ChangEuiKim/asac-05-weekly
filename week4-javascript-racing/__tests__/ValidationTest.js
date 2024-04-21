import Validation from '../src/views/Validation';

describe('Validation', () => {
  describe('setMinMaxLength', () => {
    it('check 메서드를 반환한다.', () => {
      const min = 1;
      const max = 5;
      const validation = Validation.setMinMaxLength(min, max);
      expect(validation).toHaveProperty('check');
    });
  });

  describe('check', () => {
    it('문자열의 길이가 min과 max 사이라면 에러를 던지지 않는다.', () => {
      const min = 1;
      const max = 5;
      const validation = Validation.setMinMaxLength(min, max);
      const car_name = 'a';
      expect(() => validation.check(car_name)).not.toThrow();
    });

    it('문자열의 길이가 min보다 작다면 에러를 던진다.', () => {
      const min = 1;
      const max = 5;
      const validation = Validation.setMinMaxLength(min, max);
      const car_name = '';
      expect(() => validation.check(car_name)).toThrow();
    });

    it('문자열의 길이가 max보다 크다면 에러를 던진다.', () => {
      const min = 1;
      const max = 5;
      const validation = Validation.setMinMaxLength(min, max);
      const car_name = 'abcdef';
      expect(() => validation.check(car_name)).toThrow();
    });
  });
});
