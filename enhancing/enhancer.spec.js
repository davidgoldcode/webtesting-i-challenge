const { TestScheduler } = require("jest");
const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("repair() should return 100 durability", () => {
      const item = {
        name: "John Doe",
        durability: 15,
        enhancement: 10,
      };

      const result = enhancer.repair(item);

      expect(result).toEqual({
        name: "John Doe",
        durability: 100,
        enhancement: 10,
      });
    });
  });

  describe("success()", () => {
    it("success() should increase enhancement by 1", () => {
      const item = {
        name: "David",
        durability: 22,
        enhancement: 11,
      };

      const result = enhancer.success(item);

      expect(result).toEqual({
        name: "David",
        durability: 22,
        enhancement: 12,
      });
    });
    it("success() but should stay at 20 if reached max of 20", () => {
      const item = {
        name: "Paul",
        durability: 7,
        enhancement: 20,
      };

      const result = enhancer.success(item);

      expect(result).not.toEqual({
        name: "Paul",
        durability: 7,
        enhancement: 21,
      });
    });
  });

  describe("fail()", () => {
    it("if enhancement is < 15, durability is decreased by 5", () => {
      const item = {
        name: "Mario",
        durability: 10,
        enhancement: 12,
      };

      const result = enhancer.fail(item);

      expect(result).toEqual({
        name: "Mario",
        durability: 5,
        enhancement: 12,
      });
    });

    it("if enhancement is >= 15, durability is decreased by 10", () => {
      const item = {
        name: "Nick",
        durability: 14,
        enhancement: 15,
      };

      const result = enhancer.fail(item);

      expect(result).toEqual({
        name: "Nick",
        durability: 4,
        enhancement: 15,
      });
    });
  });
});
