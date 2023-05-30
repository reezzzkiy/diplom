
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = () => {
    const {object} = useContext(Context)
    return (
        <ListGroup>
            {object.map(type =>
                <ListGroup.Item style={{cursor:'pointer'}} active={type.id === object.sectedType.id} onClick={()=> object.setSelectedType(type)} key={type.id}>
                    {type.name}
                </ListGroup.Item>
                )}
        </ListGroup>
//         <div>
// SHOP
//         </div>
        
    );
}

export default TypeBar;
