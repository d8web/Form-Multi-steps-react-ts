import styled from "styled-components"

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#8257e5' : '#fff'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #1257e5;
    }
`

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(269.94deg,#ff008e -7.44%,#8257e5 99.94%);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 7px;
`

export const Description = styled.div`
    font-size: 14px;
    color: #b8b8d4;
`