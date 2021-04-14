export default webix.protoUI({
    name: "customButton",
    $init:function(config){
        if (!config.state) config.state = 0;
        config.value = config.states[config.state];
        this.attachEvent("onItemClick", function() {
            const keys = Object.keys(this.config.states);
            this.config.state = (this.config.state == keys.length - 1) ? 0 : this.config.state + 1;
            this.config.value = this.config.states[this.config.state];
            this.refresh();
            this.callEvent("onStateChange", [this.config.state]);
        })
    },
    state_setter:function(value){
        return value;
    },
    states_setter:function(value){
        return value;
    }
}, webix.ui.button);