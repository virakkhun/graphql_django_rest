import Loading from "../components/Loading";
import { GET_ALL_PEOPLES } from "../api/query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
function App() {
  const { data, loading } = useQuery<{
    persons: {
      results: {
        name: string;
        height: string;
      }[];
    };
  }>(GET_ALL_PEOPLES);

  if (loading) return <Loading />;

  return (
    <>
      <div className="my-6 w-4/6 mx-auto">
        <p className="font-bold text-sky-400 mb-4">List of peoples</p>
        <div className="grid grid-cols-2 gap-3">
          {data?.persons.results.map((r, i) => (
            <div
              key={i}
              className="p-2 bg-gray-900/20 border border-white/10 shadow-lg text-white"
            >
              <Link to={`people/${i + 1}`}>
                <div className="flex flex-col gap-1">
                  <p>{r.name}</p>
                  <p>
                    🧍{r.height} <span className="text-white/50">cm</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
