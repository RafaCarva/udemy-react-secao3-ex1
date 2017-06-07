import React from 'react'
import {childrenWithProps} from '../utils/reactUtil'


export default props => (

    /**
     * Tudo que for passado no props do componente
     * 'instância' vai estar no props.children
     */
    <div>
        <h1>Família</h1>

        {childrenWithProps(props.children, props)}
        
    </div>
)