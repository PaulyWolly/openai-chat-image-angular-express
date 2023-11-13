import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { HomeComponent } from './components/home/home.component';
import { InitComponent } from './components/init/init.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OpenaiImageComponent } from './components/openai-image/openai-image.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
  },
  {
    path: 'init',
    component: InitComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'chat-text',
    component: ChatbotComponent,
  },
  {
    path: 'openai-image',
    component: OpenaiImageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
