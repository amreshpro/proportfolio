import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import LayoutContainer from '../components/LayoutContainer'

export const Route = createRootRoute({
  component: () => (
    <LayoutContainer>

      <Outlet />
      <TanStackRouterDevtools />
    </LayoutContainer>
  ),
})