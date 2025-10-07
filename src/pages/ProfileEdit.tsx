import Avatar from '@/components/Avatar';
// import ThemeToggle from '@/components/theme/ThemeTogle';

function ProfileEdit() {
  return (
    <>
      <header className="bg-base-400 flex h-11 items-center justify-between px-3">
        <button>Cancel</button>
        <span className="font-semibold">Edit Profile</span>
        <button className="text-cblue-200 font-semibold">Done</button>
      </header>

      <section className="border-cdark/29 flex h-40.25 flex-col border-b-[0.33px] text-center">
        <Avatar
          className="mt-[18.5px] h-fit w-full"
          src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/hinh_nen_na_tra_ma_dong_nao_hai_cover_d79a358a18.jpg"
          size={95}
        />
        <button className="text-cblue-200 mt-[12.5px] text-[13px] leading-[21px] font-semibold">
          Change Profile Photo
        </button>
      </section>

      <section className="border-b-cdark/29 border-b-[0.33px] px-4 dark:border-b-white/15">
        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Name</span>
          <span className="border-b-cdark/29 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15">
            Jacob West
          </span>
        </div>

        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Username</span>
          <span className="border-b-cdark/29 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15">
            jacob_w
          </span>
        </div>

        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Website</span>
          <span className="border-b-cdark/29 text-cdark/30 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15 dark:text-[#EBEBF5]">
            Website
          </span>
        </div>

        <div className="flex w-full text-[15px]">
          <span className="basis-1/3 py-[15px] leading-4.5">Bio</span>
          <span className="basis-2/3 pt-3.5 pb-[15px] leading-[18px]">
            Digital goodies designer @pixsellz Everything is designed.
          </span>
        </div>
      </section>

      <section className="text-cblue-200 flex h-[49px] items-center px-4">
        <button>Switch to Professional Account</button>
      </section>

      <section className="px-4">
        <span className="my-3.5 inline-block text-[15px] leading-5 font-semibold">
          Private Information
        </span>

        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Email</span>
          <span className="border-b-cdark/29 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15">
            jacob.west@gmail.com
          </span>
        </div>

        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Phone</span>
          <span className="border-b-cdark/29 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15">
            +1 202 555 0147
          </span>
        </div>

        <div className="flex w-full">
          <span className="basis-1/3 py-[15px] text-[15px] leading-4.5">Gender</span>
          <span className="border-b-cdark/29 basis-2/3 border-b-[0.33px] pt-3.5 pb-[15px] leading-[19px] dark:border-b-white/15">
            Male
          </span>
        </div>
      </section>
      {/* <ThemeToggle /> */}
    </>
  );
}

export default ProfileEdit;
