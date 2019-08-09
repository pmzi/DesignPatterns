import FlyingBehavior from './behaviors/FlyingBehavior';
import QuackingBehavior from './behaviors/QuackingBehavior';

export default abstract class Duck{
  protected quackBehavior: QuackingBehavior;
  protected flyBehavior: FlyingBehavior;

  abstract display(): void;

  makeSound(){
    this.quackBehavior.quack();
  }

  fly(){
    this.flyBehavior.fly();
  }
}