import React from "react";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "react-loading-skeleton/dist/skeleton.css";

import Task from "@/components/Task";
import { StyledTasksContainer } from "@/components/TaskList/style";
import { getTaskList, updateTaskListOrder } from "@/redux/tasks/action";


const EmptyList = dynamic(() => import("@/components/EmptyList"), { ssr: false });

const TaskList: React.FC<any> = ({ taskList, heading }) => {
  const dispatch = useDispatch();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(taskList);
    const [reorderedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, reorderedTask);

    /* Dispatch an action to update the Redux state with the new order of tasks */
    dispatch(updateTaskListOrder(reorderedTasks));
  };

  React.useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <StyledTasksContainer {...provided.droppableProps} ref={provided.innerRef}>
              {taskList?.map((task: any, index: number) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Task
                        id={task.id}
                        task_name={task.task_name}
                        status={task.status}
                        is_important={task.is_important}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {taskList?.length === 0 && (
                <div className="empty-list">
                  <EmptyList innerText={heading} />
                </div>
              )}
            </StyledTasksContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TaskList;
