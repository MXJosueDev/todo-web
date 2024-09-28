import { Col, Container, Row } from 'react-grid-system';
import HeaderTitle from '../HeaderTitle';
import Nav from '../Nav';

export function Header() {
    return (
        <header className="w-full bg-gradient-to-b from-lime-500 to-lime-600 shadow-2xl p-5">
            <Container>
                <Row>
                    <Col>
                        <HeaderTitle />
                    </Col>
                    <Col>
                        <Nav />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
