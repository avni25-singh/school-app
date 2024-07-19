import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSchool from './AddSchool';
import ShowSchools from './ShowSchools';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/add-school" element={<AddSchool />} />
                <Route path="/show-schools" element={<ShowSchools />} />
                <Route path="/" element={<AddSchool />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default App;
