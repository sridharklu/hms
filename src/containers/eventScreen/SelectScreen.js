import React from "react";
import { useState } from "react";
import "../../assets/css/SelectScreen.css";

const SelectScreen = () => {
    const [cars, setCars] = useState();

    console.log(cars);

    return (
        <div className="container">
            <div className="selectFeild">
                <form
                 onSelect={(e)=>{
                    setCars(e.target.value);
                 }}
                >
                    <input type="text"  value="hello" />
                </form>
            </div>
        </div>
    )
}
export default SelectScreen