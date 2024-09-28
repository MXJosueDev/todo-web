import Error from '@/components/shared/Error';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/header/Header';
import NotFound from '@/components/shared/NotFound';
import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex flex-grow">
                <Outlet />
            </main>

            <Footer />
            <TanStackRouterDevtools />
        </div>
    ),
    notFoundComponent: NotFound,
    errorComponent: Error,
});
