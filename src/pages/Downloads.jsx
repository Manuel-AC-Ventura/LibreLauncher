import { Header } from "../components/Header"

export const Downloads = () => {
  return (
    <main className="flex-[11] bg-[#1b1b1b]">
      <Header page="Downloads" />

      <div className="p-6">
        <input 
          type="text" 
          placeholder="Filtrar jogos baixados"
          className="form-input bg-neutral-900 w-full text-sm outline-none p-2 rounded-md border-2 border-neutral-700 focus:ring-0 focus:ring-offset-0 focus:outline-offset-0 mx-auto"
        />
      </div>
    </main>
  )
}
