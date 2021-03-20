import {Heading as RebassHeading, Text as RebassText} from "rebass";
import styled from 'styled-components';

export const Heading = styled(RebassHeading)`
  font-family: 'Inter' !important;
  font-size: 48px !important;
  font-weight: 700 !important;
  color: #2D2D2D;
`

export const SmallHeading = styled(Heading)`
  margin-top: 14px !important;
  font-size: 24px !important;
  color: black;
`

export const LargeHeading = styled(Heading)`
  font-size: 60px !important;
`

export const Text = styled(RebassText)`
  font-family: 'Inter';
  margin-top: 42px !important;
  font-size: 20px !important;
  font-weight: 400 !important;
  color: rgba(0,0,0,0.7);
`
