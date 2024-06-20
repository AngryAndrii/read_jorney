import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { ReccomendedPage } from '../pages/ReccomendedPage/ReccomendedPage';
import { LibraryPage } from '../pages/LibraryPage/LibraryPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ReadingPage } from '../pages/ReadingPage/ReadingPage';
import { NoPage } from '../pages/NoPage/NoPage';
import { ProtectedRoute } from '../features/protectedRoute/ProtectedRoute';

export default function App() {
  let user = 'lol';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <ReccomendedPage />
              </ProtectedRoute>
            }
          />
          <Route path="library" element={<LibraryPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reading" element={<ReadingPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
