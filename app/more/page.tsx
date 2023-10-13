"use client";
import Nav from "@/components/Nav";
import { CheckMorePage } from "@/components/check-more";
import { useRouter } from "next/navigation";
import React from "react";

const MorePage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-8 flex flex-col items-center text-center">
        <div className="grid text-left gap-8 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left p-4">
          <CheckMorePage
            Topic="Hostel"
            Description="พักที่ 7 Wonders Hostel @ Upper Dickson อยู่แถว little india"
            Link=""
          />
          <CheckMorePage
            Topic="Passport"
            Description="Passport ต้องมีอายุมากกว่า 6 เดือน"
            Link=""
          />
          <CheckMorePage
            Topic="Money"
            Description="แลกเงินสด 6,000 เผื่อไว้"
            Link=""
          />
          <CheckMorePage
            Topic="Document"
            Description="หลักฐานการฉีดวัคซีน (ขอ Vaccination Certificate ที่หมอพร้อม)"
            Link=""
          />
          <CheckMorePage
            Topic="Registration"
            Description="3 วันก่อนเดินทาง กรอกเอกสารที่ SG Arrival Card (ตม.ออนไลน์ มีภาษาไทย)"
            Link="https://bit.ly/3UtnvSK"
          />
          <CheckMorePage
            Topic="Registration"
            Description="โหลดแอป TraceTogether และลงทะเบียน"
            Link=""
          />
          <CheckMorePage
            Topic="Networks"
            Description="Sim card เราซื้อจากไทยไปเลย จะได้ไม่ต้องไปหาที่สนามบินที่โน่น สั่งซื้อล่วงหน้าแล้วรับซิมที่สนามบินไทย"
            Link="https://bit.ly/3f4ERoL"
          />
          <CheckMorePage
            Topic="Tickets"
            Description="ตั๋วเข้าสถานที่ต่างๆ ซื้อล่วงหน้าไว้แล้ว *Universal ไว้ไปดูบัตรหน้างานเผื่อ accident"
            Link="https://bit.ly/3BU5p4J"
          />
          <CheckMorePage
            Topic="Reminds"
            Description="พกกระบอกน้ำส่วนตัวไป กดน้ำดื่มจากโรงแรม น้ำดื่มค่อนข้างแพง สำหรับคนไทย"
            Link=""
          />
          <CheckMorePage
            Topic="Transportation Cards"
            Description="ซื้อตั๋วเดินทางแบบ Tourist pass ได้ที่สนามบิน Changi Terminal 2"
            Link=""
          />
        </div>
      </section>
    </main>
  );
};

export default MorePage;
