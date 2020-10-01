import React from "react";
import { AlertMessage } from "../../atoms/AlertMessage";
import { ListItem } from "../ListItem";
import { useSelector } from "react-redux";
import { getClients } from "./selectors";

export const ClientsList = () => {
  const clients = useSelector(getClients);
  if (!clients.length) {
    return <AlertMessage />;
  }
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
