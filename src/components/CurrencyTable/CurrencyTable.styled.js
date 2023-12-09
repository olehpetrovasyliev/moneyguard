import styled from 'styled-components';

export const CurrencyTableStyled = styled.table`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  width: 100%;
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 10px;

  overflow: hidden;
  border-radius: 5px;
  border-collapse: collapse;

  thead {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: rgba(255, 255, 255, 0.2);
  }

  thead > tr {
    height: 56px;
  }

  th {
    width: 77px;
    padding-right: 10px;
  }

  th:first-child {
    padding-left: 10px;
  }

  td {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    th {
      padding-right: 20px;
    }

    th:first-child {
      padding-left: 30px;
    }

    th:last-child {
      padding-right: 50px;
    }
  }
`;

export const CurrencyTableBody = styled.tbody`
  td {
    padding-top: 24px;
    padding-right: 10px;
    text-align: center;
  }

  td:first-child {
    padding-left: 10px;
  }

  @media screen and (min-width: 1280px) {
    td:first-child {
      padding-left: 30px;
    }

    td:last-child {
      padding-right: 50px;
    }
  }
`;
