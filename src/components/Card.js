import React from 'react'
import styled from 'styled-components'

const getColor = color => {
    if (color) return color
    else return '#000';
}

const MyCard = styled.div`
    position: relative;
    background-color: white;
    height: fit-content;
    width: 180px;
    color: ${({ color }) => getColor(color)};
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.16);
        /* box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.15); */
    }
`

const Card = ({ percentage, time, color }) => (
    <MyCard percentage={percentage} time={time} color={color}>
        { percentage && (
            <>
                <h1>{percentage}%</h1>
                <p>{time}</p>
            </>
        )}
    </MyCard>
)

export default Card