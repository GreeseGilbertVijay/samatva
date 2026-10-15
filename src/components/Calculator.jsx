import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState(24.75);
  const [errors, setErrors] = useState({ loanAmount: '', tenure: '' });
  const [emiData, setEmiData] = useState([]);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    drawPieChart(totalInterest, parseFloat(loanAmount));
  }, [totalInterest, loanAmount]);

  const validateLoanAmount = () => {
    const amount = parseFloat(loanAmount);
    if (isNaN(amount) || amount < 15000 || amount > 100000) {
      setErrors((prev) => ({ ...prev, loanAmount: 'Please enter an amount between ₹15,000 and ₹1,00,000' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, loanAmount: '' }));
    return true;
  };

  const validateTenure = () => {
    const months = parseInt(tenure);
    if (isNaN(months) || months < 3 || months > 18) {
      setErrors((prev) => ({ ...prev, tenure: 'Please enter a tenure between 3 and 18 months' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, tenure: '' }));
    return true;
  };

  const calculateEMI = () => {
    const validLoan = validateLoanAmount();
    const validTenure = validateTenure();

    if (!validLoan || !validTenure) return;

    const principal = parseFloat(loanAmount);
    const months = parseInt(tenure);
    const r = interestRate / 1200;
    const emi = principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);

    let balance = principal;
    let interestSum = 0;
    const tableData = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * r;
      const principalPaid = emi - interest;
      balance -= principalPaid;
      interestSum += interest;

      tableData.push({
        no: i,
        outstanding: Math.round(Math.max(balance, 0)),
        interest: Math.round(interest),
        principal: Math.round(principalPaid),
        emi: Math.round(emi),
      });
    }

    setEmiData(tableData);
    setTotalInterest(Math.round(interestSum));
    setTotalPayable(Math.round(emi * months));
  };

  const resetForm = () => {
    setLoanAmount('');
    setTenure('');
    setInterestRate(24.75);
    setErrors({ loanAmount: '', tenure: '' });
    setEmiData([]);
    setTotalInterest(0);
    setTotalPayable(0);
  };

  const drawPieChart = (interest, principal) => {
    const canvas = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    const total = interest + principal;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (total === 0) return;

    const interestAngle = (interest / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 80, 0, 2 * Math.PI - interestAngle);
    ctx.fillStyle = '#FFA500';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 80, 2 * Math.PI - interestAngle, 2 * Math.PI);
    ctx.fillStyle = '#EA5F13';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/2 bg-blue-500 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">EMI Calculator</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Loan Amount (₹50,000 - ₹2,00,000)</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 text-blue-950 rounded-md"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            onBlur={validateLoanAmount}
          />
          {errors.loanAmount && <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Interest Rate</label>
          <div className="flex gap-4">
            {[24.75, 27.5, 29.25].map((rate) => (
              <label key={rate} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="interestRate"
                  value={rate}
                  checked={interestRate === rate}
                  onChange={() => setInterestRate(rate)}
                  className="accent-orange-500 text-blue-950"
                />
                {rate}%
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Tenure (6-24 Months)</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 text-blue-950 rounded-md"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            onBlur={validateTenure}
          />
          {errors.tenure && <p className="text-red-500 text-sm mt-1">{errors.tenure}</p>}
        </div>
        <div className="flex justify-between gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full" onClick={calculateEMI}>Calculate</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-blue-950 px-4 py-2 rounded w-full" onClick={resetForm}>Reset</button>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-blue-500 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">EMI Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Month</th>
                <th className="p-2 border">Outstanding</th>
                <th className="p-2 border">Interest</th>
                <th className="p-2 border">Principal</th>
                <th className="p-2 border">EMI</th>
              </tr>
            </thead>
            <tbody>
              {emiData.length > 0 ? (
                emiData.map((row, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border p-2">{row.no}</td>
                    <td className="border p-2">₹ {row.outstanding}</td>
                    <td className="border p-2">₹ {row.interest}</td>
                    <td className="border p-2">₹ {row.principal}</td>
                    <td className="border p-2">₹ {row.emi}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan="5">No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <canvas id="pieChart" width="200" height="200" className="bg-blue-500 " />
          <div className="text-sm">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-orange-500 mr-2 rounded"></div>
              Total Interest: ₹{totalInterest}
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-300 mr-2 rounded"></div>
              Total Payable: ₹{totalPayable}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
