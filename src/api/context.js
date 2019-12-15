import React from 'react';

const ApiContext = React.createContext(null);

export const withApi = Component => props => (
  <ApiContext.Consumer>
    {data => <Component {...props} data={data} />}
  </ApiContext.Consumer>
);

export default ApiContext;