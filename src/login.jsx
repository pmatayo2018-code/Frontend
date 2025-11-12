import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://backend-app-mdhj.onrender.com/login', { email, password });
            console.log(response.data);
            alert('Login Successful');
            setEmail('');
            setPassword('');
            navigate('/home');

        } catch (error) {
            console.log(error);
            alert('Invalid credentials');
        }
    }





  return (
         <section className="flex flex-col items-center justify-center h-screen mx-auto bg-white">

            <div className="bg-cyan-600 text-white p-4 rounded-md w-96 ">
                <h1 className="text-center font-bold text-4xl mb-10">login</h1>
                <form onSubmit={handleSubmit}>
                        
                        <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="email" id=""className="bg-amber-500 mb-5 rounded-md w-full p-3" /> <br />
                        <input type="password" name=""  value={password} onChange={(e) => setPassword(e.target.value)}laceholder="password" id="" className="bg-amber-500 rounded-md w-full mb-5 p-3"/><br />
                        
                        <button type="submit" className="w-full bg-white text-black rounded-md p-3 cursor-pointer hover:bg-amber-500 transition-colors">login</button>
                </form>
             </div>
        </section>
    
  )
}

export default Login;