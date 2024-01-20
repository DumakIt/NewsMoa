import styled from "@emotion/styled";
import Link from "next/link";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 48px;

  & > div:last-child {
    width: 220px;
  }
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

export const SSS = styled.nav`
  width: 700px;
`;
