import { Map } from "./components/Map"

function App() {

  return (
    <>
    <header className="bg-primaria font-sistema w-full h-[60px] flex items-center">
      <h1 className="text-branco text-[26px] ml-[30px] font-bold cursor-pointer">Mapa GeoEventos Multi-Infeed</h1>
    </header>
    <main className="min-h-screen w-full">
      <Map/>
    </main>
    </>

  )
}

export default App
