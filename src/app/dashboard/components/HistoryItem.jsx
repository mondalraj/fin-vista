// import { useState } from "react";
// import { Card, Text } from "@mantine/core";

// const HistoryItem = ({
//   label,
//   amount,
//   type,
//   id,
//   dateCreated,
//   category
// }) => {
//   const [opened, setOpened] = useState(false);
//   const color =
//     type === "Budget" || type === "Expenses Reset" ? "#69DB7C" : "#FF8787";

//   return (
//     <>
//       <Card
//         shadow="sm"
//         style={{
//           height: "50px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           borderRight: `4px solid ${color}`,
//         }}
//         onClick={() => {
//           setOpened(true);
//         }}
//       >
//         <Text weight={500} size={15}>
//           {label.length > 44 ? label.slice(0, 44) + "..." : label}
//         </Text>
//         <Text size={15} color={color} weight={500}>
//           {type === "Budget" || type === "Expenses Reset" ? "+" : "-"}$
//           {amount.toLocaleString("en-US")}
//         </Text>
//       </Card>
//     </>
//   );
// };

// export default HistoryItem;


import { useState } from "react";

const HistoryItem = ({
 label,
 amount,
 type,
 id,
 dateCreated,
 category
}) => {
 const [opened, setOpened] = useState(false);

 const color = type === "Budget" || type === "Expenses Reset" ? "green-500" : "red-400";

 return (
   <div 
     onClick={() => setOpened(true)} 
     className={`flex justify-between items-center h-12 p-3 border-r-4 border-${type === "Budget" || type === "Expenses Reset" ? "border-green-500" : "border-red-400"} cursor-pointer`}
   >
     <p className="font-semibold text-sm">
       {label.length > 44 ? label.slice(0, 44) + "..." : label}
     </p>
     <p className={`text-sm font-semibold text-${color}`}>
       {type === "Budget" || type === "Expenses Reset" ? "+" : "-"}$
       {amount.toLocaleString("en-US")}
     </p>
   </div>
 );
};

export default HistoryItem;
