import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
    () => import('../components/crisp'),
    { ssr: false }
)


class Crisp extends React.Component {
    componentDidMount() {
        // Include the Crisp code here, without the <script></script> tags
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "a440783a-89ae-4110-b23f-37aa59ddb5f5";

        (function () {
            var d = document;
            var s = d.createElement("script");

            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    }

    render() {
        return null;
    }
}
export default Crisp