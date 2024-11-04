/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsageHistoryImport } from './routes/usage-history'
import { Route as StatusImport } from './routes/status'
import { Route as ProfileImport } from './routes/profile'
import { Route as NotificationsImport } from './routes/notifications'
import { Route as MeetingsImport } from './routes/meetings'
import { Route as AlterationImport } from './routes/alteration'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UsageHistoryRoute = UsageHistoryImport.update({
  id: '/usage-history',
  path: '/usage-history',
  getParentRoute: () => rootRoute,
} as any)

const StatusRoute = StatusImport.update({
  id: '/status',
  path: '/status',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const NotificationsRoute = NotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => rootRoute,
} as any)

const MeetingsRoute = MeetingsImport.update({
  id: '/meetings',
  path: '/meetings',
  getParentRoute: () => rootRoute,
} as any)

const AlterationRoute = AlterationImport.update({
  id: '/alteration',
  path: '/alteration',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/alteration': {
      id: '/alteration'
      path: '/alteration'
      fullPath: '/alteration'
      preLoaderRoute: typeof AlterationImport
      parentRoute: typeof rootRoute
    }
    '/meetings': {
      id: '/meetings'
      path: '/meetings'
      fullPath: '/meetings'
      preLoaderRoute: typeof MeetingsImport
      parentRoute: typeof rootRoute
    }
    '/notifications': {
      id: '/notifications'
      path: '/notifications'
      fullPath: '/notifications'
      preLoaderRoute: typeof NotificationsImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/status': {
      id: '/status'
      path: '/status'
      fullPath: '/status'
      preLoaderRoute: typeof StatusImport
      parentRoute: typeof rootRoute
    }
    '/usage-history': {
      id: '/usage-history'
      path: '/usage-history'
      fullPath: '/usage-history'
      preLoaderRoute: typeof UsageHistoryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/alteration': typeof AlterationRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/alteration': typeof AlterationRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/alteration': typeof AlterationRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/alteration'
    | '/meetings'
    | '/notifications'
    | '/profile'
    | '/status'
    | '/usage-history'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/alteration'
    | '/meetings'
    | '/notifications'
    | '/profile'
    | '/status'
    | '/usage-history'
  id:
    | '__root__'
    | '/'
    | '/alteration'
    | '/meetings'
    | '/notifications'
    | '/profile'
    | '/status'
    | '/usage-history'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AlterationRoute: typeof AlterationRoute
  MeetingsRoute: typeof MeetingsRoute
  NotificationsRoute: typeof NotificationsRoute
  ProfileRoute: typeof ProfileRoute
  StatusRoute: typeof StatusRoute
  UsageHistoryRoute: typeof UsageHistoryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AlterationRoute: AlterationRoute,
  MeetingsRoute: MeetingsRoute,
  NotificationsRoute: NotificationsRoute,
  ProfileRoute: ProfileRoute,
  StatusRoute: StatusRoute,
  UsageHistoryRoute: UsageHistoryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/alteration",
        "/meetings",
        "/notifications",
        "/profile",
        "/status",
        "/usage-history"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/alteration": {
      "filePath": "alteration.tsx"
    },
    "/meetings": {
      "filePath": "meetings.tsx"
    },
    "/notifications": {
      "filePath": "notifications.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/status": {
      "filePath": "status.tsx"
    },
    "/usage-history": {
      "filePath": "usage-history.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
