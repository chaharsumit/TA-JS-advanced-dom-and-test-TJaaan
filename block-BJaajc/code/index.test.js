const { getFullName, isPalindrome, getCircumference, getArea } = require("./index");

test('expect full name to be cristiano + ronaldo = cristiano ronaldo', () => {
  expect(getFullName('cristiano','ronaldo')).toBe('cristianoronaldo');
})

test('expect full name to be renato + sanches = renatosanches', () => {
  expect(getFullName('renato','sanches')).toBe('renatosanches');
})

test('expect full name to be goncalo + guedes = goncaloguedes', () => {
  expect(getFullName('goncalo','guedes')).toBe('goncaloguedes');
})

test('expect full name to be cristiano + ronaldo = cristiano ronaldo', () => {
  expect(getFullName('cristiano','ronaldo')).not.toBe('cristiano ronaldo');
})

test('expect full name to be renato + sanches = renatosanches', () => {
  expect(getFullName('renato','sanches')).not.toBe('renato sanches');
})

test('expect full name to be goncalo + guedes = goncaloguedes', () => {
  expect(getFullName('goncalo','guedes')).not.toBe('goncalo guedes');
})



test('expect level to be a palindrome', () => {
  expect(isPalindrome('level')).toBe(true);
})

test('expect caac to be a palindrome', () => {
  expect(isPalindrome('caac')).toBe(true);
})

test('expect abccba to be a palindrome', () => {
  expect(isPalindrome('abccba')).toBe(true);
})

test('expect dog not to be a palindrome', () => {
  expect(isPalindrome('dog')).not.toBe(true);
})

test('expect elephant not to be a palindrome', () => {
  expect(isPalindrome('elephant')).not.toBe(true);
})

test('expect giraffe not to be a palindrome', () => {
  expect(isPalindrome('giraffe')).not.toBe(true);
})


test('expect circumference for circle with radius 5 to be 31.400000000000002', () =>{
  expect(getCircumference(5)).toBe(`The circumference is 31.400000000000002`);
});

test('expect area for circle with radius 5 to be 31.400000000000002', () =>{
  expect(getArea(5)).toBe(`The area is 78.5`);
});