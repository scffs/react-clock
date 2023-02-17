import {Route, Routes} from 'react-router-dom';

import ClockType1 from './components/ClockType1/Clock.jsx';
import ClockType2 from './components/ClockType2/Clock.jsx';
import NotFound from './Pages/Error/NotFound.jsx';

import './index.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/type1' element={<ClockType1 />} />
            <Route path='/type2' element={<ClockType2 />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App;