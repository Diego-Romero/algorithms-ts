/*
What are the main features of Typescript
- Cross platform
- ES6 features
- OOP features like classes, interfaces and modules
- Static type checking: helps type checking at compile time, you can find errors while writing the code.
- Optional static typing
- DOM Manipulation

Benefits of using Typescript?
- More expressive, meaning less syntactical clutter. 
- More advanced debugger, catches logical errors before compile time.
- Static typing.
- Usable across clients and sever side projects.

Built in data types?
- number
- string: sequence of characters stored as Unicode UTF-16 code.
- Boolean
- Null
- Undefined
- void: assigned to methods that have no return value.

What is an interface in TS?
They define a contract or structure for objects that use that interface.

What are modules in TS?
They are a collection of related variables, functions, classes and interfaces.
They contain everything needed to execute a task. They can easily be imported to share code.

module MyModule {
	class xyz {}
	export sum = (x: number, y: number) => x + y;
	...etc
}

What's type assertions in TS?
Is a soft version of typecasting that suggests the compiler see the variable as a certain type but does not force it into that mold if it's in different form.

How do you call a base class constructor from a child class in TS?
class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
class Snake extends Animal {
	constructor(name: string) {
		super(name)
	}
}

Explain how to use Typescript Mixins:
Mixins are essentially inheritance that works in the opposite direction.
Mixins allow you to build new classes by combining simpler partial class setups from previous classes.

What are getters/setters in TS?
They are special type of methods that help you to delegate different levels of access to private variables.
For example a new employer may be able to get the number of employees in the company but won't have permission to set it.

How do you allow classes defined in a module to be accessible outside of a module?
module Admin {
	export class Employee {
		name: string;
		constructor(name: string) {
			this.name = name;
		}
	}
	let diego = new Employee('diego')
}

let someoneElse = Admin.Employee('someone')

What is a .map file, and why/how can you use it?
A map file is a source map that shoes how the original typescript code was interpreted into usable JS code.
They help to simplify debugging because you can catch any odd compiler behavior.

Some debugging tools can also use these files to allow you to edit the underlying TS rather than the emitted JS file.


*/
