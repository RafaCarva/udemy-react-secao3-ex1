import React from 'react'

export default props => (


    <h1>Família</h1>
    /**
     * Tudo que for passado no props do componente
     * 'instância' vai estar no props.children
     */
    <div>
        {props.children}
    </div>
)