import { screen, render, userEvent } from './index'
import Logo from '../components/Logo'



describe('Logo', () => {
    test('Logo must have src = "logopce.png" and alt = "logo-pce"', () => {
      render(<Logo/>);
      const logo = screen.getByRole('img');
      expect(logo).toHaveAttribute('src', 'logopce.png');
      expect(logo).toHaveAttribute('alt', 'logo-pce');
    });
  });