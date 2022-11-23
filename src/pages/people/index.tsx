import Loading from "../../components/Loading";
import { useQuery } from "@apollo/client";
import { GET_ONE_PEOPLE } from "../../api/query";
import { useParams, useNavigate } from "react-router-dom";
import { People } from "../../utils/types/people";
import { Link } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const params = useParams<{ userId: string }>();

  const { data, loading } = useQuery<{
    one_person: People;
  }>(GET_ONE_PEOPLE, {
    variables: {
      id: params.userId,
    },
  });

  if (loading) return <Loading />;

  const plural =
    data?.one_person.gender === "male"
      ? "his"
      : data?.one_person.gender === "female"
      ? "her"
      : "her/his";

  return (
    <>
      <div className="w-4/6 mx-auto text-white flex flex-col gap-2">
        <p>{data?.one_person.name}</p>
        <p>
          🧍{data?.one_person.height} <span className="text-white/50">cm</span>
        </p>
        <p>🦰 {data?.one_person.hair_color}</p>
        <p>👀 {data?.one_person.eye_color}</p>
        <p>👩🏿‍🤝‍👩🏻 {data?.one_person.skin_color}</p>
        <Link to={`/planet/${params.userId}`}>
          <button className="border border-green-300/20 rounded-full px-4 py-1 mt-3">
            <span>🪐 See {plural} planets</span>
          </button>
        </Link>

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

export default User;
