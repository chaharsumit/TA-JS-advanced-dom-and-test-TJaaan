function getFullName(firstName, lastName){
  return firstName + lastName;
};

function isPalindrome(input){
  return input === Array.from(input).reverse().join('');
};

function getCircumference(radius){
  return `The circumference is ${(2 * 3.14 * radius)}`;
}

function getArea(radius){
  return `The area is ${(3.14 * (radius * radius))}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};