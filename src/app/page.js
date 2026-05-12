import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] font-sans">
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sriracha&family=Chonburi&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col flex-shrink-0 pl-6">
            <span className="text-2xl text-[#8b7355] lowercase" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Ruen Patcharee
            </span>
            <span className="text-sm text-[#1a4d2e] -mt-1" style={{ fontFamily: "'Sriracha', cursive" }}>
              เรือนพัชรี นวดเพื่อสุขภาพ
            </span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-700 items-center">
            <a href="#" className="hover:text-[#1a4d2e] transition">หน้าแรก</a>
            <a href="#" className="hover:text-[#1a4d2e] transition">บริการและราคา</a>
            <a href="#" className="hover:text-[#1a4d2e] transition">บรรยากาศร้าน</a>
            <a href="tel:0659255878" className="text-[#1a4d2e] font-bold border-b-2 border-[#1a4d2e] pb-1">
              โทร: 065-925-5878
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/IMG_1325.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* แผ่นกรองแสงเพื่อให้พื้นหลังดูละมุนขึ้น */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
          {/* กรอบที่ 1: ชื่อร้าน (พื้นหลังดำจาง + ขอบทอง) */}
          <div className="bg-black/40 backdrop-blur-sm border-2 border-[#d4af37] px-10 py-6 rounded-xl shadow-2xl transition-all hover:bg-black/50">
            <p className="text-[#d4af37] text-4xl md:text-5xl mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Ruen Patcharee
            </p>
            <h1 className="text-4xl md:text-6xl text-white font-normal leading-tight" style={{ fontFamily: "'Chonburi', cursive" }}>
              เรือนพัชรี นวดเพื่อสุขภาพ
            </h1>
          </div>

          {/* กรอบที่ 2: สโลแกน (พื้นหลังดำจาง + ขอบขาวบางๆ) */}
          <div className="bg-black/30 backdrop-blur-[2px] border border-white/20 px-8 py-4 rounded-lg max-w-2xl">
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-100">
              บริการนวดไทย นวดเท้า และสปาเพื่อสุขภาพระดับพรีเมียม <br className="hidden md:block" />
              ผ่อนคลายความเหนื่อยล้า ในบรรยากาศที่แสนอบอุ่นและเงียบสงบ
            </p>
          </div>

          {/* กลุ่มปุ่มกด */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-[#d4af37] text-black px-12 py-3 rounded-full text-lg font-bold hover:bg-[#f1c40f] transition-all shadow-xl hover:scale-105">
              ดูเมนูและราคา
            </button>
            <button className="border-2 border-white/80 backdrop-blur-md text-white px-12 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all hover:scale-105">
              ติดต่อเรา
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 font-sans">
          <h3 className="text-[#1a4d2e] text-3xl font-bold mb-6">ยินดีต้อนรับสู่เรือนพัชรี</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-light italic">
            " เรามุ่งเน้นการให้บริการที่ได้มาตรฐาน สะอาด และปลอดภัย ด้วยทีมช่างนวดมืออาชีพที่พร้อมจะดูแลคุณแม่และลูกค้าทุกท่านให้ได้รับการพักผ่อนที่ดีที่สุด "
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d2e] py-12 text-center text-stone-300">
        <p className="text-white text-xl font-semibold mb-2">เรือนพัชรี นวดเพื่อสุขภาพ</p>
        <p className="text-sm tracking-widest uppercase opacity-70">เปิดให้บริการทุกวัน | 09:00 - 20:00 น.</p>
        <div className="mt-8 pt-8 border-t border-white/10 text-xs opacity-50">
          © 2026 Ruen Patcharee Health Massage. All rights reserved.
        </div>
      </footer>
    </main>
  );
}