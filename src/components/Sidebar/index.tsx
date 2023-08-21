import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { taskList } from "@/redux/tasks/selectors";
import { BiSearch } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { LiaListAlt } from "react-icons/lia";
import { MdPendingActions } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import { taskStatus } from "@/enum";
import { clx } from "@/utils/clx";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { setSearchedKeyword, setSearchedTasks } from "@/redux/tasks/action";
import { SidebarContainer } from "@/components/Sidebar/style";

const Sidebar = () => {
  const [searchedQuery, setSearchedQuery] = React.useState("");

  const { asPath } = useRouter();
  const routeName = asPath ? asPath.split("/")[1] : "";

  const taskData = useSelector(taskList);
  const dispatch = useDispatch();
  const { push } = useRouter();

  /* Return total count of important, completed and pending tasks
    {
      is_important: number,
      completed: number,
      pending: number
    }
   */
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

  /* Searched tasks list */
  const searchedData = taskData?.tasks.filter(
    (task) => task?.task_name?.toLowerCase().includes(searchedQuery.toLowerCase())
  );

  const handleSearchedQuery = (e: any) => {
    setSearchedQuery(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setSearchedQuery(e.target.value);
      if (searchedQuery.length > 0) {
        dispatch(setSearchedTasks(searchedData));
        dispatch(setSearchedKeyword(searchedQuery));
        localStorage.setItem("searchedQuery", searchedQuery);
        push("/search");
      } else {
        dispatch(setSearchedTasks([]));
        push("/tasks");
      }
    }
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
            <input
              className="search"
              type="text"
              placeholder="Search..."
              onChange={handleSearchedQuery}
              onKeyDown={handleKeyDown}
              size={24}
            />
            <span>
              <BiSearch size={24} />
            </span>
          </div>
          <div className="sidebar-menu">
            <ul>
              <Link href="/tasks">
                <li className={clx(routeName === "tasks" ? "active" : "")}>
                  <span>
                    <BsSun size={24} color="blue" />
                    <span>All tasks</span>
                  </span>
                  <p>{taskData.tasks.length}</p>
                </li>
              </Link>
              <Link href="/important">
                <li className={clx(routeName === "important" ? "active" : "")}>
                  <span>
                    <AiOutlineStar size={24} color="purple" />
                    <span>Important</span>
                  </span>
                  <p>{countStatus.is_important}</p>
                </li>
              </Link>
              <Link href="/completed">
                <li className={clx(routeName === "completed" ? "active" : "")}>
                  <span>
                    <LiaListAlt size={24} color="green" />
                    <span>Completed</span>
                  </span>
                  <p>{countStatus.completed}</p>
                </li>
              </Link>
              <Link href="/pending">
                <li className={clx(routeName === "pending" ? "active" : "")}>
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
