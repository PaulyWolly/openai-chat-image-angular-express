import { Component } from '@angular/core';
import { OpenAiApiService } from '../../services/open-ai-api.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  userMessage!: string;
  assistantReply!: string;
  chatMessages: { role: string; content: string }[] = [];

  constructor(private openAiApiService: OpenAiApiService) {}

  sendMessage() {
    const userMessage = this.userMessage;

    this.chatMessages.push({ role: 'user', content: userMessage });

    this.openAiApiService
      .sendMessage(this.userMessage)
      .subscribe((response: { reply: string }) => {
        this.assistantReply = response.reply;
        this.chatMessages.push({
          role: 'assistant',
          content: this.assistantReply,
        });
        this.userMessage = '';
      });
  }

  submitViaKeypress(event: { keyCode: number }) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }

  resetWindow() {
    window.location.reload();
  }
}
