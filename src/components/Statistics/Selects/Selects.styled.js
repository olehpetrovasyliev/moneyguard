import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;

  @media only screen and (min-width: 768px) {
    width: 336px;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    margin-top: 0;
  }

  @media only screen and (min-width: 1280px) {
    width: 395px;
    flex-direction: row;
  }
`;
