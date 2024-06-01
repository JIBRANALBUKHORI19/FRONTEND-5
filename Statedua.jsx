import { useState } from "react";
import Layout from "../Componen/Layout";

function Statedua() {
    const [bilangan1, setbilangan1] = useState(0)
    const [bilangan2, setbilangan2] = useState(0)
    const [hasil, sethasil] = useState(0)

    const incrementBilangan1 = () => {
        sethasil (parseInt(bilangan1) + parseInt(bilangan2))
    }
    const incrementBilangan2 = () => {
        sethasil (parseInt(bilangan1) - parseInt(bilangan2))
    }
    const incrementBilangan3 = () => {
        sethasil (parseInt(bilangan1) * parseInt(bilangan2))
    }
    const incrementBilangan4 = () => {
        sethasil (parseInt(bilangan1) / parseInt(bilangan2))
    }
    return ( 
        <>
        <Layout>
            <p>
                Bilangan 1 : <input type="text" onChange={(e) => setbilangan1(e.target.value)}/></p>
            <p>Bilangan 2 : <input type="text" onChange={(e) => setbilangan2(e.target.value)}/></p>
            <p>Hasil : {hasil}</p>

            <button 
            type="button" 
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={incrementBilangan1}> 
             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             TAMBAH
             </span></button>
             <button 
            type="button" 
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={incrementBilangan2}> 
             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             KURANG
             </span></button>
             <button 
            type="button" 
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={incrementBilangan3}> 
             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             KALI
             </span></button>
             <button 
            type="button" 
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
             onClick={incrementBilangan4}> 
             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             BAGI
             </span></button>
        </Layout>
        </>
     );
}

export default Statedua;