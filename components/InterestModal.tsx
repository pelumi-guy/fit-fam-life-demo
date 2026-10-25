"use client";

import { useEffect, useRef } from "react";
import MascotIcon from "./MascotIcon";
import { buttonClass } from "./ui";

type InterestModalProps = {
  open: boolean;
  onClose: () => void;
};

/** Demo-only acknowledgement. Nothing is collected or stored. */
export default function InterestModal({ open, onClose }: InterestModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="interest-title"
      className="m-auto w-[calc(100%-2.5rem)] max-w-md rounded-[2rem] bg-cream p-0 text-ink shadow-lift"
    >
      <div className="flex flex-col items-center px-7 pt-9 pb-7 text-center sm:px-10">
        <MascotIcon className="size-20" />
        <h2 id="interest-title" className="mt-6 font-display text-2xl leading-tight font-extrabold tracking-tight text-balance">
          Thanks for your interest.
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink/75">Fitfam Life is preparing for its first pilot.</p>
        <p className="mt-4 text-xs text-ink/50">This is a pitch demo — no details are collected.</p>
        <button type="button" onClick={onClose} autoFocus className={buttonClass("dark", "mt-7 w-full")}>
          Back to the demo
        </button>
      </div>
    </dialog>
  );
}
