import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import InstagramLogo from '@/assets/logos/instagram.svg?react';

function LoginQuick() {
  const [userSaved, setUserSaved] = useState<{ avatar: string; username: string } | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user') || '';
    if (user) {
      setUserSaved(JSON.parse(user));
    }
  }, []);

  return (
    <div className="flex h-[100dvh] flex-col">
      <div className="flex flex-1 items-center px-8.5">
        <div className="w-full">
          <div className="mx-auto mb-[52px] w-fit">
            <InstagramLogo />
          </div>

          <div className="mb-3 flex flex-col items-center gap-[13px]">
            <div className="avatar">
              <div className="w-[85px] rounded-full">
                <img
                  src={
                    userSaved?.avatar ||
                    'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGqUY1_agMpZSr1qr34TXFfWt9TLzuBU1Ba31MvO4FTUFgfchLkeD7mWiHFKemVnAcFTUEVS6ZsoKEUs5ppnF59&_nc_ohc=83hb7nR-7kgQ7kNvwElMfbi&_nc_oc=Adm5M5XldRJ00i4DITOXrQLvuOc7LkpgEJGqP-lsgjKH9IdHYDOXVut_kB-fXgTaV_gZw53GwAbCm3Oq7VICeQc_&_nc_zt=24&_nc_ht=scontent.fdad1-2.fna&oh=00_Afd7dhRVtsydelaLu3TPgoJle7oPCN_gcmaUIrudQ726uA&oe=6906ABBA'
                  }
                />
              </div>
            </div>
            <span className="text-sm font-semibold">{userSaved?.username}</span>
          </div>

          <button
            type="submit"
            className="btn bg-cblue disabled:!bg-cblue h-11 w-full rounded-sm text-white"
          >
            Login
          </button>

          <Link
            to="/login"
            className="text-cblue mx-auto mt-[30px] flex justify-center gap-2 text-sm font-semibold"
          >
            Switch accounts
          </Link>
        </div>
      </div>
      <div className="border-cdark/29 flex h-21 w-full items-center justify-center border-t-[1px] text-xs dark:border-white/15">
        <span className="mr-1 text-black/40 dark:text-white/60">Don’t have an account?</span>
        <Link to="#" className="font-semibold">
          Sign up.
        </Link>
      </div>
    </div>
  );
}

export default LoginQuick;
