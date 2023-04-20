import Button from './Button';

const Footer = ({ handleAdd, handleRemove, handleEdit, handleReset }) => {
  return (
    <footer className='footer'>
      <Button
        onClick={handleAdd}
        title={'Add'}
      />
      <Button
        onClick={handleRemove}
        title={'Remove'}
      />
      <Button
        onClick={handleEdit}
        title={'Edit'}
      />
      <Button
        onClick={handleReset}
        title={'Reset'}
      />
    </footer>
  );
};

export default Footer;
