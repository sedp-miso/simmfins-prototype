export default class Tabs {
  constructor(tabs, defaultTab) {
    this.tabs = tabs;

    this.current = defaultTab ? defaultTab : tabs[0];
  }

  swipe(direction) {
    let num = ["left", "up"].includes(direction) ? 1 : -1;

    let nextTabIndex = this.tabs.indexOf(this.current) + num;

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
