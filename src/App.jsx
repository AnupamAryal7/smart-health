import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Error from "./Error";
import FindDoctor from "./Components/FindDoctor";
import ConsultNow from "./Components/ConsultNow";
import BookAppointment from "./Components/BookAppointment";
import HealthPackages from "./Components/HealthPackages";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  return (
   <div className="">
       <NavBar />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/doctor' element={<FindDoctor />}></Route>
          <Route path='/consult' element={<ConsultNow />}></Route>
          <Route path='/appointment' element={<BookAppointment />}></Route>
          <Route path='/packages' element={<HealthPackages />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
   </div> 
  );
}

export default App;
