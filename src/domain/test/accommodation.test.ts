import { describe, beforeEach, test, expect} from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("casa", 25);
  });

  describe("Accommodation name", () => {
    test("should get name correctly", () => {
      expect(accommodation.getName()).toBe("casa");
    });

    test("should set name correctly", () => {
      accommodation.setName("casa2");
      expect(accommodation.getName()).toBe("casa2");
    });
  });

  describe("Accommodation cost", () => {
    test("should get cost correctly", () => {
      expect(accommodation.getCost()).toBe(25);
    });

    test("should set cost correctly", () => {
      accommodation.setCost(50);
      expect(accommodation.getCost()).toBe(50);
    });
  });
});
