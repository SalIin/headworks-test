import React, { createContext, useState } from "react";
export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const params = { clients, setClients };
  return (
    <ClientsContext.Provider value={params}>{children}</ClientsContext.Provider>
  );
};
