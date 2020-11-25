import React from 'react';
import { User } from '../../models/User';
import UserCard from '../user-card/UserCard';

interface Params {
    users: User[];
}

const UserList = (props: Params) => {
    const { users } = props;

    const listUser = users.map((user: User, index: any) => (
        <div className="mb-4" key={index}>
            <UserCard user={user}></UserCard>
        </div>

    ));

    return (
        <>
            {listUser}
        </>
    )
}

export default UserList;
