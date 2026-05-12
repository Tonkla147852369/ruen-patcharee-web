"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf5] font-sans text-[#4a3427] overflow-x-hidden">
      <link 
        href="https://fonts.googleapis.com/css2?family=Sriracha&family=Chonburi&display=swap" 
        rel="stylesheet" 
      />

      {/* 1. Header & Navigation */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center mb-5">
            <div className={`text-center transition-all duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl font-bold tracking-tighter text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>
                Ruen Patcharee
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7355] mt-1">Thai Massage & Wellness</p>
            </div>
          </div>

          <nav className="flex justify-center items-center space-x-10 text-[14px] font-medium border-t border-gray-50 pt-4">
            {["หน้าแรก", "เกี่ยวกับเรา", "บริการและราคา"].map((item) => (
              <a key={item} href="#" className="hover:text-[#1a4d2e] transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a href="#" className="hover:text-[#1a4d2e] transition-colors duration-300 flex items-center gap-1 relative group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              ที่ตั้งสาขาพัทยา
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#" className="hover:text-[#1a4d2e] transition-colors relative group">
              วารสาร
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className={`flex-1 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>
              เรือนพัชรี <br />
              <span className="text-3xl md:text-4xl text-[#8b7355] block mt-4 font-sans tracking-wide">ผ่อนคลาย สบายตัว <br/> แบบเป็นกันเอง</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#8b7355] mb-8"></div>
            <p className="text-gray-500 max-w-md mb-10 leading-relaxed text-lg">
              แวะมาพักกาย พักใจ ให้หายเหนื่อยจากการทำงาน ด้วยนวดไทยมืออาชีพ ในบรรยากาศที่สะอาดและดูแลคุณเหมือนคนในครอบครัว
            </p>
            <button className="bg-[#e8f0e8] text-[#1a4d2e] border border-[#d1e0d1] px-10 py-4 rounded-md font-bold tracking-widest text-sm hover:bg-[#d1e0d1] hover:shadow-md transition-all duration-300 uppercase">
              ดูรายการนวดของเรา
            </button>
          </div>
          
          <div className={`flex-1 relative w-full h-[600px] transition-all duration-1000 delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div 
              className="w-full h-full bg-cover bg-center rounded-[2px] shadow-2xl relative z-10"
              style={{ backgroundImage: "url('/IMG_1325.jpg')" }}
            >
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#8b7355]/20 -z-10"></div>
            </div>
            <div className="absolute bottom-10 -left-10 bg-white p-8 shadow-xl hidden lg:block z-20 border-l-4 border-[#1a4d2e]">
              <p className="text-[#1a4d2e] font-bold text-xl mb-1">เรือนพัชรี</p>
              <p className="text-gray-500 text-[13px] tracking-wide font-medium">มือหนัก มือเบา บอกเราได้</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. บริการของเรา (6 รายการ) */}
      <section className="bg-white py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20">
            <div className="absolute bottom-1 left-0 right-0 h-[1px] bg-[#8b7355]/20"></div>
            <div className="flex flex-col md:flex-row items-end justify-between relative z-10">
              <div className="max-w-xl bg-white pr-12 pb-1">
                <h3 className="text-4xl font-bold text-[#1a4d2e] mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>
                  บริการของเรา
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  คัดสรรทรีตเมนต์ที่ช่วยบำบัดความเมื่อยล้าและฟื้นฟูร่างกายอย่างตรงจุด ในราคาที่คุ้มค่า
                </p>
              </div>
              <div className="hidden md:block bg-white pl-8 pb-1 text-[#8b7355] text-sm tracking-[0.2em] uppercase font-medium">
                Pattaya Branch
              </div>
            </div>
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
              <div key={index} className="group cursor-pointer">
                <div className="bg-[#fafaf5] p-10 border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-bold text-[#1a4d2e] leading-tight">{service.title}</h4>
                    <span className="text-[#8b7355] font-semibold">{service.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                  <div className="inline-flex items-center gap-2 text-[#1a4d2e] text-xs font-bold uppercase tracking-widest group/btn hover:text-[#8b7355] transition-all duration-300">
                    <span>รายละเอียด</span>
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-[#8b7355] italic font-serif mb-8 text-lg">"สอบถามคิวว่างหรือปรึกษาบริการได้ที่นี่"</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#06C755] text-white px-10 py-4 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all">
                <span className="tracking-widest uppercase">จองผ่าน LINE</span>
              </a>
              <a href="tel:0812345678" className="flex items-center justify-center gap-3 bg-[#1a4d2e] text-white px-10 py-4 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all">
                <span className="tracking-widest uppercase">โทร: 081-234-5678</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer พร้อมลิขสิทธิ์ใหม่ */}
      <footer className="bg-white border-t border-gray-50 py-20 text-center">
        <div className={`transition-all duration-1000 delay-700 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[#1a4d2e] font-bold text-xl mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>
            เรือนพัชรี นวดเพื่อสุขภาพ
          </p>
          
          <div className="text-[11px] text-gray-400 tracking-wider uppercase mb-8 flex justify-center gap-6">
            <span>สะอาด</span>
            <span>•</span>
            <span>สบาย</span>
            <span>•</span>
            <span>ผ่อนคลาย</span>
          </div>

          <div className="pt-8 border-t border-gray-50 max-w-xs mx-auto">
            <p className="text-[11px] text-gray-500 leading-relaxed">
              © ลิขสิทธิ์ 2026 เรือนพัชรี นวดเพื่อสุขภาพ <br/> สงวนลิขสิทธิ์ทุกประการ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}