import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store';
import { getProfile } from '@/store/slices/authSlice/authThunk';
import { decrement, increment } from '@/store/slices/counterSlice';

function Home() {
  const { t } = useTranslation();

  const counter = useSelector((state: RootState) => state.counter.value);
  const { user, error, loading, access_token } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchUsers = () => {
      dispatch(getProfile());
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-gray-400 py-8">
      <h1 className="text-4xl">{t('welcome', { name: user?.name })}</h1>
      <h2 className="text-3xl text-black">{counter}</h2>
      <div className="flex gap-4">
        <button className="btn btn-active" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button className="btn btn-active" onClick={() => dispatch(decrement())}>
          -1
        </button>
      </div>
      <button onClick={() => modalRef.current?.showModal()} className="btn">
        Open Modal
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <button onClick={() => modalRef.current?.close()} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>

      <div className="rating">
        <div className="mask mask-star bg-orange-300" aria-label="1 star"></div>
        <div className="mask mask-star bg-orange-300" aria-label="2 star"></div>
        <div className="mask mask-star bg-orange-300" aria-label="3 star"></div>
        <div className="mask mask-star bg-orange-300" aria-label="4 star" aria-current="true"></div>
        <div className="mask mask-star bg-orange-300" aria-label="5 star"></div>
      </div>

      <div>
        {loading && <span className="loading loading-dots loading-xl"></span>}
        {error && <p>Error: {error}</p>}
        {!!user && (
          <ul>
            <li key={user._id}>
              {user.name} - {user.email} - {user.role}
            </li>
          </ul>
        )}
      </div>
      <div>{access_token}</div>
    </div>
  );
}

export default Home;
