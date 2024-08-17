import React from 'react';
import Container from './common/Container'
import Row from './common/Row'

const Footer = () => {
  return (
    <Container className='bg-black h-[52px] py-[14px] '>
<Row className='text-white  justify-between h-full items-center'>
    <p>2024 RiftCom Inc.</p>
    <img src='/images/cards.png' alt='cards' className='w-[253px]'/>
    <p>Scroll to Top</p>

</Row>
    </Container>
  )
}

export default Footer;
