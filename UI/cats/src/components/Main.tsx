import React, { FC, useEffect, useState } from 'react';
import { useGlobalContext } from '../state/Context';

import { getCatsData } from '../utils/services';
import { getRandomColor } from '../utils/helpers';
import { URLS } from '../utils/constants';
import { Container, Img, P, Wrapper } from './styled';

interface ICat {
  id: string;
  url: string;
  tags: string[];
}

const Main: FC = () => {
  const { state } = useGlobalContext();

  const [cats, setCats] = useState<ICat[]>([]);

  const getCats = async () => {
    const data = await getCatsData();
    await setCats(data);
    console.log(window.screen.width);
  };

  useEffect(() => {
    getCats();
  }, []);

  console.log('cats', cats);
  console.log('color', getRandomColor());

  return (
    <>
      <div className='main'>
        <h1>{state.companyName}</h1>
        <div />
        <Container>
          {cats.map((item) => (
            <Wrapper key={item.id} random={getRandomColor()}>
              <Img src={URLS.BASE_URL_CATS + item.url} alt='' />
              <div>
                {item.tags.map((tag, index) => (
                  <P key={index}>{tag}</P>
                ))}
              </div>
            </Wrapper>
          ))}
        </Container>
        <div />
      </div>
    </>
  );
};

export default Main;
