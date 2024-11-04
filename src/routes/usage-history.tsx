import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/usage-history')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /usage-history!'
}
