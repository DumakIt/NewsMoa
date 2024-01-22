import styled from "@emotion/styled";
import Link from "next/link";
import { IContainerProps } from "./hamburgerMenuTypes";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${({ isHamburger }: IContainerProps) =>
    isHamburger ? "visible" : "hidden"};
  opacity: ${({ isHamburger }: IContainerProps) => (isHamburger ? 1 : 0)};
  width: 100%;
  min-width: 480px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 1;
  transition: opacity 0.2s ease;
  overflow-y: auto;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 4%;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  margin-top: 20%;
`;

export const NavLink = styled(Link)`
  margin-top: 20px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ListText = styled.p`
  margin: 20px 0;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

export const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    outline: 2px solid #49c0b0;
  }

  & > img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  & > p {
    font-size: 14px;
    color: white;
    font-weight: 600;
  }
`;
