import { Outlet } from 'react-router-dom'
import Header from '../../shared/components/navigation/Header'
import BottomNav from '../../shared/components/navigation/BottomNav'
import Footer from '../../shared/components/navigation/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="app-layout min-h-screen flex flex-col">
      <Header />
      <main className="main-content flex-1 pt-16 pb-20 md:pb-0">
        {children || <Outlet />}
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}
