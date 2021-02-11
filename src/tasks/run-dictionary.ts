import {TasksConfig} from '../interfaces';
import {loadConfig} from '../services';
import {build} from '../dictionary';

export const runDictionary = {
  title: 'Running dictionary',
  task: async ({factory, StyleDictionary}: TasksConfig) => {
    return new Promise(async (res) => {
      const config = await loadConfig(factory.config.dictionaryConfig);
      await build(config, StyleDictionary);
      res(config)
    })
  }
};

