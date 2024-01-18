import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'airpods-max';
  gsapDuration=0.75;

  rotateOnClick(){
    gsap.to(".headsetA", {
       rotation: 0,
       duration: this.gsapDuration,
       left: "50%",
       x:"-50%",
       height:630,
       width:498,
       });
    gsap.to(".headsetC",{
      height: 150,
      duration: this.gsapDuration,
      width: 119,
      left: -20,
      bottom:0,
      rotation:121.208,
      x:0,
    })
    gsap.to(".headsetB",{
      duration: 0.5,
      rotation:360,
      x:-200,
      translateY:200,
    });
    gsap.to(".headsetB",{
      duration: 0.2,
      opacity:0,
      delay:0.3
    })

  }

  fill_background(){
    gsap.to(".animated-bacground",{
      height: 120,
      
    })
  }
}
