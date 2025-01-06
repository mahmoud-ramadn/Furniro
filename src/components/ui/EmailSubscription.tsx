import { useState } from 'react';

function EmailSubscription() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    console.log('Subscribed with email:', email);
  };

  return (
    <div className="space-y-12">
      <h3 className="font-medium text-base text-[#9F9F9F]">Newsletter</h3>
      <div>
        <div className="w-full flex     items-end gap-2 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className={`md:w-[200px] border-b-[1px] focus:outline-none placeholder:text-text-links text-sm font-normal pb-1 ${
              error ? 'border-red-500' : 'border-black'
            }`}
          />
          <button
            onClick={handleSubmit}
            className="text-sm focus:outline-none font-medium border-b-[1px] border-black"
          >
            SUBSCRIBE
          </button>
        </div>
        {error && <p className="  text-danger-600 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default EmailSubscription;
