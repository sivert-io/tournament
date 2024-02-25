import React, { useState } from "react";
import Cropper, { Point } from "react-easy-crop";
import "./style.css";

export default function ImageCropper({
  image,
  crop,
  zoom,
  setCrop,
  setZoom,
}: {
  image: string;
  crop: any;
  zoom: any;
  setCrop: (location: Point) => any;
  setZoom: (e: number) => any;
}) {
  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    console.log(croppedArea, croppedAreaPixels);
  };
  return (
    <Cropper
      cropShape="round"
      showGrid={false}
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
  );
}
