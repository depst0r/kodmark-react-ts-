import React, { useState } from "react";
import { isThisTypeNode } from "typescript";

export const EntryFiled: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const fetchPressHandler = (event: React.MouseEvent) => {
      if (title === '') {
        console.log('er')
      } else {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${title}`)
        .then(res => res.json())
        .then(res => console.log(res))
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
