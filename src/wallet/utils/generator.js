import randomWords from "random-words";

export const generateMnemonic = () => {
 return randomWords({ exactly: 12 });
};
