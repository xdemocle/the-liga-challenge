import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { FOOTBALL_DATA_TEAM_API_BASE_URL } from '../../constants';
import { RenderWithProviders, sampleDataTeams } from '../../utilities/test';
import TeamPage from './team';

const server = setupServer(
  rest.get(
    FOOTBALL_DATA_TEAM_API_BASE_URL + '/competitions/2014/teams',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(sampleDataTeams));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders team page and App data', async () => {
  const { getByText } = render(
    <RenderWithProviders>
      <TeamPage injectedId={77} />
    </RenderWithProviders>
  );

  await waitFor(() => getByText(/Athletic Club/i));

  // The mock Team name
  expect(getByText(/Athletic Club/i)).toBeInTheDocument();

  // The mock Player name
  expect(getByText(/Unai Simón/i)).toBeInTheDocument();
});
