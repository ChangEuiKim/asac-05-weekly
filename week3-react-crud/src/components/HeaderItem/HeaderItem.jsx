/* eslint-disable react/prop-types */
import s from './HeaderItem.module.css';

export default function HeaderItem({ children }) {
  return <span className={s.itemHeaderItem}>{children}</span>;
}
