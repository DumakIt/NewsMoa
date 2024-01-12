import styled from "@emotion/styled";

export const Container = styled.div`
  & .popupContainer {
    position: absolute;
    top: -40px;
    right: -20px;
    display: none;
    pointer-events: auto;
    cursor: pointer;

    &:hover {
      display: block;
    }
  }

  & .hoverLabel {
    display: block;
  }

  & .popupWrapper {
    width: 300px;
    padding: 16px;
    margin-right: 80px;
    background-color: white;
    border-radius: 10px;
    pointer-events: auto;
    cursor: pointer;
  }

  & .popupCountry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    margin-bottom: 12px;

    & > p {
      font-size: 24px;
      font-weight: bolder;
    }

    & > img {
      height: 100%;
    }
  }

  & .popupRecent {
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.2);
  }

  & .popupTitle {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: #49c0b0;

      &::before {
        background-color: #49c0b0;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: black;
      transition: color 0.2s ease;
    }
  }
`;
