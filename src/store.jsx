import {createStore} from 'redux';
import reducer from './reducer.jsx';

export default function makeStore() {
  return createStore(reducer);
}
