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
import { Route as OnBoardingImport } from './routes/on-boarding'
import { Route as NotificationsImport } from './routes/notifications'
import { Route as MeetingsImport } from './routes/meetings'
import { Route as MapImport } from './routes/map'
import { Route as LoginImport } from './routes/login'
import { Route as ListImport } from './routes/list'
import { Route as HomeImport } from './routes/home'
import { Route as DoneImport } from './routes/done'
import { Route as DeliveryOptionImport } from './routes/delivery-option'
import { Route as ApplyImport } from './routes/apply'
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

const OnBoardingRoute = OnBoardingImport.update({
  id: '/on-boarding',
  path: '/on-boarding',
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

const MapRoute = MapImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ListRoute = ListImport.update({
  id: '/list',
  path: '/list',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const DoneRoute = DoneImport.update({
  id: '/done',
  path: '/done',
  getParentRoute: () => rootRoute,
} as any)

const DeliveryOptionRoute = DeliveryOptionImport.update({
  id: '/delivery-option',
  path: '/delivery-option',
  getParentRoute: () => rootRoute,
} as any)

const ApplyRoute = ApplyImport.update({
  id: '/apply',
  path: '/apply',
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
    '/apply': {
      id: '/apply'
      path: '/apply'
      fullPath: '/apply'
      preLoaderRoute: typeof ApplyImport
      parentRoute: typeof rootRoute
    }
    '/delivery-option': {
      id: '/delivery-option'
      path: '/delivery-option'
      fullPath: '/delivery-option'
      preLoaderRoute: typeof DeliveryOptionImport
      parentRoute: typeof rootRoute
    }
    '/done': {
      id: '/done'
      path: '/done'
      fullPath: '/done'
      preLoaderRoute: typeof DoneImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      id: '/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/list': {
      id: '/list'
      path: '/list'
      fullPath: '/list'
      preLoaderRoute: typeof ListImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/map': {
      id: '/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapImport
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
    '/on-boarding': {
      id: '/on-boarding'
      path: '/on-boarding'
      fullPath: '/on-boarding'
      preLoaderRoute: typeof OnBoardingImport
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
  '/apply': typeof ApplyRoute
  '/delivery-option': typeof DeliveryOptionRoute
  '/done': typeof DoneRoute
  '/home': typeof HomeRoute
  '/list': typeof ListRoute
  '/login': typeof LoginRoute
  '/map': typeof MapRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/on-boarding': typeof OnBoardingRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/alteration': typeof AlterationRoute
  '/apply': typeof ApplyRoute
  '/delivery-option': typeof DeliveryOptionRoute
  '/done': typeof DoneRoute
  '/home': typeof HomeRoute
  '/list': typeof ListRoute
  '/login': typeof LoginRoute
  '/map': typeof MapRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/on-boarding': typeof OnBoardingRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/alteration': typeof AlterationRoute
  '/apply': typeof ApplyRoute
  '/delivery-option': typeof DeliveryOptionRoute
  '/done': typeof DoneRoute
  '/home': typeof HomeRoute
  '/list': typeof ListRoute
  '/login': typeof LoginRoute
  '/map': typeof MapRoute
  '/meetings': typeof MeetingsRoute
  '/notifications': typeof NotificationsRoute
  '/on-boarding': typeof OnBoardingRoute
  '/profile': typeof ProfileRoute
  '/status': typeof StatusRoute
  '/usage-history': typeof UsageHistoryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/alteration'
    | '/apply'
    | '/delivery-option'
    | '/done'
    | '/home'
    | '/list'
    | '/login'
    | '/map'
    | '/meetings'
    | '/notifications'
    | '/on-boarding'
    | '/profile'
    | '/status'
    | '/usage-history'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/alteration'
    | '/apply'
    | '/delivery-option'
    | '/done'
    | '/home'
    | '/list'
    | '/login'
    | '/map'
    | '/meetings'
    | '/notifications'
    | '/on-boarding'
    | '/profile'
    | '/status'
    | '/usage-history'
  id:
    | '__root__'
    | '/'
    | '/alteration'
    | '/apply'
    | '/delivery-option'
    | '/done'
    | '/home'
    | '/list'
    | '/login'
    | '/map'
    | '/meetings'
    | '/notifications'
    | '/on-boarding'
    | '/profile'
    | '/status'
    | '/usage-history'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AlterationRoute: typeof AlterationRoute
  ApplyRoute: typeof ApplyRoute
  DeliveryOptionRoute: typeof DeliveryOptionRoute
  DoneRoute: typeof DoneRoute
  HomeRoute: typeof HomeRoute
  ListRoute: typeof ListRoute
  LoginRoute: typeof LoginRoute
  MapRoute: typeof MapRoute
  MeetingsRoute: typeof MeetingsRoute
  NotificationsRoute: typeof NotificationsRoute
  OnBoardingRoute: typeof OnBoardingRoute
  ProfileRoute: typeof ProfileRoute
  StatusRoute: typeof StatusRoute
  UsageHistoryRoute: typeof UsageHistoryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AlterationRoute: AlterationRoute,
  ApplyRoute: ApplyRoute,
  DeliveryOptionRoute: DeliveryOptionRoute,
  DoneRoute: DoneRoute,
  HomeRoute: HomeRoute,
  ListRoute: ListRoute,
  LoginRoute: LoginRoute,
  MapRoute: MapRoute,
  MeetingsRoute: MeetingsRoute,
  NotificationsRoute: NotificationsRoute,
  OnBoardingRoute: OnBoardingRoute,
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
        "/apply",
        "/delivery-option",
        "/done",
        "/home",
        "/list",
        "/login",
        "/map",
        "/meetings",
        "/notifications",
        "/on-boarding",
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
    "/apply": {
      "filePath": "apply.tsx"
    },
    "/delivery-option": {
      "filePath": "delivery-option.tsx"
    },
    "/done": {
      "filePath": "done.tsx"
    },
    "/home": {
      "filePath": "home.tsx"
    },
    "/list": {
      "filePath": "list.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/map": {
      "filePath": "map.tsx"
    },
    "/meetings": {
      "filePath": "meetings.tsx"
    },
    "/notifications": {
      "filePath": "notifications.tsx"
    },
    "/on-boarding": {
      "filePath": "on-boarding.tsx"
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
