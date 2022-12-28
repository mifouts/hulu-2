import Head from 'next/head'
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import Results from "../Components/Results";
import Requests from '../utility/Requests';
import { useRouter } from "next/router";

export default function Home({ data }: {data: any}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results data={data} />
    </div>
  );
}


export async function getServerSideProps() {

  const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=4c63251ece09180b50722dc870eaf493`)
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}


/* export async function getServerSideProps() {
  const API_KEY = '4c63251ece09180b50722dc870eaf493';
  const movieId = 550;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();

  return {
    props: {
      movie: data,
    }
  }
}*/







