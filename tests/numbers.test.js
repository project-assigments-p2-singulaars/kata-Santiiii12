import {it,expect} from "vitest"
import {factorial} from "/kata-Santiiii12/src/css/script"

it('4 debería ser un número par', () => {
  expect(factorial(4)).toBe(true);
});

it('7 no debería ser un número par', () => {
  expect(factorial(7)).toBe(false);
});

it('-12 debería ser un número par', () => {
  expect(factorial(-12)).toBe(true);
});

it('0 debería ser un número par', () => {
  expect(factorial(0)).toBe(true);
});

it('2.5 no debería ser un número par', () => {
  expect(factorial(2.5)).toBe(false);
});
