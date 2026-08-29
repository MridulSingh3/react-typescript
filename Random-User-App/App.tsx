import { BrowserRouter, Routes, Route } from "react-router-dom";

import RandomUser from "./components/RandomUser"
import ViewDetails from "./components/ViewDetails";

const App = () => {
  const url = "https://randomuser.me/api/?results=10";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RandomUser url={url} />} />
          <Route path='/view/:id' element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
