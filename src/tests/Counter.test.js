// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('Counter')
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '+'}));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByRole('button', { name: '-'}));
  expect(screen.getByText('-1')).toBeInTheDocument();
});
