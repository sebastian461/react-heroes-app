import { types } from "../../../src/auth/types/types";

describe("Pruebas en Types", () => {
  test("debe regresar los types indicados", () => {
    expect(types).toEqual({ login: "[Auth] Login", logout: "[Auth] Logout" });
  });
});
