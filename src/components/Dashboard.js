import React, {useState} from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, Link } from "react-router-dom"

export default function Dashboard() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handlleLogout(){
    setError('')

    try{
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-canter mb-4'>
            Profile 
          </h2>
          {error && <Alert variant="danger"> {error} </Alert>}
          <strong>Email:   </strong>
          {currentUser.email}
          <Link to ="/updateprofile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handlleLogout}>
              Log Out
            </Button>
      </div>
    </>
  )
}
