"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Download(file: any) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Confirmation_for_Booking_ID_#_1076270733.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Confirmation_for_Booking_ID_#_1076270733.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center>
        <Button onClick={onButtonClick}></Button>
      </center>
    </>
  );
}
