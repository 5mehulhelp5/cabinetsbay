// Generated by CoffeeScript 1.8.0

/*
 * MagPleasure Ltd.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magpleasure.com/LICENSE.txt
 *
 * @category   Magpleasure
 * @package    Magpleasure_Blog
 * @copyright  Copyright (c) 2012-2015 MagPleasure Ltd. (http://www.magpleasure.com)
 * @license    http://www.magpleasure.com/LICENSE.txt
 */
RedactorPlugins.magento = function() {
  return {
    values: {},
    init: function() {
      var button, dropdown, i, row, _i, _len;
      button = this.button.add('magento', magentoVariablesLabel);
      dropdown = {};
      i = 0;
      for (_i = 0, _len = magentoVariables.length; _i < _len; _i++) {
        row = magentoVariables[_i];
        i++;
        this.magento.values["item" + i] = row.value;
        dropdown["item" + i] = {
          title: row.label,
          func: this.magento.fire
        };
      }
      this.button.addDropdown(button, dropdown);
    },
    fire: function(id) {
      this.insert.text(this.magento.values[id]);
    }
  };
};
