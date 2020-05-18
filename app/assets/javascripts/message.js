$(function () {
  function buildHtml(message) {
    if (message.image) {
      const html =`<div class="message">
                    <div class="message__info">
                      <p class="message__info--name">
                        ${message.user_name}
                      </p>
                      <p class="message__info--data">
                        ${message.created_at}
                      </p>
                    </div>
                      <p class="message__text">
                        ${message.content}
                      </p>
                    <img class="lower-message__image" src=${message.image}
                    </div>`
      return html
    } else {
      const html = `<div class="message">
                    <div class="message__info">
                      <p class="message__info--name">
                        ${message.user_name}
                      </p>
                      <p class="message__info--data">
                        ${message.created_at}
                      </p>
                    </div>
                      <p class="message__text">
                        ${message.content}
                      </p>
                    </div>`
      return html
    };
  }


  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        console.log(data);
        console.log(data.user_name);
        const html = buildHtml(data);
        $('.chat-main__messages').append(html);
        console.log(html);
        $('form')[0].reset();
        $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight });

    })
  });
});
