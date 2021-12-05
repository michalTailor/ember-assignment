import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ListComponent extends Component {

  @tracked currentPage = 1;
  itemsPerPage = 6;

  get cards() {
    if (window.innerWidth <= 650)
      return this.args.items;

    return this.args.items.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage
    );
  }

  get numberPages() {
    return Math.ceil(this.args.items.length / this.itemsPerPage);
  }

  @action
  nextPage() {
    if (this.currentPage !== Math.ceil(this.args.items.length / this.itemsPerPage))
      this.currentPage = this.currentPage + 1;
  }

  @action
  prevPage() {
    if (this.currentPage !== 1) this.currentPage = this.currentPage - 1;
  }

  @action
  setPageItems(num) {
    this.currentPage = num;
  }
}
