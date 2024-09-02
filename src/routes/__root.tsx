import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavbarV2 from "../components/NavbarV2";

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavbarV2 />
      <hr />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 md:py-8">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
