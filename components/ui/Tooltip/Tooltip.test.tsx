import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders a tooltip', () => {
    render(<Tooltip content='Test tooltip content'>Test trigger</Tooltip>)
    expect(screen.getByTestId('tooltip')).toBeInTheDocument()
  });
});
