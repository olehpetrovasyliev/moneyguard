import styled from 'styled-components';
import { LiaPenSolid } from 'react-icons/lia';

export const AllTransactionsDetails = styled.ul`
  list-style: none;
  height: 75vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 2px;
    opacity: 0.3;
  }

  &::-webkit-scrollbar-track {
    background: #734aef;
    border-radius: 20px;
    opacity: 0.3;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff868d;
    border-radius: 20px;
    opacity: 0.3;
  }
`;

export const TransactionDetails = styled.ul`
  margin-top: 8px;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 8px;
  border-left: 5px solid ${props => props.color};
`;

export const TransactionDetailsItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  background: rgba(255, 255, 255, 0.07);
  padding: 12px 20px;
  font-size: 16px;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const TransactionDetailsItemTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SumText = styled.span`
  color: ${props => props.color};
`;
export const TableWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    padding-top: 46px;
    padding-left: 70px;
    padding-right: 16px;
  }
`;

export const Table = styled.table`
  display: block;
  width: 100%;
  height: 356px;
  overflow-y: auto;

  @media screen and (min-width: 1280px) {
    width: 715px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    opacity: 0.3;
  }

  &::-webkit-scrollbar-track {
    background: #734aef;
    border-radius: 20px;
    opacity: 0.3;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff868d;
    border-radius: 20px;
    opacity: 0.3;
  }
  & tbody {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
`;
export const TableBody = styled.tbody`
  display: block;
`;

export const TableHead = styled.tr`
  border-top: none;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1.2fr 1.7fr 0.7fr 0.4fr 0.6fr;
  width: 100%;
  height: 56px;
  color: #fbfbfb;
  background-color: rgba(82, 59, 126, 1);
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(500px);
  overflow-y: auto;
`;

export const TableHeader = styled.th`
  font-weight: 700;
  font-size: 16px;
  color: #fbfbfb;
  text-align: left;
`;

export const TableRow = styled.tr`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  border-top: none;
  font-size: 14px;
  color: #fbfbfb;
  text-align: left;
  position: relative;
  padding-left: 20px;
  padding-right: 5px;
  margin: 0;
  display: grid;
  grid-template-columns: 2fr 0.9fr 1.8fr 1.5fr 1.5fr 0.8fr 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SumEl = styled.span`
  border-top: none;
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${props => props.color};
`;

export const Sum = styled.td`
  border-top: none;
  text-align: right;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${props => props.color};
`;
export const TableDash = styled.td`
  font-weight: inherit;
`;
export const ButtonContainer = styled.td`
  width: 100%;
  display: flex;
  padding-right: auto;
  border-top: none;
  text-align: right;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: auto;
`;

export const ButtonDelTransaction = styled.button`
  text-align: center;
  width: 69px;
  height: 29px;
  background: linear-gradient(
    167deg,
    #ffc727 0%,
    #9e40ba 61.46%,
    #7000ff 90.54%
  );
  font-size: 12px;
  font-weight: 300;
  border-radius: 18px;
  border: none;
  letter-spacing: 0.05em;
  color: #fff;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    border-radius: 18px;
    border: 2px solid yellow;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
    outline: none;
  }
`;
export const ButtonEditTransaction = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: center;
  background: transparent;
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 18px;
  border: none;
  width: 69px;
  height: 29px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:active,
  &:focus,
  &:hover {
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 18px;
    border: 2px solid yellow;
    cursor: pointer;
    transform: scale(1.05);
    outline: none;
    color: ${({ theme }) => theme.colors.primaryFont};
  }
  &:active svg,
  &:focus svg,
  &:hover svg {
    cursor: pointer;
    fill: #ff868d;
    transform: scale(1.05);
    outline: none;
  }
`;

export const BtnEditTransaction = styled.button`
  background: transparent;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: 1px solid #ffb627;
    transform: scale(1.05);
    outline: none;
  }
  &:active svg,
  &:focus svg,
  &:hover svg {
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    fill: #ff868d;
    transform: scale(1.05);
    outline: none;
  }
`;

export const StyledBiPencil = styled(LiaPenSolid)`
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const TableTop = styled.table`
  width: 708px;

  @media only screen and (min-width: 1280px) {
    width: 718px;
  }
`;
