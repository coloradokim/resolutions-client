$(function() {

  var $form = $('form')
  var $submit = $('.submit-button')

  $form.on('submit', function(e) {
    e.preventDefault()

    var formData = new FormData($form[0])
    var data = {
      title: formData.get('title'),
      price: formData.get('price'),
      location: formData.get('location'),
      description: formData.get('description'),
      size: +formData.get('size'),
      spitefulness: +formData.get('spitefulness'),
      ghostProofing: +formData.get('ghostProofing'),
      imageUrl: formData.get('imageUrl'),
      email: formData.get('email'),
    }

    $submit.toggleClass('is-loading')

    console.log(data)

    setTimeout(function() {
      $form[0].reset()
      $submit.toggleClass('is-loading')
    }, 2000)
  })

})
