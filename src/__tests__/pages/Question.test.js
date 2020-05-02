import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Question from '~/pages/Question';

describe('Question tests', () => {
  afterEach(cleanup);
  it('Should exist a component to add a new Question', () => {
    const { getByTestId } = render(<Question />);

    expect(getByTestId('newQuestionContainer')).toBeDefined();
  });

  it('Should exist a form to add a new Question', () => {
    const { getByTestId } = render(<Question />);

    expect(getByTestId('newQuestionContainer')).toContainElement(
      getByTestId('newQuestionForm')
    );
  });

  it('Should exist a input name and a input text', () => {
    const { getByTestId, getByPlaceholderText } = render(<Question />);
    const form = getByTestId('newQuestionForm');
    expect(form).toContainElement(getByPlaceholderText('Nome do usuário'));
    expect(form).toContainElement(getByPlaceholderText('Pergunta'));
  });

  it('Should exist a submit button with text "Perguntar"', () => {
    const { getByTestId, getByText } = render(<Question />);
    const form = getByTestId('newQuestionButton');
    expect(form).toContainElement(getByText('Perguntar'));
  });
});
