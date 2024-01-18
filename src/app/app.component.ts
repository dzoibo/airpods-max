import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit{
  title = 'airpods-max';
  gsapDuration=0.75;
  focusedHeadset=2;
  headsetList=[
    {
      id:1,
      name:'argent',
    },
    {
      id:2,
      name: 'noir',
    },
    {
      id:3,
      name: 'pink'
    }
  ]

ngOnInit(): void {
}


  showNext(){
    if(this.focusedHeadset===3){
      this.showPrev()
      return;
    }
    this.focusedHeadset=this.focusedHeadset+1;
    setTimeout(() => {
      this.showHideButton("next");
      this.fill_background();
    }, 50);
    console.log(this.focusedHeadset);
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

  showPrev(){
    if(this.focusedHeadset===1){
      return;
    }
    this.focusedHeadset=this.focusedHeadset-1;
      setTimeout(() => {
      this.showHideButton("prev");
      this.fill_background();
    }, 50);
  }

  fill_background(){
    gsap.to(".blue-slider",{
      duration: this.gsapDuration,
      x: (this.focusedHeadset-1) * (20+94)// 20 is the gap between items and 94 is the width of the item
    });

    gsap.to(".show-animated-background",{
      height: 179,
      duration: this.gsapDuration
    });

    gsap.to(".remove-animated-background",{
      height: 7,
      duration: this.gsapDuration
    })
  }

  showHideButton(direction: string){
    if(this.focusedHeadset===1){
      gsap.to(".next",{
        x:-35,
        duration: this.gsapDuration
      });
      gsap.to(".prev",{
        x:35,
        duration: this.gsapDuration
      });
    }else if(this.focusedHeadset===2 && direction==='next'){
      gsap.to(".next",{
        x:0,
        duration: this.gsapDuration
      });
      gsap.to(".prev",{
        x:0,
        duration: this.gsapDuration
      });
      gsap.to((".next-text"),{
        opacity: 0,
        position: "absolute",
        duration: this.gsapDuration
      });
      gsap.to((".prev-text"),{
        opacity: 1,
        position: "relative",
        duration: this.gsapDuration
      })
    }else if(this.focusedHeadset===2 && direction!=='next'){
      gsap.to(".next",{
        x:0,
        duration: this.gsapDuration
      });
      gsap.to(".prev",{
        x:0,
        duration: this.gsapDuration
      });
      gsap.to((".prev-text"),{
        opacity: 1,
        position: "relative",
        duration: this.gsapDuration
      });
      gsap.to((".next-icon"),{
        rotate: 0,
        marginLeft:0,
        duration: this.gsapDuration
      });
      gsap.to((".next-text"),{
        opacity: 0,
        position: "absolute",
        duration: this.gsapDuration
      })
    }else{
      gsap.to(".next",{
        x:-35,
        duration: this.gsapDuration
      });
      gsap.to(".prev",{
        x:35,
        duration: this.gsapDuration
      });
      gsap.to((".next-text"),{
        opacity: 1,
        position: "relative",
        duration: this.gsapDuration
      });
      gsap.to((".prev-text"),{
        opacity: 0,
        position: "absolute",
        duration: this.gsapDuration
      });
      gsap.to((".next-icon"),{
        rotate: 180,
        marginLeft: 40,
        duration: this.gsapDuration
      });
    }
  }
}
