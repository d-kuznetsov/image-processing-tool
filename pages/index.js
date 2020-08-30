import { useEffect } from "react";
import { useAppContext } from "../context";
import getImgData from "../lib/getImgData";
import Head from "next/head";
import LoadIndicator from "../components/LoadIndicator";
import Viewer from "../components/Viewer";
import Uploader from "../components/Uploader";
import Grid from "../components/Grid";

export default function ImageManager({ initialImages }) {
  const { imageToView, isLoading } = useAppContext();
  return (
    <React.Fragment>
      <Head>
        <title>Image Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <LoadIndicator />}
      {imageToView && <Viewer />}
      <div className="ImageManager">
        <header className="ImageManager-header">
          <section className="ImageManager-toolbar">
            <Uploader />
          </section>
        </header>
        <main className="ImageManager-main">
          <Grid initialItems={initialImages} />
        </main>
        <footer className="ImageManager-footer" />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const initialImages = getImgData();
  return { props: { initialImages } };
}
