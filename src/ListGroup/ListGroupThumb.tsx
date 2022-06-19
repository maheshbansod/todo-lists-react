import React from "react";

type Props = {
    listGroupId: string;
}

const ListGroupThumb = ({listGroupId}: Props) => {
    return <>
        List group thumb for {listGroupId}
    </>
};

export default ListGroupThumb;