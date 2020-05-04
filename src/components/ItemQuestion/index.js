import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, ItemQuestionContainer, Question, Info } from './styles';

function ItemQuestion(props) {
  const { id, user, text, created_at, answersCount } = props.object;
  return (
    <Container>
      <ItemQuestionContainer data-testid="itemQuestion">
        <Link to={`/question/${id}`}>
          <Question data-testid="textQuestion">{text}</Question>
        </Link>
        <Info>
          <div id="user">
            <span>Autor: </span>
            {user}
          </div>
          <div id="answersCount">
            <span>Respostas: </span>
            {answersCount}
          </div>
          <div id="date">
            {formatDistance(new Date(created_at), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </Info>
      </ItemQuestionContainer>
    </Container>
  );
}

ItemQuestion.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.string,
    text: PropTypes.string,
    created_at: PropTypes.string,
    answersCount: PropTypes.string,
  }).isRequired,
};

export default ItemQuestion;
