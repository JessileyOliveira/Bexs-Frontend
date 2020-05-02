import React, { useState } from 'react';

import {
  Container,
  NewQuestionContainer,
  Title,
  FormButtonContainer,
} from './styles';

export default function NewQuestion() {
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {};

  return (
    <Container data-testid="newQuestionContainer">
      <NewQuestionContainer>
        <Title>NOVA PERGUNTA:</Title>
        <hr />
        <form onSubmit={handleSubmit} data-testid="newQuestionForm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Nome do usuário"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="text"
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Pergunta"
            />
          </div>

          <FormButtonContainer>
            <button
              data-testid="newQuestionButton"
              type="submit"
              className="btn btn-outline-primary btn-sm "
            >
              Perguntar
            </button>
          </FormButtonContainer>
        </form>
      </NewQuestionContainer>
    </Container>
  );
}
