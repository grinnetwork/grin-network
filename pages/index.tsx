import React from "react";
import Head from "next/head";
import { Container, Header, Main, Footer } from "@components";

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Grin Network | Let's raise Grin</title>
                <link
                    rel="shortcut icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link
                    rel="shortcut icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-touch-icon.png"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Container>
                <Header />
                <Main />
                <Footer />
            </Container>
        </div>
    );
};

export default Home;
