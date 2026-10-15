import { useEffect, useState } from 'react';

const checks1 = [
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/entity.png', text: 'Regulated Entity' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/lender.png', text: 'Credibility of Lender' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/score.png', text: 'Credit Score' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/loan.png', text: 'Purpose of loan' },
];

const checks2 = [
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/interest.png', text: 'Interest Rate' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/tenure.png', text: 'Loan Tenure' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/fee.png', text: 'Processing Fees' },
  { img: 'https://a1loans.in/wp-content/uploads/2025/07/repayment.png', text: 'Repayment Flexibility' },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const LoanChecksAnimation = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const renderLoop = async () => {
      while (!cancelled) {
        setCount1(0);
        setCount2(0);
        setTitleVisible(false);

        await delay(1000);
        if (cancelled) return;
        setTitleVisible(true);

        for (let i = 1; i <= checks1.length; i++) {
          await delay(500);
          if (cancelled) return;
          setCount1(i);
        }

        for (let i = 1; i <= checks2.length; i++) {
          await delay(1000);
          if (cancelled) return;
          setCount2(i);
        }

        await delay(6000);
      }
    };

    renderLoop();
    return () => {
      cancelled = true;
    };
  }, []);

  const renderItem = (item: { img: string; text: string }) => (
    <div key={item.text} className="flex flex-col items-center justify-center h-32 min-w-0 loan-check-fade">
      <img src={item.img} alt={item.text} className="rounded-xl p-2 w-16 h-16 object-contain bg-white/10" />
      <span className="mt-2 text-center text-sm font-medium w-full h-10 overflow-hidden">{item.text}</span>
    </div>
  );

  return (
    <div className="w-full text-blue-950 dark:text-white">
      <style>{`
        @keyframes loan-check-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .loan-check-fade {
          animation: loan-check-fade 0.5s ease-in-out;
        }
      `}</style>
      <div className="flex flex-col w-full gap-2">
        <div
          className={`font-bold text-center transition-opacity duration-700 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-lg">Don't Miss These 8 Crucial Checks</div>
          <div className="text-lg">Before taking a Loan</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2 min-h-[8rem]">
          {checks1.slice(0, count1).map(renderItem)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2 min-h-[8rem]">
          {checks2.slice(0, count2).map(renderItem)}
        </div>
      </div>
    </div>
  );
};

export default LoanChecksAnimation;
