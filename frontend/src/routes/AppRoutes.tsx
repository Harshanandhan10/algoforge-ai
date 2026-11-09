
import { Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from '../layouts/DashboardLayout'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Learning from '../pages/Learning'
import Problems from '../pages/Problems'
import Visualizer from '../pages/Visualizer'
import AITutor from '../pages/AITutor'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Authentication pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Main application layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn" element={<Learning />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/visualizer" element={<Visualizer />} />
        <Route path="/ai-tutor" element={<AITutor />} />
      </Route>

      {/* Invalid routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
