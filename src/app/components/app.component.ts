import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FoldersTreeComponent} from "../containers/folders-tree/components/folder-tree/folders-tree.component";
import {EditorComponent} from "../containers/editor/components/editor/editor.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FoldersTreeComponent, EditorComponent],
})
export class AppComponent {
  title = "angular-explorer-app";
}
