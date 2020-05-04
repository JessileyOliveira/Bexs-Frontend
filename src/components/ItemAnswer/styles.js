import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 12px auto;
`;

export const ItemAnswerContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
`;

export const Answer = styled.h4`
  color: #444;
  width: 100%;
  padding-bottom: 4px;
  transition: color 0.4s;
  white-space: pre-wrap;
`;

export const Info = styled.div`
  border-top: 1px solid #eee;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 12px;
  padding: 2px;

  #user {
    color: #aaa;
  }

  #user span {
    font-weight: bold;
    color: #555;
  }

  #date {
    text-align: right;
    color: #aaa;
  }
`;
