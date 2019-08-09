import BroadCaster from "../BroadCaster";

export default interface Receiver<T>{
  update(state: T): void;
}