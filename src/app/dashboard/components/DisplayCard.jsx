import React from 'react';

const DisplayCard = ({ label, amount, color }) => {
 return (
   <div className="shadow-sm p-10 mb-10 h-56 flex flex-col items-center justify-center gap-5 bg-slate-900 rounded-xl">
     <div className="font-semibold text-3xl mt-2">
       {label}
     </div>
     <div className={`mt-1 text-3xl text-${color} font-semibold`}>
       ${amount.toLocaleString("en-US")}
     </div>
   </div>
 );
};

export default DisplayCard;
