import React from 'react';
import "./loginform.css"



const LoginForm = () => {
  return (
    <div>
        <div className='cover'>
            <h1>Login</h1>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <div>
                
            </div>
            <div className='login-btn'>Login</div>
            <p>Or login using</p>
            <div className='alt-login'>
              <div className='facebook'></div>
              <div className='google'></div>

            </div>

        </div>
      
    </div>
  )
}

export default login
