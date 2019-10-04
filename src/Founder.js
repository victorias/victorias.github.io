import React from "react";
import styled, { css } from "styled-components";
import { device } from "./utils/css";

export const FounderSection = styled.section`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  padding-left: 3.6rem;
  padding-right: 3.6rem;

  & + & {
    padding-top: 2rem;
  }

  @media ${device.tablet} {
    & + & {
      padding-top: 4rem;
    }
  }
`;

const FounderName = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 1.6rem;
  padding-bottom: 1rem;

  h1 {
    font-family: mrs-eaves, sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;

const Body = styled.div`
  display: flex;
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;

  & > ul {
    li + li {
      margin-top: 0.8rem;
    }
  }

  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;

export default ({ name, title, credentials }) => (
  <FounderSection>
    <FounderName>
      <h1>
        {name}
        {title && `, ${title}`}
      </h1>
    </FounderName>
    <Body>{credentials}</Body>
  </FounderSection>
);
