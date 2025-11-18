export default function Hero() {
  const waNumber = "6281234567890" // ganti dengan nomor WhatsApp toko
  const waText = encodeURIComponent(
    'Halo Dapur "Mbak YoU"! Saya mau pesan cireng, masih tersedia?'
  )
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-400 via-amber-300 to-yellow-200"></div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-200/60" />
            <p className="text-xl md:text-2xl font-extrabold tracking-tight text-stone-800">
              Dapur "Mbak YoU"
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white px-4 md:px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-orange-300/50 transition-colors"
          >
            <span>Pesan Sekarang</span>
          </a>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mt-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Cireng Legendaris, Sensasi Renyah di Luar, Kenyal di Dalam!
            </h1>
            <p className="mt-4 md:mt-6 text-stone-600 text-base md:text-lg leading-relaxed">
              Nikmati cireng premium dengan varian rasa unik dan kualitas terbaik. Diracik
              khusus untuk jadi camilan favorit harian—mudah disajikan, rasanya bikin nagih.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-orange-300/50 transition-colors"
              >
                Pesan Sekarang!
              </a>
              <a
                href="#menu"
                className="inline-flex justify-center items-center gap-2 bg-white/80 hover:bg-white text-stone-800 px-6 py-3 rounded-xl font-semibold border border-stone-200 backdrop-blur shadow-sm transition-colors"
              >
                Lihat Menu
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
                Siap kirim area lokal
              </div>
              <div className="hidden sm:block w-px h-4 bg-stone-300" />
              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                Halal & higienis
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-300/60 via-orange-300/40 to-rose-300/40 blur-2xl rounded-3xl"></div>
            <img
              src="https://placehold.co/900x700/png?text=Foto+Cireng+Close-up"
              alt="Cireng renyah menggiurkan"
              className="relative w-full aspect-[4/3] object-cover rounded-3xl border border-amber-100 shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
