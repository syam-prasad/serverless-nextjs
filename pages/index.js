import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function Header(){
  return <nav>
    <ul><li><Link href="/submit" prefetch><a>submit</a></Link></li></ul>
  </nav>;
}

function HomePage(props) {
  const {data} = props;
  return <>
    <Header />
    <h1>Hello {data.name}</h1>
    <p>{data.name} is {data.height}cm tall and is of the {data.gender}</p>
    <ul>
      {data.films.map((filmUrl) => {
        const filmid = filmUrl.replace('https://swapi.co/api/films/', '').replace('/', '');
          return <li key={filmUrl}><Link href={`/film?filmId=${filmid}`}><a>{filmid}</a></Link></li>
      }
      )}
    </ul>
  <pre>Hello {JSON.stringify(data, null, '\t')}</pre>
    </>
}

HomePage.getInitialProps = async () => {
    const res = await fetch('https://swapi.co/api/people/1/');
    const data = await res.json();
    console.log(data);
  return {
    data
  }
};

export default HomePage