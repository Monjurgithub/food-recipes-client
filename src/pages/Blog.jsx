import React from 'react';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const Blog = () => {
    return (
        <div>


            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn btn-wide' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
            <article class="my-container m-auto">

<a href="#" class="flex h-screen w-full justify-center  hover:opacity-75">
    <img src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/Control%20%26%20Uncontrolled%20Components_Nasscom.png?itok=_1te-kaH" />
</a>
<div class="bg-white flex flex-col justify-start p-6">
    <a href="#" class="text-3xl text-center font-bold hover:text-gray-700 pb-4">Tell us the differences between uncontrolled and controlled components?</a> <br />
    <a href="#" class="pb-6 font-bold text-center">Uncontrolled components are those whose state and behavior are not managed by a parent component or the system itself. They are typically responsible for managing their own state and behavior and may interact with other components through callbacks or events. Uncontrolled components can be useful for managing complex state or behavior that is specific to a particular component, but they can also lead to issues with data consistency and make it harder to reason about the overall behavior of the system.

        Controlled components, on the other hand, are those whose state and behavior are managed by a parent component or the system itself. In a controlled component architecture, the parent component is responsible for managing the state and behavior of all of its child components, and the child components only receive data and callbacks from the parent. This makes it easier to reason about the behavior of the system as a whole and can help to prevent issues with data consistency.</a>
    <p href="#" class="text-sm pb-3 text-center">
        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
    </p>
</div>

<a href="#" class="flex h-screen w-full justify-center  hover:opacity-75">
    <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/props.png" />
</a>
<div class="bg-white flex flex-col justify-start p-6">
    <a href="#" class="text-3xl font-bold text-center hover:text-gray-700 pb-4">How to validate React props using PropTypes?</a> <br />
    <a href="#" class="pb-6 font-bold text-center">The propTypes property is an object that maps the names of the expected props to their respective PropTypes. In this case, we define title and message as required string props by using the PropTypes.string.isRequired syntax.

        When these props are passed to MyComponent, React will validate them against the defined propTypes. If any of the props are missing or have the wrong type, React will throw an error in the console.
    </a>
    <p href="#" class="text-sm pb-3 text-center">
        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
    </p>
</div>

<a href="#" class="flex h-screen w-full justify-center items-center hover:opacity-75">
    <img src="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp" />
</a>
<div class="bg-white text-center flex flex-col justify-start p-6">
    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4 text-center">Tell us the difference between nodejs and express js?</a> <br />
    <a href="#" class="pb-6 font-bold">Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side, outside of the browser environment. It provides an event-driven architecture and a non-blocking I/O model, making it suitable for building scalable and high-performance applications. Node.js can be used for a wide variety of server-side tasks, including building web servers, RESTful APIs, and command-line tools.

        Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, including middleware support, routing, templating engines, and more. Express.js simplifies the development of web applications by providing a high-level API that abstracts away many of the lower-level details of building a web server from scratch. Express.js can be used to build all types of web applications, including single-page applications, multi-page applications, and APIs.</a>
    <p href="#" class="text-sm pb-3 text-center">
        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
    </p>
</div>

<a href="#" class="flex h-screen w-full justify-center items-center hover:opacity-75">
    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*esdkRk3TTqmEkT064DL4Vg.png" />
</a>
<div class="bg-white flex flex-col justify-start p-6">
    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4 text-center">What is a custom hook, and why will you create a custom hook?</a>  <br />
    <a href="#" class="pb-6 font-bold text-center">A custom hook is essentially a function that returns an array or object of values, where the first value is the state or value that you want to share between different components, and the second value is the function that updates the state or value. Custom hooks can also return additional functions or values as needed.

        Custom hooks can be useful in many scenarios. For example, if you have several components that need to share the same stateful logic, you can extract that logic into a custom hook and reuse it across those components. Custom hooks can also help simplify complex component logic, making it easier to read and maintain.
    </a>
    <p href="#" class="text-sm pb-3 text-center">
        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
    </p>
</div>
</article>
            </div>
        </div>
    );
};

export default Blog;