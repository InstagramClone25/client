import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store';
import { decrement, increment } from '@/store/slices/counterSlice';
import { getUsers } from '@/store/slices/userSlice';

function Home() {
  const { t } = useTranslation();

  const counter = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchUsers = () => {
      dispatch(getUsers());
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-gray-400 py-8">
      <h1 className="text-4xl">{t('welcome', { name: 'Duyên' })}</h1>
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
        {user.loading && <span className="loading loading-dots loading-xl"></span>}
        {user.error && <p>Error: {user.error}</p>}
        {user.items.length > 0 && (
          <ul>
            {user.items.map(({ _id, name, email, createdAt }) => (
              <li key={_id}>
                {name} - {email} - {createdAt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
