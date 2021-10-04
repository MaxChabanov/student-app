import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let teacher_auth = document.querySelector("#teacher__auth"),
        student_auth = document.querySelector("#student__auth"),
        student_login = document.querySelector("#student_login"),
        student_pass = document.querySelector("#student_password"),
        teacher_login = document.querySelector("#teacher_login"),
        teacher_pass = document.querySelector("#teacher_password"),
        form_wrapper = document.querySelector(".form_wrapper");
        console.dir(teacher_auth);
    teacher_auth?.addEventListener("click", () => {
      if (teacher_login?.classList.contains("active")! && teacher_pass?.classList.contains("active")!) {
        console.log("sfd");
        form_wrapper?.classList.add("teacher_active");
        form_wrapper?.classList.remove("student_active");
        teacher_login?.classList.add("active");
        teacher_pass?.classList.add("active");
        if (student_login?.classList.contains("active") && student_pass?.classList.contains("active")) {
          student_login?.classList.remove("active");
          student_pass?.classList.remove("active");
        }
        teacher_auth?.classList.add("toggle_active");
        if (student_auth?.classList.contains("toggle_active")) {
          student_auth?.classList.remove("toggle_active");
        }
      }
    })
    student_auth?.addEventListener("click", () => {
      if (student_login?.classList.contains("active")! && student_pass?.classList.contains("active")!) {
        console.log("sfd");
        form_wrapper?.classList.remove("teacher_active");
        form_wrapper?.classList.add("student_active");
        student_login?.classList.add("active");
        student_pass?.classList.add("active");
        if (teacher_login?.classList.contains("active") && teacher_pass?.classList.contains("active")) {
          teacher_login?.classList.remove("active");
          teacher_pass?.classList.remove("active");
        }
        student_auth?.classList.add("toggle_active");
        if (teacher_auth?.classList.contains("toggle_active")) {
          teacher_auth?.classList.remove("toggle_active");
        }
      }
    })
  }

}
