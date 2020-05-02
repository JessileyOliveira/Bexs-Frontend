import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';

import { Container, ItemQuestionContainer, Question, Info } from './styles';

export default function ItemQuestion(props) {
  console.log(props);
  const { user, text, created_at } = props.object;
  return (
    <Container>
      <ItemQuestionContainer>
        <Question>{text}</Question>
        <Info>
          <div id="user">
            <span>Autor: </span>
            {user}
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
