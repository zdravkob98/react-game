import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  console.log(data);
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
