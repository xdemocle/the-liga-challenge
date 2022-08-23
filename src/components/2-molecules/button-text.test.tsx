import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import ButtonText from './button-text';

test('renders button', () => {
  render(<ButtonText>Text</ButtonText>);

  const linkElement = screen.getByText(/Text/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button with onClick', () => {
  const onClickSpy = jest.fn();

  const { getByText } = render(
    <ButtonText onClick={onClickSpy}>Text</ButtonText>
  );

  fireEvent.click(getByText('Text'));

  expect(onClickSpy).toHaveBeenCalled();
});
