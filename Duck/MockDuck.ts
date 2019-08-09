import Duck from './Duck';

import Quack from './behaviors/Quack';
import NonFlyDuck from './behaviors/NonFlyDuck';

export default class MockDuck extends Duck{
  constructor(){
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new NonFlyDuck();
  }
  display() {
    console.log('Hey, I`m MockDuck');
  }
}