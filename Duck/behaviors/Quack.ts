import QuackingBehavior from './QuackingBehavior';

export default class Quack implements QuackingBehavior{
  quack(){
    console.log('Quack Quack!');
  }
}