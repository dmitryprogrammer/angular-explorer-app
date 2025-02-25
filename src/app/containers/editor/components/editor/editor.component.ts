import {Component} from "@angular/core";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabel} from "primeng/floatlabel";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-editor",
  imports: [ReactiveFormsModule, InputTextModule, FloatLabel],
  templateUrl: "./editor.component.html",
  styleUrl: "./editor.component.scss",
})
export class EditorComponent {
  public directoryName: FormControl<string | null> = new FormControl<string | null>("");
}
