import React from "react";
import TitleBar from "../TitleBar";

const Blog = () => {
  return (
    <div className="bg-fixed bg-[url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80')] bg-no-repeat bg-cover min-h-[100vh] bg-center">
      <div className="backdrop-blur-sm bg-white/30 py-[70px]">
        <div className="flex flex-col gap-5 text-[#000A38] p-10">
          <div>
            <h1 className="font-bold text-center text-3xl mb-1">My Blog</h1>
            <TitleBar></TitleBar>
          </div>

          <article className="mt-3">
            <h3 className="font-bold text-2xl">
              What are the purposes of REACT Router?
            </h3>
            <p className="font-medium mt-2 pl-5">
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information. By preventing a page refresh, and using Router or
              Link, which is explained in more depth below, the flash of a white
              screen or blank page is prevented. This is one increasingly common
              way of having a more seamless user experience. React router also
              allows the user to utilize browser functionality like the back
              button and the refresh page while maintaining the correct view of
              the application.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">How does Context API work?</h3>
            <p className="font-medium mt-2 pl-5">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. Context API is a
              (kind of) new feature added in version 16.3 of React that allows
              one to share state across the entire app (or part of it) lightly
              and with ease.
            </p>
            <br />
            <p className="font-medium mt-2 pl-5">
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">What is UseRef Hook?</h3>
            <p className="font-medium mt-2 pl-5">
              Ref means just reference, so it can be a reference to anything
              (DOM node, Javascript value, etc). The useRef hook returns a
              mutable object which doesn't re-render the component when it's
              changed. Think it like useState, but unlike useState, doesn't
              trigger re-render of the component. The object that useRef returns
              have a current property that can hold any modifiable value.
            </p>
            <p className="font-medium mt-2 pl-5">
              useRef is a hook introduced with other hooks in React version 16.8
              and is mainly used for creating a reference of the DOM element or
              directly accessing it inside a functional component. But don't
              think even for a second that it's the only thing this hook is
              capable of as it can even be used for storing mutable values
              across different rerenders of the component. Like every other hook
              in React, we have to first import this hook at the very top level
              as per the rules of hooks and then only we can use it in our apps.
              import useRef from "react"; const reference = useRef("initial
              value"); Copy Code Unlike other hooks like useState which returns
              two values, the state and a function, this hook returns a mutable
              ref object which will carry the value throughout the component and
              if any change is made in the component, the updated value will be
              carried forward across our React component.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
