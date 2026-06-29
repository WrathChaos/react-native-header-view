/**
 * Contract tests for the barrel package.
 *
 * The library ships no UI of its own — it re-exports six standalone header
 * components. These tests mock each sub-package (they are optional peer deps
 * and are not installed here) and assert the barrel wires every named export
 * to the correct source module, with no missing, swapped, or extra exports.
 *
 * Each factory is self-contained (no out-of-scope references) because Jest
 * hoists `jest.mock` calls above imports. We recover the mock components via
 * `jest.requireMock` to prove correct wiring by identity.
 */
import * as React from "react";
import renderer from "react-test-renderer";

// Factories must be fully self-contained: Jest hoists `jest.mock` above all
// imports and `const` declarations, so referencing any outer binding would hit
// a temporal-dead-zone error.
jest.mock(
  "react-native-gorgeous-header",
  () => {
    const C = () => null;
    C.displayName = "GorgeousMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);
jest.mock(
  "react-native-apple-header",
  () => {
    const C = () => null;
    C.displayName = "AppleMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);
jest.mock(
  "react-native-modern-header",
  () => {
    const C = () => null;
    C.displayName = "ModernMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);
jest.mock(
  "react-native-classic-header",
  () => {
    const C = () => null;
    C.displayName = "ClassicMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);
jest.mock(
  "react-native-profile-header",
  () => {
    const C = () => null;
    C.displayName = "ProfileMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);
jest.mock(
  "react-native-elegant-header",
  () => {
    const C = () => null;
    C.displayName = "ElegantMock";
    return { __esModule: true, default: C };
  },
  { virtual: true },
);

// Imported after the mocks are registered (Jest hoists the mocks above this).
import * as Library from "../lib/index";

const sourceOf = (moduleId: string) =>
  (jest.requireMock(moduleId) as { default: React.ComponentType }).default;

const WIRING: Array<[keyof typeof Library, string]> = [
  ["GorgeousHeader", "react-native-gorgeous-header"],
  ["AppleHeader", "react-native-apple-header"],
  ["ModernHeader", "react-native-modern-header"],
  ["ClassicHeader", "react-native-classic-header"],
  ["ProfileHeader", "react-native-profile-header"],
  ["ElegantHeader", "react-native-elegant-header"],
];

const EXPECTED_EXPORTS = WIRING.map(([name]) => name as string);

describe("@freakycoder/react-native-header-view barrel", () => {
  it("exports exactly the six documented header components", () => {
    expect(Object.keys(Library).sort()).toEqual([...EXPECTED_EXPORTS].sort());
  });

  it.each(EXPECTED_EXPORTS)("exports %s as a defined value", (name) => {
    expect((Library as Record<string, unknown>)[name]).toBeDefined();
  });

  it("re-exports ProfileHeader (regression: was missing from peerDependencies)", () => {
    expect(Library.ProfileHeader).toBe(sourceOf("react-native-profile-header"));
  });

  it("re-exports ElegantHeader (regression: exported but undocumented)", () => {
    expect(Library.ElegantHeader).toBe(sourceOf("react-native-elegant-header"));
  });

  it.each(WIRING)("wires %s to %s", (name, moduleId) => {
    expect((Library as Record<string, unknown>)[name]).toBe(sourceOf(moduleId));
  });

  it.each(EXPECTED_EXPORTS)("renders %s without throwing", (name) => {
    const Header = (Library as Record<string, React.ComponentType>)[name];
    let tree: renderer.ReactTestRenderer | undefined;
    renderer.act(() => {
      tree = renderer.create(React.createElement(Header));
    });
    expect(tree).toBeDefined();
    tree?.unmount();
  });
});
