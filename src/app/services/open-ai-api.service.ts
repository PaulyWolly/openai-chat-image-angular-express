import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviornment';

@Injectable({
  providedIn: 'root',
})
export class OpenAiApiService {
  private apiUrl = environment.openai_apiUrl; // Update with your Node.js server URL
  private apiImageUrl = 'https://api.openai.com/v1/images/generations';

  constructor(private http: HttpClient) {}

  public sendMessage(message: string) {
    return this.http.post<any>(`${this.apiUrl}/chat`, { message });
  }

  generateImage(prompt: string, model: string) {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + environment.openai_apiUrl
    );
    const body = {
      model: model,
      prompt: prompt,
      num_images: 1,
      size: '512x512',
      response_format: 'url',
    };
    return this.http.post(this.apiImageUrl, body, { headers: headers });
  }
}
