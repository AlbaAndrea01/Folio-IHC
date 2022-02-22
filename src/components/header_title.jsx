import Head from "next/head";
import React from "react";

const HeaderTitle =({title}) =>{
    return(
        <Head>
            <title>{title} </title>
        </Head>
);
};

export default HeaderTitle;