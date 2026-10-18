
"use client";

import { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";

interface ModalPDFProps {
  buttonLabel: string;
  pdfUrl: string;
  title: string;
}

export default function ModalPDF({
  buttonLabel,
  pdfUrl,
  title,
}: ModalPDFProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-[#c9a24a]/40 bg-[#c9a24a]/10 px-4 py-2 text-sm font-medium text-[#d8b75d] transition hover:bg-[#c9a24a]/20"
      >
        <FaEye />
        {buttonLabel}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h3 className="font-medium text-white">{title}</h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close document"
                className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            <div className="min-h-0 flex-1">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title={title}
                className="h-full w-full border-0 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
