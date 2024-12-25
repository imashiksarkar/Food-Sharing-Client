import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router'
// import { Toaster } from '@/components/ui/toaster'
// import Footer from '@/components/Footer'

const MainLayout = () => {
  return (
    <section className='flex flex-col h-screen'>
      <Navbar />
      <main className='grow'>
        <Outlet />
      </main>
      {/* <Toaster />
      <Footer /> */}
    </section>
  )
}

export default MainLayout
