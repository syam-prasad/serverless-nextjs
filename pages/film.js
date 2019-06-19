import fetch from 'isomorphic-unfetch';

function FilmPages(props) {
  const {data} = props;
  return <>
    <h1>{data.title}</h1>
    <p>Directed by {data.director}</p>
  </>
}

FilmPages.getInitialProps = async ({query}) => {
  const {filmId} = query;
  const res = await fetch(`https://swapi.co/api/films/${filmId}/`);
  const data = await res.json();
  return {
    data
  }
};
export default FilmPages;