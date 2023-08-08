import Navbar from '@/components/Navbar'
import './globals.css'

export default function Home() {
  return (
    <main className='width-full h-screen bg-bodyColor font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll'>
      <Navbar />
    </main>
  )
}
