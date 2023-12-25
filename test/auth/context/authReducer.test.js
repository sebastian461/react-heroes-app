import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  const user = {
    id: "ABC",
    user: "Sebastián",
  };

  const initialState = {
    logged: true,
    user,
  };

  /* TEST 1 */
  test("debe retornar el estado inicial", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  /* TEST 2 */
  test("debe de llamar el login autentificar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: user,
    };

    const newState = authReducer({}, action);
    expect(newState.logged).toBeTruthy();
    expect(newState.user).toBe(user);
  });

  /* TEST 3 */
  test("debe de borrar el usuario y logged en falso", () => {
    const action = {
      type: types.logout,
    };

    const newState = authReducer(initialState, action);
    expect(newState.logged).toBeFalsy();
    expect(newState.user).toBe(); //undefined
  });
});
