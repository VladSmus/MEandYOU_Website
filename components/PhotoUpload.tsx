"use client";

import { uploadProfilePhoto } from "@/lib/actions/profile";
import { useRef, useState} from "react";


export default function PhotoUpload({
  onPhotoUploaded,
}: {
  onPhotoUploaded: (url: string) => void;
}) {
    const [uploading, setUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function handelFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?[0];
        if (!file) return;
        
        if (!file.type.stsartWith("image/")) {
            setError("Please select an image file");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5 MB");
        return;
    }

    setUploading(true);
    setError(null);


    try {
        const result = await uploadProfilePhoto(file);
        if (result.success && result.url) {
            onPhotoUploaded(result.url);
            setError(null);
        } else {
            setError(result.error ?? "Failed to upload photo.");
        }

    } catch (error) {
        setError("Failed to change photo.");
    } finally {
        setUploading(false);
    }
    }

    


  return (
    <div className="absolute bottom-0 right-0">
      <input type="file" accept="image/*" className="hidden" />
    </div>
  );
}
