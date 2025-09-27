import { useEffect, useState } from 'react';

import { userService } from '@/api/userService';

function About() {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [t1, t2] = await Promise.all([userService.test1(), userService.test2()]);

        setTest1(t1.data.data);
        setTest2(t2.data.data);

        console.log(t1, t2);
      } catch (e: any) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      test1: {test1} <br />
      test2: {test2}
    </>
  );
}

export default About;
