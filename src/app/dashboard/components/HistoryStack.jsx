import HistoryItem from "./HistoryItem";
import HistoryContext from "../(store)/HistoryContext";
import { useContext } from "react";

const HistoryStack = () => {
 const { history } = useContext(HistoryContext);

 console.log(history)

 return (
   <div className="w-[500px]">
     <p className="text-lg text-gray-100">
       Transaction History
     </p>
     <hr className="my-2 border-gray-700" />
     <div className="overflow-auto w-[100%] h-64 p-4">
       <div>
         {history.map((item) => {
           return (
             <div
               key={item.id}
               className="bg-gray-900 p-2 my-2 rounded-md"
             >
               <HistoryItem
                id={item.id}
                label={item.label}
                amount={item.amount}
                type={item.type}
                dateCreated={item.dateCreated}
                category={item.category}
              />
             </div>
           );
         })}
       </div>
     </div>
   </div>
 );
};

export default HistoryStack;
