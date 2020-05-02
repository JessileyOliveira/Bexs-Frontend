import styled from 'styled-components';

export const Container = styled.div`
  width: 1020px;
  margin: 10px auto;
`;

export const NewQuestionContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);

  hr {
    margin-top: 0px;
  }

  form div textarea {
    resize: none;
  }
`;

export const Title = styled.div`
  color: #0079d3;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
