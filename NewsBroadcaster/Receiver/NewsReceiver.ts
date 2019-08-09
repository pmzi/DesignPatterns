import Receiver from './Receiver';
import BroadCaster from '../BroadCaster';

export default class NewsReceiver implements Receiver<string>{
  constructor(broadCaster: BroadCaster<string>){
    broadCaster.setReceiver(this);
  }
  update(state: string){
    console.log('State Updated!', state);
  }
}