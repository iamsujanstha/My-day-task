import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SidebarContainer = styled.aside`
    background-color: #f3f3f3;
    height: 100vh;
    width: 20%;
    padding-top: 20px;
    transition: all 0.3s ease-in-out;
    
    &.hide{
        width: 10px;
        

        .search-input{
            opacity:0;
        }

        .sidebar-menu{
            opacity:0;
        }

        .toggle-sidebar{
            transform: rotate(0deg);
        }
    }

     @media (max-width: 968px) {
        visibility: hidden;
    }

    aside{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        position: relative;

        .toggle-sidebar{
            position: absolute;
            right: -16px;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background-color: ${theme.colors.darkGrey};
            color: #fff;
            cursor: pointer;
            transform: rotate(180deg);
        }

        .search-input{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            border: 1px solid #ccc;
            height: 50px;
            width: 85%;
            margin-top: 2rem;

            span{
                margin-right: 10px;
            }

            input[type='text']{
                border-radius: 5px;
                border:none;
                background-color: #f3f3f3;
                padding: 0 10px;
                
                &:focus{
                    outline: none;
                }
            }
        }

        .sidebar-menu{
            margin-top: 20px;
            width: 100%;

            ul{
                li{
                    list-style: none;
                    width: inherit;
                    padding: 1rem 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &:hover{
                        background-color: #ccc;
                        cursor: pointer;
                    }

                    &.active{
                        position: relative;
                        background-color: ${theme.colors.lightGrey};
                          &::before
                          {
                            content: '';
                            width: 6px;
                            height: 100%;
                           background-color: ${theme.colors.secondary};
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                
                    }

                     span{
                        display:flex;
                        gap: 10px;
                        align-items: center;
                        font-size: 1.2rem;
                        align-items: center;

                        a{
                            color: #000;
                            text-decoration: none;
                            height: 100%;
                            text-align: center;
                    }
                    }
                    p{
                        width:20px;
                        height: 20px;
                        border-radius: 50%;
                        background-color: #ddd;
                        text-align:center;
                        font-size:1rem;
                        vertical-align: middle;
                        font-weight: bold;
                        color: ${theme.colors.darkGrey};
                    }
            }
        }

    }


`;
