import CountUp from 'react-countup';

const Statistics = () => (
  <div className="flex flex-col items-center mt-10">
    <h2 className="text-3xl font-bold">Helping a local business reinvent itself</h2>
    <div className="flex space-x-8 mt-4">
      <CountUp end={2500000} duration={3} className="text-2xl"/>
      <CountUp end={40000} duration={3} className="text-2xl"/>
      <CountUp end={300} duration={3} className="text-2xl"/>
    </div>
  </div>
);

export default Statistics;
