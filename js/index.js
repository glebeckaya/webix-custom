import "./button.js";
import "./form.js";

const filmsList = {
    width: 500,
    rows: [
        {   
            cols: [
                { template: "Sort list:" },
                { 
                    view: "customButton", 
                    id: "buttonStates",
                    states: { 0: "Off", 1: "Sort Asc", 2: "Sort Desc"}, 
                    state: 0,
                    on: {
                        onStateChange(state) {
                            switch (state) {
                                case 0:
                                    $$("listFilms").sort("#id#");
                                    break;
                                case 1:
                                    $$("listFilms").sort("#title#", "asc");
                                    break;
                                case 2:
                                    $$("listFilms").sort("#title#", "desc");
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
            ]
        },
        {
            view: "list",
            id: "listFilms",
            url: "./../data/data.js",
            template: "#rank#. #title# <div style='padding-left:18px'> Year:#year#, rank:#rank# </div>",
            type: { height: 65 }
        }
    ]
}


const form1 = { 
    view: "customForm", 
    id: "new",
    fields: ["one", "two"], 
    saveAction: function() { webix.message("saved!")}
};

const form2 = { view: "customForm", fields: ["one", "two", "three"] };


webix.ui({
    cols: [
        filmsList, 
        { rows: [form1, form2] }
    ]
});