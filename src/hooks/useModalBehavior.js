import { useEffect, useRef } from "react";

// Shared behavior for modal dialogs (Menu filter, Menu item, Location map):
// - Escape closes the dialog
// - background scroll is locked while open
// - focus moves into the dialog on open and returns to the trigger on close
//
// Attach the returned ref to the dialog panel and give it tabIndex={-1}.
export default function useModalBehavior(isOpen, onClose) {
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!isOpen) return;

    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [isOpen]);

  return panelRef;
}
