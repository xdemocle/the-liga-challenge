import { Routes, Route } from 'react-router-dom';
import LayoutTemplate from './components/4-templates/layout';
import NoMatch from './components/4-templates/no-match';
import HomePage from './components/5-pages/home';
import TeamPage from './components/5-pages/team';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="team/:id" element={<TeamPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
