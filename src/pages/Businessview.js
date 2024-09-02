import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BusinessviewSectionNavigations1 from '../components/navigations/BusinessviewSectionNavigations1';
import BusinessviewSectionProductDetails2 from '../components/product-details/BusinessviewSectionProductDetails2';
import BusinessviewSectionProductDetails3 from '../components/product-details/BusinessviewSectionProductDetails3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Businessview() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <BusinessviewSectionNavigations1 />
      <BusinessviewSectionProductDetails2 />
      <BusinessviewSectionProductDetails3 />
    </React.Fragment>
  );
}

