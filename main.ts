import { mkdirSync, copyFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), "/output/entry.png");
