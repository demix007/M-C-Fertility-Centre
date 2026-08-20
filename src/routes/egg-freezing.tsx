import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/egg-freezing')({
  beforeLoad: () => {
    throw redirect({ to: '/cryopreservation' })
  },
  component: () => null,
})
