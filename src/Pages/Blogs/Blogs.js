import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='container'>
            <h1>Questions and Answers</h1>
            <div className="question-container">
                <h2>01. What is the difference between javascript and node.js?</h2>
                <p>JavaScript is a programming language. It is running in any web browser with a proper browser engine. On the other hand, Node.js is an interpreter and environment/runtime for JavaScript with some specific useful libraries which JavaScript programming can use separately.
                    JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). But Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
                    javascript is basically used on the client-side. But node.js is mostly used on the server-side.
                </p>

                <h2>02. What is the differences between sql and nosql databases?</h2>
                <p>SQL databases are primarily called as Relational Databases (RDBMS) and NoSQL database are primarily called as non-relational or distributed database. SQL databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. SQL database is Vertically Scalable.
                    On the other hand, NoSQL database have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. NoSQL database is Horizontally scalable.
                </p>

                <h2>03. What is the purpose of jwt and how does it work?</h2>
                <p>JWT means JSON Web Token. It is an open standard used to share security information between two parties — a client and a server.
                    JWT is mostly used for authorization purpose. we can Secure our API by using jwt.
                    An Example of a json web token is xxxxxxxx.xxxxxxxx.xxxxxxxxx It have 3 parts. header, payload and signature part. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.
                </p>
            </div>
        </section>
    );
};

export default Blogs;