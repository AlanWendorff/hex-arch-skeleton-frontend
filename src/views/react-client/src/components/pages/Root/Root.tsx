import { FC, useEffect } from 'react';
import getCharacters from '@/services/getCharacters';

const Root: FC = () => {
  useEffect(() => {
    getCharacters().then((response) => {
      console.log(response);
    });
  }, []);

  return <div>ROOT</div>;
};

export default Root;
