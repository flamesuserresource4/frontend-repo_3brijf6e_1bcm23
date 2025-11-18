const products = [
  {
    name: "Cireng Isi Ayam Pedas Mozza",
    desc: "Isian ayam pedas dengan lelehan keju mozzarella. Renyah gurih, pedasnya nampol!",
    img: "https://placehold.co/600x500/png?text=Cireng+Isi+Ayam+Mozza",
  },
  {
    name: "Cireng Crispy Original",
    desc: "Tekstur super renyah di luar, kenyal lembut di dalam. Teman teh hangat terbaik!",
    img: "https://placehold.co/600x500/png?text=Cireng+Crispy+Original",
  },
  {
    name: "Cireng Salju Keju",
    desc: "Balutan keju gurih dengan taburan manis-asin. Lumer dan nagih!",
    img: "https://placehold.co/600x500/png?text=Cireng+Salju+Keju",
  },
  {
    name: "Cireng Isi Sapi Lada Hitam",
    desc: "Aroma lada hitam berpadu daging sapi empuk. Rasa mewah dalam camilan sederhana.",
    img: "https://placehold.co/600x500/png?text=Cireng+Isi+Sapi+Lada+Hitam",
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 text-center">
          Menu Kami
        </h2>
        <p className="mt-3 text-stone-600 text-center max-w-2xl mx-auto">
          Pilih favoritmu dan rasakan sensasi cireng yang bikin ketagihan.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => (
            <article key={i} className="group bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-stone-900 leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
