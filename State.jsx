import { useState } from "react";
import Layout from "../Componen/Layout";

function State() {
    const [bilangan, setbilangan] = useState(0)
    let angka = 0;
    const incrementBilangan = () => {
        setbilangan(bilangan + 1)
        angka = angka + 1
        console.log(bilangan)
        console.log(angka)
    }
    return (
        <>
        <Layout>
            <p>Bilangan : {bilangan}</p>
            <p>Angka : {angka}</p>
            <button type="button" onClick={incrementBilangan}>clik</button>
        </Layout>
        </>
      );
}

export default State;