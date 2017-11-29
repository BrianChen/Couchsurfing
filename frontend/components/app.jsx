import React from 'react';
import HeaderContainer from './Header/header_container';

const App = (props) => {
  return (
    <div>
      <HeaderContainer />
      {props.children}
    </div>
  );
}

export default App;
