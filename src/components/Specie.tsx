import useSpecie from "../hooks/useSpecie";

type SpecieProps = {
  specieUrl: string;
};

const Specie = ({ specieUrl }: SpecieProps) => {
  const { data, isLoading, error } = useSpecie({ specieUrl });
  if (isLoading) {
    return <>Spinner...</>;
  }

  if (error) {
    return <>Não foi possível trazer as informações da espécie</>;
  }
  return <div>{data?.name}</div>;
};

export default Specie;
