import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Titlebar from './components/Titlebar/Titlebar'
import handleSubmit from './components/handleSubmit/handleSubmit';

function App() {
  
const [keyword, setKeyword] = useState(0);

const updateKeyword = (keyword) => {
  setKeyword({keyword: keyword})
}
const [result, setResult] = useState(1);
const updateResult = (result) => {
  handleSubmit(result);
}

  return (
    <div className="App" >
    <Titlebar keyword={keyword} setKeyword={setKeyword} handleSubmit={handleSubmit}/>

    </div>
  );
}



export default App;
