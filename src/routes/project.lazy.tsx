import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/project')({
  component: Project,
})

function Project() {
  return (
    <div className="p-2">
      <h3>Welcome Project!</h3>
    </div>
  )
}