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
import { SidebarMatch } from "../Sidebar/SidebarMatch";
import { Match } from "@/types/match";
import { fakeTeam1 } from "@/fakeData/team";
import getCroppedImg from "@/utils/image";

function convertHex(hexCode: string, opacity = 1) {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const r = parseInt(hex.substring(0, 2), 16),
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
  const [inviteOnly, setInviteOnly] = useState(true);
  const [slug, setSlug] = useState("");
  const [file, setFile] = useState<File | null>();
  const [fileURL, setFileURL] = useState("");
  const [borderColor, setBorderColor] = useState<RGBColor>(
    convertHex(colors.primary)
  );
  const [suggestedColors, setSuggestedColors] = useState<string[]>([
    colors.primary,
  ]);
  const [useBorder, setUseBorder] = useState(false);
  const [borderThickness, setBorderThickness] = useState(2);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);
  const [croppedImage, setCroppedImage] = useState("");

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  useEffect(() => {
    const getCroppedImage = async () => {
      try {
        if (croppedAreaPixels) {
          const croppedImage: string = await getCroppedImg(
            fileURL,
            croppedAreaPixels,
            0
          );
          setCroppedImage(croppedImage);
        }
      } catch (e) {
        console.error(e);
      }
    };

    if (file) getCroppedImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crop]);

  const sampleMatch: Match = {
    id: 0,
    winner: 0,
    scores: [2, 1],
    teams: [
      {
        name,
        slug,
        logoURL: croppedImage,
        border: useBorder
          ? {
              color: borderColor,
              thickness: 2,
            }
          : undefined,
      },
      fakeTeam1,
    ],
    gameLogo: "/games/cs.svg",
  };

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
    } else {
      setFileURL("");
      setCroppedImage("");
      setUseBorder(false);
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Card>
          <Input
            value={name}
            setValue={setName}
            label={lang.teams.label_name}
          />
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
              <div className="relative h-32 w-full">
                <ImageCropper
                  borderThickness={borderThickness}
                  useBorder={useBorder}
                  borderColor={borderColor}
                  crop={crop}
                  setCrop={setCrop}
                  zoom={zoom}
                  setZoom={setZoom}
                  image={fileURL}
                  onCropComplete={onCropComplete}
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
                <Input
                  label={lang.teams.logo_zoom}
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
            onChange={() => setInviteOnly(!inviteOnly)}
            checked={inviteOnly}
            label={lang.teams.invite_only}
          />
          <Button size="w-full" btnStyle="primary">
            <RiCheckLine size={16} />
            {lang.generic.create}
          </Button>
        </Card>
        {fileURL && (
          <Card>
            <div className="flex flex-col gap-2">
              <p className="font-medium">{lang.teams.border_color}</p>
              <Input
                type="checkbox"
                checked={useBorder}
                onChange={() => setUseBorder(!useBorder)}
                label={lang.teams.use_border}
              />
              {useBorder && (
                <div className="flex flex-col gap-4">
                  <SketchPicker
                    color={borderColor}
                    onChange={(color) => setBorderColor(color.rgb)}
                    presetColors={suggestedColors}
                    width="256"
                    className="text-black"
                  />

                  <Input
                    label={lang.teams.border_thickness}
                    type="range"
                    value={borderThickness}
                    min={1}
                    max={6}
                    step={1}
                    onChange={(e) => {
                      setBorderThickness(parseInt(e.target.value));
                    }}
                  />
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
      <Card size="w-full">
        <div className="flex flex-col gap-1">
          <p className="font-medium">{lang.teams.preview}</p>
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm text-gray-400">
              {lang.sidebar.matches}
            </p>
            <div className="w-64">
              <SidebarMatch clickAble={false} matchData={sampleMatch} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
