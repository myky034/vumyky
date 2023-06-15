import React, { useState } from 'react';
import './App.css';
import DataList from './components/DataList/DataList';
import Search from "./components/Search/Search";
import data from "./data/data.json";

function App() {
  const [item, setItem] = useState(data);

    const filterItems = (curcat) => {
      if(curcat === ""){
        setItem(data);
        console.log(item);
      }else{
        const newItem = data.filter((newVal) => {
          return newVal.city === curcat;
        });
        setItem(newItem);
        console.log(newItem);
      }
    };
  return (
    <div className="App">
      <Search filterItem={filterItems} setItems={setItem} />
      <DataList items={item} />
    </div>
  );
}

export default App;
