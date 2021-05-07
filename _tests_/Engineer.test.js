const Engineer = require("../lib/Engineer");

test("Can assign GitHUb account with constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Charry", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Charry", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can assign GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Charry", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });