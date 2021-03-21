import { Button } from "rebass";
import styled from "styled-components";

export const BaseButton = styled(Button)`
    width: 100%;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 25px !important;
    color: black;
    border-radius: 10px !important;
    font-weight: 700;
    font-family: "Inter";
    height: 57px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1));
    transition: all 0.2s ease-in-out;
    :focus {
        outline: 0;
        filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2));
    }
    :hover {
        filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2)) brightness(105%);
        cursor: pointer;
        transform: scale(1.03);
    }
`;

export const BuyButton = styled(BaseButton)`
    background: linear-gradient(to right, #a8e063, #c8e5a4);
`;

export const SellButton = styled(BaseButton)`
    background: linear-gradient(to right, #f27474, #fda8a8);
`;

export const RedeemButton = styled(BaseButton)`
    background: linear-gradient(to right, #f3bf04, #f9da6b);
`;

export const WalletButton = styled(BaseButton)`
    background: white;
    border: #eeeeee 1px solid !important;
    color: #6f6f6f !important;
    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.07));
`;

export const FormButton = styled(BaseButton)`
    background: black;
    color: white;
`;
