import Header from './Header'
import Footer from './Footer'
import CategoriesList from './CategoriesList'
import { Outlet } from 'react-router'
import { useRef } from 'react'

export default function PageLayout() {
  const backToTop = useRef(null)
  return (
    <div>
      <Header />
      <CategoriesList />
      <main ref = {backToTop}>
      <Outlet />
      </main>
      <Footer backToTop={backToTop}/>
    </div>

  )
}
