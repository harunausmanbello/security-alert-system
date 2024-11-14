import * as React from "react";
import NextTopLoader from "nextjs-toploader";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#0000FF"
        initialPosition={0.05}
        crawlSpeed={250}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={250}
        shadow="0 0 10px #0000FF,0 0 5px #0000FF"
      />
    </>
  );
}
