import React from "react";

const TaskProps4 = () => {
  return (
    <>
      <Title text="Test" fSize={25} fColor="red"/>
      <Input placeholder="test" value="hehe"/>
    </>
  );
};

const Title = ({ text, fSize, fColor }) => {
  return <h1 style={{ fontSize: `${fSize}px`, color: fColor }}>{text}</h1>;
};


// я не хочу париться со стилями, так как к react это никого отношения не имеет - простите
// если хотите сделать инпуты как в бутстрапе, то прощу welcome в глобальный файл App.css
// и через класс bootsrap-input стилизуйте, как хотите
const Input = ({ type, placeholder, value }) => {
  return (
    <input
      className="bootstrap-input"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TaskProps4;
