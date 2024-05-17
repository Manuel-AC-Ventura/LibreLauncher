import { Header } from "../components/Header"
import { Container } from "../components/Home/Container"

export const Home = () => {
  return (
    <main className='bg-[#1b1b1b] container overflow-hidden flex-[11] flex flex-col h-screen'>
      <Header page="Início" />
      <Container />
    </main>
  )
}
