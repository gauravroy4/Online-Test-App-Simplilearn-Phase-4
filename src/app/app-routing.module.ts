import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { BannerComponent } from './banner/banner.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: "", component: BannerComponent },
  { path: "questions", component: QuestionsComponent },
  { path: "questions/result", component: AnswersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
