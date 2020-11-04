import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title:string): void
}

export const EntryFiled: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('');
const ref = useRef<HTMLInputElement>(null)


  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };


  const fetchPressHandler = (event: React.MouseEvent) => {
      if (ref.current?.value === '') {
        console.error('ERROR!!')
      } else {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${ref.current!.value}`)
        .then(res => res.json())
        .then(res => props.onAdd(res.data))
      }
      
  };
  return (
    <nav>
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
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
