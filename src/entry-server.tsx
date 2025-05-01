import { renderToString } from 'react-dom/server';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function render(url: string) {
    const router = createRouter({
        routeTree,
        context: {},
        defaultPreload: 'intent',
        defaultStructuralSharing: true,
    });
    router.navigate({ to: url });
    return renderToString(
        <RouterProvider router={router} />
    );
}
