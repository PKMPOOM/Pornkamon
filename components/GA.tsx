import React from "react";
import Script from "next/script";
type Props = {};

const GA = (props: Props) => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5X0YS23L16"
      ></Script>

      <Script id="" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5X0YS23L16');
        `}
      </Script>
    </>
  );
};

export default GA;
