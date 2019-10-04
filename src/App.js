import React from "react";
import styled from "styled-components";
import { device } from "./utils/css";
import us from "./us.jpg";
import { Section, SectionCard } from "./Section";
import { ReactComponent as AppSvg } from "./svg/app.svg";
import { ReactComponent as DressSvg } from "./svg/dress.svg";
import { ReactComponent as HangerSvg } from "./svg/hanger.svg";
import { ReactComponent as PackageSvg } from "./svg/package.svg";
import Founder from "./Founder";

const Logo = styled.div`
  font-family: mrs-eaves, serif;
  font-weight: 300;
  font-style: normal;
  padding-top: 1rem;
  font-size: 2rem;

  @media ${device.tablet} {
    padding-top: 4rem;
    font-size: 3.6rem;
  }
`;

const H2 = styled.div`
  font-family: mrs-eaves, serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  padding-bottom: 1rem;

  text-align: center;

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.laptopL} {
    font-size: 3rem;
  }
`;

const SubLogo = styled.div`
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 1rem;

  @media ${device.tablet} {
    font-size: 2rem;
    padding-bottom: 4rem;
  }
`;

const HeaderHero = styled.div`
  text-align: center;
  padding-left: 3.6rem;
  padding-right: 3.6rem;
  color: #b7b7b7;

  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;

  line-height: 1.2;

  @media ${device.laptopL} {
    padding-left: 20rem;
    padding-right: 20rem;
    font-size: 3.6rem;
  }
`;

const UsImage = styled.img`
  height: auto;

  width: 100vw;
  max-width: 550px;
  object-fit: cover;
`;

const CardImage = styled.img`
  display: none;
  height: auto;
  width: 500px;
  object-fit: cover;

  @media (min-width: 950px) {
    display: block;
  }
`;

const UsSection = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: #121212;
  width: 100vw;

  @media ${device.tablet} {
    padding-bottom: 4rem;
  }

  @media (min-width: 950px) {
    display: none;
  }
`;

const FoundersSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  color: #b7b7b7;
  align-self: stretch;

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${device.tablet} {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${device.laptopL} {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.2rem;
  padding-bottom: 4rem;
  background-color: #121212;

  @media ${device.laptopL} {
    padding-top: 4.8rem;
    padding-bottom: 6rem;
  }
`;

const CTA = styled.a`
  display: flex;
  background-color: rgb(42, 42, 42);
  color: #ffffff;
  padding: 1rem;
  text-decoration: none;
  margin-top: 1rem;

  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;

  @media ${device.laptopL} {
    padding: 2rem;
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

const LinkedInLink = styled.a`
  color: #b7b7b7;
`;

const FoundersCard = styled.div`
  display: flex;

  @media ${device.tablet} {
    padding-top: 1rem;
  }

  @media ${device.laptopL} {
    padding-top: 2rem;
  }
`;

const FoundersList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  color: #b7b7b7;

  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  text-align: center;
  padding-top: 1rem;

  @media ${device.laptopL} {
    padding-top: 2rem;
    font-size: 2rem;
  }

  > a {
    color: #b7b7b7;
  }
`;

const App = () => {
  return (
    <AppDiv>
      <Logo>ava bridal</Logo>
      <SubLogo>Shop designer wedding dresses online</SubLogo>
      <Header>
        <HeaderHero>
          Ava Bridal is the first online bridal shop for designer wedding
          dresses. We are raising a seed round in October 2019.
        </HeaderHero>
        <CTA href="test">Download our pitch deck</CTA>
        <Contact>
          Contact us at{" "}
          <a href="mailto:hello@nightlist.app">hello@nightlist.app</a>
        </Contact>
      </Header>

      <Section>
        <H2>Product</H2>
        <div>
          <SectionCard SvgComponent={AppSvg}>
            1) Shop dresses online.
          </SectionCard>
          <SectionCard SvgComponent={HangerSvg}>
            2) Try samples on at home.
          </SectionCard>
          <SectionCard SvgComponent={DressSvg}>
            3) Pick a dress and submit measurements.
          </SectionCard>
          <SectionCard SvgComponent={PackageSvg}>
            4) Receive made-to-order dress by mail.
          </SectionCard>
        </div>
      </Section>

      <FoundersSection>
        <H2>Founders</H2>
        <FoundersCard>
          <CardImage src={us} />
          <FoundersList>
            <Founder
              name="Scott Wang"
              title="CEO"
              credentials={
                <ul>
                  <li>
                    Political science @ Brown, computer science @ UBC, Deep
                    Springs College
                  </li>
                  <li>Worked @ Affirm, Homejoy</li>
                  <li>
                    <LinkedInLink
                      href="https://www.linkedin.com/in/scottpwang/"
                      target="__NEW"
                    >
                      LinkedIn
                    </LinkedInLink>
                  </li>
                </ul>
              }
            />

            <Founder
              name="Victoria Sun"
              title="CTO"
              credentials={
                <ul>
                  <li>Computer science and EE @ MIT</li>
                  <li>Worked @ Discord, Amplitude, Google, Microsoft</li>
                  <li>
                    <LinkedInLink
                      href="https://www.linkedin.com/in/sunvictorias"
                      target="__NEW"
                    >
                      LinkedIn
                    </LinkedInLink>
                  </li>
                </ul>
              }
            />

            <Founder
              name="Past projects"
              credentials={
                <ul>
                  <li>
                    NightList is a web/iOS/Android app for discovering live
                    music, currently live:
                  </li>
                  <li>
                    <LinkedInLink href="https://nightlist.app" target="__NEW">
                      Website
                    </LinkedInLink>
                  </li>
                  <li>
                    <LinkedInLink
                      href="https://apps.apple.com/us/app/nightlist-live-music-in-sf/id1470161586"
                      target="__NEW"
                    >
                      App Store
                    </LinkedInLink>
                  </li>
                  <li>
                    <LinkedInLink
                      href="https://play.google.com/store/apps/details?id=app.nightlist"
                      target="__NEW"
                    >
                      Google Play
                    </LinkedInLink>
                  </li>
                </ul>
              }
            />
          </FoundersList>
        </FoundersCard>
      </FoundersSection>
      <UsSection>
        <UsImage src={us} />
      </UsSection>
    </AppDiv>
  );
};

export default App;
