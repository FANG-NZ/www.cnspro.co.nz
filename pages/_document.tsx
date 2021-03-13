import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class FFDocument extends Document{
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="cnspro">
                <Head />
                <body>
                    <Main />
                    <NextScript />

                    {/* Include jquery here */}
                    <script src="/js/jquery.min.js"></script>
                    <script src="/js/revolution/js/jquery.themepunch.tools.min.js"></script>
                    <script src="/js/revolution/js/jquery.themepunch.revolution.min.js"></script>
                    <script src="/js/config-revolution.js"></script>
                </body>
            </Html>
        )
    }
}

export default FFDocument