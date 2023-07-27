import React from 'react'
import Signup from './Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <AuthProvider>
      <Container 
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: "100vh"}}
      >
        <div className='w-100' style={{ maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Routes>

                <Route path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute> 
                }/>
                <Route path="/signup" Component={Signup} />
                <Route path="/login" Component={Login} />
                <Route path="/forgotpassword" Component={ForgotPassword} />
                <Route path="/updateprofile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute> 
                }/>
                
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider> 
  )
}

export default App;
