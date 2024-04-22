import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private renderer: Renderer2,private router:Router) {}
  loadingboolean=true

  ngOnInit(): void {
    const images = [
      'https://images.pexels.com/photos/1026390/pexels-photo-1026390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7159864/pexels-photo-7159864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/20043048/pexels-photo-20043048/free-photo-of-wedding-decoration-in-room-with-white-columns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/17119951/pexels-photo-17119951/free-photo-of-close-up-of-an-elegant-table-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18897196/pexels-photo-18897196/free-photo-of-indian-wedding-ceremony-with-petals.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4564948/pexels-photo-4564948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2959190/pexels-photo-2959190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    setTimeout(()=>{
      this.loadingboolean=false
    },1500)

    let index = 0;

    const changeBackgroundImage = () => {
      const backgroundDiv = document.getElementById('background-div');
      if (index >= images.length) {
        index = 0; 
      }
      this.renderer.setStyle(
        backgroundDiv,
        'background-image',
        `url('${images[index]}')`
      );
      index++;
    };

    changeBackgroundImage();

    setInterval(changeBackgroundImage, 5000);
  }
  
  goSignup(){
    this.router.navigate(['signup']);
  }
  gochat(){
    this.router.navigate(['chat'])
  }

  
}
