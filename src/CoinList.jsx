// ...
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CoinList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //         {
  //           params: {
  //             start: 1,
  //             limit: 10,
  //             convert: 'USD',
  //           },
  //           headers: {
  //             'X-CMC_PRO_API_KEY': 'd1c2a97c-03c8-472c-8cfb-1cbc45efae28',
  //           },
  //         }
  //       );

  //       setCryptoData(response.data.data);
  //       setLoading(false); // Set loading to false after data is fetched
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false); // Set loading to false in case of an error
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api', {
          params: {
            start: 1,
            limit: 10,
            convert: 'USD',
          },
          headers: {
            'X-CMC_PRO_API_KEY': 'd1c2a97c-03c8-472c-8cfb-1cbc45efae28',
          },
        });
  
        setCryptoData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>CryptoFinance App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cryptoData.map((crypto) => (
            <li key={crypto.id}>
              <strong>Name:</strong> {crypto.name} |{' '}
              <strong>Symbol:</strong> {crypto.symbol} |{' '}
              <strong>Price:</strong> ${crypto.quote.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinList;

// src/components/CryptoList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CoinList = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//           {
//             params: {
//               start: 1,
//               limit: 10, // You can adjust the limit based on your requirements
//               convert: 'USD',
//             },
//             headers: {
//               'X-CMC_PRO_API_KEY': 'd1c2a97c-03c8-472c-8cfb-1cbc45efae28',
//             },
//           }
//         );

//         setCryptoData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>CryptoFinance App</h1>
//       <ul>
//         {cryptoData.map((crypto) => (
//           <li key={crypto.id}>
//             <strong>Name:</strong> {crypto.name} | <strong>Symbol:</strong>{' '}
//             {crypto.symbol} | <strong>Price:</strong> ${crypto.quote.USD.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CoinList;



// // src/components/CoinList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CoinList = () => {
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.coinbase.com/v2/prices/spot?currency=USD'
//         );
//         setCoins(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>CoinFinance App</h1>
//       <ul>
//         {coins && (
//           <li>
//             <strong>Symbol:</strong> {coins.base}
//           </li>
//         )}
//         {coins && (
//           <li>
//             <strong>Price:</strong> {coins.amount} {coins.currency}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default CoinList;
