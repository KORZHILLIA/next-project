import Head from "next/head";
import Header from "../Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Head>
            <title>Cool</title>
        </Head>
        <body>
            <Header />
            {children}
            </body>
            </>
);
};