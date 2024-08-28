import React from 'react';

const Adminitem = (props) => {
    const { imagen, producto, precio, body } = props;

    return (
        <div className="prod">
            <img src={imagen} alt="producto" />
            <p>{producto}</p>
            <p>{precio}</p>
            <div dangerouslySetInnerHTML={{ __html: body }} />

        </div>
    );
}
export default Adminitem;