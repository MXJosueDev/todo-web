import { ListUnorderedIcon } from '@primer/octicons-react';
import NavLink from '../../NavLink';
import { Route } from '@/routes/my-lists';

export default function Nav() {
    return (
        <nav className="flex float-end items-center h-full text-slate-100">
            <NavLink
                to={Route.to}
                icon={<ListUnorderedIcon />}
                text="My Lists"
            />
        </nav>
    );
}
