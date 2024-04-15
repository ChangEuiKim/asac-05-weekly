/* eslint-disable react/prop-types */
import s from './QuantityInput.module.css';

// FruitItem 컴포넌트의 수량을 입력하는 input 컴포넌트
export default function QuantityInput({
  type = 'number',
  min = 0,
  max = 100,
  step = 1,
  ...rest
}) {
  return (
    <input
      className={s.inputWrapperInput}
      type={type}
      min={min}
      max={max}
      step={step}
      {...rest}
    />
  );
}
