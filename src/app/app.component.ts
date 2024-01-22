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
      this.swipeHeadset("next");
    }, 50);
  

  }

  showPrev(){
    if(this.focusedHeadset===1){
      return;
    }
    this.focusedHeadset=this.focusedHeadset-1;
      setTimeout(() => {
      this.showHideButton("prev");
      this.fill_background();
      this.swipeHeadset("prev");
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

  swipeHeadset(direction: string){
   if (this.focusedHeadset===1){
    gsap.to(".sliverHeadset", {
      rotation: 0,
      duration: this.gsapDuration,
      left: "50%",
      x:"-50%",
      height:630,
      width:498,
      });

    gsap.to(".blackHeadset",{
      duration: this.gsapDuration,
      rotation:121.208,
      height: 150,
      width: 119,
      left: -20,
      bottom:0,
      top:"auto",
      x:0,
    });

    gsap.to(".pinkHeadset",{
      duration: 0.5,
      rotation:360,
      x:-200,
      translateY:200,
    });

    gsap.to(".pinkHeadset",{
      duration: 0.2,
      opacity:0,
      delay:0.3
    });
    
   }else if(this.focusedHeadset===2 && direction==="next"){
    gsap.to(".sliverHeadset", {
      rotation: 28,
      duration: this.gsapDuration,
      left: -80,
      x:0,
      height:150,
      width:119,
      top:0
      });
    gsap.to(".blackHeadset",{
      duration: this.gsapDuration,
      rotation: 0,
      height:630,
      width:498,
      left: "50%",
    });
    gsap.to(".pinkHeadset",{
      duration: 0.3,
      opacity:1,
    });
    gsap.to(".pinkHeadset",{
      duration: this.gsapDuration,
      translateY:0,
      rotation:121.208,
      x:0,
    });

  }else if(this.focusedHeadset===3){
    gsap.to(".sliverHeadset", {
      rotation: 360,
      duration: this.gsapDuration,
      x:-200,
      y:200,
      height:150,
      width:119,
      top:0
      });
    gsap.to(".sliverHeadset",{
      duration: 0.4,
      opacity:0,
      delay:0.3
    });
    gsap.to(".blackHeadset",{
      rotation: 28,
      duration: this.gsapDuration,
      left: -80,
      x:0,
      height:150,
      width:119,
      top:0
    });
    gsap.to(".pinkHeadset",{
      duration: this.gsapDuration,
      rotation: 0,
      height:630,
      width:498,
      left: "50%",
      x: "-50%"
    });
    
  }else{
    gsap.to(".sliverHeadset", {
      rotation: 28,
      duration: this.gsapDuration,
      x:0,
      y:0,
      height:150,
      width:119,
      top:0
      });
    gsap.to(".sliverHeadset",{
      duration: 0.4,
      opacity:1,
    });
    gsap.to(".blackHeadset",{
      rotation: 0,
      duration: this.gsapDuration,
      left: "50%",
      height:630,
      width:498,
    });
    gsap.to(".pinkHeadset",{
      duration: this.gsapDuration,
      rotation: 121.208,
      height:150,
      width:119,
      left: -80,
      x: 0,
      bottom: 0
    });
    
  }
  }
}
