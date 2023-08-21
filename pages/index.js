import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/Home.module.css";

import HomeSlider from "../components/layout/home-slider";
import HomeServices from "../components/layout/home-services";
import Cities from "../components/layout/cities";
import Counterup from "../components/layout/counterup";
import Faq from "../components/layout/faq";

export default function Home() {
    const { data: session, status } = useSession();
    console.log(session);
    return (
        <>
            <main>
                <HomeSlider />
                <HomeServices />
                <Cities />
                <Counterup />
                <Faq />
            </main>
        </>
    );
}
