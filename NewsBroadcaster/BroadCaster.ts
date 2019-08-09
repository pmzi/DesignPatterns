import Receiver from './Receiver/Receiver';

export default class BroadCaster<T>{
  protected receivers: Receiver<T>[] = []
  state: T
  setReceiver(receiver: Receiver<T>) {
    this.receivers.push(receiver);
  }
  removeReceinver(receiver: Receiver<T>){
    this.receivers = this.receivers.filter(item => item !== receiver);
  }
  notifyReceivers(){
    this.receivers.forEach(receiver => {
      receiver.update(this.state);
    })
  }
  update(state: T){
    this.state = state;
    this.notifyReceivers();
  }
  getState(): T{
    return this.state;
  }
}