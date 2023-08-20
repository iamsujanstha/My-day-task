import Head from "next/head";
import Sidebar from "@/components/Sidebar/index";
import MainSection from "@/components/MainSection";

const TaskLayout: React.FC<any> = ({ tasks, heading }) => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo app that hepls to create all day to day tasks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/src/assets/images/logo.png" />
      </Head>
      <main className="main">
        <Sidebar />
        <MainSection tasks={tasks} heading={heading} />
      </main>
    </>
  );
};

export default TaskLayout;
