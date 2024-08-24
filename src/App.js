import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GetFood from "./components/GetFood";
import ListFoods from "./components/ListFoods";
import DetailFood from "./components/DeatilFood";

function App() {
  const [foods, setFoods] = useState({});
  const [valid, setValid] = useState(false);
  const [isPending, setIspending] = useState(false);

  return (
    <div className='App '>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetFood foods={foods} setFoods={setFoods} valid={valid} setValid={setValid} isPending={isPending} setIspending={setIspending}/>} />
          <Route path='/food-detail/:id' element={<DetailFood foods={foods} valid={valid}/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ListFoods foods={foods}  valid={valid} isPending={isPending} /> */}
      
    </div> 
  );
}

export default App;
