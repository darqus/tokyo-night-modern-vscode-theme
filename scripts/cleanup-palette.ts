import { exec } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const PALETTE_PATH = join(__dirname, '../src/theme/palette.ts')
const VALIDATE_COMMAND = 'npm run validate:theme'

console.log('Starting palette cleanup...')

exec(VALIDATE_COMMAND, (error, stdout, stderr) => {
  // Ошибки валидации (не структурные) являются ожидаемым поведением
  if (error && error.code !== 1) {
    console.error(`Error executing validation script: ${error.message}`)
    return
  }

  const output = stdout + stderr
  const unusedColorRegex = /-\s(.*?):/g
  const unusedKeys = new Set<string>()
  let match

  while ((match = unusedColorRegex.exec(output)) !== null) {
    unusedKeys.add(match[1].trim())
  }

  if (unusedKeys.size === 0) {
    console.log('No unused colors found. Palette is clean.')
    return
  }

  console.log(`Found ${unusedKeys.size} unused colors. Cleaning up...`)

  let paletteContent = readFileSync(PALETTE_PATH, 'utf-8')
  const lines = paletteContent.split('\n')

  const cleanedLines = lines.filter((line) => {
    const trimmedLine = line.trim()
    const match = /^(.*?):/.exec(trimmedLine)
    if (match) {
      const key = match[1].trim()
      return !unusedKeys.has(key)
    }
    return true
  })

  // Дополнительная очистка пустых строк, оставшихся после удаления
  const finalContent = cleanedLines
    .join('\n')
    .replace(/,\s*\n(\s*[}\]])/g, '\n$1') // Убираем висящие запятые

  writeFileSync(PALETTE_PATH, finalContent)

  console.log(
    `Palette cleanup complete. ${unusedKeys.size} unused colors removed.`
  )
})
