import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .user_login{
        display: flex;
        flex-direction:column;
        gap:10px;
        margin-top:6%;

        input{
            padding-top: 4%;
            padding-bottom: 4%;
            padding-left: 4%;
            font-size: 18px;
            outline: none;
            border-radius: 5px;
            border:1px solid #68B5A7;
        }
        input[type=submit]{
            background:#10A37F;
            color:#fff;
        }
    }
    .signup_link{
        margin-top:4%;
        display: flex;
        gap:2%;
        justify-content: center;

        a{
            text-decoration: none;
            color:#36A37F;
            /* margin-left:2%; */
        }
    }
    .signupmessage{
        display: none;
        
    }

`
