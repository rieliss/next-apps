"use client";
import Nav from "@/components/Nav";
import PlacePage from "@/components/place";
import { useRouter } from "next/navigation";
import React from "react";

const LocationPage = () => {
  const router = useRouter();
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        {/* <div className="flex items-center">
          <ComboboxDemo />
        </div> */}
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <PlacePage
            Name="7 Wonders Hostel @ Upper Dickson"
            Link="https://maps.app.goo.gl/PRFVf3C8RYvkFtAt6"
            Img="/hostel.jpg"
            Description="ที่อยู่: 12 A Upper Dickson Rd, สิงคโปร์ 207474 โทรศัพท์: +65 6291 0697"
          />
          <PlacePage
            Name="Jewel Changi Airport"
            Link="https://maps.app.goo.gl/hiu2x7cY4AWouT4d6"
            Img="/jewel.png"
            Description="a nature-themed entertainment and retail complex surrounded by."
          />
          <PlacePage
            Name="Sultan Mosque"
            Link="https://maps.app.goo.gl/CpVR6C8JVmcpheN26"
            Img="/sultan.jpg"
            Description="Masjid Sultan (Sultan Mosque)."
          />
          <PlacePage
            Name="Haji Lane"
            Link="https://maps.app.goo.gl/KqEgUn7xrqXDt6VL8"
            Img="/Haji-Lane.jpg"
            Description="อยู่ในย่าน Kampong Glam ของสิงคโปร์ โดยอยู่ไม่ไกลจาก Bugis MRT"
          />
          <PlacePage
            Name="Old Hill Street Police"
            Link="https://maps.app.goo.gl/5nW5bSY4BkNCypZ67"
            Img="/oldhill.jpg"
            Description="อาคารที่สร้างขึ้นในปี 1934 หลังนี้มีหน้าต่างบานเกล็ดสีรุ้งกว่า 900 บาน ในอดีตเป็นสถานีตำรวจ"
          />
          <PlacePage
            Name="Merlion Park"
            Link="https://maps.app.goo.gl/yCYSiLYRJy2JiExF6"
            Img="/Merlion-Park.jpg"
            Description="สวนสาธารณะซึ่งเป็นที่ตั้งของรูปปั้นสิงโตทะเลหนัก 70 ตันและเป็นหนึ่งในสถานที่ท่องเที่ยวอันโด่งดังที่สุดของเมือง"
          />
          <PlacePage
            Name="Buddha Tooth Relic Temple"
            Link="https://maps.app.goo.gl/Jbrf41617XyDsWFS6"
            Img="/buddha-tooth-relic-temple_TIH.jpg"
            Description="วัดแบบราชวงศ์ถังเป็นที่ประดิษฐานของพระธาตุ มีห้องที่ตกแต่งอย่างวิจิตร และสวนอันเงียบสงบบนดาดฟ้า"
          />
          <PlacePage
            Name="Tian Tian Hainanese Chicken Rice"
            Link="https://maps.app.goo.gl/ScP6LUZYK1SFVrweA"
            Img="/tian.jpg"
            Description="แผงขายอาหารคึกคักที่มีข้าวมันไก่เป็นเมนูขึ้นชื่อ ตั้งอยู่ในศูนย์อาหาร Maxwell Road Food Centre"
          />
          <PlacePage
            Name="Marina Barrage"
            Link="https://maps.app.goo.gl/RHafeZ6y6iKWujFf6"
            Img="/Marina-Barrage-Picnic-768x512.jpg"
            Description="อ่างเก็บน้ำและสถานที่พายเรือคายัคมีแกลเลอรีที่จัดนิทรรศการแบบอินเทอร์แอกทีฟเกี่ยวกับความยั่งยืน"
          />
          <PlacePage
            Name="Tong Ah Eating House"
            Link="https://maps.app.goo.gl/97bQQzsYG2Jfd2bGA"
            Img="/tong-ah-eating-house-storefront.jpg"
            Description="80-Year-Old Coffee Shop With Kaya French Toast At Keong Saik."
          />
          <PlacePage
            Name="Potato Head"
            Link="https://maps.app.goo.gl/Ef943EhfX9bDpNbx8"
            Img="/potato-head-singapore-building-exterior-2020+1.jpg"
            Description="36 Keong Saik Road, Chinatown
            Singapore 089143."
          />
          <PlacePage
            Name="Vivo City"
            Link="https://maps.app.goo.gl/uReNhya4oTgKGx3C9"
            Img="/DPA_VivoCity_Carousel4_20180703120523.jpg"
            Description="Enjoy complimentary WiFi in-mall as you shop at VivoCity."
          />
          <PlacePage
            Name="Universal Studios Singapore"
            Link="https://maps.app.goo.gl/8sFXimWMXu76TWhB6"
            Img="/univer.jpg"
            Description="Universal Studios Singapore is Southeast Asia's first and only Universal Studios theme park."
          />
          <PlacePage
            Name="Sentosa"
            Link="https://maps.app.goo.gl/pqWvsLQtW1SJzzNW6"
            Img="/sentosa-island_carousel1_1670x940.jpg"
            Description=" a sunny island in Singapore."
          />
          <PlacePage
            Name="Henderson Waves bridge"
            Link="https://maps.app.goo.gl/d2dQNCmGo5bhqDMW6"
            Img="/20180428-074507-largejpg.jpg"
            Description="the highest pedestrian bridge in Singapore."
          />
          <PlacePage
            Name="Sri Veeramakaliamman Temple"
            Link="https://maps.app.goo.gl/RWZZhnBXgnbiD7C36"
            Img="/98-veeramakaliamman-temple-3.jpg"
            Description="วัดฮินดูที่เก่าแก่ที่สุดแห่งหนึ่งของสิงคโปร์"
          />

          <PlacePage
            Name="Swee Choon"
            Link="https://maps.app.goo.gl/GEPR8R7iKT33sBDQ8"
            Img="/sweechoonsg32.jpg"
            Description="a famous Dim Sum restaurant in Singapore opened since 1962, offering the best handmade dim sum with a wide variety."
          />
          <PlacePage
            Name="Library@Orchard"
            Link="https://maps.app.goo.gl/mu1biRBVZN7xgVos9"
            Img="/library.jpg"
            Description="ห้องสมุดสาธารณะภายใต้คณะกรรมการหอสมุดแห่งชาติสิงคโปร์"
          />
          <PlacePage
            Name="National Museum of Singapore"
            Link="https://maps.app.goo.gl/Hfd8fofxpT884REAA"
            Img="/national-museum.jpg"
            Description="the nation's oldest museum that seeks to inspire with stories of Singapore and the world."
          />
          <PlacePage
            Name="Vanguard Building"
            Link="https://maps.app.goo.gl/YDDfe6qYoyoKBEmTA"
            Img="/SMU_Labs_in_Vanguard_Building,_Singapore_-_20141221.jpg"
            Description="Design is a progressive bespoke Building Design Studio based on the Gold Coast."
          />
          <PlacePage
            Name="National Gallery Singapore"
            Link="https://maps.app.goo.gl/R1i6qf2ZVtZYL95Y9"
            Img="/d-a-design-and-architecture-national-gallery-singapore-ngs-8.jpg"
            Description="houses the world's largest public collection of Singaporean and Southeast Asian art, with nearly 10000 pieces in total."
          />
          <PlacePage
            Name="Cavenagh Bridge"
            Link="https://maps.app.goo.gl/LUXNLwuHzdRrnSrw6"
            Img="/02-cavenagh-bridge-present-day.jpg"
            Description="the only suspension bridge and one of the oldest bridges in Singapore"
          />
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
