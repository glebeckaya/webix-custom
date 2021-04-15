
export default webix.protoUI({
    name: "customForm",
    defaults:{
        width: 600,
        saveAction: function() { webix.message("Form is saved!") },
        clearAction: function() { this.getFormView().clear() } 
    },
    $init: function(config){
        const elems = config.fields;
        config.elements = [
            ...elems.map(elem => Object(
                { view: "text", label: elem, name: elem, bottomPadding: 20  }
            )),
            {
                cols: [
                    { view: "button", value: "Clear", click: config.clearAction || this.defaults.clearAction }, 
                    { view: "button", value: "Save", click: config.saveAction || this.defaults.saveAction }
                ]
            }
        ];
    }
}, webix.ui.form);