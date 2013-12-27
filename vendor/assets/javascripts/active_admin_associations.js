//= require jquery.tokeninput
//= require jquery.livequery.min

$('input.token-input').livequery(function(){
  $('input.token-input').not('.loaded').tokenInput(function($input){
    var modelName = $input.data("model-name");
    return "/autocomplete/"+modelName;
  }, {
    minChars: 3,
    propertyToSearch: "value",
    theme: "facebook",
    tokenLimit: 1,
    preventDuplicates: true
  });
  $(this).addClass("loaded")
});
