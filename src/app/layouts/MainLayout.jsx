import { Outlet } from 'react-router-dom'
import Header from '../../shared/components/navigation/Header'
import BottomNav from '../../shared/components/navigation/BottomNav'

export default function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {children || <Outlet />}
      </main>
      <BottomNav />
    </div>
  )
}
