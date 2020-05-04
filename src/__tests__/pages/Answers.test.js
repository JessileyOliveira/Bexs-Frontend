import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/axios';

import Answer from '~/pages/Answer';

const apiMock = new MockAdapter(api);

function route(path = '') {
  return typeof path === 'string'
    ? new RegExp(path.replace(/:\w+/g, '[^/]+'))
    : path;
}

const getMock = () => {
  return apiMock
    .onGet(route('/questions/:question_id?perPage=9999'))
    .reply(200, {
      answers: [],
      createdAt: '2020-05-03T18:22:16.080Z',
      created_at: '2020-05-03T18:22:16.080Z',
      id: 1,
      text: 'Minha Pergunta?',
      updatedAt: '2020-05-03T18:22:16.080Z',
      user: 'Meu Nome',
    });
};

jest.mock('react-router-dom', () => ({
  Link: 'a',
  useParams: jest.fn().mockReturnValue(1),
}));

describe('Answers tests', () => {
  afterEach(cleanup);

  it('Should exist a component to add a new Answer', async () => {
    getMock();

    const { getByTestId } = render(<Answer />);
    await waitFor(() =>
      expect(getByTestId('newAmswerContainer')).toBeDefined()
    );
  });

  it('Should exist a form to add a new Answer', async () => {
    getMock();
    const { getByTestId } = render(<Answer />);
    await waitFor(() =>
      expect(getByTestId('newAmswerContainer')).toContainElement(
        getByTestId('newAnswerForm')
      )
    );
  });

  it('Should exist a input name and a input text', async () => {
    getMock();
    const { getByTestId, getByPlaceholderText } = render(<Answer />);
    const form = getByTestId('newAnswerForm');
    await waitFor(() => {
      expect(form).toContainElement(getByPlaceholderText('Nome do usuário'));
      expect(form).toContainElement(getByPlaceholderText('Responder'));
    });
  });

  it('Should exist a submit button with text "Responder"', async () => {
    const { getByTestId, getByText } = render(<Answer />);
    const form = getByTestId('newAnswerButton');
    await waitFor(() => expect(form).toContainElement(getByText('Responder')));
  });

  it('Should be able to add a answer', async () => {
    const answerData = {
      createdAt: '2020-05-03T21:31:25.938Z',
      id: 1,
      question_id: 1,
      text: 'Minha resposta',
      updatedAt: '2020-05-03T21:31:25.938Z',
      user: 'Meu Nome na resposta',
      answers: [],
    };
    await getMock();
    apiMock
      .onPost(route('/questions/:question_id/answers'), {
        text: 'Minha resposta',
        user: 'Meu Nome na resposta',
      })
      .reply(200, answerData);

    const { getByTestId, getByPlaceholderText, getByText } = render(<Answer />);

    await fireEvent.change(getByPlaceholderText('Nome do usuário'), {
      target: { value: 'Meu Nome na resposta' },
    });
    await fireEvent.change(getByPlaceholderText('Responder'), {
      target: { value: 'Minha resposta' },
    });

    await waitFor(() => {
      fireEvent.submit(getByTestId('newAnswerForm'));
    });

    await waitFor(() => {
      expect(getByTestId('ListAnswer')).toContainElement(
        getByText('Meu Nome na resposta')
      );
      expect(getByTestId('ListAnswer')).toContainElement(
        getByTestId('textAnswer')
      );
    });
  });

  it('should show a list of answers ', async () => {
    const questionData = {
      answers: [
        {
          createdAt: '2020-05-03T21:31:25.938Z',
          id: 1,
          question_id: 1,
          text: 'Minha resposta',
          updatedAt: '2020-05-03T21:31:25.938Z',
          user: 'Meu Nome na resposta',
        },
      ],
      createdAt: '2020-05-03T18:22:16.080Z',
      created_at: '2020-05-03T18:22:16.080Z',
      id: 1,
      text: 'Minha Pergunta?',
      updatedAt: '2020-05-03T18:22:16.080Z',
      user: 'Meu Nome',
    };
    apiMock
      .onGet(route('/questions/:question_id?perPage=9999'))
      .reply(200, questionData);
    const { getByTestId, getByText } = render(<Answer />);
    await waitFor(() => {
      expect(getByTestId('ListAnswer')).toContainElement(
        getByText('Meu Nome na resposta')
      );
    });
  });

  it('Should not add a question with the name less than 3 characters', async () => {
    getMock();
    const { getByTestId, getByPlaceholderText } = render(<Answer />);

    await fireEvent.change(getByPlaceholderText('Nome do usuário'), {
      target: { value: 'M' },
    });
    await fireEvent.change(getByPlaceholderText('Responder'), {
      target: { value: 'Minha resposta' },
    });
    fireEvent.submit(getByTestId('newAnswerForm'));

    await waitFor(() => {
      expect(getByTestId('noAnswers')).toBeDefined();
    });
  });

  it('Should exist a question', async () => {
    getMock();
    const { getByTestId } = render(<Answer />);
    await waitFor(() => {
      expect(getByTestId('questionItem')).toBeDefined();
    });
  });
});
