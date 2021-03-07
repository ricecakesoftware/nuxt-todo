export class Task {
  done: boolean = false;
  title: string = "";
  content: string = "";

  constructor(done: boolean, title: string, content: string) {
    this.done = done;
    this.title = title;
    this.content = content;
  }
}
