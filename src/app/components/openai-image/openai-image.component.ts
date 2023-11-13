import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { NgxSpinnerService } from 'ngx-spinner';
import { OpenAIApi, Configuration } from 'openai';
import { environment } from 'src/environments/enviornment';

@Component({
  selector: 'app-openai-image',
  templateUrl: './openai-image.component.html',
  styleUrls: ['./openai-image.component.css'],
})
export class OpenaiImageComponent implements OnInit {
  title = 'OpenAI Image API';

  contentData: any[] = []; //store API response from OpenAI over here and render it on UI.
  response: any;
  editableFiled = new FormControl('');

  configuration = new Configuration({
    apiKey: environment.OPENAI_API_KEY,
  });

  openai = new OpenAIApi(this.configuration);

  constructor() {} // private spinner: NgxSpinnerService

  ngOnInit(): void {}

  public async openAIResponse(prompt: any) {
    // this.spinner.show();
    this.response = await this.openai
      .createImage({
        prompt: prompt, //user entered input text will store here.
        n: 4, //number of images that are we expecting from OpenAI API.
        size: '512x512', //size of image that are we expecting from OpenAI API.
      })
      .then((x) => {
        // this.spinner.hide();
        this.contentData = x.data.data;
        console.log('x: ', x.data);
        if (this.editableFiled.value) {
          this.editableFiled.reset();
        }
      })
      .catch((y) => {
        console.log('y: ', y);
      });
  }
  callOpenAI() {
    if (this.contentData.length > 0) {
      this.contentData = [];
    }
    this.openAIResponse(this.editableFiled.value); //getting the userinput value and pass to the function
  }
}
