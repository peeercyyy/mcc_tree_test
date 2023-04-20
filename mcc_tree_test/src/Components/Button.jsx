const Button = ({ title, onClick }) => {
  return (
    <button
      className='button'
      type='button'
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
