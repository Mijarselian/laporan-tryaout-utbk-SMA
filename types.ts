export interface PosterState {
  logoImage: string | null;
  mainImage: string | null;
  topRightImage: string | null;
  bottomRightImage: string | null;
  
  eventTitle: string;
  schoolName: string;
  dateDay: string;
  dateValue: string;

  // Visual Customization
  headerColor: string;
  footerColor: string;
  fontFamily: string;
}

export const INITIAL_STATE: PosterState = {
  logoImage: null,
  mainImage: null,
  topRightImage: null,
  bottomRightImage: null,
  eventTitle: "PELAKSANAAN TRYOUT UTBK-SNBT JENJANG SMA/SMK TAHUN 2026",
  schoolName: "SMA NEGERI 1 KUTACANE",
  dateDay: "RABU",
  dateValue: "11/02/2026",

  // Defaults
  headerColor: "#0b512d", // Dark Green
  footerColor: "#009EE3", // Blue
  fontFamily: "Inter, sans-serif" // Default font
};