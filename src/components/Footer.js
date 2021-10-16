import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    bottom: 1px;
    text-align: center;
    color: gray;
`

function Footer() {
    return (
        <Foot>
            <p>Made with <a href="https://github.com/raulsposito/pricimetric">♥</a></p>
        </Foot>
    )
}

export default Footer
