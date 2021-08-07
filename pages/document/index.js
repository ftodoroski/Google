import Head from 'next/head'
import Header from '../../components/document/Header'
import Section from '../../components/document/Section'
import Content from '../../components/document/Content'

function Index() {
    return (
        <div>
            <Head>
                <title>Google Docs</title>
                <meta name="description" content="Google like clone" />
                <link rel="icon" href="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" />
            </Head>

            <Header />
            <Section />
            <Content />
        </div>
    )
}

export default Index
