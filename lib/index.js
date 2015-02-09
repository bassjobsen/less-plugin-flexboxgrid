var getFlexboxgridProcessor = require("./flexboxgrid-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginFlexboxgrid(options) {
    this.options = options;
};

LessPluginFlexboxgrid.prototype = {
    install: function(less, pluginManager) {
        var FlexboxgridProcessor = getFlexboxgridProcessor();
        pluginManager.addPreProcessor(new FlexboxgridProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginFlexboxgrid;

