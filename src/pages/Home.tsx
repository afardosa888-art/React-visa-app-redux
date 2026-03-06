import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">Visa Application</h1>
      <p className="mt-4">Welcome to the visa system</p>

      <Link to="/apply" className="text-blue-600 underline block mt-2">
        Go to Visa Page
      </Link>

      <br />

      <h1 className="text-3xl font-bold">Passport Application</h1>
      <p className="mt-4">Welcome to the passport system</p>

      <Link to="/apply_passport" className="text-blue-600 underline block mt-2">
        Go to Passport Page
      </Link>
    </div>
  );
}
