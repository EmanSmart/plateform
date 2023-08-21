import { useEffect } from "react";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout/layout";

import AOS from "aos";
import 'aos/dist/aos.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
      
    return (
        <Layout>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </Layout>
    );
}
