import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import DictionaryProvider from '../context/dictionary';
import TeamProvider from '../context/teams';
import { Player } from '../types';

interface RenderWithProvidersProps {
  children: ReactNode;
}

export const RenderWithProviders = ({ children }: RenderWithProvidersProps) => {
  return (
    <BrowserRouter>
      <DictionaryProvider>
        <TeamProvider>{children}</TeamProvider>
      </DictionaryProvider>
    </BrowserRouter>
  );
};

export const testSquad: Player[] = [
  {
    id: 1,
    name: 'Player 1',
    position: 'offence',
    dateOfBirth: '1998-12-12',
    nationality: 'italian'
  },
  {
    id: 2,
    name: 'Player 2',
    position: 'defense',
    dateOfBirth: '1993-12-12',
    nationality: 'spanish'
  },
  {
    id: 3,
    name: 'Player 3',
    position: 'goalkeeper',
    dateOfBirth: '1984-12-12',
    nationality: 'croatian'
  },
  {
    id: 4,
    name: 'Player 4',
    position: 'defense',
    dateOfBirth: '1990-12-12',
    nationality: 'holland'
  }
];

export const sampleDataTeams = {
  count: 1,
  teams: [
    {
      id: 77,
      name: 'Athletic Club',
      squad: [
        {
          id: 32570,
          name: 'Unai Simón',
          position: 'Goalkeeper',
          dateOfBirth: '1997-06-11',
          nationality: 'Spain'
        },
        {
          id: 172017,
          name: 'Julen Agirrezabala',
          position: 'Goalkeeper',
          dateOfBirth: '2000-12-26',
          nationality: 'Spain'
        },
        {
          id: 8479,
          name: 'Yuri Berchiche',
          position: 'Defence',
          dateOfBirth: '1990-02-10',
          nationality: 'Spain'
        },
        {
          id: 32574,
          name: 'Balenziaga',
          position: 'Defence',
          dateOfBirth: '1988-02-29',
          nationality: 'Spain'
        },
        {
          id: 32579,
          name: 'Yeray Álvarez',
          position: 'Defence',
          dateOfBirth: '1995-01-24',
          nationality: 'Spain'
        },
        {
          id: 32581,
          name: 'Iñigo Lekue',
          position: 'Defence',
          dateOfBirth: '1993-05-04',
          nationality: 'Spain'
        },
        {
          id: 32588,
          name: 'Íñigo Martínez',
          position: 'Defence',
          dateOfBirth: '1991-05-17',
          nationality: 'Spain'
        }
      ]
    }
  ]
};
