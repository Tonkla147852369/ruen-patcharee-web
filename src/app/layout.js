"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// สร้าง Context เพื่อส่งฟังก์ชันให้ทุกหน้ากดแล้วกล่องพุ่ง
const TransitionContext = createContext();
export const useTransitionNavigate = () => useContext(TransitionContext);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // สถานะแอนิเมชัน: "idle" | "fly" | "center" | "expand" | "fade"
  const [stage, setStage] = useState("idle");

  useEffect(() => {
    // พอเปลี่ยนหน้าเว็บเบื้องหลังเสร็จ (pathname เปลี่ยน) สั่งให้กล่องดำเฟดจางออกทันที
    if (stage === "expand") {
      setStage("fade");
      const timer = setTimeout(() => {
        setStage("idle");
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const navigateWithBox = (e, url) => {
    e.preventDefault();

    if (url === pathname) {
      setStage("fly");
      setTimeout(() => setStage("center"), 50);
      setTimeout(() => setStage("expand"), 450);
      setTimeout(() => { window.location.reload(); }, 700);
      return;
    }

    // 1. สั่งรันแอนิเมชันเริ่มนับหนึ่งทันที
    setStage("fly");

    // 2. ⚡ จากเดิมต้องรอ 350ms ปรับเหลือแค่ 20ms (กดปั๊บสั่งขยับให้เริ่มค่อยๆ ขยายตัวทันที!)
    setTimeout(() => {
      setStage("center");
    }, 20);

    // 3. ปล่อยให้มันค่อยๆ ยืดขยายตัวกางออกไปจนเต็มจอสมบูรณ์ในเวลา 0.45 วินาที
    setTimeout(() => {
      setStage("expand");
    }, 450);

    // 4. มืดสนิทแล้ว ย้ายหน้าเว็บจริงทันที
    setTimeout(() => {
      router.push(url);
    }, 550);
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <TransitionContext.Provider value={navigateWithBox}>
          {children}

          {/* ========================================================
              กล่องแอนิเมชันขอบโค้งมน ค่อยๆ ระเบิดขนาดจากตรงกลางจอทันทีที่กดปุ่ม
             ======================================================== */}
          {stage !== "idle" && (
            <div
              className="fixed z-[9999] bg-[#1a1816] pointer-events-none shadow-2xl"
              style={{
                // ล็อกขอบโค้งมนตามสั่ง (ตอนกางเต็มจอสุดๆ ถึงจะยอมกลายเป็นเหลี่ยม 0px เพื่อความเนียน)
                borderRadius: (stage === "expand" || stage === "fade") ? "0px" : "32px",
                opacity: stage === "fade" ? 0 : 1,
                
                width: "100vw",
                height: "100vh",
                top: "50%",
                left: "50%",
                
                // ตอนเริ่มกด (fly) ย่อตัวไว้ตรงกลาง พอมันเปลี่ยนสเตจถัดไปทันทีใน 20ms มันจะค่อยๆ บานเต็มจอจากตรงกลางเป๊ะๆ
                transform: stage === "fly" 
                  ? "translate(-50%, -50%) scale(0)" 
                  : "translate(-50%, -50%) scale(1)",
                
                transformOrigin: "center center",
                
                // คุมเวลาความสมูทในการสไลด์กางตัวออกไป
                transition: stage === "fade"
                  ? "opacity 0.2s ease-out"
                  : "transform 0.45s cubic-bezier(0.25, 0.6, 0.75, 1), border-radius 0.35s ease-out"
              }}
            />
          )}

        </TransitionContext.Provider>
      </body>
    </html>
  );
}