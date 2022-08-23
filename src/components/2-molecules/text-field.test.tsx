import { fireEvent, render } from '@testing-library/react';
import TextField from './text-field';

test('onChange re-renders text field', () => {
  const onChangeSpy = jest.fn();

  const { getByTestId } = render(<TextField id="1" onChange={onChangeSpy} />);

  const input = getByTestId('textfield1');

  fireEvent.change(input, { target: { value: '23' } });

  expect(onChangeSpy).toHaveBeenCalled();
  expect((input as HTMLInputElement).value).toBe('23');
});
