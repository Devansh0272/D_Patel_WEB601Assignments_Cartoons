import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Ben 10",
      description:"Ben 10 is an American media franchise conceived by Man of Action, produced by Cartoon Network Studios, and owned by Warner Bros. Discovery. .",
      creator:"	Duncan Rouleau",
      imgURL:"https://wallpapers.com/images/hd/ben-10-1280-x-800-picture-o2jq2ez33p18p7k6.jpg",
      type:"Fiction"
    });
    this.contentList.addContent({
      id: 1,
      title: "Idaten jump",
      description:"This show is about Sho Yamato and his 5th grade friends, Kakeru Sakamaki and Makoto Shido. They all enjoy mountain biking. Another team of mountain bikers known as Shark Tooth challenge them to a race but during this race they get transported to another world called the X-Zone by black smoke.",
      creator:"Toshihiro Fujiwara",
      imgURL:"https://play-lh.googleusercontent.com/dEOlk_CgVP2tSegOmJn8YI8bkCuolaO1ZLlf3714Y1Lc5nElDjVV49kZydKUISmQSQ",
      type:"Adventure"
    });
    this.contentList.addContent({
      id: 2,
      title: "Doreamon",
      description:"Doraemon is a robot cat in the 22nd century which got his ears chewed off by a mouse and now he is afraid of all mice. He came back in time to aid a lazy and clumsy boy named Nobita Nobi.",
      creator:"Fujiko F Fuji",
      imgURL:"https://img.fruugo.com/product/0/91/842847910_max.jpg",
      type:"Fiction"
    });
  }
}


// content badli kadh movie name and all {id sivay badhu}, then commit  