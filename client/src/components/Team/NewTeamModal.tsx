"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { lang } from "@/lang";
import { Input } from "../Input/Input";
import ImageCropper from "./ImageCropper";
import {
  RiCheckLine,
  RiCloseFill,
  RiCloseLine,
  RiCrossLine,
} from "@remixicon/react";

export function NewTeamModal() {
  const [name, setName] = useState("");
  const [inviteOnly, setInviteOnly] = useState(false);
  const [slug, setSlug] = useState("");
  const [file, setFile] = useState<File | null>();
  const [fileURL, setFileURL] = useState("");
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (file) setFileURL(URL.createObjectURL(file));
    else setFileURL("");
  }, [file]);

  return (
    <div className="flex flex-col gap-4 bg-base-3 rounded-lg border-2 border-base-4 p-4">
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
        <div className="flex flex-col w-64">
          <p className="font-medium text-sm">{lang.teams.label_logo}</p>
          <div className="relative h-64 w-64">
            <ImageCropper
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
        value={inviteOnly}
        setValue={setInviteOnly}
        label={lang.teams.invite_only}
      />
      <Button size="w-full" btnStyle="primary">
        <RiCheckLine size={16} />
        {lang.generic.create}
      </Button>
    </div>
  );
}
