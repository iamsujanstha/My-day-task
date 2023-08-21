import styled from "styled-components";
import { theme } from "@/styles/theme";

export const SidebarContainer = styled.aside`
    background-color: #f3f3f3;
    height: 100vh;
    padding-top: 2rem;
    width: 450px;

    @media (max-width: 968px) {
        width: 300px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -100%;
    }

    &.show-sidebar{
        @media (max-width: 968px) {
            width: 300px;
            height: 100vh;
            position: fixed;
            top: 0;
            left:0;
            z-index: 10;
            transition: 0.8s;
        }

        }

    
    aside{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        position: relative;

        .sidebar-header{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 1rem;
            row-gap: 1.5rem;

            @media (max-width: 968px) {
                justify-content: center;
            }

            .header-title{
               text-transform: uppercase;
                background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 1.5rem;
                font-weight: 700;
                margin-left: 0.5rem;
                }
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
                font-size: 1rem;
                color: ${theme.colors.darkGrey};
                
                &:focus{
                    outline: none;
                }
            }
        }

        .sidebar-menu{
            margin-top: 20px;
            width: 100%;

            ul{
                a{
                    text-decoration: none;
                    color: ${theme.colors.darkGrey};
                }
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
                        font-size: 1rem;
                        align-items: center;
                        text-transform: capitalize;

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
                        background-color: ${theme.colors.secondary};
                        color: #fff;
                        margin-top: 3px;
                        text-align:center;
                        padding-top: 3.5px;
                        font-size:0.7rem;
                        vertical-align: middle;
                    }
            }
        }

    }


`;
