import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meetings')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /meetings!'
}
