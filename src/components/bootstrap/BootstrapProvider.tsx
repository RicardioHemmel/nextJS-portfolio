"use client";

import { useEffect } from "react";

export default function BootstrapProvider() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return null;
} 