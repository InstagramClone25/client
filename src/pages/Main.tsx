import MainHeader from '@/components/main/MainHeader';
import MainPostList from '@/components/main/MainPostList';
import MainStoryList from '@/components/main/MainStoryList';

function Main() {
  return (
    <div className="flex min-h-full flex-col pt-11">
      <MainHeader />

      <MainStoryList />

      <MainPostList />
    </div>
  );
}

export default Main;
