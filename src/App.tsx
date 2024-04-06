import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";
import AddItemForm from "./AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksStateType = {
    [key: string]: TaskType[]
}

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    //BLL

    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: "What to learn", filter: "All"},
        {id: todolistID2, title: "What to buy", filter: "All"}
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false}
        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })

    const removeTask = (todolistID: string, taskId: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(task => task.id !== taskId)})
    }

    const addTask = (todolistID: string, title: string) => {
        const newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    const changeTaskStatus = (todolistID: string, id: string, newIsDone: boolean) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(t => t.id === id ? {...t, isDone: newIsDone} : t)})
    }

    //UI

    const getFilteredTasks = (todolistID: string, filterValue: FilterValuesType): TaskType[] => {
        switch (filterValue) {
            case "Active":
                return tasks[todolistID].filter(task => !task.isDone)
            case "Completed":
                return tasks[todolistID].filter(task => task.isDone)
            default:
                return tasks[todolistID]
        }
    }


    function changeFilter(todolistID: string, filter: FilterValuesType) {
        const newTodolists = todolists.map(tl => {
            return tl.id === todolistID ? {...tl, filter} : tl
        })
        setTodolists(newTodolists)
    }

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistID))
        delete tasks[todolistID]
        setTasks({...tasks})
    }

    const addTodolist = (title: string) => {
        const todolistID = v1()
        const newTodolist: TodolistsType = {id: todolistID, title: title, filter: 'All'}
        setTodolists([newTodolist, ...todolists])
        setTasks({...tasks, [todolistID]: []})
    }

    const updateTask = (todolistID: string, taskID: string, title: string) => {
        const newTodolistTasks = {
            ...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskID ? {...t, title} : t)
        }
        setTasks(newTodolistTasks)
    }

    const updateTodolist = (todolistID: string, title: string) => {
        const newTodolist = todolists.map(tl => tl.id === todolistID ? {...tl, title} : tl)
        setTodolists(newTodolist)
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {todolists.map(tl => {
                const tasksForTodoList: TaskType[] = getFilteredTasks(tl.id, tl.filter)

                return <TodoList
                    key={tl.id}
                    todolistID={tl.id}
                    todoListTitle={tl.title}
                    tasks={tasksForTodoList}
                    addTask={addTask}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    changeTaskStatus={changeTaskStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    updateTask={updateTask}
                    updateTodolist={updateTodolist}
                />
            })}

        </div>
    );
}

export default App;
