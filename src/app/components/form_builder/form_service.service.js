(function() {
	
	'use strict';

	module.exports = FormService;

	function FormService() {
		var service = {
			forms: [{
				title: 'Form 1',
				fields: [
					{type:'text'}
				]
			}],
			field_types: [
		        {type:'text',label:'Text Field'},
		        {type:'textarea',label:'Text Area'},
		        {type:'checkbox',label:'Checkbox'},
		        {type:'radio',label:'Radio Button'}
		    ],

            // functions
			addField: addField,
			getForm: getForm,
			createForm: createForm,
			saveForm: saveForm,
			sortFields: sortFields,
			removeField: removeField
		};

		return service;

		function addField(form,type) {
            var options = [];
            if (type == "radio") {
                options.push({id:'',label:'Radio 1'});
            }
            var new_field = {
                type:type,
                label:'',
                options:options
            }
            form.fields.push(new_field);
        }

        function removeField(form,field) {
            var idx = form.fields.indexOf(field);
            form.fields.splice(idx,1);
        }

		function getForm(formIdx) {
			return service.forms[formIdx];
		}

		function createForm(form) {
			service.forms.push(form);
		}

		function saveForm(form) {
			var results = {
                saved: false,
                has_error:false,
                error: {
                    message:'',
                    error_list:[]
                }
            };
            
            if (!form.title) {
                results.has_error = true;
                results.error.message = 'Please enter a title';
            }
            
            // make sure each field has an id
            var error_list = [];
            var i = 0;

            angular.forEach(form.fields,function(f) {
                delete f.error_id;
                
                if (!f.id) {
                    results.has_error = true;
                    results.error.message = 'The following fields need id\'s';
                    f.error_id = i;
                }
                
                if (/\s/g.test(f.id)) {
                    results.has_error = true;
                    results.error.message = 'The following field id\'s can\'t have spaces';
                    f.error_id = i;
                }

                error_list.push(f);
                i++;
            });
            
            if (results.has_error) {
                results.error.error_list = error_list;
            }
            else {
                var idx = service.forms.indexOf(form);
                service.forms[idx] = form;
                results.saved = true;
            }
            return results;
		}

		function sortFields(form,data) {
            var new_json = form.fields;
            form.fields = [];
            
            var i;

            for (i=0;i < new_json.length; i++) {
                form.fields.push(new_json[data[i]]);
            }
            
            return form.fields;
        }
	}

})();