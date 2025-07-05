import React from "react";

// 👶 Child component that only depends on 'name'
const Child = React.memo(({ name }) => {
    console.log('👶 Child rendered');
    return <div>Child: {name}</div>;
});

// const Child = ({ name }) => {
//     console.log('👶 Child rendered');
//     return <div>Child: {name}</div>;
// };

export default Child