import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/skill')({
  component: Skill,
})

function Skill() {
  return (
    <div className="p-2">
      <h3>Welcome Skill!</h3>
    </div>
  )
}