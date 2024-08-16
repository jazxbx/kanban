"use client";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Button onClick={() => setOpen(!open)}>
      Test
      <Modal open={open} setOpen={setOpen}>
        <h1>Create me! (ʘ‿ʘ✿)</h1>
      </Modal>
    </Button>
  );
}
