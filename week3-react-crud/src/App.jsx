import { useMemo, useState } from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import FruitItem from './components/FruitItem/FruitItem';
import Footer from './components/Footer/Footer';
import FruitForm from './components/FruitForm/FruitForm';
import { data } from './data';

// totalAmount 계산을 위해서 fruits의 quantity를 추가
const initialFruits = data.fruits.map((fruit) => ({
  ...fruit,
  quantity: 0,
}));

export default function App() {
  const [fruits, setFruits] = useState(initialFruits);
  const [formMode, setFormMode] = useState(null);
  const [editingFruit, setEditingFruit] = useState(null);
  
  // useMemo를 사용하여 totalAmount 계산
  const totalAmount = useMemo(() => {
  return fruits.reduce(
    (total, fruit) => total + fruit.price * fruit.quantity,
    0
  );
  }, [fruits]);

  // fruit 추가 함수
  const addFruit = (newFruit) => {
    setFruits((prevFruits) => [...prevFruits, newFruit]);
  };

  // fruit 수정 함수
  const editFruit = (idx) => {
    setEditingFruit({ ...fruits[idx], index: idx });
    setFormMode('edit');
  };

  // FruitForm의 변경을 반영하는 함수
  const saveFruit = (fruit) => {
    if (formMode === 'add') {
      setFruits([...fruits, { ...fruit, id: fruits.length + 1 }]);
    } else if (formMode === 'edit' && editingFruit !== null) {
      setFruits(
        fruits.map((f, i) =>
          i === editingFruit.index ? { ...fruit, id: editingFruit.id } : f,
        ),
      );
    }
    setFormMode(null);
    setEditingFruit(null);
  };

  // Quantity 변경 함수
  const handleQuantityChange = (e, i) => {
    console.log('event', e);
    const newFruit = {
      ...fruits[i],
      quantity: e.target.value,
    };

    setFruits([...fruits.slice(0, i), newFruit, ...fruits.slice(i + 1)]);
  };

  // fruit 삭제 함수
  const deleteFruit = (idx) => {
    setFruits(fruits.filter((f, i) => i !== idx));
  };

  return (
    <>
      <main className={s.mainContainer}>
        <div className={`${s.pageContainer} ${formMode ? s.blurred : ''}`}>
          <div className={s.appContainer}>
            <form className={s.form}>
              <div className={s.fieldset}>
                <Header />
                {fruits.map((f, i) => (
                  <FruitItem
                    key={f.id}
                    id={f.id}
                    name={f.name}
                    price={f.price}
                    quantity={f.quantity}
                    editFruit={() => editFruit(i)}
                    handleQuantityChange={(e) => handleQuantityChange(e, i)}
                    deleteFruit={() => deleteFruit(i)}
                  ></FruitItem>
                ))}
                <Footer
                  totalAmount={totalAmount}
                  addFruit={() => setFormMode('add')}
                />
              </div>
            </form>
          </div>
        </div>
        {(formMode === 'add' || formMode === 'edit') && (
          <div className={s.mainContainer}>
            <div className={s.pageContainer}>
              <FruitForm
                mode={formMode}
                currFruit={editingFruit}
                addFruit={addFruit}
                saveFruit={saveFruit}
                onClose={() => setFormMode(null)}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
