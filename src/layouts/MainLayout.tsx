import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <section className='flex flex-col h-screen'>
      <Navbar />
      <main className='grow'>
        <Outlet />
      </main>
      <Toaster />
      <Footer />
    </section>
  )
}

export default MainLayout
