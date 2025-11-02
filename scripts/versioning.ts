export type ReleaseType = 'patch' | 'minor' | 'major'

/**
 * Compute next semantic version using current base version, selected release type,
 * number of commits since last release, and prerelease flag.
 *
 * Rules:
 * - count = max(commitCount, 1)
 * - major → major+1, minor=0, patch=count
 * - minor → minor+1, patch=count
 * - patch → patch += count
 * - prerelease → append -beta.<count>
 */
export const computeVersion = (
  currentVersion: string,
  releaseType: ReleaseType,
  commitCount: number,
  prerelease: boolean
): string => {
  if (!currentVersion || typeof currentVersion !== 'string') {
    throw new Error('Invalid version string')
  }

  const base = currentVersion.split('-')[0]
  const [majS, minS, patS] = base.split('.')
  const major = Number.parseInt(majS || '0', 10) || 0
  const minor = Number.parseInt(minS || '0', 10) || 0
  const patch = Number.parseInt(patS || '0', 10) || 0

  const count = Math.max(commitCount, 1)

  let newMajor = major
  let newMinor = minor
  let newPatch = patch

  switch (releaseType) {
    case 'major':
      newMajor += 1
      newMinor = 0
      newPatch = count
      break
    case 'minor':
      newMinor += 1
      newPatch = count
      break
    default:
      newPatch += count
      break
  }

  const next = `${newMajor}.${newMinor}.${newPatch}`
  return prerelease ? `${next}-beta.${count}` : next
}
