import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="container">
            <nav>
                <Link>
                    <a>
                        <span className="main-title">
                            <a href="/">HackerNews Clone</a>
                        </span>
                    </a>
                </Link>
            </nav>
            {children}
        </div>

        <style jsx>{`
            .container {
                max-width: 960px;
                margin 0 auto;
                background: #f6f6ee;
                display: flex;
                flex-direction: column;
            }
            nav {
                background: #ffa600;
                padding: 1em;
            }

            nav > * {
                display: inline-block;
                color: #000000;
            }

            nav a {
                text-decoration: none;
            }

            nav a:hover,
            nav a:visited {
                color: #000000;
            } 

            nav .main-title {
                font-weight: bold;
                font-size: 1.5rem;
            }

        `}</style>
        <style global jsx>
            {`
                body {
                    background: white;
                    font-family: sans-serif;
                }
            `}
        </style>
    </div>
);

export default Layout;