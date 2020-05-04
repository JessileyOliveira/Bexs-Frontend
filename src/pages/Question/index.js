import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/axios';
import ItemQuestion from '../../components/ItemQuestion';
import LoadingComponent from '../../components/Loading';

import {
  Container,
  NewQuestionContainer,
  Title,
  FormButtonContainer,
  ListQuestion,
  NoQuestions,
} from './styles';

export default function Question() {
  const [loading, setLoading] = useState(true);
  const [listQuestion, setListQuestion] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [errorInputName, setErrorInputName] = useState(false);
  const [errorInputText, setErrorInputText] = useState(false);

  const getQuestions = async () => {
    try {
      const questions = await api.get(`/questions?perPage=9999`);
      setListQuestion(questions.data.data);
      setLoading(false);
    } catch (err) {
      toast.error('Erro ao consultar Perguntas, contate o administrador!');
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const validate = () => {
    let error = false;
    if (inputName.length < 3) {
      setErrorInputName(true);
      error = true;
    } else {
      setErrorInputName(false);
    }
    if (inputText.length < 10) {
      setErrorInputText(true);
      error = true;
    } else {
      setErrorInputText(false);
    }

    return error;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!validate()) {
        const newQuestion = await api.post(`/questions`, {
          user: inputName,
          text: inputText,
        });
        newQuestion.data.created_at = newQuestion.data.createdAt;
        newQuestion.data.answersCount = '0';
        setListQuestion([newQuestion.data, ...listQuestion]);

        toast.success('Pergunta cadastrada com sucesso!');
        setInputName('');
        setInputText('');
      }
    } catch (err) {
      toast.error('Erro ao cadastrar pergunta, contate o administrador!');
    }
  };

  return (
    <Container>
      <NewQuestionContainer data-testid="newQuestionContainer">
        <Title>NOVA PERGUNTA:</Title>
        <hr />
        <form onSubmit={handleSubmit} data-testid="newQuestionForm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              style={errorInputName ? { borderColor: '#F00' } : {}}
              id="name"
              maxLength="255"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              placeholder="Nome do usuário"
            />
            {errorInputName && (
              <small id="errorName" className="form-text text-muted">
                Nome do usuário deve conter no mínimo 3 caracteres.
              </small>
            )}
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="text"
              rows={3}
              style={errorInputText ? { borderColor: '#F00' } : {}}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Pergunta"
            />
            {errorInputText && (
              <small id="errorText" className="form-text text-muted">
                Pergunta deve conter no mínimo 10 caracteres.
              </small>
            )}
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
      <ListQuestion data-testid="ListQuestion">
        {listQuestion.map((question) => (
          <ItemQuestion object={question} key={question.id} />
        ))}
        {loading && <LoadingComponent />}
      </ListQuestion>
      {!loading && listQuestion.length === 0 && (
        <NoQuestions data-testid="noQuestions">
          Nenhuma pergunta, seja o primeiro a perguntar!
        </NoQuestions>
      )}
      <ToastContainer />
    </Container>
  );
}
