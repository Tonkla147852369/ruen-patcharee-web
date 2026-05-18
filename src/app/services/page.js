"use client";
import React from "react";
import { usePathname } from "next/navigation";
// ดึงฟังก์ชันเอฟเฟกต์กล่องวิ่งระเบิดจอมาจากเลเยอร์ส่วนกลาง (app/layout.js)
import { useTransitionNavigate } from "../layout";

export default function Services() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const pathname = usePathname();
  // เรียกใช้งานฟังก์ชันสำหรับการสลับหน้าจอพร้อมเอฟเฟกต์แอนิเมชัน
  const navigateWithBox = useTransitionNavigate();

  // ฟังก์ชันสร้างลายข้าวหลามตัดสีเขียว
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

      {/* 1. Header (ปรับเป็นระบบกล่องวิ่งให้เข้าแอนิเมชันสอดคล้องกันทุกหน้า) */}
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

            {/* เมนูเกี่ยวกับเรา */}
            <a 
              href="/about" 
              onClick={(e) => navigateWithBox(e, "/about")}
              className={`transition-colors relative group ${pathname === "/about" ? "text-[#1a4d2e] font-bold" : "text-[#4a3427] hover:text-[#1a4d2e]"}`}
            >
              เกี่ยวกับเรา
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#1a4d2e] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </a>
            
            {/* เมนูบริการและราคา (หน้าปัจจุบัน กดแล้วจะเล่นแอนิเมชันระเบิดจอเพื่อเคลียร์สถานะรีเฟรช) */}
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

      {/* 2. Hero Section - บริการและราคา */}
      <section className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto">
        <GreenDiamondPattern opacity={0.05} position="inset-y-0 left-0 w-1/3" mask="linear-gradient(to right, black, transparent)" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-light leading-[1.1] mb-8 text-[#1a4d2e]" style={{ fontFamily: "'Chonburi', cursive" }}>
              เมนูนวด <br />
              <span className="text-3xl md:text-4xl text-[#8b7355] block mt-4 font-sans tracking-wide">และอัตราค่าบริการ</span>
            </h2>
            <div className="w-20 h-[1px] bg-[#8b7355] mb-8"></div>
            <p className="text-gray-500 max-w-xl mb-10 text-lg leading-relaxed">
              เลือกสรรโปรแกรมการดูแลสุขภาพที่เหมาะกับความต้องการของร่างกายคุณ ไม่ว่าจะเป็นการบำบัดกล้ามเนื้อเชิงลึก แก้ไขอาการสะสมเหนื่อยล้าจากโรคออฟฟิศซินโดรม หรือเติมเต็มความสุนทรีย์ผ่อนคลายในวันสบายๆ ทุกคอร์สผ่านการออกแบบตามหลักกายวิภาคและศาสตร์นวดแผนไทยอย่างพิถีพิถัน ในราคามาตรฐานที่เข้าถึงได้
            </p>
          </div>
          
          <div className="flex-1 relative w-full h-[600px] flex justify-center items-center">
            <div className="relative w-[90%] h-full group">
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#8b7355]/20 z-0"></div>
              <div 
                className="w-full h-full bg-cover bg-center rounded-[2px] shadow-2xl relative z-10 transition-transform duration-1000 group-hover:scale-[1.02] overflow-hidden" 
                style={{ backgroundImage: "url('/IMG_1325.jpg')" }}
              >
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

      {/* 3. รายการบริการ (สไตล์ Grid ขาว-ครีมเรียบหรู ขยายเนื้อหาจัดเต็ม) */}
      <section className="bg-white py-32 px-6 relative overflow-hidden">
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 left-0 w-1/3" mask="radial-gradient(circle at left center, black, transparent)" />
        <GreenDiamondPattern opacity={0.03} position="inset-y-0 right-0 w-1/3" mask="radial-gradient(circle at right center, black, transparent)" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative mb-20">
            <h3 className="text-4xl font-bold text-[#1a4d2e] mb-4" style={{ fontFamily: "'Chonburi', cursive" }}>รายการบริการทั้งหมด</h3>
            <div className="absolute bottom-[-10px] left-0 w-full h-[1px] bg-[#8b7355]/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                id: "thai",
                title: "นวดไทยเพื่อสุขภาพ", 
                price: "200 - 300.-", 
                duration: "1 - 2 ชั่วโมง",
                cure: "สลายพังผืดที่ยึดตึงตามแนวเส้นประธานสิบ บรรเทาอาการปวดเมื่อยสะสมจากการทำงานและการนั่งผิดท่า",
                technique: "เทคนิคการกดจุดสัญญาณด้วยน้ำหนักมือที่แม่นยำ ผสานการยืดเหยียดร่างกายแบบไทยเดิมอย่างพิถีพิถัน",
                desc: "ผสมผสานเทคนิคการกดจุดสัญญาณตามแนวเส้นประธานสิบร่วมกับการยืดเหยียดกล้ามเนื้อแบบไทยเดิม บรรเทาอาการปวดตึงสะสม เพิ่มความยืดหยุ่นให้ข้อต่อ ช่วยให้ระบบไหลเวียนโลหิตทำงานได้มีประสิทธิภาพยิ่งขึ้น เหมาะสำหรับการฟื้นฟูร่างกายอย่างล้ำลึก" 
              },
              { 
                id: "foot",
                title: "นวดเท้าเพื่อสุขภาพและผ่อนคลาย", 
                price: "200 - 250.-", 
                duration: "1 ชั่วโมง",
                cure: "บรรเทาความเมื่อยล้าสะสมบริเวณฝ่าเท้าและน่อง ลดอาการนอนไม่หลับ คลายความเครียดในระบบประสาทส่วนปลาย",
                technique: "ครีมนวดสมุนไพรสูตรเย็นบำรุงผิวเท้า ผสานการใช้ไม้กดจุดชิงชันกระตุ้นจุดสะท้อนได้อย่างลึกซึ้ง",
                desc: "ศาสตร์การกดจุดสะท้อนบนฝ่าเท้า (Foot Reflexology) ที่เชื่อมโยงไปยังอวัยวะภายในต่างๆ ช่วยกระตุ้นระบบประสาทและปรับสมดุลพลังงานภายในร่างกายอย่างเป็นธรรมชาติ บรรเทาความเมื่อยล้าจากการยืนหรือเดินเป็นเวลานาน ให้ความรู้สึกเบาสบายทันทีหลังนวด" 
              },
              { 
                id: "aroma",
                title: "นวดอโรม่า / น้ำมันอุ่น", 
                price: "400 - 500.-", 
                duration: "1 - 2 ชั่วโมง",
                cure: "คลายความตึงเครียดของระบบประสาท ลดความตึงพังผืดกล้ามเนื้อชั้นตื้นอย่างอ่อนโยน เหมาะสำหรับผู้ที่อ่อนล้าขั้นสุด",
                technique: "น้ำมันหอมระเหยบริสุทธิ์เกรดบำบัดอุ่นร้อน ผสานเทคนิคการลูบสโตรกที่ต่อเนื่องและนุ่มนวลชวนเคลิบเคลิ้ม",
                desc: "ศาสตร์แห่งการปรนนิบัติผิวและจิตใจขั้นสูง ใช้เทคนิคการลูบสโตรกที่นุ่มนวลผสานกับน้ำมันหอมระเหยบริสุทธิ์สูตรเฉพาะ ช่วยคลายความเครียดสะสมในระบบประสาท ลดความตึงพังผืดกล้ามเนื้อชั้นตื้น พร้อมบำรุงผิวพรรณให้นุ่มนวลชุ่มชื้น ชวนให้คุณเคลิบเคลิ้มหลับสบาย" 
              },
              { 
                id: "herbal",
                title: "นวดประคบสมุนไพรสด", 
                price: "350 - 450.-", 
                duration: "1.5 - 2 ชั่วโมง",
                cure: "ลดการอักเสบกะทันหันของกล้ามเนื้อ บรรเทาอาการเคล็ดขัดยอก และลดอาการบวมตึงอักเสบตามข้อต่อต่างๆ",
                technique: "ลูกประคบที่อัดแน่นด้วยสมุนไพรสด (ไพล, ขมิ้น, ตะไคร้) นึ่งเตาดินเผาจนได้ความร้อนและตัวยาเข้มข้น",
                desc: "ยกระดับการนวดไทยด้วยความร้อนและน้ำมันสกัดจากลูกประคบสมุนไพรสดสูตรโบราณ (ไพล, ขมิ้น, ตะไคร้, ผิวมะกรูด) ความร้อนจะช่วยเปิดรูขุมขนและขยายเส้นเลือด เพื่อให้ตัวยาสมุนไพรซึมเข้าสู่ชั้นกล้ามเนื้อ บรรเทาอาการเคล็ดขัดยอก ลดการอักเสบ และบวมตึงได้อย่างดีเยื่ยม" 
              },
              { 
                id: "scrub",
                title: "นวดขัดผิวกาย / สครับออร์แกนิก", 
                price: "500 - 600.-", 
                duration: "1 ชั่วโมง",
                cure: "ขจัดเซลล์ผิวเก่าที่เสื่อมสภาพ หมองคล้ำ และลดสิ่งสกปรกตกค้างอุดตันตามรูขุมขนทั่วร่างกายอย่างหมดจด",
                technique: "เนื้อสครับธรรมชาติเม็ดละเอียดไม่บาดผิว ผสานครีมน้ำนมบำรุงเข้มข้นสูตรเฉพาะของเรือนพัชรี",
                desc: "ทรีตเมนต์บำบัดผิวด้วยเนื้อสครับเนียนละเอียดสกัดจากธรรมชาติ ช่วยผลัดเซลล์ผิวเก่าที่เสื่อมสภาพอย่างอ่อนโยน เผยผิวใหม่ที่ดูกระจ่างใส เรียบเนียน พร้อมเติมโปรตีนและวิตามินบำรุงลึกสู่ชั้นผิวตามด้วยการลูบไล้ครีมบำรุงเข้มข้น ให้ผิวพรรณเปล่งปลั่งมีออร่า" 
              },
              { 
                id: "office",
                title: "นวดเฉพาะจุด (คอ บ่า ไหล่ และหลัง)", 
                price: "200 - 300.-", 
                duration: "1 - 2 ชั่วโมง",
                cure: "สลายปมกล้ามเนื้อหดเกร็ง (Trigger Points) สาเหตุหลักของ Office Syndrome, อาการปวดหัวไมเกรน และบ่าตึงร้าว",
                technique: "ศาสตร์การนวดแก้อาการ (Therapeutic Massage) เน้นน้ำหนักนิ่งลึกตรงจุดเจ็บปวดเพื่อคลายปมกล้ามเนื้ออย่างตรงเป้า",
                desc: "คอร์สบำบัดเร่งด่วนที่เน้นจัดการปมกล้ามเนื้อตึง (Trigger Points) บริเวณ คอ บ่า ไหล่ และสะบักหลัง ซึ่งเป็นสาเหตุหลักของอาการ Office Syndrome, ปวดหัวไมเกรน และตาพร่ามัว เหมาะสำหรับผู้ที่มีเวลาน้อยแต่ต้องการเน้นการแก้ไขปัญหาอย่างตรงจุดและเฉียบขาด" 
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#fafaf5] p-10 border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl min-h-[340px] flex flex-col justify-between group/card rounded-[4px]">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-[#1a4d2e] leading-tight group-hover/card:text-[#b89b5e] transition-colors">{service.title}</h4>
                    <span className="text-[#b89b5e] font-bold text-lg whitespace-nowrap ml-4">{service.price}</span>
                  </div>
                  <div className="text-xs text-[#8b7355] font-bold mb-3">🕒 เวลาบริการ: {service.duration}</div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>

                <div>
                  {/* ปุ่มกดเปิด-ปิด เมนูของใครของมัน */}
                  <div 
                    onClick={() => setOpenMenu(openMenu === service.id ? null : service.id)}
                    className="inline-flex items-center gap-2 text-[#1a4d2e] text-xs font-bold uppercase tracking-widest cursor-pointer group/btn w-fit mb-2"
                  >
                    <span className="transition-colors group-hover/btn:text-[#b89b5e]">
                      {openMenu === service.id ? "ปิดรายละเอียด ↑" : "จองคอร์สนี้"}
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${openMenu === service.id ? 'rotate-180 text-[#b89b5e]' : 'group-hover/btn:translate-x-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* โซนกางข้อมูลเฉพาะของคอร์สนั้นๆ */}
                  {openMenu === service.id && (
                    <div className="mt-4 p-4 bg-white rounded border border-gray-100 text-left text-xs space-y-2 text-gray-700 shadow-inner">
                      <p><strong>🩹 แก้อะไร:</strong> {service.cure}</p>
                      <p><strong>🌿 การบำบัด:</strong> {service.technique}</p>
                      <a
                        href="https://line.me/ti/p/~@LINE_ID" // เปลี่ยน ID LINE ของพี่ตรงนี้ได้เลยครับ
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-center bg-[#1a4d2e] text-white py-2 rounded font-bold hover:bg-[#8b7355] transition-colors"
                      >
                        ยืนยันการจองผ่าน LINE
                      </a>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* ส่วนติดต่อสอบถามท้ายหน้า */}
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
              <p className="text-[#d4bd94] text-lg font-medium mb-8" style={{ fontFamily: "'Sriracha', cursive" }}>ติดต่อสอบถาม & จองคิวล่วงหน้า</p>

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