import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 60px;
`;

export const StyledPicture = styled.picture`
  position: absolute;
  top: -10%;
`;

export const SpanWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const StyledSpanLeft = styled.span`
  display: flex;
  position: absolute;
  left: 8.3%;
  transform: translateY(-70%);

  color: #ff868d;
  font-size: 12px;
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    left: 8.5%;
    transform: translateY(-65%);
    @media only screen and (min-width: 1280px) {
      left: 9.8%;
      transform: translateY(-40%);
    }
  }
`;
export const StyledSpanRight = styled.span`
  position: absolute;
  color: #ff868d;
  font-size: 12px;
  font-weight: 400;
  margin-right: 98px;

  left: 71.9%;
  transform: translateY(-230%);

  @media only screen and (min-width: 768px) {
    left: 72%;
  }
  @media only screen and (min-width: 1280px) {
    transform: translate(23%, -270%);
  }
`;

export const CircleSpanLeft = styled.span`
  position: absolute;
  top: 12%;
  left: 11.5%;

  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #563eaf;
  border: 1.5px solid #ff868d;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: 12%;
    left: 11.5%;
  }
  @media only screen and (min-width: 1280px) {
    top: 8%;
    left: 12%;
  }
`;
export const CircleSpanRight = styled.span`
  position: absolute;

  top: -15%;
  left: 75%;

  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ff868d;
  border-radius: 50%;
  background-color: #563eaf;
  border: 1.5px solid #ff868d;

  @media only screen and (min-width: 768px) {
    transform: translateX(-4%);
  }
  @media only screen and (min-width: 1280px) {
    top: -12%;
    transform: translateX(20%);
  }
`;
