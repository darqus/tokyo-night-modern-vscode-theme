import * as fs from 'fs'
import * as path from 'path'

const migrateFoundationTs = () => {
  const filePath = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'palette',
    'foundation.ts'
  )
  let content = fs.readFileSync(filePath, 'utf-8')

  // Remove primitiveColors definition
  content = content.replace(
    /export const primitiveColors = \{[\s\S]*?\} as const;/,
    ''
  )

  // Add import
  const importStatement =
    "import { foundationColors } from './foundation/colors';\n"
  if (!content.includes(importStatement.trim())) {
    content = importStatement + content
  }

  // Replace primitiveColors references with foundationColors
  content = content.replace(/primitiveColors/g, 'foundationColors')

  fs.writeFileSync(filePath, content)
  console.log('✅ foundation.ts migrated')
}

const migrateSyntaxTs = () => {
  const filePath = path.join(
    __dirname,
    '..',
    'src',
    'theme',
    'palette',
    'syntax.ts'
  )
  let content = fs.readFileSync(filePath, 'utf-8')

  // Remove color constant definitions
  const colorConstants = [
    'opColor',
    'strColor',
    'numColor',
    'commentColor',
    'docCommentColor',
    'docTagColor',
    'paramColor',
    'tagColor',
    'constColor',
    'regexColor',
    'varColor',
    'atRuleColor',
    'htmlTagColor',
    'htmlAttrColor',
    'componentColor',
  ]

  colorConstants.forEach((color) => {
    const regex = new RegExp(`export const ${color} = '[^']+';\\s*`, 'g')
    content = content.replace(regex, '')
  })

  // Add import
  const importStatement =
    "import { foundationColors } from './foundation/colors';\n"
  if (!content.includes(importStatement.trim())) {
    content = importStatement + content
  }

  // Replace color constant references with foundationColors
  colorConstants.forEach((color) => {
    const regex = new RegExp(`\\b${color}\\b`, 'g')
    content = content.replace(regex, `foundationColors.${color}`)
  })

  fs.writeFileSync(filePath, content)
  console.log('✅ syntax.ts migrated')
}

const main = () => {
  console.log('🚀 Starting color migration...')
  migrateFoundationTs()
  migrateSyntaxTs()
  console.log('🎉 Migration completed!')
}

main()
