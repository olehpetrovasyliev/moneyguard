import styled from 'styled-components';

export const StyledAside = styled.aside`
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    align-items: baseline;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    width: 480px;
    height: 100vh;
    margin-bottom: 0;
    padding-top: 40px;
    padding-bottom: 15px;

    border-right: 2px solid ${({ theme }) => theme.colors.secondaryFont};
    background: rgb(58, 36, 145);
    background: radial-gradient(
      circle,
      rgba(58, 36, 145, 1) 9%,
      rgba(63, 39, 120, 1) 65%,
      rgba(48, 34, 92, 1) 100%
    );
  }
`;

export const StyledWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    min-width: 336px;
  }

  @media only screen and (min-width: 1280px) {
    min-width: 100%;
  }
`;
