import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense } from "react";

// Lazy load the devtools in development
const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          // For more options, see: https://tanstack.com/router/latest/docs/framework/react/devtools#options
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <header className="flex gap-2 justify-center">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </header>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools position="bottom-left" />
      </Suspense>
    </React.Fragment>
  );
}
