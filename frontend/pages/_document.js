import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Freelacing services app for Wasify" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument