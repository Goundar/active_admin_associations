//= require jquery.tokeninput
//= require jquery.livequery.min

$(document).ready(function(){
  $('input.token-input').tokenInput(function($input){
    var modelName = $input.data("model-name");
    return "/autocomplete/"+modelName;
  }, {
    minChars: 3,
    propertyToSearch: "value",
    theme: "facebook",
    tokenLimit: 1,
    preventDuplicates: true
  });
});
