import React from "react";

export const ListItem = ({ name, surname, created }) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <span>
        {name} {surname} • {created}
      </span>
    </li>
  );
};
