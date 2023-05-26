import React from "react";
import "./Blog.css";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("Blogs")
  return (
    <div className="p-4 text-center mt-6">
      <h1 className="text-5xl">Our Blog's</h1>
      <div className="mt-6 border-2 p-4" style={{ borderRadius: "10px" }}>
        <h2 className="text-3xl">
          {" "}
          <span className="text-primary mr-2">Question No 1:- </span> What is an
          access token and refresh token? How do they work and where should we
          store them on the client-side?
        </h2>
        <p className="mt-4">
          <span className="text-primary">Answer :-</span> <br />
          <span className="text-primary">Access Token:- </span>An access token
          is a credential that is issued by an authentication server upon
          successful authentication of a user. It is typically a string of
          characters that represents the user's identity and permissions. The
          access token is then used by the client (e.g., a web browser or a
          mobile app) to access protected resources on a server. <br />
          <span className="text-primary">Refresh Token:- </span>A refresh token
          is a credential that is also issued by the authentication server,
          along with the access token. Its purpose is to obtain a new access
          token when the current one expires. Refresh tokens have a longer
          lifespan compared to access tokens and are used to request new access
          tokens without requiring the user to re-authenticate.
        </p>
        <span className="text-2xl text-primary">They work Like :-</span>
        <p>
          <span className="text-primary">Access Token :- </span> When a user
          successfully authenticates with the authentication server (e.g., by
          providing valid credentials), the server generates an access token and
          associates it with the user's identity and permissions. The access
          token is typically a JSON Web Token (JWT) containing encoded
          information such as the user ID, expiration time, and
          scopes/permissions. <br />
          <span className="text-primary">Refresh Token :- </span> A refresh
          token is issued alongside the access token and has a longer lifespan.
          It is securely stored on the client-side and is used when the access
          token expires. The client sends a request to the authentication server
          with the refresh token, and if the refresh token is valid and has not
          expired, the server issues a new access token. This allows the user to
          continue accessing protected resources without having to
          re-authenticate.
        </p>
        <span className="text-2xl text-primary">
          we store them on the client-side :-
        </span>
        <p>
          When it comes to storing tokens on the client-side, the choice of
          storage mechanism depends on various factors such as security
          requirements, the platform or framework you're using, and the specific
          use case. Here are some commonly recommended options :-{" "}
          <span className="font-bold">
            1. Memory 2. HTTP-only Cookies 3. Local Storage or Session Storage 4.
            Web Storage API with Security Measures
          </span>
        </p>
      </div>
      <div className="mt-6 border-2 p-4" style={{ borderRadius: "10px" }}>
        <h2 className="text-3xl">
          {" "}
          <span className="text-primary mr-2">Question No 2:- </span> Compare
          SQL and NoSQL databases?
        </h2>
        <p className="mt-4">
          <span className="text-primary">Answer :-</span> <br />
          <span className="text-primary">SQL Databases:- </span>SQL databases are structured and rely on a predefined schema to store data. They use tables with rows and columns to organize information, enforcing consistency and integrity. SQL databases excel at handling complex relationships between data entities through the use of foreign keys and join operations. They provide ACID transactions, ensuring reliable and consistent data operations. SQL databases are commonly used for applications with structured data, rigid schemas, and strong consistency requirements. <br />
          <span className="text-primary">Refresh Token:- </span>On the other hand, NoSQL databases offer a more flexible approach to data storage. They do not enforce a fixed schema, allowing for dynamic and evolving data structures. NoSQL databases, particularly document-oriented ones, store data as JSON-like documents, which can vary in structure. This flexibility makes them suitable for handling unstructured or semi-structured data. NoSQL databases prioritize scalability and performance, leveraging distributed architectures to handle large amounts of data and high traffic loads. They often sacrifice some consistency guarantees, offering eventual consistency instead. NoSQL databases are commonly used in applications that require high scalability, agility in data modeling, and low-latency access to large volumes of data.
        </p>
      </div>
      <div className="mt-6 border-2 p-4" style={{ borderRadius: "10px" }}>
        <h2 className="text-3xl">
          {" "}
          <span className="text-primary mr-2">Question No 3:- </span> What is express js & What is Nest JS ?
        </h2>
        <p className="mt-4">
          <span className="text-primary">Answer :-</span> <br />
          <span className="text-primary">Express JS:- </span>Express.js is a popular web application framework for Node.js. It provides a simple and minimalist approach to building web applications and APIs. Express.js is known for its unopinionated design, allowing developers to have more control and flexibility in designing the architecture and components of their applications. Express.js is widely used for building scalable and efficient web applications and APIs in Node.js. Its simplicity, flexibility, and vibrant ecosystem make it a popular choice for developers seeking a lightweight and versatile framework for server-side development <br />
          <span className="text-primary">Nest JS :- </span>NestJS is a powerful, scalable, and highly extensible Node.js framework for building server-side applications. It combines the flexibility of JavaScript with the strong typing and advanced features of TypeScript. With its modular and structured approach, NestJS promotes code reusability, testability, and maintainability. It offers support for various architectural patterns and provides a built-in dependency injection system for managing dependencies. NestJS has a vibrant ecosystem with a wide range of modules and libraries, enabling developers to easily integrate additional functionality into their applications. NestJS provides a solid foundation for building robust and scalable server-side applications with Node.js.
        </p>
      </div>
      <div className="mt-6 border-2 p-4" style={{ borderRadius: "10px" }}>
        <h2 className="text-3xl">
          {" "}
          <span className="text-primary mr-2">Question No 4:- </span> What is MongoDB aggregate and how does it work ?
        </h2>
        <p className="mt-4">
          <span className="text-primary">Answer :-</span> <br />
          <span className="text-primary"> MongoDB aggregate:- </span>
          In MongoDB, the aggregate operation is a powerful way to perform complex data processing and analysis tasks on collections. It allows you to perform various transformations, aggregations, and computations on the documents within a collection. The aggregate operation in MongoDB provides a powerful and flexible way to perform complex data processing tasks on collections. It allows you to leverage a wide range of operators, functions, and stages to manipulate and analyze your data. By combining different stages in the pipeline, you can create sophisticated data transformations and aggregations to extract meaningful insights from your MongoDB collections.
        </p>
      </div>
    </div>
  );
};

export default Blog;
