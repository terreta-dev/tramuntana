import { genericParse } from "./generic.parser";

it("parses 1st level property", () => {
  const fieldMap = {
    "1stLevel": "1stLevelTarget"
  };
  const apiJson = {
    "1stLevel": 1
  };
  const resultObject = genericParse<any>(apiJson, fieldMap);
  expect(resultObject).toBeDefined();
  expect(resultObject["1stLevelTarget"]).toBeDefined();
  expect(resultObject["1stLevelTarget"]).toBe(1);
});

it("parses 2nd level property", () => {
  const fieldMap = {
    "1stLevel.2ndLevel": "1stLevelTarget.2ndLevelTarget"
  };
  const apiJson = {
    "1stLevel": {
      "2ndLevel": "test"
    }
  };
  const resultObject = genericParse<any>(apiJson, fieldMap);
  expect(resultObject).toBeDefined();
  expect(resultObject["1stLevelTarget"]).toBeDefined();
  expect(resultObject["1stLevelTarget"]["2ndLevelTarget"]).toBe("test");
});

it("sets undefined on unknown properties", () => {
  const fieldMap = {
    "1stLevel.2ndLevel": "1stLevelTarget.2ndLevelTarget"
  };
  const apiJson = {
    "2ndLevel": 1
  };
  const resultObject = genericParse<any>(apiJson, fieldMap);
  expect(resultObject).toBeDefined();
  expect(resultObject["1stLevelTarget"]).toBeUndefined();
});
