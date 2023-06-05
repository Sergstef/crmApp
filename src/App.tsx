import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Addresses } from './components/Addresses';
import { News } from './components/News';
import { Layout } from './components/Layout';

const App = () => <BrowserRouter>
    <Layout>
        <Routes>
            <Route path="/" element={<News/> } />
            <Route path="/addresses" element={<Addresses />} />
        </Routes>
    </Layout>
</BrowserRouter>;

export default App;