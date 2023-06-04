Chapter 05 – Let’s get Hooked!
Q: What is the difference between Named export, Default export, and * as export?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: named export and default export. In Named export, one can have multiple named exports per file. Then import the specific exports they want surrounded in { } braces. The name of imported module has to be the same as the name of the exported module. The name of imported module has to be the same as the name of the exported module. In Named export, the component is exported from MyComponent.js file like:
	export const MyComponent = ( ) => { }
	export const MyComponent2 = ( ) => { }
and the component is imported from MyComponent.js file like: here we must use { } in MyComponent.

	// ex. Importing a single named export
	Import { MyComponent } from “./MyComponent”;

	//ex. Importing multiple named exports
	Import { MyComponent, MyComponent2 } from “./MyComponent”;

	//ex. Giving a named import a different name by using “as”:
	Import { MyComponent2 as MyNewComponent } from “./MyComponent”;

In Default export, One can have only one default export per file. The naming of import is completely independent in default export and was can use any name we like. In Default export , the component is exported from MyComponent.js file like:

	Const MyComponet =( ) => { }
	Export default MyComponent;
And the component is imported from MyComponent.js file like: here we must omit  { } in MyComponent.
	Import MyComponent from “./MyComonent”;
In * as export, it is used to import the whole module as a component and access the components inside the module. In * as export, the component is exported from MyComponent.js file like:

	Export const MyComponent = ( ) => { }
	Export const MyComponent2 = ( ) => { }
	Export const MyComponent3 = ( ) => { }
And the component is imported from MyComponent.js file like:

	Import * as MainComponents from “./MyComponent”;

Now we can use them in JSX as:	

	<MainComponents.MyComponent />
	<MainComponents.MyComponent2 />
	<MainComponent.MyComponets3 />

We can use Named export and Default export together. So you should export like:

	Export const Mycomponent2 = ( ) => { }
	Const MyComponent = ( ) => { }
	Export default MyComponent;
and import like:
	import MyComponent, {MyComponent2} from “./MyComponent”;

Q: What is the importance of config.js file?
A: config.js files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user’s preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:
	
	Shubham
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

	NAME= ‘Shubham’
	SURNAME= ‘Chauhan’

Q: What are React Hooks ?
A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part form a functional component. Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

React provides a bunch of standard in-built hooks:
•	useState: To manage states. Returns a stateful value and an update function to update it.
•	useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
•	useContext: To return the current value for a context.
•	useReducer: A useState alternative to help with complex state management.
•	useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
•	useMemo: It returns a memorized value that helps in performance optimizations.
•	useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
•	useLayoutEffect: It fires at end of all DOM mutations. It’s best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
•	useDebugValue: Helps to display a label in React DevTools for custom hooks.

Q: What do we need useState Hook?
A: useState hook is used to maintain the state in our React application. It kedds track of the state changes so basically useState has the ability to encapsulate local state in a function component . The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
UseState encapsulate only singular value from the state, for multiple state need to have useState Calls.

Syntax for useState hook
	const [state, setState ] = useState(initalstate);

Importing: To use useState you need to import useState from react as shown below:
	Import React, { useState } from “react”;
We can use Hooks in Functional Components
	Const Example = (props) => {
		//you can use Hooks here!
		return <div />;
	}
	

//////////////////////// Chapter-6 /////////////////////

# Namaste chapter-06 Exploring the World




## FAQ

#### Question 1: What is Microservice?

Answer 1: Microservice also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of application, that communicate over well-defined APIs. These services are owned by small, self-contained teams. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new fetures. means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

-> Benefits of Microservices:
  - Flexible SCaling.
  - Easy Deployment.
  - Technological Freedom.
  - Reusable code.
  - Resilience.

#### Question 2:  What is monolith architecture?

Answer 2: A Monolith architecture is a traditional model of sofware program, which is built as a unified unit that is self-contained and independent from other applications. A monolithc architecture is a singular, large computing network with one code base that comples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

#### Question 3:  What is the difference between Monolith and Microservice?

Answer 3: With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application's fetures becomes more complex as the code base grows. THis complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increse the impact of a single process failure.

with a microservices architecture, an appliction is built as independent components that run each application process as aservice. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are inependently run, each serviice can be updated, deployed and scaled to meet demand for specific functions of an application.



#### Question 4:Why do we need a useEffect hook?

Answer 4: useEffect hook is javascript function provided by react. The useEffect hook allows you to eliminate side effects in your components. Some examples of side effects are: fetching API data, directly upating the DOM, and satting up subscriptions or timers, etc can be lead to unwarranted side-effects. useEffects accepts two arguments, a callback function and a dependency array. The second argument is optional.

	useEffect(() => {}, [])

The ()={} is a call back function and [] is called empty dependency array.if anything that we pass(suppose currentState) inside the [] it trigger the callback function and changes the state of the application.

	useEffect(()=> {
		setCurrentState("true");
	}, [currentState])

If we do not pass empty dependency array then the useEffect run everytime when the UI is rendered.

	useEffect(()=> {})

#### Question 5: What is Optional Chaining?
Answer 5: Optional Chaining( ?. ) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error. Optional Chaining ( ?. ) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns undefinded.



#### Question 6: What is Shimmer UI?

Answer 6: A shimmer UI resembles the page's actual UI, so usera will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and

#### Question 6: What is Reconciliation in React?

Answer 6: 


#### Question 6: What is Reconciliation in React?

Answer 6: 


#### Question 6: What is Reconciliation in React?

Answer 6: 

#### Question 6: What is Reconciliation in React?

Answer 6: 

