export default webix.protoUI({
    name: "customButton",
    defaults: {
        css: "custom-button"
    },
    $init:function(config){
        if (!config.state) config.state = 0;
        webix.html.addCss(this.$view,`default-sort`);
        config.value = config.states[config.state];
        this.attachEvent("onItemClick", function() {
            const keys = Object.keys(this.config.states);
            this.config.state = (this.config.state == keys.length - 1) ? 0 : this.config.state + 1;
            if ( this.config.state % 3 === 0) {
                webix.html.addCss(this.$view,`default-sort`);
                webix.html.removeCss(this.$view,`desc-sort`);
            }
            if ( (this.config.state - 1) % 3 === 0) {
                webix.html.addCss(this.$view,`asc-sort`);
                webix.html.removeCss(this.$view,`default-sort`);
            }
            if ( (this.config.state - 2) % 3 === 0) {
                webix.html.addCss(this.$view,`desc-sort`);
                webix.html.removeCss(this.$view,`asc-sort`);

            }
            this.config.value = this.config.states[this.config.state];
            this.refresh();
            this.callEvent("onStateChange", [this.config.state]);
        })
    },
}, webix.ui.button);