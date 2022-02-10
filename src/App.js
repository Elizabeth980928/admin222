import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/NavBar";

//import Rooms from "./Components/Rooms";
// import {  onValue, ref } from "firebase/database";
// import { db } from "./firebase";
import { useEffect } from "react";
//import { useDispatch } from "react-redux";
// import SingleRooms from "./Components/SingleRooms";
//import Bookings from "./Components/Bookings";
// import { UserAuthContextProvider } from "./contexts/UserAuthContext";
// //import ProtectedRoute from "./Components/ProtectedRoute";

import Login from "./Components/Login";
import AddRooms from "./Components/AddRooms";
import Users from "./Components/Users";
import UpdateRoom from "./Components/UpdateRoom";
//import Rooms from "./Components/Rooms";
import Bookings from "./Components/Bookings";
import SingleRooms from "./Components/SingleRooms";
import { Provider } from "react-redux";
import { store } from './store/reduxStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/addRoom" element={<AddRooms />} />
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/update-room/" element={<UpdateRoom/>}/>
          <Route path="/update-room/:slug" element={<UpdateRoom/>} />
          <Route path="/rooms/:slug" element={<SingleRooms/>}/>
          <Route path="/rooms" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
