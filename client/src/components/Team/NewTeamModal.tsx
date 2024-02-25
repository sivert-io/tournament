"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { lang } from "@/lang";
import { Input } from "../Input/Input";
import ImageCropper from "./ImageCropper";
import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import { colors } from "@/utils/colors";
import Card from "../Card/Card";
import { RGBColor, SketchPicker } from "react-color";
import { extractColors } from "extract-colors";

function convertHex(hexCode: string, opacity = 1) {
  var hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  const rgba: RGBColor = {
    r,
    g,
    b,
    a: opacity,
  };

  return rgba;
}

export function NewTeamModal() {
  const [name, setName] = useState("");
  const [inviteOnly, setInviteOnly] = useState(false);
  const [slug, setSlug] = useState("");
  const [file, setFile] = useState<File | null>();
  const [fileURL, setFileURL] = useState("");
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [borderColor, setBorderColor] = useState<RGBColor>(
    convertHex(colors.primary)
  );
  const [suggestedColors, setSuggestedColors] = useState<string[]>([
    colors.primary,
  ]);
  const [useBorder, setUseBorder] = useState(false);

  useEffect(() => {
    if (file) {
      setFileURL(URL.createObjectURL(file));
      extractColors(URL.createObjectURL(file))
        .then((foundColors) => {
          setBorderColor(convertHex(foundColors[0].hex));
          setSuggestedColors([
            colors.primary,
            ...foundColors.map((color) => color.hex),
          ]);
        })
        .catch(console.error);
    } else setFileURL("");
  }, [file]);

  return (
    <>
      <Card>
        <Input value={name} setValue={setName} label={lang.teams.label_name} />
        <Input
          maxLength={4}
          value={slug}
          setValue={(e) => {
            setSlug(e.toUpperCase());
          }}
          label={lang.teams.label_slug}
        />
        {file ? (
          <div className="flex flex-col w-64 gap-2">
            <p className="font-medium text-sm">{lang.teams.label_logo}</p>
            <div className="relative h-64 w-64">
              <ImageCropper
                useBorder={useBorder}
                borderColor={borderColor}
                crop={crop}
                setCrop={setCrop}
                zoom={zoom}
                setZoom={setZoom}
                image={fileURL}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button
                size="w-full"
                onClick={() => {
                  setFile(null);
                  setZoom(1);
                  setCrop({ x: 0, y: 0 });
                }}
              >
                <RiCloseLine size={16} />
                {lang.teams.label_remove_logo}
              </Button>
              <input
                type="range"
                value={zoom}
                min={1}
                max={2}
                step={0.05}
                onChange={(e) => {
                  setZoom(parseFloat(e.target.value));
                }}
              />
            </div>
          </div>
        ) : (
          <Input
            accept="image/png, image/jpeg"
            type="file"
            onChange={(e) => {
              setFile(e.target.files && e.target.files[0]);
            }}
            label={lang.teams.label_logo}
          />
        )}
        <Input
          type="checkbox"
          onClick={() => setInviteOnly(!inviteOnly)}
          value={inviteOnly}
          label={lang.teams.invite_only}
        />
        <Button size="w-full" btnStyle="primary">
          <RiCheckLine size={16} />
          {lang.generic.create}
        </Button>
      </Card>
      {fileURL && (
        <Card>
          <div className="flex flex-col gap-1">
            <p className="font-medium">{lang.teams.border_color}</p>
            <Input
              type="checkbox"
              value={useBorder}
              onClick={() => setUseBorder(!useBorder)}
              label={lang.teams.use_border}
            />
            {useBorder && (
              <SketchPicker
                color={borderColor}
                onChange={(color) => setBorderColor(color.rgb)}
                presetColors={suggestedColors}
                width="256"
                className="text-black"
              />
            )}
          </div>
        </Card>
      )}
    </>
  );
}
