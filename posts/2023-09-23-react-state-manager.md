---
title: A React.js state manager
date: 2023-09-23
author: "ion rosgrim"
---

I wanted to see how easy/hard is to do a state manager that would work with React.js. There is no reason for this to not work equally well with any other front-end library.
Is this an adequate solution? 
I don't know but I successfully used it in some of React.js experiments and had no noticeable issues.
The code is pretty straight forward and the idea is based on the `Observer Pattern`.

```javascript
class Store {
    constructor(state = {}) {
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: state
        });
        Object.defineProperty(this, "listeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
    }
    subscribe(listener) {
        this.listeners.add(listener);
    }
    unsubscribe(listener) {
        this.listeners.delete(listener);
    }
    notify() {
        this.listeners.forEach((listener) => listener(this.state));
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }
    getState() {
        return this.state;
    }
}
```

And here is the React.js hook that links everything together:

```javascript
const createHook = (store, compareFn = shallowEqual) => {
    return (selector) => {
        const [state, setState] = useState(() => selector(store.getState()));
        useEffect(() => {
            const listener = (newState) => {
                const newSelectedState = selector(newState);
                if (!compareFn(newSelectedState, state)) {
                    setState(newSelectedState);
                }
            };
            store.subscribe(listener);
            return () => {
                store.unsubscribe(listener);
            };
        }, [selector, state]);
        return state;
    };
};
```

Check the source code for more details

### Link to source code:
[https://github.com/irosgrim/react-state-manager](https://github.com/irosgrim/react-state-manager)


I decided to make it into a `npm package`.

### Link to package:
[https://www.npmjs.com/package/@irosgrim/react-state-manager](https://www.npmjs.com/package/@irosgrim/react-state-manager)


### In action:

<iframe src="https://irosgrim.dev/state-management/" frameborder="0" width="600" height="600"></iframe>
