import { useQuery } from "@apollo/client";
import { GET_PLANET } from "../../api/query";
import { Planet as PlanetSchema } from "../../utils/types/planet";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Planet = () => {
  const navigate = useNavigate();
  const params = useParams<{ planetId: string }>();

  const { data, loading } = useQuery<{ planet: PlanetSchema }, { id: string }>(
    GET_PLANET,
    {
      variables: {
        id: params.planetId!,
      },
    }
  );

  if (loading) return <Loading />;

  return (
    <>
      <div className="w-4/6 mx-auto text-white my-10 flex flex-col gap-2">
        <p className="text-green-400 text-2xl font-bold">{data?.planet.name}</p>
        <p>{data?.planet.gravity}</p>
        <p> 👪 {data?.planet.population} of populations</p>
        <p> 🏠 {data?.planet.residents.length} residents</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-10 border border-white/10 py-2 px-6 text-red-300 max-w-fit"
        >
          {`<-`}
        </button>
      </div>
    </>
  );
};

export default Planet;
