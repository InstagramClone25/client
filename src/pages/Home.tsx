import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import { decrement, increment } from '@/store/slices/counterSlice';

function Home() {
  const { t } = useTranslation();

  const couter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-gray-400 py-8">
      <h1 className="text-4xl">{t('welcome', { name: 'Duyên' })}</h1>
      <h2 className="text-3xl text-black">{couter}</h2>
      <div className="flex gap-4">
        <button className="btn btn-active" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button className="btn btn-active" onClick={() => dispatch(decrement())}>
          -1
        </button>
      </div>
      <label htmlFor="my_modal_1" className="btn">
        Open Modal
      </label>
      <input type="checkbox" id="my_modal_1" className="modal-toggle" />
      <dialog className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <label htmlFor="my_modal_1" className="btn">
                Close
              </label>
            </form>
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
    </div>
  );
}

export default Home;
