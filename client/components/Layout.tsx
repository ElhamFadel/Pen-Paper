import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';
import { MainHome } from './MainHome';
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="icon" href="/images/logo.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,500;1,900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Header />
    {/* body */}
    <main className="container min-h-screen mx-auto px-32 py-3 flex items-center justify-between ">
      {/* nav */}
      <Nav />
      {/* main */}
      <MainHome />
      {/* side */}
      <aside id="aside"></aside>
    </main>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
