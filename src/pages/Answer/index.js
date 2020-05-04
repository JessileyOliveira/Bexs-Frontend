import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams, Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  NewAnswerContainer,
  Title,
  FormButtonContainer,
  ListAnswer,
  QuestionContainer,
  Question,
  Info,
  BackContainer,
  NoAnswers,
} from './styles';
import ItemAnswer from '../../components/ItemAnswer';

import api from '../../services/axios';

import LoadingComponent from '../../components/Loading';

export default function Answer() {
  let { question_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [errorInputName, setErrorInputName] = useState(false);
  const [errorInputText, setErrorInputText] = useState(false);

  const getAnswers = async () => {
    try {
      const questionById = await api.get(
        `/questions/${question_id}?perPage=9999`
      );
      setQuestion(questionById.data);
      setLoading(false);
    } catch (e) {
      toast.error('Erro ao consultar respostas, contate o administrador!');
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnswers();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validate()) {
        const newAnswer = await api.post(`/questions/${question_id}/answers`, {
          user: inputName,
          text: inputText,
        });
        const questionWithNewAnswer = question;

        questionWithNewAnswer.answers.unshift(newAnswer.data);
        setQuestion(questionWithNewAnswer);

        toast.success('Resposta cadastrada com sucesso!');
        setInputName('');
        setInputText('');
      }
    } catch (e) {
      toast.error('Erro ao cadastrar resposta, contate o administrador!');
    }
  };

  return (
    <Container>
      {question.id && (
        <QuestionContainer data-testid="questionItem">
          <Question>
            <span>Pergunta:</span> {question.text}
          </Question>
          <Info>
            <div id="user">
              <span>Autor: </span>
              {question.user}
            </div>
            <div id="answersCount">
              <span>Respostas: </span>
              {question.answers.length}
            </div>
            <div id="date">
              {formatDistance(new Date(question.createdAt), new Date(), {
                addSuffix: true,
                locale: pt,
              })}
            </div>
          </Info>
        </QuestionContainer>
      )}

      <Link style={{ textDecoration: 'none' }} to="/">
        <BackContainer>VOLTAR</BackContainer>
      </Link>

      <NewAnswerContainer data-testid="newAmswerContainer">
        <Title>NOVA RESPOSTA:</Title>
        <hr />
        <form onSubmit={handleSubmit} data-testid="newAnswerForm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              style={errorInputName ? { borderColor: '#F00' } : {}}
              id="name"
              maxLength="255"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
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
              placeholder="Responder"
            />
            {errorInputText && (
              <small id="errorText" className="form-text text-muted">
                Resposta deve conter no mínimo 10 caracteres.
              </small>
            )}
          </div>

          <FormButtonContainer>
            <button
              data-testid="newAnswerButton"
              type="submit"
              className="btn btn-outline-primary btn-sm "
            >
              Responder
            </button>
          </FormButtonContainer>
        </form>
      </NewAnswerContainer>
      <ListAnswer data-testid="ListAnswer">
        {question.answers &&
          question.answers.map((answer) => (
            <ItemAnswer object={answer} key={answer.id} />
          ))}
        {loading && <LoadingComponent />}
      </ListAnswer>
      {!loading && question.answers && question.answers.length === 0 && (
        <NoAnswers data-testid="noAnswers">
          Nenhuma resposta, seja o primeiro a responder!
        </NoAnswers>
      )}
      <ToastContainer />
    </Container>
  );
}
