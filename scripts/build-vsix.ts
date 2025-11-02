import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

// Получаем версию из package.json
let pkg: { version: string }
try {
  const packageContent = fs.readFileSync(
    path.resolve(__dirname, '../package.json'),
    'utf-8'
  )
  pkg = JSON.parse(packageContent)

  // Validate version format to prevent command injection
  if (!/^[a-zA-Z0-9.-]+$/.test(pkg.version)) {
    console.error('Invalid version format in package.json')
    process.exit(1)
  }
} catch (error) {
  console.error(
    'Failed to read or parse package.json:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}
const VSIX_NAME = `tokyo-modern-${pkg.version}.vsix`

// Путь к папке с расширением (предполагается, что build-theme уже сгенерировал нужные файлы)
const EXT_DIR = path.resolve(__dirname, '../')

const buildVsix = () => {
  try {
    // Проверяем, что установлен vsce
    execSync('npx vsce --version', { stdio: 'ignore' })
  } catch {
    console.error(
      'vsce не установлен. Установите его командой: npm install -g @vscode/vsce'
    )
    process.exit(1)
  }

  // Собираем .vsix
  try {
    execSync('npx vsce package', {
      cwd: EXT_DIR,
      stdio: 'inherit',
      env: { ...process.env, VSIX_OUTPUT: VSIX_NAME },
    })

    // Rename the default output to our desired name
    const defaultVsix = fs.readdirSync(EXT_DIR).find((f) => f.endsWith('.vsix'))
    if (defaultVsix && defaultVsix !== VSIX_NAME) {
      fs.renameSync(
        path.join(EXT_DIR, defaultVsix),
        path.join(EXT_DIR, VSIX_NAME)
      )
    }
    if (fs.existsSync(path.join(EXT_DIR, VSIX_NAME))) {
      console.log('VSIX file built successfully:', VSIX_NAME)
    } else {
      console.error('VSIX file not found after build:', VSIX_NAME)
    }
  } catch (e) {
    console.error('Ошибка при сборке .vsix:', e)
    process.exit(1)
  }
}

buildVsix()
