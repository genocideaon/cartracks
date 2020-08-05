import React, {useEffect, useContext} from 'react';
import {UserContext} from "../../UserProvider";
import './ListUser.css'


const SearchBox = () => {
    const {userList, filterKeyword, addUser}: any = useContext(UserContext)
    const users = userList.filter((user: any) => {
        return user.name.includes(filterKeyword) || user.email.includes(filterKeyword)
    })

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                addUser(data)
            });
    }, [])

    return (
        <>
            {users.map((user: object) => {
                const {
                    id,
                    name,
                    email,
                    phone,
                    website,
                    address: {
                        city,
                        street,
                        suite,
                        zipcode
                    },
                    company: {
                        bs,
                        catchPhrase,
                        name: companyName,
                    }
                }: any = user



                return (
                    <article key={id} className="user-content">
                        <header className="user-content-header">
                            <div className="user-content-header__image">
                                <img src={require("../../assets/images/person.png")} alt=""/>
                            </div>
                            <h1>{name}</h1>

                        </header>
                        <div className="user-content-detail">
                            <p><strong>Address:</strong> {city} {street} {suite} {zipcode}</p>
                            <ul>
                                <li><strong>Email:</strong> {email}</li>
                                <li><strong>website:</strong> {website}</li>
                            </ul>
                            <p>
                                <strong>Company:</strong> {companyName} <br/>
                                - {bs} <br/>
                                - {catchPhrase}

                            </p>
                        </div>
                        <footer className="user-content-footer">
                            <a className="phone-button" href="tel:">
                                <div>
                                    <img src={require("../../assets/images/phone.png")} alt=""/>
                                </div>
                                <span>
                                    {phone}
                                </span>
                            </a>
                        </footer>
                    </article>
                )
            })}
        </>
    )
}

export default SearchBox;