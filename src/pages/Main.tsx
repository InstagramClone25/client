import { useEffect, useRef, useState } from 'react';

import MainHeader from '@/components/main/MainHeader';
import MainPostItem from '@/components/main/MainPostItem';
import MainStoryList from '@/components/main/MainStoryList';
import type { IPost } from '@/types/post';

const LIST_POST_DEMO = [
  {
    id: 'post_12345',
    author: {
      _id: 'user_001',
      name: 'Joshua L',
      email: 'joshua@example.com',
      username: 'joshua_l',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEu8VANE5K1EEhzAx6a4OKO5XI89fxYZBdxg&s',
      verified: true,
      role: 'user',
      location: 'Tokyo, Japan',
      provider: 'local',
      createdAt: '2023-09-19T09:00:00Z',
      updatedAt: '2023-09-19T09:00:00Z',
    },
    caption: 'The game in Japan was amazing and I want to share some photos',
    media: [
      {
        id: 'media_001',
        postId: 'post_12345',
        url: 'https://i.pinimg.com/originals/7e/ce/11/7ece11b698783a019ddabf4ab80275e8.jpg',
        type: 'image',
        order: 1,
      },
      {
        id: 'media_002',
        postId: 'post_12345',
        url: 'https://i.pinimg.com/474x/62/86/e9/6286e93a92911a4c94018a39e9f81d06.jpg',
        type: 'image',
        order: 2,
      },
      {
        id: 'media_003',
        postId: 'post_12345',
        url: 'https://i.pinimg.com/474x/b5/42/77/b54277b814b9b1388e5b7b22681268d0.jpg',
        type: 'image',
        order: 3,
      },
    ],
    likes: {
      count: 44686,
      sample: [
        {
          _id: 'user_002',
          name: 'Craig Love',
          email: 'craig@example.com',
          username: 'craig_love',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlT4SDuNiRXSK6LPLHoRvcKbpm0tC-hE5qww&s',
          verified: false,
          role: 'user',
          location: 'Seoul, Korea',
          provider: 'local',
          createdAt: '2023-09-10T10:00:00Z',
          updatedAt: '2023-09-10T10:00:00Z',
        },
      ],
    },
    comments: [
      {
        id: 'comment_001',
        postId: 'post_12345',
        author: {
          _id: 'user_003',
          name: 'Alex',
          email: 'alex99@example.com',
          username: 'alex99',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4W7bZYx99YFbKudsPkYPMDmjYqL25CIFdUQ&s',
          verified: false,
          role: 'user',
          location: 'Osaka, Japan',
          provider: 'local',
          createdAt: '2023-09-18T11:00:00Z',
          updatedAt: '2023-09-18T11:00:00Z',
        },
        content: 'Amazing shot! 🔥',
        createdAt: '2023-09-19T11:15:00Z',
      },
    ],
    createdAt: '2023-09-19T10:00:00Z',
    updatedAt: '2023-09-19T10:00:00Z',
    isSaved: false,
    isLikedByCurrentUser: false,
  },
  {
    id: 'post_12346',
    author: {
      _id: 'user_004',
      name: 'Emily W',
      email: 'emily@example.com',
      username: 'emily_w',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uISCh7TGhuSMZcukez5yI19zRO7vaze7UA&s',
      verified: false,
      role: 'user',
      location: 'Paris, France',
      provider: 'local',
      createdAt: '2023-09-15T08:00:00Z',
      updatedAt: '2023-09-15T08:00:00Z',
    },
    caption: 'Morning coffee vibes ☕️',
    media: [
      {
        id: 'media_004',
        postId: 'post_12346',
        url: 'https://i.pinimg.com/474x/b5/42/77/b54277b814b9b1388e5b7b22681268d0.jpg',
        type: 'image',
        order: 1,
      },
    ],
    likes: {
      count: 1234,
      sample: [
        {
          _id: 'user_005',
          name: 'Michael',
          email: 'michael@example.com',
          username: 'michael',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyB5f1RUDvyZafUgfTSCfPRRCViFKsxKZbg&s',
          verified: false,
          role: 'user',
          location: 'London, UK',
          provider: 'local',
          createdAt: '2023-09-12T10:00:00Z',
          updatedAt: '2023-09-12T10:00:00Z',
        },
      ],
    },
    comments: [],
    createdAt: '2023-09-20T08:15:00Z',
    updatedAt: '2023-09-20T08:15:00Z',
    isSaved: true,
    isLikedByCurrentUser: true,
  },
  {
    id: 'post_12347',
    author: {
      _id: 'user_006',
      name: 'Travel Girl',
      email: 'travelgirl@example.com',
      username: 'travel_girl',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNhh-Rdv-jyg-PPhvUtx6UhtwekBMLF6boA&s',
      verified: true,
      role: 'user',
      location: 'Bali, Indonesia',
      provider: 'local',
      createdAt: '2023-09-16T09:00:00Z',
      updatedAt: '2023-09-16T09:00:00Z',
    },
    caption: 'Beach sunset 🌅✨',
    media: [
      {
        id: 'media_005',
        postId: 'post_12347',
        url: 'https://i.pinimg.com/474x/b5/42/77/b54277b814b9b1388e5b7b22681268d0.jpg',
        type: 'image',
        order: 1,
      },
    ],
    likes: {
      count: 9800,
      sample: [
        {
          _id: 'user_007',
          name: 'Anna',
          email: 'anna@example.com',
          username: 'anna',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnBanFf326TGThBvnDgmc-tsBDzQE8SYpFQ&s',
          verified: false,
          role: 'user',
          location: 'Singapore',
          provider: 'local',
          createdAt: '2023-09-10T11:00:00Z',
          updatedAt: '2023-09-10T11:00:00Z',
        },
      ],
    },
    comments: [
      {
        id: 'comment_002',
        postId: 'post_12347',
        author: {
          _id: 'user_008',
          name: 'Johnny',
          email: 'johnny@example.com',
          username: 'johnny',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELqZcVqw2UB7fUMbHa0s4KmVQ__O-K6Q4tQ&s',
          verified: false,
          role: 'user',
          location: 'Bangkok, Thailand',
          provider: 'local',
          createdAt: '2023-09-20T12:00:00Z',
          updatedAt: '2023-09-20T12:00:00Z',
        },
        content: 'Looks amazing! 🌴',
        createdAt: '2023-09-21T12:00:00Z',
      },
    ],
    createdAt: '2023-09-21T10:00:00Z',
    updatedAt: '2023-09-21T10:00:00Z',
    isSaved: false,
    isLikedByCurrentUser: true,
  },
  {
    id: 'post_12348',
    author: {
      _id: 'user_009',
      name: 'Food Lover',
      email: 'foodlover@example.com',
      username: 'foodlover',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVMzJ0Rn3VOwK6Pet3fKh48eeyQUY_igNoA&s',
      verified: false,
      role: 'user',
      location: 'New York, USA',
      provider: 'local',
      createdAt: '2023-09-10T15:00:00Z',
      updatedAt: '2023-09-10T15:00:00Z',
    },
    caption: 'Best pizza in town 🍕',
    media: [
      {
        id: 'media_006',
        postId: 'post_12348',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqRov8S3kW20uz9lLtCsDMsUn5gFaNO2mIQ&s',
        type: 'image',
        order: 1,
      },
    ],
    likes: { count: 567, sample: [] },
    comments: [
      {
        id: 'comment_003',
        postId: 'post_12348',
        author: {
          _id: 'user_010',
          name: 'Sarah',
          email: 'sarah@example.com',
          username: 'sarah',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteGENFziF5DTJu7b5L5QzC_tTGlFlH_lG1g&s',
          verified: true,
          role: 'user',
          location: 'Los Angeles, USA',
          provider: 'local',
          createdAt: '2023-09-20T10:00:00Z',
          updatedAt: '2023-09-20T10:00:00Z',
        },
        content: 'I need this right now 🤤',
        createdAt: '2023-09-22T15:30:00Z',
      },
    ],
    createdAt: '2023-09-22T14:00:00Z',
    updatedAt: '2023-09-22T14:00:00Z',
    isSaved: false,
    isLikedByCurrentUser: false,
  },
  {
    id: 'post_12349',
    author: {
      _id: 'user_011',
      name: 'Tech Guy',
      email: 'tech@example.com',
      username: 'tech_guy',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySqVxgpKwrB0gmIdTDwWo9oSnDXckxeCvjQ&s',
      verified: true,
      role: 'user',
      location: 'San Francisco, USA',
      provider: 'local',
      createdAt: '2023-09-11T09:00:00Z',
      updatedAt: '2023-09-11T09:00:00Z',
    },
    caption: 'New setup 😍 #developerlife',
    media: [
      {
        id: 'media_007',
        postId: 'post_12349',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHLJZ5U1eJpKQZyFRvaimtmyv3PmGfsvwwg&s',
        type: 'image',
        order: 1,
      },
    ],
    likes: {
      count: 2100,
      sample: [
        {
          _id: 'user_012',
          name: 'Linda',
          email: 'linda@example.com',
          username: 'linda',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDG651gVvw_X19qzPD82wsQIseaiEbRqosw&s',
          verified: false,
          role: 'user',
          location: 'New York, USA',
          provider: 'local',
          createdAt: '2023-09-13T10:00:00Z',
          updatedAt: '2023-09-13T10:00:00Z',
        },
      ],
    },
    comments: [],
    createdAt: '2023-09-23T09:00:00Z',
    updatedAt: '2023-09-23T09:00:00Z',
    isSaved: true,
    isLikedByCurrentUser: false,
  },
] as IPost[];

function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const st = el.scrollTop;

      if (st > lastScrollTop.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <MainHeader showHeader={showHeader} />
      <div ref={scrollRef} className="hide-scrollbar flex-1 overflow-y-auto pt-11">
        <MainStoryList />
        <div className="flex flex-col gap-4">
          {LIST_POST_DEMO.map((post) => (
            <MainPostItem post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
