import React from "react";
import { useParams } from "react-router-dom";

const ListGroupView = () => {
    const { id } = useParams();

    return <>
        A list here for id: {id}
    </>
};

export default ListGroupView;