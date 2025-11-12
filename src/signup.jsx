import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-app-mdhj.onrender.com/signup', {
        userName,
        email,
        password
      });
      console.log(response.data);
      alert('Registration Successful');
      setUserName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen mx-auto bg-white">
      <div className="bg-cyan-600 text-white p-4 rounded-md w-96 ">
        <h1 className="text-center font-bold text-4xl mb-10">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="bg-amber-500 mb-5 w-full rounded-md p-3"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-amber-500 mb-5 rounded-md w-full p-3"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-amber-500 rounded-md w-full mb-5 p-3"
          />
          <button
            type="submit"
            className="w-full bg-white text-black rounded-md p-3 cursor-pointer hover:bg-amber-500 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
