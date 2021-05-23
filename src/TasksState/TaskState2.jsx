import React, { useState } from "react";

const TaskState2 = () => {
  const [hidden, isHidden] = useState(false);

  return (
    <div>
      <button onClick={() => isHidden(!hidden)}>
        {hidden ? "Показать" : "Скрыть"}
      </button>
      {!hidden && <p>Текст!</p>}
    </div>
  );
};

export default TaskState2;
