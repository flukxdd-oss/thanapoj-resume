import React from 'react';
import { journeyData } from '../data/journey';
import { 
  Trophy, 
  Briefcase, 
  Code, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award,
  Medal
} from 'lucide-react';

const Achievements = () => {
  const experiences = [
    {
      title: "Art Guild — Online Art Auction Platform",
      role: "Senior Capstone Project / Full-Stack Developer & Designer",
      project: "เว็บประมูลผลงานศิลปะออนไลน์ (artguilg.free.nf)",
      period: "2026 (Senior Project)",
      tag: "Final Project",
      tagStyle: "bg-gradient-to-r from-[#FFDD63] to-[#FFA242] text-[#181A20]",
      border: "border-[#FFDD63] hover:border-[#FFA242]",
      iconBg: "bg-gradient-to-br from-[#FF202B] to-[#FFA242] text-white",
      icon: <Trophy size={22} />,
      points: [
        "ออกแบบและพัฒนาระบบเว็บประมูลผลงานศิลปะออนไลน์ Art Guild จากแนวคิดสู่ระบบที่ใช้งานได้จริงบน Web Hosting",
        "พัฒนาระบบจัดการประมูล การนับเวลาถอยหลัง และการบันทึกประวัติการเสนอราคาด้วย PHP และ MySQL",
        "ออกแบบอินเทอร์เฟซผู้ใช้ที่สะดวกต่อทั้งศิลปินในการลงผลงานและผู้สนใจในการเข้าร่วมประมูล"
      ]
    },
    {
      title: "Digital Illustration & Character Concept Art",
      role: "Independent Digital Artist & Creator",
      project: "Cyberpunk, Japanese Samurai & Tactical Ink Artworks",
      period: "Art Portfolio",
      tag: "Creative Works",
      tagStyle: "bg-[#FF202B]/15 text-[#FF202B] border border-[#FF202B]/30",
      border: "border-[#FF202B] hover:border-[#FFA242]",
      iconBg: "bg-[#FF202B] text-white",
      icon: <Sparkles size={22} />,
      points: [
        "สร้างสรรค์ผลงานภาพวาดลายเส้นหมึกดำดิจิทัล (Ink Hatching) ที่มีความละเอียดสูงและเอกลักษณ์เฉพาะตัว",
        "ผสมผสานธีม Cyberpunk ล้ำยุคเข้ากับจิตวิญญาณซามูไรญี่ปุ่น (Ronin Samurai) และการตัดสีสาดละอองเลือด (Blood Accent)",
        "นำทักษะศิลปะมาต่อยอดสู่การออกแบบ User Interface และโครงงานระบบเว็บไซต์ให้มีจุดเด่นทางสายตา"
      ]
    },
    {
      title: "E-Commerce & Application UI/UX Design",
      role: "UI/UX Designer & Prototyper",
      project: "E-Commerce & Digital Platform Prototypes",
      period: "Figma Projects",
      tag: "UI/UX Design",
      tagStyle: "bg-[#A0E8E8]/40 text-[#181A20] border border-[#A0E8E8]",
      border: "border-[#A0E8E8] hover:border-[#FFA242]",
      iconBg: "bg-[#A0E8E8] text-[#181A20]",
      icon: <Code size={22} />,
      points: [
        "ออกแบบ Wireframes, Mockups และ Interactive Prototypes สำหรับระบบร้านค้าออนไลน์และแอปพลิเคชันบน Figma",
        "วางโครงสร้าง User Flow ให้ตอบโจทย์พฤติกรรมผู้บริโภค เน้นความสะดวกในการค้นหาและการชำระเงิน",
        "จำลองและทดสอบการโต้ตอบ (Micro-interactions) ก่อนนำไปพัฒนาเป็นหน้าเว็บจริง"
      ]
    }
  ];

  const yearColors = [
    { badge: "bg-[#FF202B]/10 text-[#FF202B] border-[#FF202B]/20", dot: "bg-[#FF202B]" },
    { badge: "bg-[#FFA242]/15 text-[#FFA242] border-[#FFA242]/30", dot: "bg-[#FFA242]" },
    { badge: "bg-[#A0E8E8]/30 text-[#181A20] border-[#A0E8E8]", dot: "bg-[#A0E8E8]" },
    { badge: "bg-[#87FEBC]/30 text-[#181A20] border-[#87FEBC]", dot: "bg-[#87FEBC]" },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FFA242]/20 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF202B]/10 text-[#FF202B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Medal size={13} />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            Experience & Milestones
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          ผลงานโปรเจกต์สำคัญ กิจกรรมการพัฒนาซอฟต์แวร์ และเส้นทางการเรียนรู้ด้านวิทยาการคอมพิวเตอร์และศิลปะ
        </p>
      </div>

      {/* Main Experience Cards */}
      <div className="space-y-6 mb-20">
        {experiences.map((item, index) => (
          <div 
            key={index}
            className={`bg-white rounded-3xl border-2 border-[#E8E6DC] ${item.border} p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl ${item.iconBg} shadow-sm shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full shadow-sm ${item.tagStyle}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#5E6272] flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-0.5 rounded-md border border-[#E8E6DC]">
                      <Calendar size={12} className="text-[#FFA242]" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#181A20]">
                    {item.title}
                  </h3>
                  <div className="text-sm font-bold text-[#FFA242] mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-[#5E6272] mb-4 bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E6DC] inline-block font-semibold">
              Project Focus: <span className="text-[#181A20] font-bold">{item.project}</span>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-[#E8E6DC]">
              {item.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#181A20] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#87FEBC] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Timeline / Education History */}
      <div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFA242]/10 text-[#FFA242] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Education Timeline</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#181A20]">
            ประวัติการศึกษา (Education Journey)
          </h3>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {journeyData.map((phase, idx) => {
            const colors = yearColors[idx % yearColors.length];

            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border-2 border-[#E8E6DC] hover:border-[#FFA242] p-6 shadow-sm hover:shadow-card transition-all flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.dot}`}></div>

                <div>
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className={`text-xs font-mono font-bold px-3 py-0.5 rounded-full border ${colors.badge}`}>
                      {phase.year}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#5E6272]">ระดับ {3 - idx}</span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-[#181A20] mt-1">
                    {phase.title}
                  </h4>
                  {phase.sub && (
                    <p className="text-xs text-[#FFA242] font-semibold mb-3">
                      {phase.sub}
                    </p>
                  )}

                  <ul className="space-y-2 text-xs text-[#5E6272] font-medium pt-2 border-t border-[#E8E6DC]">
                    {phase.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`w-2 h-2 rounded-full ${colors.dot} mt-1 shrink-0`}></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Achievements;
