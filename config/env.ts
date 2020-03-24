export const mode = process.env.NODE_ENV;
export const dev = mode === "development";
export const legacy = !!process.env.SAPPER_LEGACY_BUILD;
