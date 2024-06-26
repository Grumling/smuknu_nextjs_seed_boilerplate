import Footer from '@/components/footer/footer'
import NavBar from '@/components/navigation/navbar/navbar'

export default function siteLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
