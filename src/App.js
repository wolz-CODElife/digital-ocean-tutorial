// Using the useEffect Hook to Manage Server Requests
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>- {item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent



// Optimizing Server Request Performance with the useMemo Hook
// ==============================================================

// import { useEffect, useState, useMemo } from 'react';

// function MyComponent({ postId }) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, [postId]);

//   const title = useMemo(() => data.title, [data]);

//   return (
//     <div>
//       <h2>{title}</h2>
//     </div>
//   );
// }

// export default MyComponent





// Managing Server Request State with the useReducer Hook
// ==============================================================


// import { useReducer } from 'react';

// const initialState = { data: [], loading: false, error: '' };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_DATA_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_DATA_SUCCESS':
//       return { ...state, data: action.payload, loading: false };
//     case 'FETCH_DATA_FAILURE':
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// function MyComponent() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchData = async () => {
//     dispatch({ type: 'FETCH_DATA_REQUEST' });
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
//     } catch (error) {
//       dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//     }
//   };

//   return (
//     <div>
//       { state.loading && <p>Loading...</p>}
//       { state.error ? <p>{state.error}</p> 
//         : <div>
//           {state.data.map((item) => (
//             <div key={item.id}>
//               <h2>{item.title}</h2>
//               <p>{item.body}</p>
//             </div>
//           ))}
//         </div>
//       }
//       <button onClick={fetchData}>Fetch Data</button>
//     </div>
//   );
// }

// export default MyComponent