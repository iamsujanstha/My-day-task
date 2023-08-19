import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { StyledTasksContainer } from "@/components/TaskList/style";
import { taskList } from "@/redux/tasks/selectors";
import { getTaskList } from "@/redux/tasks/action";
import { taskType } from "@/types/taskTypes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Task from "@/components/Task";
import ActionModal from "@/components/Modals/ActionModal";

const TaskList = () => {
  const dispatch = useDispatch();
  const taskData = useSelector(taskList);

  const { tasks, isLoading } = taskData;

  const [data, setData] = React.useState<taskType[]>(tasks || []);

  const handleTaskCheckboxChange = (taskId: string) => {
    console.log(taskId);
  };

  React.useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = Array.from(data);
    const [reorderedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, reorderedTask);

    setData(reorderedTasks);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList" direction="vertical">
          {(provided) => (
            <StyledTasksContainer {...provided.droppableProps} ref={provided.innerRef}>
              {tasks?.map((task: taskType, index: number) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Task
                        key={task.id}
                        id={task.id}
                        task_name={task.task_name}
                        status={task.status}
                        handleChange={() => handleTaskCheckboxChange(task.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </StyledTasksContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TaskList;
