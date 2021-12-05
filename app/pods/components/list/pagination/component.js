import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';


export default class PaginationComponent extends Component {

  @tracked currentPage = this.args.currentPage;

  get pages() {
    return Array.from(Array(this.args.numberPages)).map((e,i)=>i+1);
  }
}
