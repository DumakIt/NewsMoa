import styled from "@emotion/styled";
import Link from "next/link";

export const LoadingText = styled.p`
  text-align: center;
  line-height: 100vh;
  color: #239788;
  font-size: 30px;
`;

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const NavWrapper = styled.nav`
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  @media (max-width: 1024px) {
    width: 150px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
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

  @media (max-width: 480px) {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
  }
`;
