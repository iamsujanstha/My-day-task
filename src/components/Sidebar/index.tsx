import React from "react";
import { SidebarContainer } from "@/components/Sidebar/style";
import { BiSearch } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer className="sidebar">
        <aside>
          <div>
            <input className="search" type="text" placeholder="Search..." />
            <span>
              <BiSearch size={24} />
            </span>
          </div>
          <div className="sidebar__menu">
            <ul>
              <li>
                <span></span>My day
              </li>
              <li>Important</li>
              <li>Tasks</li>
              <li>Pending</li>
              <li>Completed Task</li>
            </ul>
          </div>
        </aside>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
