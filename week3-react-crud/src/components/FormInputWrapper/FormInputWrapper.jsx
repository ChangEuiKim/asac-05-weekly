/* eslint-disable react/prop-types */
import s from './FormInputWrapper.module.css';
import FormInput from '../FormInput/FormInput';

export default function FormInputWrapper({ label, ...rest }) {
  return (
    <>
      <div className={s.inputWrapper}>
        <label>{label}</label>
        <FormInput {...rest} />
      </div>
    </>
  );
}
