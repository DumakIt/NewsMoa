import styled from "@emotion/styled";
import Link from "next/link";

export const LoadingText = styled.p`
  text-align: center;
  line-height: 100vh;
  color: #239788;
  font-size: 24px;
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #222534;
`;

export const NavWrapper = styled.nav`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

export const NewsList = styled(Link)`
  display: block;
  width: 80%;
  height: 40px;
  font-weight: bold;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  color: white;
  text-decoration: none;
  border: 2px solid white;

  &:hover {
    color: black;
    background-color: white;
  }
`;
