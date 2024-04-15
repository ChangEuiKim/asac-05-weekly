/* eslint-disable react/prop-types */
import s from './FruitItem.module.css';
import InputWrapperItem from '../InputWrapperItem/InputWrapperItem';
import QuantityInput from '../QuantityInput/QuantityInput';
import Button from '../Button/Button';

export default function FruitItem(props) {
  console.log(
    `FruitItem props {
    id: props.id
    name: props.name
    price: props.price
  }`,
    props,
  );
  const {
    id,
    name,
    price,
    quantity,
    editFruit,
    handleQuantityChange,
    deleteFruit,
  } = props;

  return (
    <div key={id} className={s.inputWrapper}>
      <InputWrapperItem>{name}</InputWrapperItem>
      <InputWrapperItem>{price}</InputWrapperItem>
      <QuantityInput
        id={`quantityInput_${id}`}
        name={`quantityInput_${name}`}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Button onClick={editFruit}>📝</Button>
      <Button onClick={deleteFruit}>🗑️</Button>
    </div>
  );
}
