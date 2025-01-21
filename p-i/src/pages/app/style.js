import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    /* overflow-y: scroll; */
    /* height:; */
    /* border: 1px solid red; */
    height:100vh;

    .quicklogo{

    }
    h2{
        color: #000;
    }
    .sidemenu{
        border:1px solid #e3e3e3;
        width:240px;
        /* height:; */
        /* overflow-y: scroll; */
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #F9F9F9;
        transition: opacity 1s ease, visibility 1s ease;

        .sidemenu_header{
            display: flex;
            flex-direction: column;
            gap:30px;
        }
        .sidemenu_buttons{
            display: flex;
            justify-content: space-between;
        }
        .new_chat{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            height: auto;
            border:1px solid #ececec;
            border-radius: 10px;
            width:100%;
            padding:4%;
            padding-left:4%;
            transition: ease-in 0.21s;

            img{
                display: none;
            }
            
            span{
                font-size: 25px;
            }
            h2{
                font-weight: normal;
                font-size: 16px;
            }
        }
        .new_chat:hover{
            background-color: #ECECEC;
            img{
                display: block;
                width: 70%;
            }
        }
        .sidemenu_footer{
            /* display: flex;
            align-items: end;
            border:1px solid; */
        }

        h1{
            color: #000;
        }
    }
    .sidemenu_none{
        border:1px solid #e3e3e3;
        width:240px;
        /* height:; */
        /* overflow-y: scroll; */
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        background: #F9F9F9;

        .sidemenu_header{
            display: flex;
            flex-direction: column;
            gap:30px;
        }
        .sidemenu_buttons{
            display: flex;
            justify-content: space-between;
        }
        .new_chat{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            height: auto;
            border:1px solid #ececec;
            border-radius: 10px;
            width:100%;
            padding:4%;
            padding-left:4%;
            transition: ease-in 0.21s;

            img{
                display: none;
            }
            
            span{
                font-size: 25px;
            }
            h2{
                font-weight: normal;
                font-size: 16px;
            }
        }
        .new_chat:hover{
            background-color: #ECECEC;
            img{
                display: block;
                width: 70%;
            }
        }
        .sidemenu_footer{
            /* display: flex;
            align-items: end;
            border:1px solid; */
        }

        h1{
            color: #000;
        }
    }
    .open_sidebar{
        margin-right: 10%;
    }
    .open_sidebar_none{
        display: none;
    }
    .logout{
        cursor: pointer;
        display: flex;
        gap:5px;
    }
    .chatbox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        /* border:1px solid red; */
        width:100%;
        
        .chatbox_header{
            /* width:100%; */
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* border:1px solid; */
            padding-left: 3%;
            padding-right: 3%;

            .chatbox_logo{
                display: flex;
                gap:2px;
                cursor:pointer;
                h2{
                    color: #5D5D5D;
                }
            }
            .chatbox_image{
                border:transparent;
                border-radius: 100%;
                padding: 10%;
                width: 25px;
                height:auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #BDC3C7;
                
                h2{
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
        
        .chatbox_body{
            /* border:1px solid; */
            height:70vh;
            padding-left:15%;
            padding-right:15%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            /* border:1px solid; */

            .chatbox_reply{
                display: flex;
                flex-direction: column;
                gap:5px;
                overflow-y: scroll;

                  /* For Webkit browsers */
                &::-webkit-scrollbar {
                    width: 0px;
                }

                &::-webkit-scrollbar-track {
                    background: #f0f0f0;
                    border-radius: 6px;
                }

                &::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 6px;
                    border: 3px solid #f0f0f0;
                }

                &::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }


                .user_message{
                    /* border:1px solid; */
                    width:100%;
                    display: flex;
                    justify-content: end;
                    /* border:1px solid; */
                    
                    .hover_purpose{
                        /* width:40%; */
                        display: flex;
                        align-items: center;
                        gap:6px;
                        
                        /* border:1px solid; */
                    }
                    .hover_purpose:hover{
                        /* width:40%; */
                        .user_message_rightlogo{
                            display: block;
                        }
                    }

                    .user_message_rightlogo{
                        display: none;
                        img{
                            width:70%;
                        }
                    }

                    .user_message_right{
                        border:1px transparent;
                        border-radius: 100%;
                        padding-top:20px;
                        padding-bottom:20px;
                        padding-right:25px;
                        padding-left:25x;
                        background-color: #F3F3F3;
                        transition: ease-in 0.21s;
                        cursor: default;
                    }
                    .user_text{
                        border:1px solid #D4D4D4;
                        border-radius:20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #F9F9F9;
                        padding-left: 3%;
                        padding-right: 3%;
                        padding-bottom: 1%;
                        padding-top: 1%;
                    }
                }
                .chatbox_img{
                    border:transparent;
                    border-radius: 100%;
                    padding: 1%;
                    width: 25px;
                    height:auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #BDC3C7;
                    
                    h2{
                        color: #fff;
                        font-size: 16px;
                    }
                }
                .ai_response{
                    display: flex;
                    align-items: start;
                    gap:10px;
                    padding-top: 5%;
                    /* border:1px solid; */

                    .ai_reponse_writeup{
                        /* border:1px solid; */
                        width:65%;
                        height:auto;
                        padding-top:2%;
                        padding-bottom:2%;
                        padding-left:2%;

                    }
                    span{
                    }
                }
            }
            .userinput{
                border:1px solid #e3e3e3;
                height:15vh;
                padding-left:2%;
                padding-right:2%;
                background:#F4F4F4;
                border-radius:10px;
                padding-bottom: 1%;


                input[type=text]{
                    width:100%; 
                    height:auto;
                    outline:none;
                    background:transparent;
                    border:none;
                    font-size:16px;
                    word-spacing: 4%;
                    padding-top: 3%;
                    padding-bottom: 3%;
                }
                input[type=text]::placeholder{
                    font-size:16px;
                }

                .userinput_extra_buttons{
                    display: flex;
                    justify-content: space-between;

                    .send_button{
                        border:1px solid;
                        border-radius:100%;
                        background:#000;
                    }
                }
            }
        }
    }
    `

export const ChatBox = styled.div`
`