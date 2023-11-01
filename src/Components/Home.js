/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Button} from '@mui/material'
import weather from "../images/weather.png"
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Home() {

    const {loginWithRedirect,isAuthenticated} = useAuth0()

    
  return (
    <div style={{position:"fixed",left:"45%",top:"40%"}}>
        <img src={weather} style={{width:"175px",height:"175px",marginLeft:"5px"}}/>
        <br/>
        {isAuthenticated ?<Link to="/weather" style={{textDecoration:"none",padding:"10px",borderRadius:"5px",color:"white",backgroundColor:"#109EEA"}}>Click Here</Link>
      : <Button variant='contained' onClick={()=> loginWithRedirect()}>SignUp</Button>}
    </div>
  )
}

export default Home
