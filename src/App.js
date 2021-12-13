import React from 'react';
import NaverMaps from './components/NaverMap';
import Address from 'react-daum-postcode';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Address/> */}
      <NaverMaps/>
    </div>
  );
}

export default App;
