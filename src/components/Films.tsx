import Film from "./Film";

type FilmsProps = {
  filmsUrls: string[];
};

const Films = ({ filmsUrls }: FilmsProps) => {
  console.log({ filmsUrls });
  return (
    <div>
      {filmsUrls.map((filmUrl) => (
        <Film key={filmUrl} filmUrl={filmUrl} />
      ))}
    </div>
  );
};

export default Films;
