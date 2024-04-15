/* eslint-disable react/prop-types */
import s from './FormInput.module.css';

export default function FormInput({ ...rest }) {
  return <input className={s.inputWrapperInput} {...rest} />;
}
