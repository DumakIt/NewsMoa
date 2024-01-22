import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 480px;
  height: 70px;
  padding: 0 4%;
`;

export const FuncWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  color: white;
  font-size: 40px;
  font-weight: 800;
  text-decoration: none;
`;

export const NavBar = styled.nav`
  display: flex;
  margin-left: 60px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  margin-right: 30px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SearchWrapper = styled.div`
  display: block;
  width: 220px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
  & > img {
    width: 30px;
    height: 30px;
  }
`;
