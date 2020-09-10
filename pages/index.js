import { useAppContext } from "../context";
import { getDataSource } from "../dataSource";
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
      <div className="flex flex-col min-h-screen">
        <header className="flex-center flex-shrink-0 h-24 bg-blue-100">
          <section className="container flex-center">
            <Uploader />
          </section>
        </header>
        <main className="container flex-grow self-center pt-4">
          <Grid initialItems={initialImages} />
        </main>
        <footer className="h-10 bg-blue-100" />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const dataSource = await getDataSource();
  const initialImages = dataSource.getState()["images"];
  return { props: { initialImages } };
}
