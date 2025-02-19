import {ChangeDetectionStrategy, Component, computed, Signal} from "@angular/core";
import {TreeNode} from "primeng/api";
import {TreeModule} from "primeng/tree";
import {FolderTreeService} from "../../services/folder-tree.service";

@Component({
  selector: "app-folders-tree",
  imports: [TreeModule],
  templateUrl: "./folders-tree.component.html",
  styleUrl: "./folders-tree.component.scss",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FolderTreeService],
})
export class FoldersTreeComponent {
  public filesTree: Signal<TreeNode[]> = computed(() => this.foldersTreeService?.folderTreeData() ?? []);

  constructor(private foldersTreeService: FolderTreeService) {}
}
