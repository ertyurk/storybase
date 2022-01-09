import "../styles/globals.css";
import type { AppProps } from "next/app";

import FormContext from "../components/formContext";
import Layout from '../components/layout'


type StoryArray = any[];
type StoryContext = {
  isSelect: number,
  command: string,
  storyArray: StoryArray
}
let storyArray: StoryArray = [];
let storyContext = {
  isSelect: 0,
  command: "",
  storyArray: storyArray,
};



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormContext.Provider value={storyContext}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormContext.Provider>
  );
}

export default MyApp;
