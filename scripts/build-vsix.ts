import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

// Имя итогового файла
const VSIX_NAME = 'tokyo-night-modern-2.0.33.vsix'

// Путь к папке с расширением (предполагается, что build-theme уже сгенерировал нужные файлы)
const EXT_DIR = path.resolve(__dirname, '../')

function buildVsix() {
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
    execSync(`npx vsce package -o ${VSIX_NAME}`, {
      cwd: EXT_DIR,
      stdio: 'inherit',
    })
    if (fs.existsSync(path.join(EXT_DIR, VSIX_NAME))) {
      console.log(`\nФайл ${VSIX_NAME} успешно собран!`)
    } else {
      console.error(`\nОшибка: файл ${VSIX_NAME} не найден после сборки.`)
    }
  } catch (e) {
    console.error('Ошибка при сборке .vsix:', e)
    process.exit(1)
  }
}

buildVsix()
