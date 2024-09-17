import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Top } from "./tsx/views/pages/Top";
import { Page1 } from "./tsx/views/pages/Page1";
import { Page2 } from "./tsx/views/pages/Page2";
import { Deliverable } from "./tsx/views/pages/Deliverable";
import { Article } from "./tsx/views/pages/Article";
function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
            <Route component={<Top />} />
            <Route path='/' element={<Top />} />
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Deliverable" element={<Deliverable />} />
            <Route path="/Article" element={<Article />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
