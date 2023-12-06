import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../../../shared/components/icon/icon.component';
import { IconProps } from '../../../../../../interfaces/icon.interface';
import { UserService } from '../../../../../../services/user.service';
import { UserDTO } from '../../../../../../interfaces/UserDTO.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private folder: string = "../../../../../../../assets/svg/";
  user : UserDTO | null = null;

  constructor(
    private readonly userService: UserService,
  ){}
  ngOnInit(){
    this.userService.usuario$.subscribe(
      (value)=>{
        this.user = value;
      }
    )
  }

  icons : IconProps[] = [
    {
      image: this.getSvgFromFolder(this.folder, "settings"),
      imgName: "settigs",
    },
    {
      image: this.getSvgFromFolder(this.folder, "user"),
      imgName: "user",
    }
  ]
  
  

  getSvgFromFolder(folder: string, svgName: string) :string {
    return `${folder}${svgName}.svg`
  }

}
