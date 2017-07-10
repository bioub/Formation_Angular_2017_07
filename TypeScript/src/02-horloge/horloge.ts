import * as format from 'date-fns/format';

const DELAY: number = 1000;

interface HorlogeOptions {
  container: HTMLElement,
  delay?: number,
  format?: string,
}

export class Horloge {
  protected options: HorlogeOptions

  constructor(options: HorlogeOptions) {
    options.delay = options.delay || DELAY;
    options.format = options.format || 'HH:mm:ss';
    this.options = options;
  }

  update() {
    this.options.container.innerHTML = format(new Date(), this.options.format);
  }

  start() {
    this.update();
    setInterval(this.update.bind(this), this.options.delay);
  }
}
