import { render, screen } from '@testing-library/react';
// import App from './App';
import index from './index.html';

test('renders learn react link', () => {
  // render(<App />);
  render(<index />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
