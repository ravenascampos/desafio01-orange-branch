import Sidebar from '@/components/Sidebar';
import TweetUser from '@/components/TwettUser';

export default function Home() {
  // const {
  //   day,
  //   month,
  //   year,
  //   days,
  //   months,
  //   years,
  //   setDay,
  //   error,
  //   isError,
  //   handleMonthChange,
  //   handleYearChange,
  // } = useInputSelectOptionsData();

  return (
    <main
      style={{
        display: 'flex',
      }}
    >
      {/* <Header /> */}
      <Sidebar />
      <TweetUser
        userName="User Test"
        userEmail="userTest"
        comments="10"
        description="kfkgl jkrjjfrkl kfkkfkkfkf kskfkkfkfkkfkf kckkckkc ffjkkfkfk"
        date="1 abr"
        likes="10"
        retweets="10"
        statistics="10"
      />
    </main>
  );
}
