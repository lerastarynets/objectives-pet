import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/common/header';
import { MainPage } from '../components/mainPage';
import { Characters } from '../components/characters';
import './App.css';
import { NotFoundPage } from '../components/notFoundPage';

const App = () => (
    <div>
        <Header />
        <div className="pt-16">
            <Routes>
                <Route exact path="/objectives-pet" element={<Navigate to="/main" replace />} />
                <Route exact path="/main" element={<MainPage />} />
                <Route
                    exact
                    path="/characters"
                    element={
                        <Suspense fallback={<div>Wait...</div>}>
                            <Characters />
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </div>
);

export default App;
