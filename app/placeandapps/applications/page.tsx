"use client";
import Nav from "@/components/Nav";
import AddApplication from "@/components/apps-add";
import React from "react";

const ApplicationPage = () => {
  return (
    <main className="p-4">
      <Nav />
      <section className="py-2 flex flex-col items-center text-center gap-8">
        {/* <div className="flex items-center">
          <ComboboxDemo />
        </div> */}
        <div className="grid text-center grid-cols-2 gap-8 lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <AddApplication
            Apps="TraceTogether"
            Link="https://apps.apple.com/th/app/tracetogether/id1498276074?l=th"
            Img="/tracetogether.png"
            Description="TraceTogether supports Singapore’s efforts to fight the spread of COVID-19 through community-driven contact tracing."
          />
          <AddApplication
            Apps="Universal Studios Singapore™"
            Link="https://apps.apple.com/sg/app/universal-studios-singapore/id1462742095"
            Img="/uss.png"
            Description="Your Essential Guide To Universal Studios Singapore
Check out the latest wait times, access the map of the park, and so much more. It’s free to download."
          />
          <AddApplication
            Apps="HelloRide-Enjoy your ride"
            Link="https://apps.apple.com/us/app/helloride-enjoy-your-ride/id1611538620"
            Img="/ride.png"
            Description="HelloRide is your ideal choice for a carbon-free journey."
          />
          <AddApplication
            Apps="Anywheel"
            Link="https://apps.apple.com/us/app/anywheel/id1453812982"
            Img="/Anywheel.png"
            Description="Anywheel is a micro-mobility sharing service that is easy to use."
          />
          <AddApplication
            Apps="Singapore Metro Map & Planner"
            Link="https://apps.apple.com/us/app/singapore-metro-map-planner/id535754423"
            Img="/SingaporePlanner.png"
            Description="Singapore Metro is the navigation app that makes travelling by Singapore MRT transit in Singapore simple."
          />
          <AddApplication
            Apps="LTA SG"
            Link="https://www.lta.gov.sg/content/ltagov/en/map/fare-calculator.html?fbclid=IwAR0lxZa7Iyi4hUobVjWwKGdMx1ejTPn9H3AgzDWRoNf95V4iaWRySnBtYdg"
            Img="/241119747_143802171261190_8626849927253392984_n.jpg"
            Description="The Land Transport Authority (LTA) spearheads land transport developments in Singapore. "
          />
        </div>
      </section>
    </main>
  );
};

export default ApplicationPage;
