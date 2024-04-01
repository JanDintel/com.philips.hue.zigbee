'use strict';

const Cluster = require('../node_modules/zigbee-clusters/lib/Cluster');
const { ZCLDataTypes } = require('../node_modules/zigbee-clusters/lib/zclTypes');

const ATTRIBUTES = {

};

const COMMANDS = {
  
  button: {
    id: 0,
    args: {
      button: ZCLDataTypes.uint16,
      type: ZCLDataTypes.enum8({
        push: 0, //0x00
        rotary: 1, //0x01
      }),
      action: ZCLDataTypes.enum8({
        press: 0, //0x00
        hold: 1, //0x01
        release: 2, //0x02
        longRelease: 3, //0x03
      }),
      duration: ZCLDataTypes.uint16,
    }
  },
  dynamicScenes: {
    id: 1,
    type: ZCLDataTypes.map8('dynamicScenes', [
      { name: 'stop', value: 0x200000 }, // Hex-value - Stop Scene
      { name: 'candle', value: 0x21000101 }, // Hex-value - Candle Scene
      { name: 'fireplace', value: 0x21000102 }, // Hex-value - Fireplace Scene
      { name: 'colorloop', value: 0x21000103 }, // Hex-value - Colorloop Scene
      { name: 'sunrise', value: 0x21000109 }, // Hex-value - Sunrise Scene
      { name: 'sparkle', value: 0x2100010a }, // Hex-value - Sparkle Scene
      { name: 'opal', value: 0x2100010b }, // Hex-value - Opal Scene
      { name: 'glisten', value: 0x2100010c } // Hex-value - Glisten Scene
    ])
  }

};

class HueSpecificCluster extends Cluster {

    static get ID() {
        return 64512;
    }

    static get NAME() {
        return 'hue';
    }

    static get ATTRIBUTES() {
        return ATTRIBUTES;
    }

    static get COMMANDS() {
        return COMMANDS;
    }

}

Cluster.addCluster(HueSpecificCluster);

module.exports = HueSpecificCluster;
