/* eslint-disable react/prop-types */
import s from './InputWrapperItem.module.css';

export default function InputWrapperItem({ children }) {
  return <span className={s.inputWrapperItem}>{children}</span>;
}
