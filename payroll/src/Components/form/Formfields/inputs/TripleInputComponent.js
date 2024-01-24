// import React from 'react';

// const TripleInputComponent = ({ label, values, onChange, textcss, placeholders }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <div style={{ display: 'flex' }}>
//         {Array.from({ length: 3 }).map((_, index) => (
//           <input
//             key={index}
//             type="text"
//             value={values[index] || ""}
//             placeholder={placeholders[index] || ""}
//             onChange={(e) => onChange(index, e.target.value)}
//             className={textcss}
//             style={{ marginRight: '10px' }} // Adjust margin as needed
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TripleInputComponent;

import React from 'react';

const TripleInputComponent = ({ name,label, values, onChange, textcss, placeholders }) => {
  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <input
            name={name}
            key={index}
            type="text"
            value={values[index] || ""}
            placeholder={placeholders[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className={textcss}
            
          />
        ))}
      </div>
    </div>
  );
};

export default TripleInputComponent;


