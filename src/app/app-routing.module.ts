import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education/education.component';
import { AboutMeComponent } from './about/about.component';
import { SkillsComponent } from './competence/competence.component';
import { CertificationsComponent } from './certifications/certifications/certifications.component';
import { ContactComponent } from './experience/experience.component';

const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {path: "education", component: EducationComponent},
  {path: "skills", component: SkillsComponent},
  {path: "certifications", component: CertificationsComponent},
  {path: "contact me", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
