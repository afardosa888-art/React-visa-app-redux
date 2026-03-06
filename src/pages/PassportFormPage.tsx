import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setPassportData } from "../features/visa/PassportSlice";

export default function ApplyPassportFormPage() {
  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
    const [country, setCountry] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = () => {
    dispatch(setPassportData({ name, passport, country, expiryDate }));
    navigate("/review");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Apply Passport</h2>

      <label className="block mb-1 font-medium">Expiry Date</label>

      <input
        type="date"
        className="border p-2 w-full mb-3"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />

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
