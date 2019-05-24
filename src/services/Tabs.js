export default class Tabs {
  constructor(tabs, defaultTab) {
    this.tabs = tabs;

    this.current = defaultTab ? defaultTab : tabs[0];

    this.infiniteLoop = false;
  }

  infinite() {
    this.infiniteLoop = true;
  }

  swipe(direction) {
    let num = ["left", "up"].includes(direction) ? 1 : -1;

    let nextTabIndex = this.tabs.indexOf(this.current) + num;

    if (
      (nextTabIndex === this.tabs.length || nextTabIndex === -1) &&
      !this.infiniteLoop
    ) {
      return;
    }

    if (
      ["left", "up"].includes(direction) &&
      nextTabIndex === this.tabs.length
    ) {
      nextTabIndex = 0;
    }

    if (["right", "down"].includes(direction) && nextTabIndex === -1) {
      nextTabIndex = this.tabs.length - 1;
    }

    this.current = this.tabs[nextTabIndex];
  }
}
