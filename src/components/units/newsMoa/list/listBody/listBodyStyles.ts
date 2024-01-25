import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 0 20px;
`;

export const SelectCountry = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export const NewsArticle = styled.article`
  display: flex;
  height: 100px;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    outline: 2px solid #49c0b0;
  }
`;

export const NewsImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
`;

export const NewsTitle = styled.h2`
  margin: 5px 0;
  font-size: 28px;
  font-weight: 600;
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const NewsDescription = styled.p`
  color: #ffffff99;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: 600;
`;
