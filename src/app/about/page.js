"use client";
import React from "react";
import { usePathname } from "next/navigation";
// ดึงฟังก์ชันเอฟเฟกต์กล่องวิ่งระเบิดจอมาจากเลเยอร์ส่วนกลาง (app/layout.js)
import { useTransitionNavigate } from "../layout"; 

export default function About() {
  const pathname = usePathname();
  // เรียกใช้งานฟังก์ชันสำหรับผูกเข้ากับ onClick ในปุ่มต่าง ๆ
  const navigateWithBox = useTransitionNavigate();

  // ฟังก์ชันสร้างลายข้าวหลามตัดสีเขียว (แสดงผลชัวร์ 100%)
  const GreenDiamondPattern = ({ opacity = 0.06, mask = "none", position = "inset-0" }) => (
    <div 
      className={`absolute ${position} pointer-events-none transition-opacity duration-700`} 
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%231a4d2e' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px',
        maskImage: mask,
        WebkitMaskImage: mask,
        opacity: opacity
      }}
    ></div>
  );

  return (
    <main className="min-h-screen bg-[#fafaf5] font-sans text-[#4a3427] overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Sriracha&family=Chonburi&display=swap" rel="stylesheet" />

      {/* 1. Header (ผูกระบบกล่องวิ่งจากซ้ายให้กับเมนูทั้งหมดของหน้า About) */}
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
            
            {/* เมนูหน้าแรก */}
            <a 
              href="/" 
              onClick={(e) => navigateWithBox(e, "/")}
              className={`transition-colors relative group ${pathname === "/" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              หน้าแรก
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>

            {/* เมนูเกี่ยวกับเรา (หน้าปัจจุบัน กดแล้วจะเล่นแอนิเมชันกล่องก่อนสั่ง reload) */}
            <a 
              href="/about" 
              onClick={(e) => navigateWithBox(e, "/about")}
              className={`transition-colors relative group ${pathname === "/about" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              เกี่ยวกับเรา
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>
            
            {/* เมนูบริการและราคา */}
            <a 
              href="/services" 
              onClick={(e) => navigateWithBox(e, "/services")}
              className={`transition-colors relative group ${pathname === "/services" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              บริการและราคา
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/services" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>

            {/* เมนูวารสาร */}
            <a 
              href="/journal" 
              onClick={(e) => navigateWithBox(e, "/journal")}
              className={`transition-colors relative group ${pathname === "/journal" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              วารสาร
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/journal" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>

            {/* เมนูที่ตั้งสาขาพัทยา */}
            <a 
              href="/location" 
              onClick={(e) => navigateWithBox(e, "/location")}
              className={`transition-colors relative group ${pathname === "/location" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              ที่ตั้งสาขาพัทยา
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/location" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section - เกี่ยวกับเรา */}
      <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <GreenDiamondPattern opacity={0.05} position="inset-y-0 left-0 w-1/3" mask="linear-gradient(to right, black, transparent)" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-light leading-[1.1] mb-8 text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>
              รู้จัก <br />
              <span className="text-3xl md:text-4xl text-[#8b7355] block mt-4 font-sans tracking-wide">เรือนพัชรี นวดเพื่อสุขภาพ</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#8b7355] mb-8"></div>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed">
              เรือนพัชรี เริ่มต้นขึ้นจากความตั้งใจที่จะสร้างพื้นที่แห่งการพักผ่อนอย่างแท้จริงในเมืองพัทยา 
              เราผสมผสานศาสตร์การนวดไทยแบบดั้งเดิม เข้ากับบรรยากาศที่อบอุ่น เรียบง่าย และเป็นกันเอง 
              เพื่อให้ทุกท่านที่เหนื่อยล้าจากการทำงานหรือการเดินทาง ได้เข้ามาเติมพลังกายและผ่อนคลายจิตใจ
            </p>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">
              เราให้ความสำคัญสูงสุดกับเรื่องความสะอาด บรรยากาศที่สงบ และการบริการด้วยใจจากพนักงานนวดมืออาชีพ 
              ดูแลทุกท่านเสมือนคนในครอบครัวของเราเอง
            </p>
          </div>
          
          {/* ส่วนรูปภาพสไตล์เดียวกับหน้าแรก */}
          <div className="flex-1 relative w-full h-[600px] flex justify-center items-center">
            <div className="relative w-[90%] h-full group">
              {/* กรอบเส้นสีน้ำตาลด้านหลัง */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#8b7355]/20 z-0"></div>
              {/* ตัวรูปภาพและเอฟเฟกต์ซูมตอนเมาส์ชี้ */}
              <div 
                className="w-full h-full bg-cover bg-center rounded-[2px] shadow-2xl relative z-10 transition-transform duration-1000 group-hover:scale-[1.02] overflow-hidden" 
                style={{ backgroundImage: "url('/IMG_1325.jpg')" }}
              >
                {/* ข้อความบนรูปภาพพร้อมคำโปรยสีขาว */}
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

      {/* 3. แนวคิดและความตั้งใจของเรา */}
      <section className="bg-white py-32 px-6 relative overflow-hidden">
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 left-0 w-1/3" mask="radial-gradient(circle at left center, black, transparent)" />
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 right-0 w-1/3" mask="radial-gradient(circle at right center, black, transparent)" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative mb-20 text-center">
            <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>สิ่งที่เรายึดมั่น</h3>
            <p className="text-[#8b7355] text-sm tracking-widest uppercase">Our Core Values</p>
            <div className="w-12 h-[1px] bg-[#8b7355] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "ความสะอาดปลอดภัย", desc: "เราดูแลรักษาความสะอาดของสถานที่ เตียงนวด และอุปกรณ์ทุกชิ้นอย่างเข้มงวด เพื่อความมั่นใจและสุขอนามัยที่ดีของผู้รับบริการทุกท่าน" },
              { title: "บริการด้วยใจเป็นกันเอง", desc: "ต้อนรับและดูแลคุณด้วยรอยยิ้ม ความสุภาพ และความอบอุ่น ให้คุณรู้สึกสบายใจและผ่อนคลายที่สุดเสมือนอยู่บ้านตนเอง" },
              { title: "ศาสตร์มาตรฐานดั้งเดิม", desc: "พนักงานนวดของเราผ่านการฝึกฝนและมีประสบการณ์ มีความเชี่ยวชาญในการกดจุด แก้อาการ และผ่อนคลายกล้ามเนื้ออย่างถูกวิธี" }
            ].map((item, index) => (
              <div key={index} className="bg-[#fafaf5] p-10 border border-gray-100 rounded-[4px] min-h-[220px] flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-[#1a4d2e] mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ส่วนติดต่อสอบถามสไตล์ภาพ */}
          <div className="relative mt-24 py-16 bg-[#2a2620] rounded-[40px] text-center border border-gray-800 shadow-2xl overflow-hidden">
            <GreenDiamondPattern opacity={0.05} mask="linear-gradient(to bottom, black, transparent)" />
            
            <div className="relative z-10 px-6 text-[#fafaf5]">
              <div className="mb-10 space-y-2 opacity-90">
                <h4 className="text-2xl font-bold mb-4 text-[#d4bd94]" style={{ fontFamily: "'Chonburi', cursive" }}>
                  เรือนพัชรี นวดเพื่อสุขภาพ
                </h4>
                <p className="text-sm tracking-wide">ถ. เทพประสิทธิ์ เมืองพัทยา</p>
                <p className="text-sm tracking-wide">อำเภอบางละมุง ชลบุรี ประเทศไทย</p>
                <p className="text-sm mt-4">
                  <span className="text-[#d4bd94]">อีเมล:</span> ruenpatcharee.massage@gmail.com
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#d4bd94]/30 mx-auto mb-8"></div>
              <p className="text-[#d4bd94] text-lg font-medium mb-8" style={{ fontFamily: "'Sriracha', cursive" }}>ติดต่อเรา</p>

              <div className="flex justify-center items-center gap-8">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2a2620]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2a2620]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                  <span className="text-[#2a2620] font-black text-[10px]">LINE</span>
                </a>

                <a href="mailto:ruenpatcharee.massage@gmail.com" className="hover:scale-110 transition-transform bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2a2620]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f7f9f7] border-t border-gray-100 py-20 text-center overflow-hidden">
        <GreenDiamondPattern opacity={0.07} mask="linear-gradient(to bottom, black, transparent)" />
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