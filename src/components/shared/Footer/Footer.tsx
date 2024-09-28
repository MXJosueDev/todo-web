import { MarkGithubIcon } from '@primer/octicons-react';
import { Row } from 'react-grid-system';
import { BsDiscord, BsTwitterX } from 'react-icons/bs';
import FooterCol from '../FooterCol';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white text-center p-2 py-4 mt-8">
            <Row nogutter className="mb-4">
                <FooterCol title="Social">
                    <ul className="text-sm align-middle">
                        <li>
                            <a href="https://github.com/MXJosueDev">
                                <MarkGithubIcon /> MXJosueDev
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/iMXJosue">
                                <BsTwitterX className="inline-block" />{' '}
                                @iMXJosue
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/">
                                <BsDiscord className="inline-block" /> @mxjosue
                            </a>
                        </li>
                    </ul>
                </FooterCol>
                <FooterCol title="Support">
                    <p className="text-sm">
                        Any bug/report/suggest please let me know in{' '}
                        <a
                            className="opacity-70"
                            href="https://github.com/MXJosueDev/todo-web/issues"
                        >
                            Github Repo
                        </a>
                    </p>
                </FooterCol>
            </Row>
        </footer>
    );
}
