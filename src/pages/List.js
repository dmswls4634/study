import React from "react";

const User=({userData})=>{
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    ) 
}

const List=()=>{
    const users=[
        {email: 'zh@zb1.com', name: '장하오'},
        {email: 'gv@zb1.com', name: '김규빈'},
        {email: 'yj@zb1.com', name: '한유진'},
        {email: 'rk@zb1.com', name: '심리키'},
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=><User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default List;