import BroadCaster from './BroadCaster';
import NewsReceiver from './Receiver/NewsReceiver';

const newsBroadCaster = new BroadCaster<string>();

const rec1 = new NewsReceiver(newsBroadCaster);
const rec2 = new NewsReceiver(newsBroadCaster);

newsBroadCaster.update('New State!');