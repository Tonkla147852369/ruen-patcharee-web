"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ฟังก์ชันสร้างลายข้าวหลามตัดสีเขียว (Green Diamond)
  const GreenDiamondPattern = ({ opacity = 0.05, mask = "none", position = "inset-0" }) => (
    <div 
      className={`absolute ${position} pointer-events-none transition-opacity duration-1000`} 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%231a4d2e' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px',
        maskImage: mask,
        WebkitMaskImage: mask,
        opacity: isMounted ? opacity : 0
      }}
    ></div>
  );

  return (
    <main className="min-h-screen bg-[#fafaf5] font-sans text-[#4a3427] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Sriracha&family=Chonburi&display=swap" rel="stylesheet" />

      {/* 1. Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <GreenDiamondPattern opacity={0.05} mask="linear-gradient(to bottom, black, transparent)" />
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-center mb-5">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>Ruen Patcharee</h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7355] mt-1">Thai Massage & Wellness</p>
            </div>
          </div>

          <nav className="flex justify-center items-center space-x-8 text-[14px] font-medium border-t border-gray-50 pt-4">
            {["หน้าแรก", "เกี่ยวกับเรา", "บริการและราคา", "วารสาร"].map((item) => (
              <a key={item} href="#" className="hover:text-[#1a4d2e] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#" className="hover:text-[#1a4d2e] transition-colors flex items-center gap-1 relative group">
              ที่ตั้งสาขาพัทยา
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <GreenDiamondPattern opacity={0.05} position="inset-y-0 left-0 w-1/3" mask="linear-gradient(to right, black, transparent)" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>
              เรือนพัชรี <br />
              <span className="text-3xl md:text-4xl text-[#8b7355] block mt-4 font-sans tracking-wide">ผ่อนคลาย สบายตัว <br/> แบบเป็นกันเอง</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#8b7355] mb-8"></div>
            <p className="text-gray-500 max-w-md mb-10 text-lg leading-relaxed">แวะมาพักกาย พักใจ ด้วยนวดไทยมืออาชีพ ในบรรยากาศที่สะอาดและดูแลคุณเหมือนคนในครอบครัว</p>
            <button className="bg-[#e8f0e8] text-[#1a4d2e] border border-[#d1e0d1] px-10 py-4 rounded-md font-bold tracking-widest text-sm hover:bg-[#d1e0d1] transition-all uppercase shadow-sm">ดูรายการนวดของเรา</button>
          </div>
          
          {/* ส่วนรูปภาพพร้อมคำโปรยสีขาว */}
          <div className="flex-1 relative w-full h-[600px] flex justify-center items-center">
            <div className="relative w-[90%] h-full group">
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#8b7355]/20 z-0"></div>
              <div 
                className="w-full h-full bg-cover bg-center rounded-[2px] shadow-2xl relative z-10 transition-transform duration-1000 group-hover:scale-[1.02] overflow-hidden" 
                style={{ backgroundImage: "url('/IMG_1325.jpg')" }}
              >
                {/* ข้อความบนรูปภาพ */}
                <div className="absolute inset-0 bg-black/20 z-20 flex flex-col justify-end p-10">
                  <p className="text-white/80 text-xs tracking-[0.4em] uppercase mb-2">Pattaya City</p>
                  <h3 className="text-white text-3xl font-medium leading-tight drop-shadow-lg" style={{ fontFamily: "'Sriracha', cursive" }}>
                    "สัมผัสศาสตร์แห่งการผ่อนคลาย <br/> ที่เติมเต็มพลังให้ชีวิต"
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. บริการของเรา (กลับมาครบแล้วครับ) */}
      <section className="bg-white py-32 px-6 relative overflow-hidden">
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 left-0 w-1/3" mask="radial-gradient(circle at left center, black, transparent)" />
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 right-0 w-1/3" mask="radial-gradient(circle at right center, black, transparent)" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative mb-20">
            <h3 className="text-4xl font-bold text-[#1a4d2e] mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>บริการของเรา</h3>
            <div className="absolute bottom-[-10px] left-0 w-full h-[1px] bg-[#8b7355]/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "นวดไทยเพื่อสุขภาพ", price: "200 - 300.-", desc: "เทคนิคนวดกดจุดและยืดเหยียดแบบไทยเดิม ช่วยคลายเส้นที่ตึงเครียดให้เบาสบาย" },
              { title: "นวดเท้าผ่อนคลาย", price: "200 - 250.-", desc: "เน้นกระตุ้นจุดสะท้อนบนฝ่าเท้า เพื่อปรับสมดุลร่างกายและลดความอ่อนล้า" },
              { title: "นวดอโรม่า / น้ำมัน", price: "400 - 500.-", desc: "ปรนนิบัติผิวและจิตใจด้วยกลิ่นหอม พร้อมการนวดที่นุ่มนวลช่วยให้หลับสนิท" },
              { title: "นวดประคบสมุนไพร", price: "350 - 450.-", desc: "ใช้ความร้อนจากสมุนไพรสดช่วยลดการอักเสบของกล้ามเนื้อและกระตุ้นการไหลเวียน" },
              { title: "นวดขัดผิว / สครับ", price: "500 - 600.-", desc: "ผลัดเซลล์ผิวเก่าให้กระจ่างใส พร้อมบำรุงผิวให้เนียนนุ่มน่าสัมผัส" },
              { title: "นวดเฉพาะจุด (คอ บ่า ไหล่)", price: "200 - 300.-", desc: "เน้นบรรเทาอาการ Office Syndrome สำหรับผู้ที่มีเวลาน้อยแต่ต้องการความผ่อนคลาย" }
            ].map((service, index) => (
              <div key={index} className="bg-[#fafaf5] p-10 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 min-h-[280px] flex flex-col justify-between group/card">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-bold text-[#1a4d2e] leading-tight group-hover/card:text-[#b89b5e] transition-colors">{service.title}</h4>
                    <span className="text-[#b89b5e] font-bold text-lg whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-[#1a4d2e] text-xs font-bold uppercase tracking-widest cursor-pointer group/btn w-fit">
                  <span className="transition-colors group-hover/btn:text-[#b89b5e]">อ่านเพิ่มเติม</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2 group-hover/btn:text-[#b89b5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ส่วนติดต่อสอบถาม */}
          <div className="relative mt-24 py-24 bg-[#fdfcf7] rounded-[40px] text-center border border-[#eceae0]/50 shadow-sm overflow-hidden">
            <GreenDiamondPattern opacity={0.08} mask="linear-gradient(to bottom, black 0%, transparent 25%, transparent 75%, black 100%)" />
            <div className="relative z-10 px-6">
              <p className="text-[#8b7355] italic font-serif mb-10 text-xl">"สอบถามคิวว่างหรือปรึกษาบริการได้ที่นี่"</p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <a href="#" className="bg-[#06C755] text-white px-12 py-5 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-all tracking-widest">จองผ่าน LINE</a>
                <a href="tel:0659255878" className="bg-[#1a4d2e] text-white px-12 py-5 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-all tracking-widest">โทร: 065-925-5878</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f7f9f7] border-t border-gray-100 py-20 text-center overflow-hidden">
        <GreenDiamondPattern opacity={0.05} mask="linear-gradient(to bottom, black, transparent)" />
        <div className="relative z-10 px-6">
          <p className="text-[#1a4d2e] font-bold text-xl mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>เรือนพัชรี นวดเพื่อสุขภาพ</p>
          <div className="text-[11px] text-[#8b7355] tracking-widest uppercase mb-8 flex justify-center gap-6 opacity-70">
            <span>สะอาด</span><span>•</span><span>สบาย</span><span>•</span><span>ผ่อนคลาย</span>
          </div>
          <p className="text-[11px] text-gray-500 pt-8 border-t border-[#e3eadd] max-w-xs mx-auto">© 2026 เรือนพัชรี สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </footer>
    </main>
  );
}