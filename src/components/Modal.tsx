import { createPortal } from "react-dom";
import { Card, CardContent } from "./ui/card";

export default function Modal({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: any;
}) {
  if (!open) return null;
  return createPortal(
    <div
      onClick={() => setOpen(false)}
      className="w-full z-60 h-screen absolute bg-gray-100/50 dark:bg-gray-500/50 top-0 left-0 cursor-pointer select-none"
    >
      <div className="flex items-center justify-center h-full">
        <Card
          onClick={(e) => e.stopPropagation()}
          className="p-5 cursor-auto z-70 "
        >
          <div className="flex justify-center items-center p-6 text-lg">
            {children}
          </div>
        </Card>
      </div>
    </div>,
    document.body
  );
}
