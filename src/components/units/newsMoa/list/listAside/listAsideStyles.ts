import styled from "@emotion/styled";
import { ICountryWrapperProps } from "./listAsideTypes";

export const Container = styled.aside`
  display: block;
  width: 250px;
  padding-left: 20px;
  border-left: 1px solid #ffffff33;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: ${(props: ICountryWrapperProps) =>
    props.isSelect ? "2px solid #49c0b0;" : "none"};

  &:hover {
    outline: 2px solid #49c0b0;
  }

  & > img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  & > p {
    font-size: 18px;
    color: white;
    font-weight: 600;
  }
`;
