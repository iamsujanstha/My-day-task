import React from "react";
import { SidebarContainer } from "@/components/Sidebar/style";
import { BiChevronRight, BiSearch, BiListCheck } from "react-icons/bi";
import { LiaListAlt } from "react-icons/lia";
import { MdPendingActions } from "react-icons/md";
import { clx } from "@/utils/clx";

const Sidebar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <SidebarContainer className={clx(toggle ? "hide" : "")}>
        <aside>
          <div className="toggle-sidebar" onClick={(togle) => setToggle(!toggle)}>
            <BiChevronRight size={30} />
          </div>
          <div className="search-input">
            <input className="search" type="text" placeholder="Search..." />
            <span>
              <BiSearch size={24} />
            </span>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <span>
                  <BiListCheck size={24} />
                  <a href="#">My day</a>
                </span>
                <p>1</p>
              </li>
              <li className="active">
                <span>
                  <LiaListAlt size={24} />
                  <a href="#">Completed</a>
                </span>
                <p>2</p>
              </li>
              <li>
                <span>
                  <MdPendingActions size={24} />
                  <a href="#">Pending</a>
                </span>
                <p>2</p>
              </li>
            </ul>
          </div>
        </aside>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
