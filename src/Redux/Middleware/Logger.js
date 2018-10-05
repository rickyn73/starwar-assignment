
function logger({ getState }) {
  return next => (action) => {
    console.log(action);
            // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
        console.log(getState());
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
    return returnValue;
  };
}

export default logger;