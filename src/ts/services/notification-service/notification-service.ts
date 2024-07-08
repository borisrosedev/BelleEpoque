export class NotificationService {
  notificationAside: HTMLElement
  _content: string
  constructor() {
    this.notificationAside = document.getElementById("notification")
  }

  get content() {
    return this._content
  }

  set content(data: any) {
    this._content = data.content
    this.notificationAside.innerHTML = `<p class="notification__content notification---${data.type}">${this._content}</p>`

    setTimeout(() => {
      this.notificationAside.innerHTML = ""
      this._content = ""
    }, 4000)
  }
}
