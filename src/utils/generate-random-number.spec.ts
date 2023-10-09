import { generateRandomNumber } from "./generate-random-number";

describe('Generate random number funcion', () => {
    test('should return a number between 1 and 1000', () => {
        const randomNumber = generateRandomNumber()
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(1000)
    })

    test('should return an integer', () => {
        const randomNumber = generateRandomNumber()
        expect(Number.isInteger(randomNumber)).toBe(true)
    })
})