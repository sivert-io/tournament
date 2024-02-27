import React from "react";
import { RGBColor } from "react-color";
import Cropper, { Point } from "react-easy-crop";

export default function ImageCropper({
  borderThickness,
  image,
  crop,
  zoom,
  setCrop,
  setZoom,
  borderColor,
  useBorder,
  onCropComplete,
}: {
  borderThickness: number;
  image: string;
  crop: any;
  zoom: any;
  setCrop: (location: Point) => any;
  setZoom: (e: number) => any;
  borderColor: RGBColor;
  useBorder: boolean;
  onCropComplete: (croppedArea: any, croppedAreaPixels: any) => any;
}) {
  return (
    <>
      <style key="cropStyle">{`.reactEasyCrop_Container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          user-select: none;
          touch-action: none;
          cursor: move;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .reactEasyCrop_Image,
        .reactEasyCrop_Video {
          will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
        }
        
        .reactEasyCrop_Contain {
          max-width: 100%;
          max-height: 100%;
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .reactEasyCrop_Cover_Horizontal {
          width: 100%;
          height: auto;
        }
        .reactEasyCrop_Cover_Vertical {
          width: auto;
          height: 100%;
        }
        
        .reactEasyCrop_CropArea {
          position: absolute;
          box-sizing: border-box;
          box-shadow: 0 0 0 9999em;
          overflow: hidden;
        }
        
.reactEasyCrop_CropAreaGrid:hover::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid:hover::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
        `}</style>
      <Cropper
        disableAutomaticStylesInjection
        classes={{
          cropAreaClassName: `text-base-3 rounded-full ${
            useBorder ? "border-2" : ""
          }`,
        }}
        style={{
          cropAreaStyle: {
            border: useBorder
              ? `${borderThickness}px solid rgba(${borderColor.r},${borderColor.g},${borderColor.b},${borderColor.a})`
              : undefined,
          },
        }}
        cropShape="round"
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </>
  );
}
