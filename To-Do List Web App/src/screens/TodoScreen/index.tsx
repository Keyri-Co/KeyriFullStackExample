import { FC, useEffect, useState, ChangeEvent } from "react";
import _ from "lodash";

import { Button, Input } from "../../components";
import { COLORS } from "../../utils/colors";
import { userAPI } from "../../utils/api";
import { ButtonStylePreset, ITodo } from "../../utils/types";
import IAdminScreenProps from "./props";
import {
  AdminHeading,
  AdminTitle,
  AdminWrapper,
  RegisteredProductBlock,
  PhotoBlockForm,
  ActivityIndicator,
  BlurBackground,
  TodoItem,
  TodoList,
} from "./styles";

export const TodoScreen: FC<IAdminScreenProps> = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setName(e.currentTarget.value);
  };

  const onCreateTodo = async () => {
    if (name) {
      setIsFetching(true);
      try {
        const { id, title } = await userAPI.addTodo(name);
        setTodoList([{ _id: id, title }, ...todoList]);
        setName("");
      } catch (err) {
        alert(err.message);
      } finally {
        setIsFetching(false);
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    userAPI.getTodoList().then((data) => setTodoList(data.userTodoLists));
  }, []);

  return (
    <AdminWrapper>
      <AdminHeading>Todo</AdminHeading>

      {isFetching && (
        <BlurBackground>
          <ActivityIndicator
            type="Oval"
            color={COLORS.ELECTRIC_VIOLET}
            width={150}
            height={150}
          />
        </BlurBackground>
      )}

      <PhotoBlockForm>
        <Input
          placeholder="Todo name"
          value={name}
          onChange={onChangeName}
          error={error}
        />
      </PhotoBlockForm>

      <Button
        onClick={onCreateTodo}
        title="Create"
        preset={ButtonStylePreset.BigButtonWithBackground}
      />

      {!todoList?.length ? (
        <AdminTitle>You don’t have records yet.</AdminTitle>
      ) : (
        <>
          <AdminTitle>Todo list</AdminTitle>
          <TodoList>
            {todoList.map(({ _id, title }) => (
              <TodoItem key={_id}>{title}</TodoItem>
            ))}
          </TodoList>
        </>
      )}

      <RegisteredProductBlock></RegisteredProductBlock>
    </AdminWrapper>
  );
};
