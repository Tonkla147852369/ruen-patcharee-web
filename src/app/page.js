import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] font-sans">
      {/* Navigation - แถบเมนูบน (เอาปุ่มจองออกแล้ว) */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1a4d2e] tracking-tight">เรือนพัชรี</span>
            <span className="text-[10px] tracking-[0.25em] text-[#8b7355] uppercase font-medium">Ruen Patcharee Health Massage</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-700 items-center">
            <a href="#" className="hover:text-[#1a4d2e] transition">หน้าแรก</a>
            <a href="#" className="hover:text-[#1a4d2e] transition">บริการและราคา</a>
            <a href="#" className="hover:text-[#1a4d2e] transition">บรรยากาศร้าน</a>
            <a href="tel:0XXXXXXXXX" className="text-[#1a4d2e] font-bold border-b-2 border-[#1a4d2e] pb-1">
              โทร: 0XX-XXX-XXXX
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - ส่วนภาพใหญ่หน้าแรก */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://unsplash.com" 
            className="w-full h-full object-cover"
            alt="บรรยากาศร้านนวดเรือนพัชรี"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#d4af37] text-sm md:text-base mb-4 tracking-[0.5em] uppercase font-medium">สัมผัสศาสตร์แห่งการผ่อนคลาย</p>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">เรือนพัชรี นวดเพื่อสุขภาพ</h1>
          <p className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-90 text-stone-200">
            บริการนวดไทย นวดเท้า และสปาเพื่อสุขภาพระดับพรีเมียม <br className="hidden md:block"/>
            ผ่อนคลายความเหนื่อยล้า ในบรรยากาศที่แสนอบอุ่นและเงียบสงบ
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#d4af37] text-black px-14 py-4 rounded-full text-lg font-bold hover:bg-[#c19b2e] transition-all shadow-2xl hover:scale-105">
              ดูเมนูและราคา
            </button>
            <button className="border-2 border-white/60 backdrop-blur-sm text-white px-14 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#1a4d2e] transition-all hover:scale-105">
              สอบถามเส้นทาง / ติดต่อ
            </button>
          </div>
        </div>
      </section>

      {/* Info Section - เพิ่มข้อมูลร้านสั้นๆ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-[#1a4d2e] text-3xl font-bold mb-6">ยินดีต้อนรับสู่เรือนพัชรี</h3>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            เรามุ่งเน้นการให้บริการที่ได้มาตรฐาน สะอาด และปลอดภัย ด้วยทีมช่างนวดมืออาชีพที่พร้อมจะดูแลคุณแม่และลูกค้าทุกท่านให้ได้รับการพักผ่อนที่ดีที่สุด
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a4d2e] py-12 text-center text-stone-300">
          <p className="text-white text-xl font-semibold mb-2">เรือนพัชรี นวดเพื่อสุขภาพ</p>
          <p className="text-sm tracking-widest uppercase opacity-70">เปิดให้บริการทุกวัน | 09:00 - 20:00 น.</p>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs opacity-50">
            © 2024 Ruen Patcharee Health Massage. All rights reserved.
          </div>
      </footer>
    </main>
  );
}
