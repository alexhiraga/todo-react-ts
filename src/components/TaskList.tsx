import React from 'react'
import { FaPencilAlt, FaTrash } from "react-icons/fa";

// interfaces
import { ITask } from '../interfaces/Task'

interface Props {
    taskList: ITask[];
    handleDelete(id: number): void;
    handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
    return (
        <div className="bg-neutral-100 rounded-lg p-6">
            {taskList.length > 0 ? (
                taskList.map((task) => (
                    <div key={task.id} className="bg-neutral-50 rounded pt-4 mb-5">
                        <div className="flex justify-between gap-3 px-4">
                            <div>
                                <p>{task.title}</p>
                            </div>

                            <div className="flex gap-3 align-middle my-auto">
                                <button className="bg-teal-400 rounded p-2" onClick={() => handleEdit(task)}>
                                    <FaPencilAlt className="text-white cursor-pointer" />
                                </button>

                                <button className="bg-red-400 rounded p-2" onClick={() => {handleDelete(task.id)}}>
                                    <FaTrash className="text-white cursor-pointer" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span
                                className="text-neutral-400 text-xs"
                                style={{ marginLeft: `${task.difficulty * 10 - 13}%` }}
                            >
                                Difficulty: {task.difficulty}
                            </span>
                            <div
                                className="h-1 rounded-full"
                                style={{
                                    width: `${task.difficulty * 10}%`,
                                    backgroundColor: task.difficulty < 4 ? 'green' : task.difficulty < 7 ? 'orange' : 'red'
                                }}
                            >
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No tasks</p>
            )}
        </div>
    )
}

export default TaskList