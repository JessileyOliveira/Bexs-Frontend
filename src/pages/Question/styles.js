import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 12px auto;
`;

export const NewQuestionContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);

  & hr {
    margin-top: 0px;
  }

  & form div textarea {
    resize: none;
  }
  & form div small {
    color: #f00 !important;
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

export const ListQuestion = styled.div`
  width: 100%;
`;

export const NoQuestions = styled.div`
  background: #fff;
  margin: 12px auto;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  padding: 4px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
`;
