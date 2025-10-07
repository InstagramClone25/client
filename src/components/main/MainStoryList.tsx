import AvatarStory from '@/components/AvatarStory';

const USERS = [
  {
    _id: '1',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: false,
    hasStory: true,
  },
  {
    _id: '2',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: true,
    hasStory: true,
  },
  {
    _id: '3',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: false,
    hasStory: true,
  },
  {
    _id: '4',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: false,
    hasStory: true,
  },
  {
    _id: '5',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: false,
    hasStory: false,
  },
  {
    _id: '6',
    avatar: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',
    name: 'Mèo',
    isLive: true,
    hasStory: true,
  },
];

function MainStoryList() {
  return (
    <div className="hide-scrollbar border-cdark/30 flex h-[98px] w-full items-center gap-5 overflow-x-auto border-b-[0.5px] px-2.5">
      {USERS.map((user) => (
        <div key={user._id} className="flex h-fit flex-col items-center justify-center gap-[5px]">
          <AvatarStory src={user.avatar} hasStory={user.hasStory} isLive={user.isLive} size={56} />
          <span className="text-[12px] leading-3.5">{user.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MainStoryList;
