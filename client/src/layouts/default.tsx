import Navbar from '../components/navbar'
import Footer from '../components/footer'

interface Props {
  children: React.ReactNode
}

export default function Default({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}