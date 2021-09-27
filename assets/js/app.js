$(() => {
    let $imgModal = $("#imgModal"),
        imgModal = new bootstrap.Modal($imgModal[0], {
            backdrop: true,
            keyboard: true,
            focus: true
        });

    $('.img-rollover img').on('click', function () {
        const $this = $(this),
            src = $this.attr("src"),
            html = `<img src="${src}"/>`;

        // Set modal HTML
        rerenderModal($imgModal, html);

        // Activate modal
        $imgModal.modal("show");
    });

    // Place specific HTML content into the image modal (either image in full screen style or resetting HTML to blank "")
    function rerenderModal($modal, html) {
        $modal.find('.modal-body').html(html);
    }
})