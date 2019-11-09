- [ ] Why would you use class component over function components (removing hooks from the question)?

          You would use a class component over a function component when you want to extend upon the React Component module. This is not avaliable in function components.

- [ ] Name three lifecycle methods and their purposes.

          componentDidMount - this is executed after the first render. You can also call setState here, which will cause another render to happen.

          componentDidUpdate - this is executed after updating has happened. 

          componentWillUnmount - this is executed just before the component is unmounted. This is used to perform any necessary cleanup.


- [ ] What is the purpose of a custom hook?

          The purpose of a custom hook is to be able to reuse certain stateful logic between components in a functional way.

- [ ] Why is it important to test our apps?

           As the application grows, it may be more difficult to discern where and why certain bugs may be occuring. Unit testing, Integration testing and End-to-end testing along the way can fix bugs we may not have been aware of. 