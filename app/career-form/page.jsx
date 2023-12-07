import { LastSection } from '@/components';
import { Banner, Form } from '@/components/career';
import React from 'react';

const CareerForm = () => {
  return (
    <>
      <Banner />
      <Form />
      <LastSection
        dark={false}
        btnText={'send mail'}
        mainText={'Want to contact us directly? feel free to send a mail.'}
        btnRoute={'mailto:hello@pareindia.com'}
        showOnMobile={true}
      />
    </>
  );
};

export default CareerForm;
