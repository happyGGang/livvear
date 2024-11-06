import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/done')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /done!'
}
