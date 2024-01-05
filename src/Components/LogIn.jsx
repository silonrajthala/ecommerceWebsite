import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';


 class LogIn extends Component {
  render() {
    return (
      <div className=' pt-32' >
        <div className=' h-80 sm:h-40  bg-cover sm:bg-center flex items-end justify-center'  style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp6339429.jpg')",
        }}> 
          <h2 className="text-2xl font-bold mb-4 text-white">Sign In</h2>
        </div>
       <div className='flex items-center justify-center w-full py-20 sm:py-5'>
          <div className= ' bg-black rounded-2xl p-5 sm:p-1 w-1/2 sm:w-auto text-center'>
          <form className=' p-10' > 
          <div className="mb-4">
              <label htmlFor="email" className="block text-white font-semibold mb-2 text-left">Email</label>
              <input
                type="email"
                id="email1"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email" />
            </div>
            <div className=" mb-10">
              <label htmlFor="password" className="block text-white font-semibold mb-2 text-left">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
            <h1 className='text-white text-left mt-5'>New to Fashion Store?
            <Link to="/signup" className=" px-3 text-blue-500 hover:text-blue-700">Sign Up</Link>
        </h1>
          </form>
          </div>
        </div>
        
        <Footer />
      </div>
     
    )
  }
}

export default LogIn