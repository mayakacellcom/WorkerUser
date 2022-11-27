import React, { useState, useEffect } from 'react'

export default function Users() {
    const [getX, getUser] = useState([]);
    const API = 'https://dummyjson.com/users';
    const fetchUser = () => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.users)
                getUser(res.users)
            })
    };
    useEffect(() => {
        fetchUser()
    }, []);
    return (
        <>
            <h2>React Fetch Data with REST API Example 2</h2>
            <table className='usr-table'>
                <tbody>
                    <tr className='htd'><td><b>ID</b></td><td><b>FirstName</b></td><td><b>LastName</b></td><td><b>Gender</b></td><td><b>Phone</b></td><td><b>Age</b></td><td><b>Email</b></td></tr>
                    {getX.map((item, i) => {
                        return <tr key={item.id}><td>{item.id}</td><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.gender}</td><td>{item.phone}</td><td>{item.age}</td><td>{item.email}</td></tr>
                    })}
                </tbody>
            </table>
        </>
    )
};