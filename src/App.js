import React from 'react';
import './App.css';
import SideBar from './components/SideBar';



function App() {
  const [data, setData] = React.useState([]);
  const [showSidebar, setShowSidebar] = React.useState(true)



  const handleOnclick = () => {
    setShowSidebar(true)
  }


  const handleClose = () => {
    setShowSidebar(false)
  }


  const handleReload = () => {
    fetch("./data/sidebar.json")
      .then(response => response.json())
      .then(data => {
        console.log("handleReload", data)
        setData(data);
      })
  }


  React.useEffect(() => {
    handleReload();
  }, []);

  return (
    <div className="app">
      { !showSidebar ? <button onClick={handleOnclick} type="button">Show SideBar</button> : null}
      { showSidebar ? <SideBar data={data} onReload={handleReload} onClose={handleClose} /> : null}

    </div>
  );
}

export default App;
