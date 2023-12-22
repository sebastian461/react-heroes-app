const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth/context");
const { PrivateRoute } = require("../../src/router/PrivateRoute");

describe("Pruebas en PublicRoute", () => {
  test("debe de mostrar el children sino está autenticado", () => {
    const contextValue = {
      authState: {
        logged: false,
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("debe de navegar si está autenticado", () => {
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: "ABD",
          name: "Sebastián",
        },
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRoute>
          <h1>Página Marvel</h1>
        </PrivateRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página Marvel")).toBeTruthy();
  });
});
