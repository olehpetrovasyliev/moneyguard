import styled from 'styled-components';
import { LiaHryvniaSolid } from 'react-icons/lia';

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 280px;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const HrvnIcon = styled(LiaHryvniaSolid)`
  width: 20px;
  height: 20px;
`;

// export const StyledDonath = styled(Doughnut)`
//   border-radius: 180px;

//   background-color: red;
//   box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
//     0px -3px 2px 0px rgba(0, 0, 0, 0.1);
// `;
