import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/common/header';
import { RickAndMorty } from '../components/rickAndMorty';
import './App.css';

const App = () => (
    <div>
        <Header />
        <div className="pt-16">
            <Routes>
                <Route
                    exact
                    path="/characters"
                    element={
                        <Suspense fallback={<div>Wait...</div>}>
                            <RickAndMorty />
                        </Suspense>
                    }
                />
                <Route path="*" element={<div>404 not found</div>} />
            </Routes>
        </div>
    </div>
);

export default App;
