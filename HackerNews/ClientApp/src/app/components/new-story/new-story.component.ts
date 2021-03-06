import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css'],
})
export class NewStoryComponent implements OnInit {

  public stories: Story[];
  private page: number;
  private storyPageSize: number;
  private textUrl: string;
  filter: string = "";

  constructor(private storyService: StoryService) {
    this.page = storyService.page;
    this.storyPageSize = storyService.storyPageSize;
    this.textUrl = storyService.textUrl;
  }

  ngOnInit() {
    this.storyService.getNewStories().subscribe(result => {
      this.stories = result;
    }, error => console.error(error));
  }

  handlePageChange(event) {
    this.page = event;
  }
}
