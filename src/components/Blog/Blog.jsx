import React from "react";

const Blog = () => {
  return (
    <div className="col-span-full p-5 flex flex-col gap-5 mt-[120px]">
      <h1 className="font-bold text-center text-4xl">Blog</h1>
      <hr className="w-[50%] m-auto border-[#20C997]" />

      <article className="mt-3">
        <h3 className="font-bold text-2xl">How Does REACT Work?</h3>
        <p className="font-medium mt-2 pl-1">
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser's DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it's worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.
        </p>
      </article>
      <article>
        <h3 className="font-bold text-2xl">
          Props & State - What are the differences?
        </h3>
        <p className="font-medium mt-2 pl-1">
          Props are known as properties it can be used to pass data from one
          component to another. Props cannot be modified, read-only, and
          Immutable.The state represents parts of an Application that can
          change. Each component can have its State. The state is Mutable and It
          is local to the component only.
        </p>
        <br />
        <span className="font-bold">Props:</span>
        <ul className="list-disc pl-10 font-medium mt-2">
          <li>The Data is passed from one component to another.</li>
          <li>It is Immutable (cannot be modified)</li>
          <li>Props can be used with state and functional components.</li>
          <li>Props are read-only.</li>
        </ul>
        <br />
        <span className="font-bold">State:</span>
        <ul className="list-disc pl-10 font-medium mt-2">
          <li>The Data is passed within the component only.</li>
          <li>It is Mutable ( can be modified).</li>
          <li>
            State can be used only with the state components/class component
            (Before 16.0).
          </li>
          <li>State is both read and write.</li>
        </ul>
      </article>
      <article>
        <h3 className="font-bold text-2xl">Use of useEffect in REACT-</h3>
        <p className="font-medium mt-2 pl-1">
          Side effects are not predictable because they are actions which are
          performed with the "outside world." We perform a side effect when we
          need to reach outside of our React components to do something.
          Performing a side effect, however, will not give us a predictable
          result. Think about if we were to request data (like blog posts) from
          a server that has failed and instead of our post data, gives us a 500
          status code response. Virtually all applications rely on side effects
          to work in one way or another, aside from the simplest applications.
          Common side effects include:
        </p>
        <ul className="list-disc pl-10 font-medium mt-2">
          <li>Making a request to an API for data from a backend server</li>
          <li>
            To interact with browser APIs (that is, to use document or window
            directly)
          </li>
          <li>
            Using unpredictable timing functions like setTimeout or setInterval
          </li>
        </ul>

        <p className="font-medium mt-2 pl-1">
          This is why useEffect exists: to provide a way to handle performing
          these side effects in what are otherwise pure React components. In
          short, useEffect is a tool that lets us interact with the outside
          world but not affect the rendering or performance of the component
          that it's in.
        </p>
      </article>
    </div>
  );
};

export default Blog;
