import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

function About() {
  return <div className="p-2">Hello from About!</div>
}
