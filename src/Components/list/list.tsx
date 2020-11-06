import React from "react";

type ListProps = {
  todos: any[]
}

export const List: React.ReactElement<ListProps>, string = ({ todos }: any) => {
  return (
    {
      todos.map(todo => {
        return (
          <ul>
            <li>
              <img src={todo.data.url} alt="" />
            </li>
          </ul>
        )
      })
    }
  )
}




