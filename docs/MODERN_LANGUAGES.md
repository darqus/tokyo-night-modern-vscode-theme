# Поддержка современных языков и технологий

## Обзор

Тема Tokyo Night Modern включает специализированную подсветку для современных языков программирования и фреймворков 2024-2025.

## Поддерживаемые технологии

### JavaScript/TypeScript Экосистема

#### React

- **Компоненты**: `#7dcfff` (cyan, bold) - выделяются жирным
- **Хуки**: `#b267e6` (purple bright, bold) - useState, useEffect и т.д.
- **Props**: `#73daca` (teal) - свойства компонентов

#### Vue 3

- **Composables**: `#9ece6a` (green, bold) - функции композиции
- **Директивы**: `#ff9e64` (orange, italic) - v-if, v-for и т.д.

#### Solid.js

- **Signals**: `#6183bb` (blue light, bold) - реактивные сигналы
- **Store**: `#7dcfff` (cyan) - хранилища состояния

#### Svelte

- **Stores**: `#ff9e64` (orange, bold) - $store
- **Actions**: `#f7768e` (red) - use:action

#### Qwik

- **Компоненты**: `#b267e6` (purple bright, bold)

### Фреймворки

#### Next.js/Astro

- **Routing**: `#7aa2f7` (blue, italic)
- **Astro компоненты**: `#f7768e` (red, bold)

#### Hono

- **Routes**: `#ff9e64` (orange)
- **Middleware**: `#e0af68` (yellow)

### Системные языки

#### Rust

- **Macros**: `#89ddff` (cyan bright, bold) - println!, vec!
- **Lifetimes**: `#ff9e64` (orange, italic) - 'a, 'static
- **Traits**: `#bb9af7` (purple)

#### Go

- **Interfaces**: `#0db9d7` (cyan dark)
- **Goroutines**: `#7aa2f7` (blue, italic)
- **Functions**: `#7aa2f7` (blue)

#### Zig

- **Keywords**: `#ff9e64` (orange)

### Python Современный

- **Type Hints**: `#bb9af7` (purple) - int, str, List[T]
- **Decorators**: `#e0af68` (yellow, italic) - @property, @dataclass

### Runtime

#### Bun/Deno

- **APIs**: `#0db9d7` (cyan dark) - Bun.serve, Deno.serve

### Базы данных

#### Prisma

- **Models**: `#73daca` (teal, italic)
- **Relations**: `#0db9d7` (cyan dark)

#### Drizzle ORM

- **Schema**: `#9ece6a` (green)
- **Relations**: `#0db9d7` (cyan dark)

### API

#### GraphQL

- **Types**: `#0db9d7` (cyan dark, bold)
- **Fields**: `#73daca` (teal)

#### tRPC

- **Procedures**: `#6183bb` (blue light)
- **Resolvers**: `#e0af68` (yellow)

### Стилизация

#### Tailwind CSS

- **Classes**: `#73daca` (teal)

#### CSS-in-JS

- **styled-components**: `#de5971` (pink)
- **emotion**: `#de5971` (pink)

### Тестирование

#### Vitest/Jest

- **describe/test**: `#9ece6a` (green, bold)
- **expect/assert**: `#e0af68` (yellow)
- **mock/spy**: `#de5971` (pink, italic)

### Веб-технологии

#### HTMX

- **Attributes**: `#7dcfff` (cyan) - hx-get, hx-post

#### WebAssembly

- **Keywords**: `#9d7cd8` (purple dark)

### Инструменты

#### Biome

- **Config**: `#e0af68` (yellow)

## Семантические токены

Для языков с поддержкой LSP (Language Server Protocol) доступны дополнительные семантические токены:

- Rust: макросы, lifetimes, traits
- Go: интерфейсы, goroutines
- Python: декораторы, type parameters
- React: hooks, components, props
- Vue: composables, directives

## Статистика

- **Токенов подсветки**: 140+
- **Семантических токенов**: 50+
- **Поддерживаемых языков**: 15+
- **Фреймворков**: 12+
