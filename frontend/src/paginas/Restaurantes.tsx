import { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import {
  obtenerMenuRestaurante,
  type MenuRestaurante,
} from '/home/jordiortega/restaurant-abstract-factory/backend/src/menu/servicios/api-menu.ts'

type RestauranteInfo = {
  nombre: string
  tipo: string
  emoji: string
  descripcion: string
  imagen: string
}

function Restaurantes() {
  const marcas: RestauranteInfo[] = [
    {
      nombre: 'Restaurant Mexicano',
      tipo: 'mexicano',
      emoji: '🌮',
      descripcion:
        'Sabores intensos, ingredientes frescos y platillos tradicionales mexicanos preparados para una experiencia llena de sabor.',
      imagen:
        'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=1400&q=80',
    },
    {
      nombre: 'Restaurant Japonés',
      tipo: 'japones',
      emoji: '🍣',
      descripcion:
        'Explora una cocina japonesa elegante con sushi, ramen y opciones ligeras elaboradas con gran detalle.',
      imagen:
        'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=80',
    },
    {
      nombre: 'Restaurant Italiano',
      tipo: 'italiano',
      emoji: '🍝',
      descripcion:
        'Disfruta pastas, salsas clásicas y una propuesta italiana reconfortante, ideal para cualquier ocasión.',
      imagen:
        'https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=1400&q=80',
    },
    {
      nombre: 'Restaurant Americano',
      tipo: 'americano',
      emoji: '🍔',
      descripcion:
        'Hamburguesas, malteadas y comida americana con porciones generosas y combinaciones irresistibles.',
      imagen:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80',
    },
    {
      nombre: 'Restaurant Chino',
      tipo: 'chino',
      emoji: '🥡',
      descripcion:
        'Prueba una selección de cocina china con fideos, arroz, tés y especialidades llenas de tradición.',
      imagen:
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=80',
    },
  ]

  const mensajesOfertas = [
    '20% de descuento en tu primer pedido',
    'Envío gratis en órdenes mayores a $199',
    '2x1 en postres seleccionados',
    'Combo especial disponible por tiempo limitado',
    'Ofertas exclusivas en cocina japonesa',
  ]

  const [indiceOferta, setIndiceOferta] = useState(0)
  const [visibleOferta, setVisibleOferta] = useState(true)

  const [restauranteSeleccionado, setRestauranteSeleccionado] =
    useState<RestauranteInfo>(marcas[0])

  const [menuActual, setMenuActual] = useState<MenuRestaurante | null>(null)
  const [cargandoMenu, setCargandoMenu] = useState(false)
  const [errorMenu, setErrorMenu] = useState('')
  const [contadorCarrito, setContadorCarrito] = useState(0)
  const [mensajeCarrito, setMensajeCarrito] = useState('')

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisibleOferta(false)

      setTimeout(() => {
        setIndiceOferta((valorActual) => (valorActual + 1) % mensajesOfertas.length)
        setVisibleOferta(true)
      }, 400)
    }, 10000)

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    async function cargarMenuInicial() {
      try {
        setCargandoMenu(true)
        setErrorMenu('')

        const menu = await obtenerMenuRestaurante(restauranteSeleccionado.tipo)
        setMenuActual(menu)
      } catch (error) {
        setErrorMenu('No se pudo cargar el menú del restaurante.')
        setMenuActual(null)
      } finally {
        setCargandoMenu(false)
      }
    }

    cargarMenuInicial()
  }, [])

  async function seleccionarRestaurante(restaurante: RestauranteInfo) {
    setRestauranteSeleccionado(restaurante)
    setMensajeCarrito('')

    try {
      setCargandoMenu(true)
      setErrorMenu('')

      const menu = await obtenerMenuRestaurante(restaurante.tipo)
      setMenuActual(menu)
    } catch (error) {
      setErrorMenu('No se pudo cargar el menú del restaurante.')
      setMenuActual(null)
    } finally {
      setCargandoMenu(false)
    }
  }

  function hacerPedido() {
    if (!menuActual) return

    setContadorCarrito((valorActual) => valorActual + 1)
    setMensajeCarrito(`Se agregó un pedido de ${restauranteSeleccionado.nombre} al carrito.`)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="min-h-screen bg-[#f3d7ef] px-4 py-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[#f8f8f2] p-5 shadow-sm md:p-8">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="logo-delivery text-2xl text-black md:text-3xl">
            DELIVERY
          </div>

          <div className="flex items-center gap-4">
            {mensajeCarrito && (
              <p className="hidden max-w-[260px] text-right text-sm font-medium text-[#17122b] md:block">
                {mensajeCarrito}
              </p>
            )}

            <button className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#17122b] text-white transition hover:scale-110 hover:bg-[#2a2250]">
              <ShoppingCart size={22} />

              {contadorCarrito > 0 && (
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-xs font-bold text-black">
                  {contadorCarrito}
                </span>
              )}
            </button>
          </div>
        </header>

        {mensajeCarrito && (
          <div className="mb-6 rounded-2xl bg-[#ece8ff] px-4 py-3 text-sm font-medium text-[#17122b] md:hidden">
            {mensajeCarrito}
          </div>
        )}

        <section className="grid gap-5 lg:grid-cols-[1.6fr_1fr_0.7fr] lg:grid-rows-[300px_300px]">
          <div className="flex items-center rounded-[30px] bg-[#f1f1ea] p-8">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[#181818] md:text-6xl">
              Descubre sabores únicos, un pedido a la vez.
            </h1>
          </div>

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
              alt="Platillo especial"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="row-span-2 overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
              alt="Pizza"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
              alt="Comida variada"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center rounded-[30px] bg-[#1a1430] p-8 text-center">
            <div>
              <p
                className={`mx-auto max-w-[240px] text-2xl font-semibold leading-snug text-white transition-opacity duration-500 md:text-3xl ${
                  visibleOferta ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {mensajesOfertas[indiceOferta]}
              </p>

              <div className="mt-5 text-3xl text-white">✦</div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[220px_1fr]">
          <div className="rounded-[30px] bg-[#181233] p-6 text-white">
            <p className="mt-4 text-3xl font-semibold leading-tight">
              <br />
              Tijuana, Rosarito
              <br />
              Baja California
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 rounded-[30px] bg-[#efefe8] px-6 py-6 sm:grid-cols-3 md:grid-cols-5">
            {marcas.map((marca) => {
              const estaSeleccionado =
                restauranteSeleccionado.tipo === marca.tipo

              return (
                <div
                  key={marca.nombre}
                  onClick={() => seleccionarRestaurante(marca)}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-md ${
                    estaSeleccionado
                      ? 'bg-[#17122b] text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <div className="text-5xl transition-transform hover:scale-125">
                    {marca.emoji}
                  </div>

                  <p className="mt-3 text-base font-semibold">
                    {marca.nombre}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
          <div className="rounded-[30px] p-2">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="text-4xl font-semibold text-[#181818] md:text-5xl">
                {restauranteSeleccionado.nombre}
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-gray-700">
              {restauranteSeleccionado.descripcion}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={hacerPedido}
                className="rounded-[30px] bg-[#17122b] px-6 py-3 text-base font-semibold text-white transition hover:scale-105 hover:bg-[#2a2250] cursor-pointer"
              >
                Hacer pedido
              </button>
            </div>

            <div className="mt-8 rounded-[24px] bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#181818]">
                Menú de {restauranteSeleccionado.nombre}
              </h3>

              {cargandoMenu && (
                <p className="text-gray-600">Cargando menú...</p>
              )}

              {errorMenu && (
                <p className="text-red-500">{errorMenu}</p>
              )}

              {!cargandoMenu && !errorMenu && menuActual && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-[#f8f8f2] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Plato principal
                    </p>
                    <p className="mt-1 text-xl font-bold text-[#181818]">
                      {menuActual.platoPrincipal.nombre}
                    </p>
                    <p className="mt-1 text-gray-600">
                      {menuActual.platoPrincipal.descripcion}
                    </p>
                    <p className="mt-2 font-semibold text-[#17122b]">
                      ${menuActual.platoPrincipal.precio}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f8f8f2] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Bebida
                    </p>
                    <p className="mt-1 text-xl font-bold text-[#181818]">
                      {menuActual.bebida.nombre}
                    </p>
                    <p className="mt-1 text-gray-600">
                      Tamaño: {menuActual.bebida.tamano}
                    </p>
                    <p className="mt-2 font-semibold text-[#17122b]">
                      ${menuActual.bebida.precio}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f8f8f2] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Postre
                    </p>
                    <p className="mt-1 text-xl font-bold text-[#181818]">
                      {menuActual.postre.nombre}
                    </p>
                    <p className="mt-1 text-gray-600">
                      Dulzor: {menuActual.postre.nivelDulzor}
                    </p>
                    <p className="mt-2 font-semibold text-[#17122b]">
                      ${menuActual.postre.precio}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-center text-3xl font-semibold md:text-5xl">
              Sumérgete en una aventura culinaria
            </h2>

            <div className="overflow-hidden rounded-[40px]">
              <img
                src={restauranteSeleccionado.imagen}
                alt={restauranteSeleccionado.nombre}
                className="h-[520px] w-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Restaurantes