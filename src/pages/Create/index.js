import React from "react";
import bcrypt from "bcryptjs";
// import * as util from "../../wallet";
import Specifics from "../../specifics";

const CreatePw = ({ onCompleted }) => {
 const [isCreated, setIsCreated] = React.useState(false);
 const [pw, setPw] = React.useState("");
 // const [isVerified, setIsVerified] = React.useState(false);

 // React.useEffect(() => {
 //  if (isVerified) onCompleted();
 // });

 const onCreated = pass => {
  setPw(pass);
  setIsCreated(true);
  // console.log(util.generateMnemonic());
 };

 const verifySucceed = pass => {
  // console.log("Succeed " + pass);
  const salt = bcrypt.genSaltSync(4);
  const hash = bcrypt.hashSync(pass, salt);
  localStorage.setItem("pw", hash);
  onCompleted();
 };

 const verifyFail = () => {
  // console.log("Failed");
 };

 return (
  <div>
   {!isCreated ? (
    <Specifics.Password.InputPw onFinished={onCreated} />
   ) : (
    <Specifics.Password.VerifyPw
     pwCompare={pw}
     onSucceed={verifySucceed}
     onFail={verifyFail}
    />
   )}
  </div>
 );
};

// const Mnemonic = () => {
//  const [mnemonicArray, setMnemonicArray] = React.useState([""]);
//  const [pwVerified, verifyPw] = React.useState(false);

//  return <div></div>;
// };

const CreateWallet = () => {
 const log = () => console.log("Done");
 return <CreatePw onCompleted={log} />;
};

export default CreateWallet;
