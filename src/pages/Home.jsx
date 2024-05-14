import { Header } from "../components/Header"
import { Container } from "../components/Home/Container"

export const Home = () => {
  return (
    <main className='bg-[#1b1b1b] flex-[11]'>
      <Header page="Início" />
      <Container />
    </main>
  )
}
