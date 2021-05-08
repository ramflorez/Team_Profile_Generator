const Employee = require("../lib/Employee");

test("Can create Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can assign name with constructor arguments", () => {
  const name = "Lisa";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can assign id with constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can create email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can create name via getName()", () => {
  const testValue = "Lisa";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can assign id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Charry", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can create email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Charry", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Lisa", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});