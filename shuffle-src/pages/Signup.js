import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SignupSectionNavigations2 from '../components/navigations/SignupSectionNavigations2';
import SignupSectionSignIn1 from '../components/sign-in/SignupSectionSignIn1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Signup() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SignupSectionNavigations2 />
      <SignupSectionSignIn1 />
    </React.Fragment>
  );
}

