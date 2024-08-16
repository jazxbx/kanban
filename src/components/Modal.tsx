import { createPortal } from "react-dom";
import { Card } from "./ui/card";

export default function Modal({ open, setOpen, children }) {
  if (!open) return null;
  return createPortal(
    <div
      onClick={() => setOpen(false)}
      className="w-full z-60 h-screen absolute bg-gray-100 dark:bg-gray-500 opacity-50 top-0 left-0 cursor-pointer"
    >
      <div className="flex items-center justify-center h-full">
        <Card onClick={(e) => e.stopPropagation()} className="p-5 cursor-auto">
          {children}
        </Card>
      </div>
    </div>,
    document.body
  );
}
