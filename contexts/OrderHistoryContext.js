import React, { createContext, useContext, useState } from 'react';

const OrderHistoryContext = createContext();

export const useOrderHistory = () => useContext(OrderHistoryContext);

export const OrderHistoryProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => setOrders(prev => [...prev, order]);

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};