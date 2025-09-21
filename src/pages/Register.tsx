import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import type { AppDispatch } from '@/store';
import { register } from '@/store/slices/authSlice/authThunk';

function Register() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    // Clear form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex w-full items-center justify-center pt-8">
      <form
        onSubmit={handleRegister}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Register</legend>

        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>

        <Link to="/login" className="mt-2 text-sm text-blue-500">
          Back to login
        </Link>
      </form>
    </div>
  );
}

export default Register;
