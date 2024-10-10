import logo from'./logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/home/HomePage';
import FooterComponent from './components/common/Footer';
import AllRoomsPage from './components/booking_rooms/AllRoomsPage';
import FindBookingPage from './components/booking_rooms/FindBookingPage';
import RoomDetailsPage from './components/booking_rooms/RoomDetailsPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import ProfilePage from './components/profile/ProfilePage';
import EditProfilePage from './components/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './service/guard';
import AdminPage from './components/admin/AdminPage';
import AddRoomPage from './components/admin/AddRoomPage';
import EditBookingPage from './components/admin/EditBookingPage';
import EditRoomPage from './components/admin/EditRoomPage';
import ManageBookingsPage from './components/admin/ManageBookingsPage';
import ManageRoomPage from './components/admin/ManageRoomPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            {/* public routes */}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/rooms' element={<AllRoomsPage/>}/>
            <Route exact path='/find-booking' element={<FindBookingPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>

            {/* protected routes  */}
            <Route exact path='/room-details-book/:roomId' element = {<ProtectedRoute element={<RoomDetailsPage/>}/>} />
            <Route exact path='/profile' element={<ProtectedRoute element={<ProfilePage/>}/>} />
            <Route exact path='/edit-profile' element={<ProtectedRoute element={<EditProfilePage/>}/>} />


            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* WildCard/Fallback route */}
            <Route path="*" element={<Navigate to="/home" />} />

          </Routes>
        </div>
        <FooterComponent/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;