/* eslint-disable react/prop-types */

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} type="button">
      {children}
    </button>
  );
}
