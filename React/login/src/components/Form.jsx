import React from "react";

function Form(props) {
  return (
    <form className="form">
        <input type="text" placeholder="Username" className="placeholder-slate-300"/>
        <input type="password" placeholder="Password" className="placeholder-slate-300"/>
        {props.register === false && <input type="password" placeholder="Confirm Password" className="placeholder-slate-300"/>}
        <button type="submit"> 
            {props.register ? "False" : "Register"}
        </button>
    </form>
  );
}

export default Form;