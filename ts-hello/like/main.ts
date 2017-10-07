import { LikeComponent } from './like.component';

let component = new LikeComponent(10,true); 

component.onClick(); 
console.log(`Likes Count: ${component.likesCount}, isSelected: ${component.isSelected}`);