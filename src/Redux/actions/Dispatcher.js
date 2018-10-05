
import Store from '../Store';

class DispatchProvider {
  constructor() {
    this.dispatch = Store.dispatch;
  }

  dispatchEvents(type, payload) {
    this.dispatch({ type, payload });
  }

}

const Dispatcher = new DispatchProvider();

export default Dispatcher;