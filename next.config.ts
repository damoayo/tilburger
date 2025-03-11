import type { NextConfig } from "next";
import { withPigment } from "@pigment-css/nextjs-plugin";

const nextConfig: NextConfig = {
  /* config options here */
};
/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig: import("@pigment-css/nextjs-plugin").PigmentOptions = {
  transformLibraries: ["@mui/material"],
};

export default withPigment(nextConfig, pigmentConfig);
