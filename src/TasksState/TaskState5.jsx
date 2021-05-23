import React, { useState } from "react";

const TaskState5 = () => {
  return (
    <div>
      <InputText min={4} max={7} />
    </div>
  );
};

const InputText = ({ max, min }) => {
  const [currentText, setCurrentText] = useState("");
  const [isWarning, setIsWarning] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    setCurrentText(e.target.value);
    if (e.target.value.length < min) {
      setIsWarning(true);
      setWarning(`Вам нужно ввести минимум ${min} символа`);
    } else if (e.target.value.length > max) {
      setIsWarning(true);
      setWarning(`Нельзя ввести больше чем ${max} символа`);
    } else {
      setIsWarning(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={currentText}
        onChange={(e) => handleChange(e)}
      />
      {isWarning && <p className="warning">{warning}</p>}
    </div>
  );
};

export default TaskState5;
