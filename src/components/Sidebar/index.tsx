import React, { SyntheticEvent } from "react";
import { SidebarContainer } from "@/components/Sidebar/style";
import { BiSearch, BiListCheck, BiHome } from "react-icons/bi";
import { LiaListAlt } from "react-icons/lia";
import { MdPendingActions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { taskList } from "@/redux/tasks/selectors";
import { taskStatus } from "@/enum";
import Link from "next/link";
import { useRouter } from "next/router";
import { clx } from "@/utils/clx";
import { AiOutlineStar } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { setSearchedTasks } from "@/redux/tasks/action";

const Sidebar = () => {
  const [activeTab, setActiveTab] = React.useState("");
  const [searchedQuery, setSearchedQuery] = React.useState("");

  const taskData = useSelector(taskList);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const countStatus = taskData?.tasks.reduce(
    (acc, task) => {
      if (task.is_important === true) {
        acc.is_important = (acc.is_important || 0) + 1;
      }
      if (task.status === taskStatus.COMPLETED) {
        acc.completed = (acc.completed || 0) + 1;
      }
      if (task.status !== taskStatus.COMPLETED) {
        acc.pending = (acc.pending || 0) + 1;
      }
      return acc;
    },
    { is_important: 0, completed: 0, pending: 0 }
  );

  const searchedData = taskData?.tasks.filter((task) =>
    task?.task_name?.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  React.useEffect(() => {
    if (searchedQuery.length > 0) {
      dispatch(setSearchedTasks(searchedData));
      push("/search");
    } else {
      dispatch(setSearchedTasks([]));
      push("/tasks");
    }
  }, [searchedQuery]);

  const handleSearchedQuery = (e: any) => {
    setSearchedQuery(e.target.value);
  };

  return (
    <>
      <SidebarContainer>
        <aside>
          <div className="sidebar-header">
            <Image src={Logo} alt="logo" width={60} height={60} />
            <span className="header-title">My Todo</span>
          </div>
          <div className="search-input">
            <input className="search" type="text" placeholder="Search..." onChange={handleSearchedQuery} />
            <span>
              <BiSearch size={24} />
            </span>
          </div>
          <div className="sidebar-menu">
            <ul>
              <Link href="/tasks">
                <li className={clx(activeTab === "" ? "active" : "")} onClick={() => setActiveTab("myDay")}>
                  <span>
                    <BsSun size={24} color="blue" />
                    <span>All tasks</span>
                  </span>
                  <p>{taskData.tasks.length}</p>
                </li>
              </Link>
              <Link href="/important">
                <li
                  className={clx(activeTab === "important" ? "active" : "")}
                  onClick={() => setActiveTab("important")}>
                  <span>
                    <AiOutlineStar size={24} color="purple" />
                    <span>Important</span>
                  </span>
                  <p>{countStatus.is_important}</p>
                </li>
              </Link>
              <Link href="/completed">
                <li
                  className={clx(activeTab === "completed" ? "active" : "")}
                  onClick={() => setActiveTab("completed")}>
                  <span>
                    <LiaListAlt size={24} color="green" />
                    <span>Completed</span>
                  </span>
                  <p>{countStatus.completed}</p>
                </li>
              </Link>
              <Link href="/pending">
                <li className={clx(activeTab === "pending" ? "active" : "")} onClick={() => setActiveTab("pending")}>
                  <span>
                    <MdPendingActions size={24} color="orange" />
                    <span>Pending</span>
                  </span>
                  <p>{countStatus.pending}</p>
                </li>
              </Link>
            </ul>
          </div>
        </aside>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
