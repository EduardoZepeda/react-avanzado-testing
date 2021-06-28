import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow: hidden;
    width: 100%;
    margin: 12px 0;
    &.fixed {
        background:#fff;
        border-radius: 60px;
        box-shadow: 0 0 20px;
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index:1;
    }
`

export const Item = styled.li`
    padding: 0 8px;
`
