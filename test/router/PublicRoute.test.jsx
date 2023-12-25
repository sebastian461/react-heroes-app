const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth/context");
const { PrivateRoute } = require("../../src/router/PrivateRoute");
const { createMemoryRouter, RouterProvider } = require("react-router-dom");

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

    const routes = [
      {
        path: "marvel",
        element: <h1>Página Marvel</h1>,
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <h1>Usuario no autenticado</h1>
          </PublicRoute>
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login", "/marvel"],
    });

    render(
      <AuthContext.Provider value={contextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página Marvel")).toBeTruthy();
  });
});
