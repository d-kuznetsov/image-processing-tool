import { useState } from 'react';
import Head from "next/head";
import LoadIndicator from '../components/LoadIndicator';
import Viewer from '../components/Viewer';
import Uploader from "../components/Uploader";
import Grid from "../components/Grid";
import getImgData from '../lib/getImgData';
import axious from "axios";

export default function ImageManager({ initialImgData }) {
  const [imgData, setImgData] = useState(initialImgData);
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImgData = () => {
    setLoading(true);
    axious.get(`api/images`).then(res => {
      setImgData(res.data);
      setLoading(false);
    });
  }

  return (
    <React.Fragment>
      {loading && <LoadIndicator />}
      {imgSrc && <Viewer src={imgSrc} onClose={() => { setImgSrc(null) }} />}
      <Head>
        <title>Image Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='ImageManager'>
        <header className='ImageManager-header'>
          <section className='ImageManager-toolbar'>
            <Uploader
              beforeImgUpload={() => { setLoading(true) }}
              afterImgUpload={fetchImgData}
            />
          </section>
        </header>
        <main className='ImageManager-main'>
          <Grid items={imgData} setImgSrc={setImgSrc} />
        </main>
        <footer className='ImageManager-footer'></footer>
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const initialImgData = getImgData();
  return { props: { initialImgData } };
}