import React from 'react';
import styled from 'styled-components';
import bgImage from './HeroBanner.png';

const HeroSection = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const HeroBackground = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 3rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  color: #fff;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;s

const Hero2 = () => {
  return (
    <HeroSection>
      <HeroBackground>
        <HeroContent>
          <HeroTitle>SATIRE MEETS SUBSTANCE.</HeroTitle>
          <HeroText>
            Cutting-edge satire exposing corruption and idiocy across the political spectrum, fueled by the community and crypto.
          </HeroText>
        </HeroContent>
      </HeroBackground>
    </HeroSection>
  );
};

export default Hero2;
