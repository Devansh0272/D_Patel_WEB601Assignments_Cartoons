import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypefilterPipe } from '../typefilter.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypefilterPipe, FormsModule, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Ben 10",
        description:"Ben 10 is an American media franchise conceived by Man of Action, produced by Cartoon Network Studios, and owned by Warner Bros. Discovery. .",
        creator:"	Duncan Rouleau",
        imgURL:"https://wallpapers.com/images/hd/ben-10-1280-x-800-picture-o2jq2ez33p18p7k6.jpg",
        type:"Fiction",
        tags: ["Ben10", "Alien"]
      },
      {
        id: 1,
        title: "Idaten jump",
        description:"This show is about Sho Yamato and his 5th grade friends, Kakeru Sakamaki and Makoto Shido. They all enjoy mountain biking. Another team of mountain bikers known as Shark Tooth challenge them to a race but during this race they get transported to another world called the X-Zone by black smoke.",
        creator:"Toshihiro Fujiwara",
        imgURL:"https://play-lh.googleusercontent.com/dEOlk_CgVP2tSegOmJn8YI8bkCuolaO1ZLlf3714Y1Lc5nElDjVV49kZydKUISmQSQ",
        type:"Fiction",
        tags: ["Bycycle", "Racing"]
      },
      {
        id: 2,
        title: "Doreamon",
        description:"Doraemon is a robot cat in the 22nd century which got his ears chewed off by a mouse and now he is afraid of all mice. He came back in time to aid a lazy and clumsy boy named Nobita Nobi.",
        creator:"Fujiko F Fuji",
        imgURL:"https://img.fruugo.com/product/0/91/842847910_max.jpg",
        type:"Fiction",
        tags: ["Gadget", "Cat"]
      },
      {
        id: 3,
        title: "Ninja Hathori",
        description: "Animation on ninja.",
        creator: "Fujiko Fujio",
        imgURL: "data:image/jpeg;base64,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",
        type: "Funny",
        tags: ["Ninja", "Battle"]
      },
      {
        id: 4,
        title: "Sinchan",
        description: "Funny show with funny family and children.",
        creator: "Yoshito Usui",
        imgURL: "https://miro.medium.com/v2/resize:fit:1400/1*HAOBwEQvZ_MNEJo6vhl3Fw.jpeg",
        type: "Funny",
        tags: ["Kid", "Comedy"]
      }
     , {
        id: 5,
        title: "Random cartoon",
        description: "some description.",
        creator: "some creator",
        imgURL: "https://static.vecteezy.com/system/resources/previews/008/387/824/original/cartoon-senior-elderly-old-man-vector.jpg",
        type: "Funny",
        tags: ["Kid", "Comedy"]
      }
     ,
     {
      id: 6,
      title: "Random cartoon 2",
      description: "Some description",
      creator: "creator 2",
      imgURL: "https://i.pinimg.com/originals/3d/4a/7d/3d4a7d80c9a6e8c5247b441c68829eac.jpg",
      type: "",
      tags: ["Kid", "Comedy"]
    }
    
    ];
  }
 
}