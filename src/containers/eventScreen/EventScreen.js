import React from "react";
import { useState } from "react";
import "../../assets/css/EventScreen.css"
import Input from "../../common/input/Input";

const EventScreen = () => {
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    
    return (
        <div className="container">
            <div className="inputFeild">
                <p>Name :</p>
                <Input
                    onChange={(eve) => {
                        setName(eve.target.value)
                    }}
                    value={name}
                />
            </div>
            <div className="inputFeild">
                <p>Id :</p>
                <Input
                    onChange={(eve) => { setId(eve.target.value) }}
                    value={id}
                />
            </div>
            <div className="inputFeild">
                <p>Password :</p>
                <Input
                    onChange={(eve) => { setPassword(eve.target.value) }}
                    value={password}
                />
            </div>
            <div className="buttonFeild">
                <button
                    onClick={() => {
                        console.log('name', name);
                        console.log('id', id);
                        console.log('password', password);
                        setName(name);
                        setId(id);
                        setPassword(password);

                    }}

                >okay</button>

                <button
                    onClick={() => {
                        setName('');
                        setId('');
                        setPassword('');
                        console.log('name');
                        console.log('id');
                        console.log('password');
                        
                    }}
                >Cancel</button>
            </div>
            <p>Name:{name}</p>
            <p>Id:{}</p>
            <p>Password:{}</p>

        </div>
    )
}
export default EventScreen