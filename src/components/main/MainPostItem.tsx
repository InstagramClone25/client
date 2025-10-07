import { Ellipsis } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import CommentStrokeIcon from '@/assets/icons/comment-stroke.svg?react';
import HeartSolidIcon from '@/assets/icons/heart-solid.svg?react';
import HeartStrokeIcon from '@/assets/icons/heart-stroke.svg?react';
import MessageStrokeIcon from '@/assets/icons/message-stroke.svg?react';
import OfficialSolidIcon from '@/assets/icons/official-solid.svg?react';
import SaveSolidIcon from '@/assets/icons/save-solid.svg?react';
import SaveStrokeIcon from '@/assets/icons/save-stroke.svg?react';
import Avatar from '@/components/Avatar';
import MainMediaCarousel from '@/components/main/MainMediaCarousel';
import type { AppDispatch } from '@/store';
import { likePost } from '@/store/slices/postSlice';
import type { IPost } from '@/types/post';

interface IMainPostItemProps {
  post: IPost;
}

function MainPostItem({ post }: IMainPostItemProps) {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleLikePost = () => dispatch(likePost(post.id));

  return (
    <div>
      <div className="flex h-[54px] items-center justify-between px-2.5">
        <div className="flex gap-2.5">
          <Avatar src={post.author.avatar} size={32} />

          <div className="flex flex-col justify-center gap-[1px]">
            <div className="flex items-center gap-1">
              <span className="text-[13px]">{post.author.name}</span>
              {post.author.verified && <OfficialSolidIcon />}
            </div>

            <span className="text-[11px]">{post.author.location}</span>
          </div>
        </div>

        <Ellipsis size={14} className="mr-[5px]" />
      </div>

      {/* Media carousel */}
      <MainMediaCarousel current={current} medias={post.media} setCurrent={setCurrent} />

      <div className="p-3.5">
        <div className="flex items-center">
          <div className="flex flex-1 gap-[17.5px]">
            {post.isLikedByCurrentUser ? (
              <HeartSolidIcon width={24} className="text-[#ff3041]" onClick={handleLikePost} />
            ) : (
              <HeartStrokeIcon width={24} onClick={handleLikePost} />
            )}
            <CommentStrokeIcon width={22} />
            <MessageStrokeIcon width={23} />
          </div>

          <div className="flex gap-1">
            {post.media.length > 1 &&
              post.media.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    current === idx ? 'bg-cblue-100' : 'bg-black/15 dark:bg-white/30'
                  }`}
                />
              ))}
          </div>

          <div className="flex flex-1 justify-end">
            {post.isSaved ? <SaveSolidIcon /> : <SaveStrokeIcon />}
          </div>
        </div>

        <div className="mt-[9px] text-[13px]">
          {post.likes.count > 0 && (
            <div className="mb-[5px] flex h-fit items-center gap-[6.5px]">
              {post.likes.sample.length > 0 && (
                <Avatar src={post.likes.sample[0].avatar} size={17} />
              )}

              {post.likes.sample.length > 0 ? (
                <span>
                  Liked by
                  <strong className="font-semibold">{post.likes.sample[0]?.name}</strong> and
                  {post.likes.count} others
                </span>
              ) : (
                <span>Liked by {post.likes.count} users</span>
              )}
            </div>
          )}

          <p>
            <strong className="font-semibold">{post.author.name}</strong>{' '}
            <span className="whitespace-pre-wrap">{post.caption}</span>
          </p>
        </div>

        <span className="mt-[13px] text-[11px] text-gray-500">September 19</span>
      </div>
    </div>
  );
}

export default MainPostItem;
