import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const visa = useAppSelector((state) => state.visa);
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold">Review</h2>
      <p>Name: {visa.name}</p>
      <p>Passport: {visa.passport}</p>

      <button
        onClick={() => navigate("/success")}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
