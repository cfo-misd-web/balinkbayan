import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'
import { routeTree } from './routeTree.gen.ts'

// --- SSR ENTRY (entry-server.tsx) ---
// This file should be created in src/entry-server.tsx
// import { renderToString } from 'react-dom/server';
// import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { routeTree } from './routeTree.gen';
//
// export function render(url: string) {
//   const router = createRouter({
//     routeTree,
//     context: {},
//     defaultPreload: 'intent',
//     defaultStructuralSharing: true,
//   });
//   router.navigate({ to: url });
//   return renderToString(
//     <RouterProvider router={router} />
//   );
// }
//
// --- CLIENT ENTRY (entry-client.tsx) ---
// This file should be created in src/entry-client.tsx
// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { routeTree } from './routeTree.gen';
//
// const router = createRouter({
//   routeTree,
//   context: {},
//   defaultPreload: 'intent',
//   defaultStructuralSharing: true,
// });
//
// const rootElement = document.getElementById('app');
// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   );
// }
//
// You will also need to set up a Node.js server (e.g., with Express or Vite SSR) to use these entry points.

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
