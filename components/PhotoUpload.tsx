"use client";



export default function PhotoUpload({
  onPhotoUpload,
}: {
  onPhotoUpload: (url: string) => void;
}) {
  return (
    <div className="absolute bottom-0 right-0">
      <input type="file" accept="image/*" className="hidden" />
    </div>
  );
}
