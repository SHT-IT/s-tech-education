'use client'

import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.css';


const Header = dynamic(() => import('../components/header'), { ssr: false })
const Footer = dynamic(() => import('../components/footer'), { ssr: false })


export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>


      {/* FOOTER */}
      <Footer />
    </div>
  )
}
