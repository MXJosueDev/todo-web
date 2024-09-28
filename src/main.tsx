import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setConfiguration } from 'react-grid-system';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import './index.css';

import { routeTree } from '@/routeTree.gen.ts';

export const queryClient = new QueryClient();

setConfiguration({ gridColumns: 24 });

const router = createRouter({
    routeTree,
    context: {
        queryClient: queryClient,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
);
