import styled from "styled-components";

export const FeedPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: end;
`;

export const Title = styled.div`
  color: transparent;
  background-image: linear-gradient(to right, yellow, green 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 150px;
  font-family: "Caveat Brush", cursive;
  font-weight: 400;
  font-style: normal;
`;