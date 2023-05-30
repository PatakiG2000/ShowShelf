import React from "react";
/* Formatting text from the api */

const useFormatText = (text: string) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = text;

  const formattedText = wrapper.textContent;

  return <span>{formattedText}</span>;
};

export default useFormatText;
