import React from 'react';
import { useRouter } from 'next/router';
import ServicesBreadcumb from '../../components/services/ServicesBreadcumb';
import AllServicesComponent from '../../components/companies/AllServicesComponent';

function index() {
    const router= useRouter();
    const {catCode, subCatCode, tabKey}= router.query;
  return (
    <div>
      <ServicesBreadcumb />
    <AllServicesComponent catCode={catCode} subCatCode={subCatCode} tabKey={tabKey} />
    </div>
  )
}

export default index
