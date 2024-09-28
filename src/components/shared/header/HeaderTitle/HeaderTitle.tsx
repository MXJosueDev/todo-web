import { Route } from '@/routes/__root';
import { Link } from '@tanstack/react-router';

export default function HeaderTitle() {
    return (
        <Link to={Route.to}>
            <h1 className="text-3xl font-bold text-slate-200 font-mono">
                TODO's APP
            </h1>
        </Link>
    );
}
