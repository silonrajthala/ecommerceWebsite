import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        
        <div className= ' bg-black rounded-2xl p-5 sm:p-1 w-1/2 sm:w-auto text-center'>
            <form>
            <h1 className='text-white font-bold text-3xl'>Welcome Admin</h1>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-semibold mb-2 text-left">Email</label>
              <input
                type="email"
                id="email"
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
              Log In
            </button>

            </form>

        </div>
      </div>
    );
  }
}

export default Admin;
