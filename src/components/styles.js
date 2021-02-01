import styled from 'styled-components';

export const MessagesWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 5% 20%;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
export const Button = styled.button`
  background-color: rgb(0,226,196);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
`;

export const MessageCard = styled.section`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;
  background-color: ${(props) => props.color};
`;

export const CardButton = styled.button`
  background-color: ${(props) => props.color};
  border: none;
`

export const MessageColumnContent = styled.section`
  width: 100%;
  margin-right: 5px;
`
