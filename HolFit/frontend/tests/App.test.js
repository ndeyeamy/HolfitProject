import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Holfit/i);
  expect(welcomeElement).toBeInTheDocument();
});

