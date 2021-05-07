const Intern = require("../lib/Intern");

test("Can assign school with constructor", () => {
    const testValue = "UH";
    const e = new Intern("Charry", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Charry", 1, "test@test.com", "UH");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can assign school via getSchool()", () => {
    const testValue = "UH";
    const e = new Intern("Charry", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });