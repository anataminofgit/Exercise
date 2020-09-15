import React from 'react';
import './App.css';
import mydata from './data/sidebar.json';
import SideBar from './components/SideBar';
//  import axios from "axios"

function App() {
  const [data, setData] = React.useState(mydata);
  const [showSidebar, setShowSidebar] = React.useState(true)



  const handleOnclick = () => {
    setShowSidebar(true)
  }

  
  const handleClose = () => {
    setShowSidebar(false)
  }


  const handleReload = (params) => {
    
  }

  return (
    <div className="app">
      <h1>React App</h1>
      { !showSidebar ? <button  onClick = {handleOnclick} type="button">Show SideBar</button> : null}
      { showSidebar ? <SideBar data={data} onReload= {handleReload} onClose = {handleClose}/>: null}
   
    </div>
  );
}

export default App;
