import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/custom.css';
import '../public/css/global.css';
import '../public/css/plugin.css';
import '../public/css/templete.css';
import '../public/css/responsive.css';
import "swiper/css/bundle";
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';
import PageLayout from '../components/layout/PageLayout';
import MainNavBarComponent from '../components/navigation/MainNavBarComponent';
import FooterComponent from '../components/footer/FooterComponent';

Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <>
            <PersistGate persistor={store.__persistor} >


                <MainLayout>
                    {/*nav*/}

                    <Head>
                        <link rel="icon" type="image/png" sizes="77x32" href="/favicon.png" />
                        <title>ATC Industries | Premier Engineering Polymer Components Manufacturer</title>
                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta name="language" content="English" />
                        <meta name="title" content="ATC Industries | Premier Engineering Polymer Components Manufacturer" />
                        <meta name="description" content="ATC Industries, a member of the Shah Group of Companies, specializes in manufacturing high-quality engineering polymer components for OEMs in the home appliances, telecom equipment, and automobile sectors. Since 1996, we have provided precision-engineered solutions through injection molding, extrusion, blow molding, and thermoforming processes. Discover our commitment to quality and customer satisfaction with innovative solutions tailored to your needs."/>
                        <meta name="keywords" content="ATC Industries, Shah Group of Companies, Engineering polymer components, Injection molding, Extrusion, Blow molding, Thermoforming, HF-welded fabric parts, OEM solutions, Home appliances components, Telecom equipment parts, Automobile sector components, Precision-engineered solutions, Multi-processing capabilities, PA, PAC, ABS, HIPS, POM, PP, PE, PU, TPE, Thermoformed microwave antenna radomes, Localized radomes India, Plastic fasteners for radomes, Cable fastening products, Fabric radomes, Polycarbonate flute board radomes, Localization project initiative, Kit items, parts, packaging solutions, Cable assemblies, Corrugated tubes, High-quality products, Customer satisfaction, Continuous system improvement, Innovative solutions, Benchmark supplier, Value-added processes, Water inlet hoses, Water exhaust hoses, Refrigerator drain hoses, Extruded and fabricated profiles, Split air conditioner drain pipe assembly, Precision engineering plastic components, Vent kit for clothes dryers, Filter guard for clothes dryers, Filter air cleaner for front-loading clothes dryers, Gutter for FLT clothes washing machine, Stirrers for FLT clothes washers, Adjustable foot for FLT clothes washers, Faucet for water purifier, Connecting elbow for FLT clothes washers, Components for domestic water purifiers, Cable and wire fasteners, Press fit fastening devices, Grommets for power cords, Cable marking ferrules and ties, Radomes for telecom sector, Thermoformed EPS pallets, HIPS sheet material pallets, Lightweight durable pallets, Sustainable packaging solutions." 
                            />
                        <meta name="author" content="ATC Industries" />
                        <meta name="revisit-after" content="15 days" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                   </Head>
                    <MainNavBarComponent />

                    {/*<NavBarComponent/>*/}
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                    <FooterComponent />
                </MainLayout>
            </PersistGate>
        </>
    )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))