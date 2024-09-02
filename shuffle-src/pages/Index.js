import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations1 from '../components/navigations/IndexSectionNavigations1';
import IndexSectionNavigations2 from '../components/navigations/IndexSectionNavigations2';
import IndexSectionNavigations3 from '../components/navigations/IndexSectionNavigations3';
import IndexSectionProductList4 from '../components/product-list/IndexSectionProductList4';
import IndexSectionProductList5 from '../components/product-list/IndexSectionProductList5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations1 />
      <IndexSectionNavigations2 />
      <IndexSectionNavigations3 />
      <IndexSectionProductList4 />
      <IndexSectionProductList5 />
    </React.Fragment>
  );
}

