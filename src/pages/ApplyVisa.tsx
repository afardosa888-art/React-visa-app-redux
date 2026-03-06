import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setVisaData } from "../features/visa/VisaSlice";

export default function ApplyVisa() {
  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = () => {
    dispatch(setVisaData({ name, passport, country }));
    navigate("/review");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Apply Visa</h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Passport"
        value={passport}
        onChange={(e) => setPassport(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
