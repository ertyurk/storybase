import { createContext } from "react";

type StoryArray = any[];
let storyArray: StoryArray = [[]];

type StoryContext = {
  isSelect: number;
  command: string;
  storyArray: StoryArray;
}

let storyContext: StoryContext = {
  isSelect: 0,
  command: "",
  storyArray: storyArray,
};

const FormContext = createContext(storyContext);

export default FormContext;

/**

{
  "isSelect": 1,
  'command': DELETE || EDIT || NOTHING
  storyArray: [

  ]
}




 */