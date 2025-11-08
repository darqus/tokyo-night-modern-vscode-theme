// Тестовый файл для проверки подсветки синтаксиса в теме Tokyo Modern

// Переменные
const stringValue: string = 'Пример строки'
const numberValue: number = 42
var booleanValue: boolean = true
const arrayValue: number[] = [1, 2, 3, 4, 5]
const objectValue: { name: string; age: number } = { name: 'Иван', age: 30 }

// Функции
function simpleFunction(): void {
  console.log('Простая функция')
}

const arrowFunction = (param: string): string => {
  return `Стрелочная функция: ${param}`
}

function genericFunction<T>(value: T): T {
  return value
}

// Классы
class TestClass {
  privateField: string
  protected protectedField: number
  publicField: boolean

  constructor(initialValue: string) {
    this.privateField = initialValue
    this.protectedField = 42
    this.publicField = true
  }

  // Методы
  public publicMethod(): void {
    console.log('Публичный метод')
  }

  private privateMethod(): string {
    return 'Приватный метод'
  }

  protected protectedMethod(): number {
    return 123
  }

  // Геттеры и сеттеры
  get fieldName(): string {
    return this.privateField
  }

  set fieldName(value: string) {
    this.privateField = value
  }
}

// Интерфейсы
interface TestInterface {
  property: string
  method(): void
}

// Типы
type TestType = string | number

// Перечисления
enum TestEnum {
  First = 'FIRST',
  Second = 'SECOND',
  Third = 123,
}

// Асинхронные функции
async function asyncFunction(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Асинхронный результат')
    }, 1000)
  })
}

// Использование методов и функций
const testInstance = new TestClass('начальное значение')
testInstance.publicMethod()
const result = arrowFunction('параметр')
const genericResult = genericFunction<number>(123)
const enumValue = TestEnum.First

// Методы массивов
arrayValue.map((item) => item * 2)
arrayValue.filter((item) => item > 2)
arrayValue.forEach((item) => console.log(item))

console.log(stringValue, numberValue, booleanValue)
