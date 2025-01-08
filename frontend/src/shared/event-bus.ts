import { reactive } from 'vue';

const eventBus: any = reactive({ events: {} });

eventBus.on = (event: any, callback: any) => {
  if (!eventBus.events[event]) {
    eventBus.events[event] = [];
  }
  eventBus.events[event].push(callback);
};


eventBus.emit = (event: any, ...args: any) => {
  if (eventBus.events[event]) {
    eventBus.events[event].forEach((callback: any) => callback(...args));
  }
};

export default eventBus;
