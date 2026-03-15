

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import List from '../pages/List';
import Details from '../pages/Details';
import Analytics from '../pages/Analytics';
import ProtectedRoute from '../components/ProtectedRoute';
import { Navigate } from 'react-router-dom';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/list" element={<ProtectedRoute><List /></ProtectedRoute>} />
            <Route path="/details/:id" element={<ProtectedRoute><Details /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
        </Routes>
    );
}

export default AppRoutes;