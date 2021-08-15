import { createContext, useState } from 'react';

export const SubmitContext = createContext();

const SubmitContextCom = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const Submit = () => setIsSubmit(true);

  const storeValues = {
    isSubmit,
    Submit,
  };

  return (
    <SubmitContext.Provider value={storeValues}>
      {props.children}
    </SubmitContext.Provider>
  );
};

export default SubmitContextCom;
