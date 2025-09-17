import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex w-full items-center justify-center pt-8">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>

        <Link to="/register" className="mt-2 text-sm text-blue-500">
          Create new account
        </Link>
      </fieldset>
    </div>
  );
}

export default Login;
