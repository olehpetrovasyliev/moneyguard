import React from 'react';
import {
  LoadingContainer,
  LoadingTitle,
  LoadingWrapper,
} from './LoadingPage.styled';
import { BigLoader } from 'components/Loaders/BigLoader';

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <LoadingWrapper>
        <LoadingTitle>Loading...</LoadingTitle>
        <BigLoader />
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default LoadingPage;
