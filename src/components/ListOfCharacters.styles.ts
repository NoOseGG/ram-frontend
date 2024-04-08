import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListCharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonNavigate = styled.button`
  border: 1px solid #fff;
  font-size: 20px;
  border-radius: 18px;
  color: white;
  background-color: #000;
  margin-bottom: 50px;
  padding: 30px;

  &:hover {
    cursor: pointer;
    color: yellow;
    border: 1px solid yellow;
  }
`;