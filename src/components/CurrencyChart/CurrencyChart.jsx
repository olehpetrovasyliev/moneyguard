import currencyImgDesk from 'assets/images/currency_desk.webp';
import currencyImgRetinaDesk from 'assets/images/currency_desk@2x.png';
import currencyImgTablet from 'assets/images/currency_tablet.png';
import currencyImgRetinaTablet from 'assets/images/currency_tablet@2x.png';
import currencyImgMobile from 'assets/images/currency_mobile.png';
import currencyImgRetinaMobile from 'assets/images/currency_mobile@2x.png';
import lineImgDesc from 'assets/images/line_desc_1x.png';
import lineImgDescRetina from 'assets/images/line_desc_2x.png';
import lineImgDescTab from 'assets/images/line_desc_tab_1x.png';
import lineImgDescTabRetina from 'assets/images/line_desc_tab_2x.png';
import lineImgDescMob from 'assets/images/line_desc_mob_1x.png';
import lineImgDescMobRetina from 'assets/images/line_desc_mob_2x.png';

import currencyImgDeskWebp from 'assets/images/currency_desk.webp';
import currencyImgRetinaDeskWebp from 'assets/images/currency_desk@2x.webp';
import currencyImgTabletWebp from 'assets/images/currency_tablet.webp';
import currencyImgRetinaTabletWebp from 'assets/images/currency_tablet@2x.webp';
import currencyImgMobileWebp from 'assets/images/currency_mobile.webp';
import currencyImgRetinaMobileWebp from 'assets/images/currency_mobile@2x.webp';
import lineImgDescWebp from 'assets/images/line_desc_1x.webp';
import lineImgDescWebpRetina from 'assets/images/line_desc_2x.webp';
import lineImgDescTabWebp from 'assets/images/line_desc_tab_1x.webp';
import lineImgDescTabWebpRetina from 'assets/images/line_desc_tab_2x.webp';
import lineImgDescMobWebp from 'assets/images/line_desc_mob_1x.webp';
import lineImgdescMobWebpRetina from 'assets/images/line_desc_mob_2x.webp';

import {
  CircleSpanLeft,
  CircleSpanRight,
  SpanWrapper,
  StyledPicture,
  StyledSpanLeft,
  StyledSpanRight,
  Wrapper,
} from './CurrencyChart.styled';

export const CurrencyChart = ({ currentRates }) => {
  const filteredRates = currentRates.filter(rate => {
    return (
      (rate.currencyCodeA === 840 && rate.currencyCodeB !== 978) ||
      (rate.currencyCodeA === 978 && rate.currencyCodeB !== 840)
    );
  });

  const filteredSell = filteredRates.map(el => {
    return el.rateSell;
  });

  return (
    <Wrapper>
      <CircleSpanLeft></CircleSpanLeft>
      <CircleSpanRight></CircleSpanRight>
      <SpanWrapper>
        <StyledSpanLeft>{Number(filteredSell[0]).toFixed(2)}</StyledSpanLeft>
        <StyledSpanRight>{Number(filteredSell[1]).toFixed(2)}</StyledSpanRight>
      </SpanWrapper>

      <StyledPicture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${lineImgDescWebp} 1x, ${lineImgDescWebpRetina} 2x`}
          type="image/webp"
        />

        <source
          media="(min-width: 1280px)"
          srcSet={`${lineImgDesc} 1x, ${lineImgDescRetina} 2x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${lineImgDescTab} 1x, ${lineImgDescTabRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${lineImgDescTabWebp} 1x, ${lineImgDescTabWebpRetina} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${lineImgDescMob} 1x, ${lineImgDescMobRetina} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${lineImgDescMobWebp} 1x, ${lineImgdescMobWebpRetina} 2x`}
          type="image/png"
        />

        <img src={lineImgDesc} alt="Currency rate" loading="lazy" />
      </StyledPicture>

      {/* //mount */}
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyImgDeskWebp} 1x, ${currencyImgRetinaDeskWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${currencyImgDesk} 1x, ${currencyImgRetinaDesk} 2x`}
          type="image/png"
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${currencyImgTabletWebp} 1x, ${currencyImgRetinaTabletWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${currencyImgTablet} 1x, ${currencyImgRetinaTablet} 2x`}
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcSet={`${currencyImgMobileWebp} 1x, ${currencyImgRetinaMobileWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${currencyImgMobile} 1x, ${currencyImgRetinaMobile} 2x`}
          type="image/png"
        />

        <img src={currencyImgDesk} alt="Currency rate" loading="lazy" />
      </picture>
    </Wrapper>
  );
};
