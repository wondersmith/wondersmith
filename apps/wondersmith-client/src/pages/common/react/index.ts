import React from "react";
import { createRoot } from "react-dom/client";

export function createPage(rootComponent: React.ReactElement, rootId = "root"): void {
    const root = createRoot(document.getElementById(rootId)!);
    root.render(rootComponent);
}