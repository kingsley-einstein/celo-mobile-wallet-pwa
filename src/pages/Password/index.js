import React from "react";
import Components from "../../components";

const InputPw = ({ onFinished }) => {
 const [pw, setPw] = React.useState("");

 React.useEffect(() => {
  if (pw.length === 6) onFinished();
 });

 const setOnChange = ev => setPw(ev.target.value);

 return (
  <div>
   <Components.Input
    type="password"
    value={pw}
    onChange={setOnChange}
    inputProps={{ inputMode: "numeric", maxLength: 6, minLength: 6 }}
   />
  </div>
 );
};

const VerifyPw = ({ isPassed, onSucceed, onFail }) => <div></div>;

const Pw = { InputPw, VerifyPw };

export default Pw;
