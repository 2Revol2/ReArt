import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first class", () => {
    expect(classNames("className", {}, [])).toBe("className");
  });

  test("with additional class", () => {
    expect(classNames("className", {}, ["cls1", "cls2"])).toBe("className cls1 cls2");
  });

  test("With mods", () => {
    expect(classNames("className", { hovered: true, selected: true }, ["cls1", "cls2"])).toBe(
      "className cls1 cls2 hovered selected",
    );
  });

  test("With mods false", () => {
    expect(classNames("className", { hovered: true, selected: false }, ["cls1", "cls2"])).toBe(
      "className cls1 cls2 hovered",
    );
  });

  test("With mods undefined", () => {
    expect(classNames("className", { hovered: true, selected: false, open: undefined }, ["cls1", "cls2"])).toBe(
      "className cls1 cls2 hovered",
    );
  });
});
