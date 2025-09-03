import { useEffect, useState } from "react";
import { getTodos, toggleFavorite, createTodo } from "../../lib/todos";
import { Button, Card, Search } from "../../components";
import styles from "./Todos.module.scss";
import { Todo } from "../../types/Todo";

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState<string>("");

  // Estados para o novo Todo
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async () => {
      const payload = await getTodos();
      const sorted = payload.sort((a, b) =>
        a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
      );
      setTodos(sorted);
    };

    fetchTodos();
  }, []);

  const handleToggleFavorite = async (id: number) => {
    const updated = await toggleFavorite(id);
    setTodos((prev) =>
      prev
        .map((todo) => (todo.id === id ? updated : todo))
        .sort((a, b) =>
          a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
        )
    );
  };

  const handleAddTodo = async () => {
  if (!newTitle.trim()) return;

  try {

    const randomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;

    const newTodo = await createTodo({
      title: newTitle,
      description: newDescription,
      color: randomColor, 
      favorite: false, 
    });

    setTodos((prev) =>
      [newTodo, ...prev].sort((a, b) =>
        a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
      )
    );

    setNewTitle("");
    setNewDescription("");
  } catch (err) {
    console.error("Failed to create todo:", err);
  }
};

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.Todos}>
      <main className={styles.main}>
        <Search
          placeholder="Search todos"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />

        {/* Formulário para novo Todo */}
        <div className={styles.newTodoForm}>
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Button text="Add new todo" onClick={handleAddTodo} />
        </div>

        {/* Lista de todos */}
        {filteredTodos.map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            style={{ borderLeft: `8px solid ${todo.color}` }}
          >
            <p>{todo.description}</p>
            <Button
              text={todo.favorite ? "★ Favorite" : "☆ Favorite"}
              onClick={() => handleToggleFavorite(todo.id)}
            />
          </Card>
        ))}
      </main>
    </div>
  );
};

export default TodosPage;
