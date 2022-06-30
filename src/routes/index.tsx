import React, { lazy } from 'react';
import { useRecoilState } from 'recoil';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const LandingPage = lazy(() => import('../pages'));

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path='/' element={<LandingPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;
