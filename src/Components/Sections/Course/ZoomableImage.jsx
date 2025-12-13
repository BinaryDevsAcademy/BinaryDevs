import { useState } from "react";

function ZoomableImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto cursor-zoom-in rounded-lg shadow-md cursor-target"
        onClick={() => setOpen(true)}
      />

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl cursor-zoom-out cursor-target"
          />
        </div>
      )}
    </>
  );
}

export default ZoomableImage