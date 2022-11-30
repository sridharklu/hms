import React from "react";

const RadioButton = () => {
  return (
    <div className="radio-button">
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">Age</label>
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">Weight</label>
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label htmlFor="javascript">Gender</label>
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label htmlFor="javascript">General</label>
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label htmlFor="javascript">Description</label>
    </div>
  );
};

export default RadioButton;
