import React from 'react';
import axios from 'axios';
import {useState} from 'react';




const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            "Project-ID": "c706ec13-1017-4a16-8a11-071b255c32b1",
            'User-Name' : username,
            'User-Secret' : password
        };
        try {
            //username | password => chatengine --> give message
            await axios.get( 'https://api.chatengine.io/chats', {headers: authObject} );
            //works out --> logged in

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error){
             //error --> try wth new credentials.
            setError('Wrong credentials, please re-enter your credentials.')

         }
    };

    return (
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
                <button type="submit" className="button">
                    <span>Press to continue</span>
                </button>
            </div>
            <h2 className="error">{error}</h2>
          </form>
        </div>
      </div>
    );
}

export default LoginForm;