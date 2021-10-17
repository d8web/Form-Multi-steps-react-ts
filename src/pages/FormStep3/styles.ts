import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #b8b8d4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #8257e5;
        margin: 30px 0px;
    }

    label {
        font-size: 14px;
        display: block;
        margin-bottom: 20px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border-image-source: linear-gradient(269.94deg,#ff008e -7.44%,#8257e5 99.94%);
            border-width: 1pt;
            border-image-slice: 1;
            border-radius: 10px !important;
            color: #fff;
            outline: none;
            font-size: 15px;
            background-color: #1e1e22;
        }
    }

    button {
        background: linear-gradient(269.94deg,#ff008e -7.44%,#8257e5 99.94%);
        color: #fff;
        font-weight: 700;
        padding: 20px 40px;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }

    .buttons {
        display: flex;
        align-items: center;
        margin-top: 30px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        color: #fff;
        padding: 20px 40px;
    }
`