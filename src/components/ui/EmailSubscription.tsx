import { useState } from "react";

function EmailSubscription() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="space-y-12">
      <h3 className="font-medium text-base text-[#9F9F9F]">Newsletter</h3>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Address"
          className={`md:w-[200px] border-b-[1px] focus:outline-none placeholder:text-[#9F9F9F] text-sm font-normal ${
            error ? "border-red-500" : "border-black"
          }`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

        <button
          onClick={handleSubmit}
          className="text-sm focus:outline-none font-medium border-b-[1px] border-black"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default EmailSubscription;
