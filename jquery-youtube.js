(function($){
  $.fn.youtube = function () {
    var updateYoutubeId = function () {
      var $self = $(this),
          match = $self.data('url').match(/\/\/[^.]+.youtube(?:-nocookie)?.com\/.*\?.*\bv=([^&]+)/),
          youtubeId = (match && match[1] ? match[1] : null),
          width = $self.data('width') || 300,
          height = $self.data('height') || parseInt(width * 0.75, 10),
          selfWidth = $self.width();

      if (!youtubeId) {
        return;
      }

      if (width > selfWidth) {
        width = selfWidth;
        height = parseInt(width * 0.75, 10);
      }

      $self.
        data('youtubeId', youtubeId).empty().
        append('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + youtubeId + '" frameborder="0" allowfullscreen></iframe>');
    };

    return $(this).on('reload', updateYoutubeId).trigger('reload');
  };

  $('div.js-youtube').youtube();

}(jQuery));
