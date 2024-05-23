import { useState } from "react";

const useInput = (init) => {
  const [value, setValue] = useState(init);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return [value, handleInput];
};

export default useInput;
