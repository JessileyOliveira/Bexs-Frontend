import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';

import { Container, ItemAnswerContainer, Answer, Info } from './styles';

function ItemQuestion(props) {
  const { user, text, createdAt } = props.object;
  return (
    <Container>
      <ItemAnswerContainer data-testid="itemAnswer">
        <Answer data-testid="textAnswer">{text}</Answer>
        <Info>
          <div id="user">
            <span>Autor: </span>
            {user}
          </div>

          <div id="date">
            {formatDistance(new Date(createdAt), new Date(), {
              addSuffix: true,
              locale: pt,
            })}
          </div>
        </Info>
      </ItemAnswerContainer>
    </Container>
  );
}

ItemQuestion.propTypes = {
  object: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default ItemQuestion;
