export default function Testimonials() {
  const items = [
    { quote: 'Cireng terenak! Renyah, isian melimpah, dan bumbunya nampol.', name: 'Rani — Jakarta' },
    { quote: 'Cepat saji, enak banget buat stok camilan di rumah.', name: 'Bima — Bandung' },
    { quote: 'Varian Mozza favorit keluarga. Lumer dan gurih!', name: 'Mita — Depok' },
  ]

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-amber-50/60">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 text-center">Testimoni Pelanggan</h2>
        <p className="mt-3 text-stone-600 text-center max-w-2xl mx-auto">
          Cerita nyata dari pelanggan yang sudah jatuh cinta dengan cireng kami.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <blockquote className="text-stone-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-stone-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
