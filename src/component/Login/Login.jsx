// import  { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Login.css'
// const Login = ({ onLogin }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
    
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//         const response = await fetch("http://localhost:3005/admin");
//         const adminData = await response.json();
//         console.log(adminData);
//         const admin = adminData.find(
//             (a) => a.username === username && a.password === password
//         );

//         if (admin) {
//             // If the username and password match, call the onLogin function
//             onLogin();
//             // Then navigate to the dashboard or desired route
//             navigate("/dashbord");
//         } else {
//             setErrorMessage("Invalid username or password");
//         }
//         } catch (error) {
//         console.error("Error fetching admin data:", error);
//         setErrorMessage("An error occurred while logging in");
//         }
//     };

//     return (
//         <div className="ngm">
//         <form onSubmit={handleSubmit}>
//             <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//         </form>
//         {errorMessage && <p>{errorMessage}</p>}
//         </div>
//     );
// };

// export default Login;



// Login.js
// import  { useState } from 'react';
// // import { useHistory } from 'react-router-dom';

// function Login() {
//     // const history = useHistory();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = () => {
//         // Check if username and password match the expected values
//         if (username === 'Ahmed' && password === '3650899') {
//         history.push('/dashboard');
//         } else {
//         setError('Username or password is unacceptable');
//         }
//     };

//     return (
//         <div>
//         <h2>Login</h2>
//         <div>
//             <label>Username:</label>
//             <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             />
//         </div>
//         <div>
//             <label>Password:</label>
//             <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//         </div>
//         <button onClick={handleLogin}>Login</button>
//         {error && <p>{error}</p>}
//         </div>
//     );
// }

// export default Login;



import './Login.css'
import  { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Check if username and password match the expected values
        if (username === 'Ahmed' && password === '2020') {
        setLoggedIn(true);
        } else {
        setError('Username or password is unacceptable');
        }
    };

    return (
        <div >
                {loggedIn ? (
                    <Dashboard />
                ) : (
                    <div className='login-section'>
                        <div className="login-box"> 
                            <h2>Log in</h2>
                            <div>
                                <input
                                className="form-control"
                                placeholder='Username'
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                placeholder='Password'
                                className="form-control"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className='cus-btn' onClick={handleLogin}>Login</button>
                            <p >&quot; Only The Owner Can Enter &quot;</p>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Login;