import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplyForm from './components/applyForm/ApplyForm.js';
import ReferForm from './components/referForm/referForm.js';

function App() {
  return (
    <ApplyForm></ApplyForm>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<JobOpportunities />} />
    //     <Route path="Description/" element={<Description />} />
    //     <Route path="Apply/" element={<ApplyForm />} />
    //     <Route path="/Refer/" element={<ReferForm />} />
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;
