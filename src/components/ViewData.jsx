import React from "react";

const taleStyle = {
    border: '1px solid',
    padding : '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
}
export const ViewData = ({list, postType}) => {
    return(
        <table style={taleStyle}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    {postType === 'photos' ?
                    <th>Photo</th>
                    : null}
                    {postType === 'posts' ?
                    <th>Description</th>
                    : null}
                </tr>
            </thead>
            <tbody>
                {list.map(data => 
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        {postType === 'photos' ?
                        <td><img src={data.thumbnailUrl} alt=""/></td>
                        : null}
                        {postType === 'posts' ?
                        <td>{data.body}</td>
                        : null}
                    </tr>
                )}
            </tbody>
        </table>
    )
}