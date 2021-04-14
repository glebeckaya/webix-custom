
export default webix.protoUI({
    name: "customForm",
    defaults:{
        width: 600,
    },
    $init: function(config){
        if (!config.saveAction) {config.saveAction = function() { webix.message("Form is saved!")}};
        const elems = config.fields;
        config.elements = [
            ...elems.map(elem => Object(
                { view: "text", label: elem, bottomPadding: 20  }
            )),
            {
                cols: [
                    { view: "button", value: "Cancel"}, 
                    { view: "button", value: "Save", click: config.saveAction}
                ]
            }
        ];
    },
    fields_setter: function(value){
        return value;
    },
    saveAction_setter: function(value) {
        return value;
    }
}, webix.ui.form);