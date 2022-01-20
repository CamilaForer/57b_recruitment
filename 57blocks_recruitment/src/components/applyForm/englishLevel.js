

const level=[
  {
    value:"",
    label: "Select",
  },
  {
    value:1,
    label: "Basic",
  },
  {
    value:2,
    label: "Intermediate",
  },
  {
    value:3,
    label: "Advanced",
  },
  {
    value:4,
    label: "Fluent",
  }
]
export default level;
// export function SelectEnglishLevel() {
//   const [level, setlevel] = React.useState('');

//   const handleChange = (event) => {
//     setlevel(event.target.value);
//   };
//   return (
//     <div>
//     <FormControl>
//       <Select
//         labelId="English Level"
//         id=""
//         value={level}
//         label="English Level"
//         onChange={handleChange}
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={1}>Basic</MenuItem>
//         <MenuItem value={2}>Intermediate</MenuItem>
//         <MenuItem value={3}>Advanced</MenuItem>
//         <MenuItem value={4}>Fluent</MenuItem>
//       </Select>
      
//       </FormControl>
//       </div>
//   )
// }
