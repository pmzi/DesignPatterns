import FlyingBehavior from './FlyingBehavior';

export default class NonFlyDuck implements FlyingBehavior{
  // Doesn't fly
  fly(){
    console.log('I dont`t fly... :(')
  }
}