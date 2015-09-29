var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {     // When the user clicks submit
  e.preventDefault();                           // Prevent the form submitting

  width = $('#width').val();

  height = $('#height').val();

  area = width * height;

  $form.append('<p>' + area + '</p>')
});