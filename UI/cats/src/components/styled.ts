import styled from 'styled-components';

const device = {
  mobile: `(min-width: 10px)`,
  tablet: `(min-width: 500px)`,
  desktop: `(min-width: 1000px)`
};

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  grid-template-areas:
    'nav nav nav nav nav'
    'asideLeft main asideRight'
    'footer footer footer';
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const Wrapper = styled.div<{ random: string }>`
  margin: 0.8rem;
  padding: 0.5rem;
  background-color: ${(props) => props.random};
  border-radius: 10px;
  // overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in;
  :hover {
    transform: scale(1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

export const P = styled.div`
  font-size: 1rem;
  line-height: 22px;
  text-align: left;
  padding: 5px 5px 5px 20px;
  text-transform: capitalize;
`;
