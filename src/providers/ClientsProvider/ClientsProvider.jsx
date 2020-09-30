import React, { createContext, useState } from "react";
import { clients as clientsS } from "../../data/clients-db";
export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState(clientsS);
  const params = { clients, setClients };
  return (
    <ClientsContext.Provider value={params}>{children}</ClientsContext.Provider>
  );
};
