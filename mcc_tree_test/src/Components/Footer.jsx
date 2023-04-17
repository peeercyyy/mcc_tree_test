import Button from './Button'

const Footer = () => {
  return(
    <footer className='footer'>
      <Button title={'Add'} />
      <Button title={'Remove'} />
      <Button title={'Edit'} />
      <Button title={'Reset'} />
    </footer>
  )
}

export default Footer;