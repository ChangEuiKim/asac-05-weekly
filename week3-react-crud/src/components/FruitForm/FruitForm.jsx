/* eslint-disable react/prop-types */
import { useState } from 'react';
import s from './FruitForm.module.css';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

export default function Page({ mode, currFruit, saveFruit, onClose }) {
  const isEditMode = mode === 'edit';
  const [name, setName] = useState(isEditMode ? currFruit.name : '');
  const [price, setPrice] = useState(isEditMode ? currFruit.price : 0);
  const [quantity, setQuantity] = useState(isEditMode ? currFruit.quantity : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFruit({
      name,
      price: Number(price),
      quantity: Number(quantity),
    });
    onClose();
  };

  return (
    <div className={s.appContainer}>
      <form onSubmit={handleSubmit}>
        <FormInputWrapper
          label="상품"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInputWrapper
          label="가격"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={0}
          max={15000}
          step={1000}
        />
        <FormInputWrapper
          label="수량"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={0}
          max={100}
          step={1}
        />
        <button type="submit">{isEditMode ? '수정' : '추가'}</button>
        <button type="button" onClick={onClose}>
          취소
        </button>
      </form>
    </div>
  );
}
