import React from 'react';
import OrderTable from './OrderTable';
import orderData from '../assests/orderData.json'; // Assuming the JSON file is imported

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold"></h1>
      <OrderTable orders={orderData.orders} />
    </div>
  );
};

export default App;