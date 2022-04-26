import React, { useState } from "react";
const banks = [
  { bank: "Access (Diamond) Bank", code: "*901*00# or *426*00#" },
  { bank: "ALAT Bank", code: "*945*0#" },
  { bank: "Fidelity Bank", code: "*770*0#" },
  { bank: "FCMB", code: "*329*00#" },
  { bank: "First Bank", code: "*894*00#" },
  { bank: "GTBank", code: "*737*6*1#" },
  { bank: "Heritage Bank", code: "*322*030#" },
  { bank: "Keystone Bank", code: "*7111*1#" },
  { bank: "Stanbic IBTC", code: "*909*1*1#" },
  { bank: "Polaris Bank", code: "*833*6#" },
  { bank: "Sterling Bank", code: "*822*6#" },
  { bank: "UBA", code: "*919*00#" },
  { bank: " Unity Bank", code: "*7799#" },
  { bank: "Union Bank", code: "*826*4#" },
  { bank: "WEMA Bank", code: "*945*0#" },
  { bank: "Zenith Bank", code: "*966*00#" },
];
function App() {
  const [selectedBank, setSelectedBank] = useState(banks[0].bank);
  const [displayedCode, setDisplayedCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //look up bank in banks and return the value of code
    const bankCode = banks.find((bank) => bank.bank === selectedBank).code;
    setDisplayedCode(bankCode);
  };
  return (
    <div className="grid place-items-center">
      <div className="w-10/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-6/12">
        <h1 className="text-3xl font-semibold text-blue-400">
          Select a Bank Provider
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <select
            className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer "
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            {banks.map((bank, i) => (
              <React.Fragment key={i}>
                <option value={bank.bank}>{bank.bank}</option>
              </React.Fragment>
            ))}
          </select>
          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Reveal Code
          </button>
        </form>
        {displayedCode && (
          <div>
            <p className="mt-2 font-bold text-lg">Dial {displayedCode}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
