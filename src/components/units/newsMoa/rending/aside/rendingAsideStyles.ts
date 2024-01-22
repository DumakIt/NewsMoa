import styled from "@emotion/styled";

export const Container = styled.aside`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: block;
  width: 320px;
  height: 624px;
  padding-right: 35px;
  margin-right: 10px;
  color: white;
  overflow: auto;

  // 스크롤바 설정 (firefox)
  scrollbar-width: thin;
  scrollbar-color: #49c0b0 #49c0b00d;
  // 스크롤바 설정 (그 외)
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: #49c0b0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #49c0b00d;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RecentNews = styled.p`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

export const NewsArticle = styled.article`
  margin-bottom: 30px;
`;

export const CountryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const CountryFlag = styled.img`
  width: 18px;
  margin-right: 6px;
`;

export const CountryName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #49c0b0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const Title = styled.h3`
  margin-top: 6px;
  margin-right: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  cursor: pointer;
  transition: color 0.1s ease;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    color: #49c0b0;
  }
`;

export const TitleImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
`;

export const LoadingText = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
