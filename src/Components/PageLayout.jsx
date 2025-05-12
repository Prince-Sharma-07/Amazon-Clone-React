import Header from './Header'
import Footer from './Footer'
import CategoriesList from './CategoriesList'
import { Outlet } from 'react-router'

export default function PageLayout() {
  return (
    <div >
        <Header/>
        <CategoriesList/>
        <Outlet/>
    </div>
  )
}
