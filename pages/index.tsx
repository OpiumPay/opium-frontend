import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import CardStep from '../components/CardStep';

const Home = () => {
  return (
    <div className='px-8 py-0' >

      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className='min-h-screen py-8 w-screen '>

        <div className='grid-cols-12 gap-4 grid' >
            <div className='col-span-2'> 
              <ConnectButton />
              <button className=' bg-blue-600 text-white px-4 border-4 rounded hover:bg-blue-800  drop-shadow-xl mt-2 ' >Registration</button>
            </div>
            <div className='col-span-2'>
              <CardStep stepNumber={1}>
                This is the first step.
              </CardStep>
            </div>
            <div className='col-span-2'>
              <CardStep stepNumber={2}>
                This is the second step.
              </CardStep>
            </div>
            <div className='col-span-2'>
              <CardStep stepNumber={3}>
                This is the third step.
              </CardStep>
            </div>
          </div>
      </main>

      <footer >
      {/* <footer className={styles.footer}> */}
        <a href="https://coria.tech" rel="noopener noreferrer" target="_blank">
          @ 2023 by Coria
        </a>
      </footer>
    </div>
  );
};

export default Home;
