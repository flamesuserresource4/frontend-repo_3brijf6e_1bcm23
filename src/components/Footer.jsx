export default function Footer() {
  const waNumber = "6281234567890" // ganti dengan nomor WhatsApp toko
  const waText = encodeURIComponent(
    'Halo Dapur "Mbak YoU"! Saya mau pesan cireng.'
  )
  const waLink = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <footer className="py-12 bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xl font-extrabold text-white">Dapur "Mbak YoU"</p>
          <p className="mt-2 text-stone-400 text-sm">Cireng premium, renyah di luar, kenyal di dalam.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold shadow-md"
          >
            Chat WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold border border-white/10"
          >
            Lihat Menu
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-stone-500">© {new Date().getFullYear()} Dapur "Mbak YoU". All rights reserved.</div>
    </footer>
  )
}
