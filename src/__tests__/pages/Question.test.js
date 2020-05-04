import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '~/services/axios';

import Question from '~/pages/Question';

const apiMock = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('Question tests', () => {
  afterEach(cleanup);

  it('Should exist a component to add a new Question', async () => {
    apiMock.onGet('/questions?perPage=9999').reply(200, { data: [] });

    const { getByTestId } = render(<Question />);

    expect(getByTestId('newQuestionContainer')).toBeDefined();
    await waitFor(() =>
      expect(getByTestId('newQuestionContainer')).toBeDefined()
    );
  });

  it('Should exist a form to add a new Question', async () => {
    apiMock.onGet('/questions?perPage=9999').reply(200, { data: [] });
    const { getByTestId } = render(<Question />);

    await waitFor(() =>
      expect(getByTestId('newQuestionContainer')).toContainElement(
        getByTestId('newQuestionForm')
      )
    );
  });

  it('Should exist a input name and a input text', async () => {
    apiMock.onGet('/questions?perPage=9999').reply(200, { data: [] });
    const { getByTestId, getByPlaceholderText } = render(<Question />);
    const form = getByTestId('newQuestionForm');

    await waitFor(() => {
      expect(form).toContainElement(getByPlaceholderText('Nome do usuário'));
      expect(form).toContainElement(getByPlaceholderText('Pergunta'));
    });
  });

  it('Should exist a submit button with text "Perguntar"', async () => {
    const { getByTestId, getByText } = render(<Question />);
    const form = getByTestId('newQuestionButton');
    await waitFor(() => expect(form).toContainElement(getByText('Perguntar')));
  });

  it('Should be able to add a question', async () => {
    const questionData = {
      answersCount: '0',
      createdAt: '2020-05-03T18:22:16.080Z',
      created_at: '2020-05-03T18:22:16.080Z',
      id: 992,
      text: 'Minha Pergunta?',
      updatedAt: '2020-05-03T18:22:16.080Z',
      user: 'Meu Nome',
    };

    apiMock.onGet('/questions?perPage=9999').reply(200, { data: [] });
    apiMock
      .onPost('/questions', { text: 'Minha pergunta?', user: 'Meu Nome' })
      .reply(201, questionData);

    const { getByTestId, getByPlaceholderText, getByText } = render(
      <Question />
    );

    await fireEvent.change(getByPlaceholderText('Nome do usuário'), {
      target: { value: 'Meu Nome' },
    });
    await fireEvent.change(getByPlaceholderText('Pergunta'), {
      target: { value: 'Minha pergunta?' },
    });
    fireEvent.submit(getByTestId('newQuestionForm'));

    await waitFor(() => {
      expect(getByTestId('ListQuestion')).toContainElement(
        getByText('Meu Nome')
      );
      expect(getByTestId('ListQuestion')).toContainElement(
        getByTestId('textQuestion')
      );
    });
  });

  it('should show a list of questions ', async () => {
    const questionData = {
      answersCount: '0',
      createdAt: '2020-05-03T18:22:16.080Z',
      created_at: '2020-05-03T18:22:16.080Z',
      id: 992,
      text: 'Minha Pergunta?',
      updatedAt: '2020-05-03T18:22:16.080Z',
      user: 'Meu Nome',
    };

    apiMock.onGet('/questions?perPage=9999').reply(200, {
      data: [questionData],
    });

    const { getByTestId, getByText } = render(<Question />);
    await waitFor(() => {
      expect(getByTestId('ListQuestion')).toContainElement(
        getByText('Meu Nome')
      );
    });
  });

  it('Should not add a question with the name less than 3 characters', async () => {
    apiMock.onGet('/questions?perPage=9999').reply(200, { data: [] });

    const { getByTestId, getByPlaceholderText } = render(<Question />);

    await fireEvent.change(getByPlaceholderText('Nome do usuário'), {
      target: { value: 'M' },
    });
    await fireEvent.change(getByPlaceholderText('Pergunta'), {
      target: { value: 'Minha pergunta?' },
    });

    fireEvent.submit(getByTestId('newQuestionForm'));

    await waitFor(() => {
      expect(getByTestId('noQuestions')).toBeDefined();
    });
  });
});
