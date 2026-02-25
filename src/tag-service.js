export class TagService {
  constructor() {
    this.tags = [];
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  getAll() {
    return this.tags;
  }
}
