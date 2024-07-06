import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Statistics from '../components/CountUp';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Head>
        <title>My Website</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <Carousel />
        <Statistics />
      </main>
    </div>
  );
}
