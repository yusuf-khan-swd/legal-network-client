import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="max-w-screen-md mx-auto py-10">
      <div className="m-3 mb-5">
        <h2 className="text-xl font-semibold mb-1">
          Difference between SQL and NoSQL
        </h2>
        <p>
          NoSQL (“non SQL” or “not only SQL”). SQL is the programming language
          used to interface with relational databases. (Relational databases
          model data as records in rows and tables with logical links between
          them). NoSQL is a class of DBMs that are non-relational and generally
          do not use SQL.
        </p>
      </div>
      <div className="m-3 mb-5">
        <h2 className="text-xl font-semibold mb-1 ">
          What is JWT, and how does it work?
        </h2>
        <div>
          <p className="mb-1">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdFP).
          </p>
          <p className="mb-1">
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
          </p>

          <p>
            JWT's Differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings:
            The header and the payload.
            The signature.
          </p>
        </div>
      </div>
      <div className="m-3 mb-5">
        <h2 className="text-xl font-semibold mb-1">
          What is the difference between javascript and NodeJS?
        </h2>
        <p>
          JavaScript is a programming language. And NodeJS is not a programming Language.
          NodeJS create a environment for javaScript to run.
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
        </p>
      </div>
      <div className="m-3 mb-5">
        <h2 className="text-xl font-semibold mb-1">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          <span className="font-bold">Using Event Que. </span>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
