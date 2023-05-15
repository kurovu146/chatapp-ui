import Header from "../layouts/header/Header";
import '../styles/pages/Login.css';

function Login() {
  return (
    <div className="h-full">
      <Header />
      <div className="flex-row p-48">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="username" />
              Username
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password" />
              Password
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="root">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-white-500 text-xs">
          &copy;2023 Kuro. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;