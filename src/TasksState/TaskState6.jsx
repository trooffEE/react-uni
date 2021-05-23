import React, { useState } from "react";

const TaskState6 = () => {
  return (
    <ShowMoreWithText
      listOfText={[
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          soluta asperiores itaque.
        </p>,
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>,
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis
          unde quis quas?
        </p>,
      ]}
    />
  );
};

const ShowMoreWithText = ({ listOfText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {listOfText.map((item, idx) => {
        if (expanded) {
          return item;
        } else if (idx !== 0) {
          return;
        }
        return item;
      })}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Скрыть" : "Показать все"}
      </button>
    </>
  );
};

export default TaskState6;
