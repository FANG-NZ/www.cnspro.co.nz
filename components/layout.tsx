import React, { ReactNode } from 'react'
import Head from "next/head"
import Header from '../components/header'
import Footer from '../components/footer'

type Props = {
    children?: ReactNode,
    title?: string,
    pageProps?: Object
}

const defaultPageProps = {
    isShowPageLine: true
}

const Layout = ({children, title="PAGE", pageProps}:Props) => {

    const _props = {...defaultPageProps, ...pageProps}

    return(
        <div className="page-wrapper">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content="CNS Properties, Hamilton, New Zealand"
                />
            </Head>

            {/* Page Header */}
            <Header />
            
            <main id="main">
                {/* START page line */}
                {_props.isShowPageLine && 
                
                    <div className="page-line">
                        <div className="container">
                            <div className="page-line__inner">
                                <div className="page-col"></div>
                                <div className="page-col"></div>
                                <div className="page-col"></div>
                            </div>
                        </div>
                    </div>
                }

                {children}
            </main>
            
            {/* Page footer */}
            <Footer />
        </div>
    )
}

export default Layout