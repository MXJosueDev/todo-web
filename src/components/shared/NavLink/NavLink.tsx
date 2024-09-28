import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';

interface NavLinkProps {
    icon: ReactNode;
    to: string;
    text: string;
}

export default function NavLink({ icon, to, text }: NavLinkProps) {
    return (
        <Link to={to} className="align-text-bottom">
            {icon} {text}
        </Link>
    );
}
