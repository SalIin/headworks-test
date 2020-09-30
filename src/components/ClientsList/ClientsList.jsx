import React, { useContext } from "react";
import { ClientsContext } from "../../providers/ClientsProvider/ClientsProvider";
import { ListItem } from "../ListItem";

export const ClientsList = () => {
  const { clients } = useContext(ClientsContext);
  return (
    <ul className="list-group clients-page__list col-lg-6">
      {clients.map((client) => (
        <ListItem
          key={Date.now() + Math.random() * 10}
          name={client.name}
          surname={client.surname}
          created={client.created}
        />
      ))}
    </ul>
  );
};
