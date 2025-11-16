// Тестовый файл для проверки подсветки TypeScript ключевых слов
// Этот файл демонстрирует различные TypeScript конструкции и ключевые слова

// === Базовые ключевые слова ===
const stringValue: string = 'Hello TypeScript'
const _numberValue: number = 42
const _booleanValue: boolean = true
var _oldValue: any = 'legacy'

// === Операторы типов ===
const _typeOfString = typeof stringValue
const _keysOfObject = keyof
{
  name: string
  age: number
}
const _isString = stringValue instanceof String
const _hasProperty = 'name' in { name: 'test' }

// === Утилиты типов ===
type ReadonlyUser = readonly { name: string; age: number }
type InferType<T> = T extends infer U ? U : never
type UnknownType = unknown
type AnyType = any
type NeverType = never

// === Модификаторы доступа ===
class ExampleClass {
  public publicField: string
  protected protectedField: boolean;
  abstract abstractMethod(): void

  constructor() {
    this.publicField = 'public'
    this.privateField = 42
    this.protectedField = true
  }

  // Методы с модификаторами
  public publicMethod(): string {
    return this.publicField
  }

  protected protectedMethod(): boolean {
    return this.protectedField
  }
}

// === Ключевые объявления ===
declare global {
  interface Window {
    myCustomProperty: string
  }
}

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
}

namespace MyNamespace {
  export interface Config {
    debug: boolean
  }
}

namespace MyModule {
  export const version = '1.0.0'
}

type UserType = {
  name: string
  age: number
}

// === Control Flow ===
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

function assertsCondition(condition: unknown): asserts condition {
  if (!condition) {
    throw new Error('Condition failed')
  }
}

interface Drawable {
  draw(): void
}

class Circle implements Drawable {
  draw(): void {
    console.log('Drawing circle')
  }
}

// === Утилитные типы ===
type PartialUser = Partial<UserType>
type RequiredUser = Required<UserType>
type ReadonlyUser2 = Readonly<UserType>
type PickUser = Pick<UserType, 'name'>
type OmitUser = Omit<UserType, 'age'>
type RecordUser = Record<string, UserType>
type ExtractType = Extract<string | number, string>
type ExcludeType = Exclude<string | number, number>
type NonNullableType = NonNullable<string | null | undefined>
type ParametersType = Parameters<(name: string, age: number) => void>
type ReturnTypeType = ReturnType<() => string>

// === Условные типы ===
type ConditionalType<T> = T extends string ? 'string' : 'not string'
type MappedType<T> = {
  [K in keyof T]: T[K]
}

// === Generic с ограничениями ===
interface GenericInterface<T extends string | number> {
  value: T
}

function genericFunction<T extends { name: string }>(obj: T): T['name'] {
  return obj.name
}

// === Декораторы ===
function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      console.log('Class decorated')
    }
  }
}

function MethodDecorator(
  _target: any,
  _propertyKey: string,
  _descriptor: PropertyDescriptor
) {
  console.log('Method decorated')
}

function ParameterDecorator(
  _target: any,
  _propertyKey: string,
  _parameterIndex: number
) {
  console.log('Parameter decorated')
}

@ClassDecorator
class DecoratedClass {
  @MethodDecorator
    decoratedMethod(@ParameterDecorator param: string): void {
        console.log(param)
    }
}

// === Использование ключевых слов ===
const _example = new ExampleClass()
const _status: Status = Status.Active
const _config: MyNamespace.Config = { debug: true }

// Проверка типов
if (isString(stringValue)) {
  console.log(stringValue.toUpperCase())
}

assertsCondition(true)

// Оператор satisfies (TypeScript 4.9+)
const _data = { name: 'John', age: 30 } satisfies { name: string; age: number }

// Использование утилитных типов
const _partialUser: PartialUser = { name: 'John' }
const _userKeys: (keyof UserType)[] = ['name', 'age']

// Generics в действии
const _userName = genericFunction({ name: 'Alice', age: 25 })
const _genericInterface: GenericInterface<string> = { value: 'test' }

console.log('TypeScript keywords test complete')
