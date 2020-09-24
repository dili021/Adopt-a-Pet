import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "Test Breed 1" },
  { name: "Test Breed 2" },
  { name: "Test Breed 3" },
  { name: "Test Breed 4" },
  { name: "Test Breed 5" },
];

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, "res.json")).toString()
);

export const ANIMALS = ["dog", "bird", "cat"];
export const _breeds = breeds;
export const _dogs = doggos.animals;

const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => callback({ breeds })),
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback => act(() => callback(doggos)),
    };
  }),
};

export default mock;
