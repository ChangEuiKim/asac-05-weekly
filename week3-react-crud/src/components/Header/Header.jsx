/* eslint-disable react/prop-types */
import s from './Header.module.css';
import HeaderItem from '../HeaderItem/HeaderItem';

export default function Header() {
  return (
    <>
      <h2>장바구니 애플리케이션</h2>
      <div className={s.itemWrapper}>
        <HeaderItem>상품</HeaderItem>
        <HeaderItem>가격</HeaderItem>
        <HeaderItem>수량</HeaderItem>
        <div className={s.buttonWrapper}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
