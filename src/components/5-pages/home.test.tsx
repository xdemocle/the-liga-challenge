import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../app';
import { FOOTBALL_DATA_TEAM_API_BASE_URL } from '../../constants';
import { RenderWithProviders, sampleDataTeams } from '../../utilities/test';
import HomePage from './home';

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

test('renders homepage', () => {
  render(
    <RenderWithProviders>
      <HomePage />
    </RenderWithProviders>
  );

  expect(
    screen.getByText(/Select a team to see its roster/i)
  ).toBeInTheDocument();
});

test('renders homepage and App data', async () => {
  const { getByText } = render(
    <RenderWithProviders>
      <App />
    </RenderWithProviders>
  );

  await waitFor(() => getByText(/Athletic Club/i));

  expect(getByText(/Athletic Club/i)).toBeInTheDocument();
});
