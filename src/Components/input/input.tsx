import React, { useState } from "react";

export const EntryFiled: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(title);
    }
  };
  return (
    <nav>
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        placeholder="tag"
        onKeyPress={keyPressHandler}
      />
    </nav>
  );
};
