import React from 'react';
import Layout from '../../components/Layout';
import Login from './Table';

const title = 'Table';

const action = () => {
  return {
    chunks: ['table'],
    title,
    component: (
      <Layout>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
