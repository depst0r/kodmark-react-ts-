import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

export const EntryFiled: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const fetchPressHandler = (event: React.MouseEvent) => {
    if (title === '') {
      console.error('error')
    } else {
      fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${title}`)
        .then(res => res.json())
        .then(res => props.onAdd(res))
    }

  };
  return (
    <nav>
      <input
        onChange={changeHandler}
        value={title}
        type="text"
      />
      <input
        type="button"
        onClick={fetchPressHandler}
        value="Загрузить"
      />
    </nav>
  );
};
