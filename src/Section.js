import React from "react";
import styled from "styled-components";
import { device } from "./utils/css";

const width = 16;
const padding = 1.2;
const ONE_ROW = width * 4 + padding * 3 + 4 + 4;
const TWO_ROW = width * 2 + padding + 4 + 4;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;

  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3.6rem;
  padding-right: 3.6rem;

  > div {
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: ${ONE_ROW}rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    > div {
      flex: 0 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: ${TWO_ROW}rem) and (max-width: ${ONE_ROW - 0.1}rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      display: flex;
      flex-direction: row;
      flex: 0 0 ${TWO_ROW}rem;
      flex-wrap: wrap;
    }
  }
`;

const InternalSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 ${width}rem;

  padding: 1rem 1.6rem;
  justify-content: center;

  & + & {
    margin-top: ${padding}rem;
  }

  @media (min-width: ${ONE_ROW}rem) {
    & + & {
      margin-left: ${padding}rem;
      margin-top: 0rem;
    }
  }

  @media (min-width: ${TWO_ROW}rem) and (max-width: ${ONE_ROW - 0.1}rem) {
    & + & {
      margin-top: 0em;
    }

    &:nth-child(2n) {
      margin-left: ${padding}rem;
    }

    &:nth-child(3),
    &:nth-child(4) {
      margin-top: ${padding}rem;
    }
  }
`;

const SectionDescription = styled.div`
  font-family: futura-pt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;

  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;

export const SectionCard = ({ SvgComponent, children }) => (
  <InternalSectionCard>
    <SvgComponent style={{ width: 80, height: "auto" }} />
    <SectionDescription>{children}</SectionDescription>
  </InternalSectionCard>
);
