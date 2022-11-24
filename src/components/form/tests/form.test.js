import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from '../Form';

describe('form', () => {
  let addTask;
  let input;
  let button;

  beforeEach(() => {
    addTask = jest.fn();
    render(<Form addTask={addTask} />);
    input = screen.getByPlaceholderText('Task');
    button = screen.getByText('Add');
  });

  test('call addTask when clicking button', () => {
    userEvent.type(input, 'new task');
    userEvent.click(button);

    expect(addTask).toHaveBeenCalledWith('new task');
  });

  test('does not call when input is null', () => {
    userEvent.type(input, '');
    userEvent.click(button);

    expect(addTask).toHaveBeenCalledTimes(0);
  });
});
