/* eslint-disable react/prop-types */
import s from './Footer.module.css';
import Button from '../Button/Button';

export default function Footer({ totalAmount, addFruit }) {
  return (
    <div className={s.wrapper}>
      <Button onClick={addFruit}>🍏 과일 추가</Button>
      <span>{'🧺 총액 : ' + totalAmount}</span>
    </div>
  );
}
