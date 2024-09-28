import { Col } from 'react-grid-system';

interface Props {
    title: string;
    children: React.ReactNode;
}

export function FooterCol({ title, children }: Props) {
    return (
        <Col xs={24} sm={12} className="mt-3">
            <h6 className="text-base font-bold mb-2">{title}</h6>

            {children}
        </Col>
    );
}
