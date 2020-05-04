import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 12px auto;
`;

export const NewAnswerContainer = styled.div`
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

export const ListAnswer = styled.div`
  width: 100%;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 10px;
  margin: 12px auto;
  border-radius: 5px;
  -webkit-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
  box-shadow: -2px 4px 5px 0px rgba(50, 50, 50, 0.41);
`;

export const Question = styled.h4`
  color: #444;
  width: 100%;
  padding-bottom: 4px;
  transition: color 0.4s;
  white-space: pre-wrap;

  & span {
    color: #0079d3;
  }
`;

export const Info = styled.div`
  border-top: 1px solid #eee;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 12px;
  padding: 2px;

  #user,
  #answersCount {
    color: #aaa;
  }

  #answersCount {
    text-align: center;
  }

  #user span,
  #answersCount span {
    font-weight: bold;
    color: #555;
  }

  #date {
    text-align: right;
    color: #aaa;
  }
`;

export const BackContainer = styled.div`
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
  transition: color 0.4s, background 0.4s;

  &:hover {
    background: #0079d3;
    color: #fff;
  }
`;

export const NoAnswers = styled.div`
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
