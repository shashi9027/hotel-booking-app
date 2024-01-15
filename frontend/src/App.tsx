import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { useAppContext } from './contexts/AppContext';
import AddHotel from './pages/AddHotel';
import MyHotels from './pages/MyHotels';
import EditHotel from './pages/EditHotels';

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
         <Routes>
              <Route path="/" 
               element={
               <Layout>
                <p>Home Page</p>
                </Layout>  } />
              <Route path="/search" element={<Layout>
                <p>Home Page</p>
                </Layout>} />
              <Route path="/register" element={<Layout><Register/></Layout>}/>
              {isLoggedIn && (
          <>
            {/* <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            /> */}

            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
            <Route
              path="/my-hotels"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
            {/* <Route
              path="/my-bookings"
              element={
                <Layout>
                  <MyBookings />
                </Layout>
              }
            /> */}
          </>
        )}
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/sign-in" element={
                <Layout>
                  <SignIn/>
                </Layout>
              } />
         </Routes>
    </Router>
  )
}

export default App
