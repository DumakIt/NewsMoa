import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid white;
`;

export const InputIcon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

export const Input = styled.input`
  font-size: 18px;
  color: white;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
`;
