/**
 * Validation script for light theme tokens
 * This script tests the contrast ratios of the light theme tokens to ensure WCAG compliance
 */

import { lightThemeTokens } from './light-theme-tokens';
import {
  generateContrastReport
} from './wcag-contrast-checker';

// Run validation on the light theme
function validateLightTheme() {
  console.log('Validating Tokyo Night Modern Light Theme for WCAG compliance...\n');
  
  // Generate the full contrast report
  const report = generateContrastReport(lightThemeTokens);
  
  console.log(report.summary);
  console.log('\nDetailed results:');
  
  // Print detailed results for non-compliant items
 const nonCompliant = report.details.filter(item => !item.aaCompliant);
  if (nonCompliant.length > 0) {
    console.log('\n⚠️  Non-compliant color combinations:');
    nonCompliant.forEach(item => {
      console.log(`  - ${item.name}: ${item.message} (${item.foreground} on ${item.background})`);
    });
  } else {
    console.log('\n✅ All color combinations meet WCAG AA standards!');
  }
  
  // Print AAA compliance summary
  const aaaNonCompliant = report.details.filter(item => !item.aaaCompliant);
  console.log(`\n📊 AAA Compliance: ${aaaNonCompliant.length} non-compliant combinations found`);
  
  if (aaaNonCompliant.length > 0) {
    console.log('\n💡 Note: These combinations do not meet AAA standards but are compliant with AA:');
    aaaNonCompliant.forEach(item => {
      if (item.aaCompliant) { // Only show if AA compliant
        console.log(`  - ${item.name}: ${item.message} (${item.foreground} on ${item.background})`);
      }
    });
  } else {
    console.log('\n🎉 All color combinations meet WCAG AAA standards!');
  }
  
  return report;
}

// Only run if this file is executed directly
if (require.main === module) {
  validateLightTheme();
}

export { validateLightTheme };