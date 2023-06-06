import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal'

// Interface
import { ITask } from './interfaces/Task';

function App() {

    const [taskList, setTaskList] = useState<ITask[]>([])
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

    const deleteTask = (id: number) => {
        setTaskList(
            taskList.filter(task => {
                return task.id !== id
            })
        )
    }

    const hideOrShowModal = (display: boolean) => {
        const modal = document.querySelector("#modal")
        if (display) {
            modal!.classList.remove("hide")
        } else {
            modal!.classList.add("hide")
        }
    }

    const editTask = (task: ITask): void => {
        hideOrShowModal(true)
        setTaskToUpdate(task)
    }

    const updateTask = (id: number, title: string, difficulty: number) => {
        const updatedTask: ITask = { id, title, difficulty }

        const updatedItems = taskList.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task
        })

        setTaskList(updatedItems)

        hideOrShowModal(false)
    }

    return (
        <div>
            <Modal
                children={
                    <TaskForm
                        btnText="Edit task"
                        taskList={taskList}
                        task={taskToUpdate}
                        handleUpdate={updateTask}
                    />
                }
            />
            <Header />
            <main className="min-h-[80vh] mx-auto max-w-4xl flex justify-center gap-9">
                <div
                    className="w-1/4"
                >
                    <TaskForm
                        btnText="Create task"
                        taskList={taskList}
                        setTaskList={setTaskList}

                    />
                </div>

                <div className="w-3/4">
                    <TaskList
                        taskList={taskList}
                        handleDelete={deleteTask}
                        handleEdit={editTask}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
