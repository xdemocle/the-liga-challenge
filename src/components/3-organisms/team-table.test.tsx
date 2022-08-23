import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { DICTIONARY } from '../../constants';
import { RenderWithProviders, testSquad } from '../../utilities/test';
import TeamTable from './team-table';

test('renders team empty table', () => {
  render(
    <RenderWithProviders>
      <TeamTable dictionary={DICTIONARY} squad={[]} />
    </RenderWithProviders>
  );

  const linkElement = screen.getByText(/Age/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders team table with data and clicks on See More', () => {
  const { queryByText, getByText } = render(
    <RenderWithProviders>
      <TeamTable dictionary={DICTIONARY} squad={testSquad} />
    </RenderWithProviders>
  );

  expect(queryByText(/Player 3/i)).toBeInTheDocument();
  expect(queryByText(/Player 4/i)).not.toBeInTheDocument();

  fireEvent.click(getByText('See More'));

  expect(queryByText(/Player 4/i)).toBeInTheDocument();
});
