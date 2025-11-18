export default function WhyUs() {
  return (
    <section className="py-14 md:py-20 bg-amber-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 text-center">
          Mengapa Dapur Mbak YoU?
        </h2>
        <p className="mt-3 text-stone-600 text-center max-w-2xl mx-auto">
          Tiga alasan kenapa kamu akan jatuh cinta pada cireng kami.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">1</div>
            <h3 className="mt-4 font-bold text-lg text-stone-900">Bahan Premium</h3>
            <p className="mt-2 text-stone-600 text-sm">
              Dipilih dari tepung terbaik dan bumbu racikan otentik. Setiap gigitan terasa
              istimewa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">2</div>
            <h3 className="mt-4 font-bold text-lg text-stone-900">Varian Rasa Unik</h3>
            <p className="mt-2 text-stone-600 text-sm">
              Andalan kami: Ayam Pedas Keju Mozza dan Sapi Lada Hitam. Renyah gurih bikin nagih!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">3</div>
            <h3 className="mt-4 font-bold text-lg text-stone-900">Kemasan Praktis</h3>
            <p className="mt-2 text-stone-600 text-sm">
              Siap saji, mudah disimpan di freezer. Tinggal goreng sebentar, langsung siap dinikmati.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
