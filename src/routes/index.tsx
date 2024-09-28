import { createFileRoute } from '@tanstack/react-router';
import '@/styles/index.css';
import ListSearchForm from '@/components/home/ListSearchForm';

export const Route = createFileRoute('/')({
    component: () => Index(),
});

function Index() {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-2">
            <div className="p-3 w-full max-w-md border-2 bg-slate-100 rounded-md shadow-md mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-3">
                    Search or Create List
                </h2>
                <ListSearchForm />
            </div>
        </div>
    );
}
