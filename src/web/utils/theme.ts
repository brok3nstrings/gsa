/* SPDX-FileCopyrightText: 2024 Greenbone AG
 *
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Theme colors using Mantine CSS variables for automatic dark/light mode support.
 *
 * Light mode: Mantine variables resolve to light palette values.
 * Dark mode: Mantine variables resolve to dark palette values.
 *
 * Semantic ui-lib variables (defined in @greenbone/ui-lib cssVariables.css):
 *   --text-color-black, --text-color-white, --text-color-bright
 *   --background-color-white, --background-color-success, etc.
 *   --border-color-bright, --border-color-error, etc.
 *   --icon-color-success, --icon-color-error, etc.
 *
 * Mantine palette variables (auto-adapt via data-mantine-color-scheme):
 *   --mantine-color-black, --mantine-color-white
 *   --mantine-color-gray-0 through --mantine-color-gray-9
 *   --mantine-color-green-0 through --mantine-color-green-9
 *   --mantine-color-red-0 through --mantine-color-red-9
 *   --mantine-color-blue-0 through --mantine-color-blue-9
 *   --mantine-color-orange-0 through --mantine-color-orange-9
 *   --mantine-color-yellow-0 through --mantine-color-yellow-9
 */

interface ThemeLayer {
  menu: number;
  aboveAll: number;
  onTop: number;
  belowAll: number;
  higher: number;
  default: number;
}

interface ThemeFont {
  default: string;
  dialog: string;
  defaultSize: string;
}

interface ThemeInterface {
  lightGreen: string;
  green: string;
  lightGray: string;
  mediumDarkGray: string;
  mediumGray: string;
  darkGray: string;
  white: string;
  dialogGray: string;
  inputBorderGray: string;
  black: string;
  loginButtonGray: string;
  loginButtonHover: string;
  lightRed: string;
  mediumLightRed: string;
  warningRed: string;
  darkRed: string;
  errorRed: string;
  complianceYes: string;
  complianceNo: string;
  complianceIncomplete: string;
  complianceUndefined: string;
  lightBlue: string;
  mediumBlue: string;
  blue: string;
  severityLowBlue: string;
  severityWarnYellow: string;
  severityClassLog: string;
  severityClassLow: string;
  severityClassMedium: string;
  severityClassHigh: string;
  severityClassCritical: string;
  statusNewGreen: string;
  statusRunGreen: string;
  statusLogGray: string;
  paleGreen: string;
  darkGreen: string;
  darkGreenTransparent: string;
  Layers: ThemeLayer;
  Font: ThemeFont;
}

const Theme: ThemeInterface = {
  /* Greens — use Mantine green palette (auto-adapts) */
  lightGreen: 'var(--mantine-color-green-2)',
  green: 'var(--mantine-color-green-6)',

  /* Grays — use Mantine gray palette (auto-adapts) */
  lightGray: 'var(--mantine-color-gray-2)',
  mediumDarkGray: 'var(--mantine-color-gray-4)',
  mediumGray: 'var(--mantine-color-gray-5)',
  darkGray: 'var(--mantine-color-gray-7)',

  /* White/Black — use semantic ui-lib variables (swap in dark mode) */
  white: 'var(--text-color-white)',
  dialogGray: 'var(--background-color-white)',
  inputBorderGray: 'var(--border-color-bright)',
  black: 'var(--text-color-black)',
  loginButtonGray: 'var(--mantine-color-gray-7)',
  loginButtonHover: 'var(--mantine-color-gray-9)',

  /* Reds — use Mantine red palette (auto-adapts) */
  lightRed: 'var(--mantine-color-red-0)',
  mediumLightRed: 'var(--mantine-color-red-3)',
  warningRed: 'var(--mantine-color-red-6)',
  darkRed: 'var(--mantine-color-red-7)',
  errorRed: 'var(--mantine-color-red-6)',

  /* Compliance colors — use Mantine palette */
  complianceYes: 'var(--mantine-color-green-6)',
  complianceNo: 'var(--mantine-color-red-7)',
  complianceIncomplete: 'var(--mantine-color-orange-5)',
  complianceUndefined: 'var(--mantine-color-gray-4)',

  /* Blues — use Mantine blue palette (auto-adapts) */
  lightBlue: 'var(--mantine-color-blue-1)',
  mediumBlue: 'var(--mantine-color-blue-4)',
  blue: 'var(--mantine-color-blue-6)',
  severityLowBlue: 'var(--mantine-color-blue-5)',

  /* Yellow — use Mantine yellow palette (auto-adapts) */
  severityWarnYellow: 'var(--mantine-color-yellow-7)',

  /* Severity classes — use Mantine palette */
  severityClassLog: 'var(--mantine-color-gray-3)',
  severityClassLow: 'var(--mantine-color-blue-3)',
  severityClassMedium: 'var(--mantine-color-orange-4)',
  severityClassHigh: 'var(--mantine-color-red-4)',
  severityClassCritical: 'var(--mantine-color-red-7)',

  /* Status colors — use Mantine palette */
  statusNewGreen: 'var(--mantine-color-green-5)',
  statusRunGreen: 'var(--mantine-color-green-6)',
  statusLogGray: 'var(--mantine-color-gray-5)',

  /* Pale green — use Mantine palette */
  paleGreen: 'var(--mantine-color-green-5)',

  /* Dark greens — use Mantine palette */
  darkGreen: 'var(--mantine-color-green-8)',
  darkGreenTransparent: 'rgba(7, 67, 32, 0.8)',

  Layers: {
    menu: 600,
    aboveAll: 500,
    onTop: 100,
    belowAll: -100,
    higher: 1,
    default: 0,
  },

  Font: {
    default: 'Roboto, sans-serif',
    dialog: 'Roboto, sans-serif',
    defaultSize: 'var(--mantine-font-size-md)',
  },
};

export default Theme;
