import { createStore } from 'redux';
import rootReducer from './reducer';

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // Ignore write errors
  }
};

// Create Redux store with persisted state
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;