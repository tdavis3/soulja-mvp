import {Button} from 'rebass';
import styled from 'styled-components';

export const BaseButton = styled(Button)`
    width: 100%;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 25px !important;
    color: black;
    border-radius: 10px !important;
    font-weight: 700;
    font-family: 'Inter';
    height: 57px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    :focus {
      outline:0;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    :hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) brightness(90%);
    }
    :active {
      transform: scale(0.98);
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0)) brightness(90%);
    }
`;

export const BuyButton = styled(BaseButton)`
  background: linear-gradient(to right, #A8E063, #C8E5A4);
`

export const SellButton = styled(BaseButton)`
  background: linear-gradient(to right, #F27474, #FDA8A8);
`

export const RedeemButton = styled(BaseButton)`
  background: linear-gradient(to right, #F3BF04, #F9DA6B);
`

export const WalletButton = styled(BaseButton)`
  background: white;
  border: #EEEEEE 1px solid !important;
  color: #6F6F6F !important;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.07));
`;
