import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 28px;
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    max-width: 100vw;
    margin: 0;
    padding: 0;
  }
`;
