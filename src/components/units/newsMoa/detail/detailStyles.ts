import styled from "@emotion/styled";

export const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;

  & > div {
    padding: 40px;
    background-color: white;
    border-radius: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;

  & + hr {
    margin: 10px 0 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;

  & img {
    display: block;
    width: 100%;
    margin: 20px auto;
  }

  & p {
    margin-top: 10px;
  }
`;

export const SourceUrl = styled.p`
  padding: 0 20px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const SummaryBtnWrapper = styled.div`
  display: flex;
  justify-content: end;

  & > button {
    width: 100px;
    height: 50px;
    font-size: 16px;
    color: white;
    background-color: #222534;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
