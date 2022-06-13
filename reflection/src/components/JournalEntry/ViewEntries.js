import React from "react";
import BorderCard from "../../common/BorderCard";

const ViewEntries = (props) => {
  const { id, date, title, content } = props.journalEntry;
  console.log(props.journalEntry);
  return (
    <BorderCard onClick={() => props.onSelect(id)}>
      <h2>{title}</h2>
      <h1>{date}</h1>
    </BorderCard>
  );
};

export default ViewEntries;
