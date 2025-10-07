import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPostItem from '@/components/main/MainPostItem';
import type { AppDispatch, RootState } from '@/store';
import { getPostList } from '@/store/slices/postSlice/postThunk';

function MainPostList() {
  const { posts } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <MainPostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default MainPostList;
