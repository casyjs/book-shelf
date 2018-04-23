import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Layout from './hoc/Layout';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
