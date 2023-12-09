import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    padding: 0 0 15px 0;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    padding-left: 70px;
    padding-right: 28px;
  }
`;

export const StyledWrapperLeft = styled.div``;

export const StyledWrapperRight = styled.div`
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 32px;
    margin-left: 85px;
  }
`;
