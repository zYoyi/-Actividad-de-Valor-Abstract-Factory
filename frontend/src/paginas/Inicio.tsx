import { useNavigate } from 'react-router-dom'

function Inicio() {
  const navigate = useNavigate()

  function irARestaurantes() {
    navigate('/restaurantes')
  }

  return (
    <main className="min-h-screen bg-[#f3d7ef] px-4 py-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#f8f8f2] p-5 shadow-sm md:p-8">
        <header className="mb-8 flex items-center justify-between">
          <div className="logo-delivery text-2xl text-black md:text-3xl">
            DELIVERY
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_1.2fr_0.8fr] lg:grid-rows-[220px_220px]">
          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=80"
              alt="Hamburguesa con papas"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center rounded-[30px] bg-[#f1f1ea] p-8 text-center lg:row-span-2">
            <div className="w-full max-w-3xl">
              <h1 className="mb-8 text-4xl font-bold leading-tight text-[#181818] md:text-6xl">
                Pide comida cerca de ti
              </h1>

              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Ingresa tu dirección"
                  className="h-14 w-full rounded-[20px] border border-gray-200 bg-white px-5 text-base outline-none md:flex-1"
                />

                <button
                  onClick={irARestaurantes}
                  className="h-14 w-full rounded-[20px] bg-[#17122b] px-8 text-base font-semibold text-white cursor-pointer transition hover:scale-105 hover:bg-[#2a2250] md:w-auto"
                >
                  Buscar comida
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-[#17122b] p-6 text-white">
            <p className="text-2xl font-bold md:text-3xl">Entrega rápida</p>
            <p className="mt-3 text-base leading-7 text-white/90">
              Encuentra restaurantes y explora menús en una experiencia moderna y
              visual.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#181233] p-6 text-white">
            <p className="mt-4 text-3xl font-semibold leading-tight">
              <br />
              Tijuana, Rosarito
              <br />
              Baja California
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Comida variada"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[30px] bg-[#efefe8] p-6 text-center">
            <div className="text-5xl">📍</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#181818]">
              Ubicación
            </h2>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Ingresa tu dirección para ver opciones cercanas disponibles.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#efefe8] p-6 text-center">
            <div className="text-5xl">🍔</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#181818]">
              Restaurantes
            </h2>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Explora diferentes tipos de cocina y descubre tu próxima comida
              favorita.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#efefe8] p-6 text-center">
            <div className="text-5xl">🛒</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#181818]">
              Pedido
            </h2>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Busca comida y entra rápidamente a la experiencia principal del
              sistema.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Inicio