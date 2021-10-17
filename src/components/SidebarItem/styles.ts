import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0px;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`

export const Title = styled.div`
    text-align: right;
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`

export const IconArea = styled.div<{ active: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${props => props.active ? 'linear-gradient(269.94deg,#ff008e -7.44%,#8257e5 99.94%)' : '#1e1e22'};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Point = styled.div<{ active: boolean }>`
    width: 6px;
    height: 6px;
    border: 3px solid #8257e5;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#8257e5' : '#02044a'};
`