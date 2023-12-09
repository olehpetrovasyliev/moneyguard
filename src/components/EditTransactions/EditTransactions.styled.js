import styled from 'styled-components';

export const StyledCategoryName = styled.p`
  border: none;
  border-bottom: 1px solid currentcolor;
  color: ${({ theme }) => theme.colors.secondaryFont};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  font-weight: ${({ weight }) => weight};
  cursor: default;
`;

export const IncomeSpanEditTransaction = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ffb627' : 'rgb(251, 251, 251)'};
  &:hover {
    cursor: pointer;
  }
`;

export const ExpenseSpanEditTransaction = styled.span`
  color: ${({ isSelected }) =>
    isSelected === true ? '#ff868d' : 'rgb(251, 251, 251)'};
  &:hover {
    cursor: pointer;
  }
`;
