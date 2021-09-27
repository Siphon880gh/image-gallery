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
        rerenderModal($imgModal, {title: "Foobar", src});

        // Activate modal
        $imgModal.modal("show");
    });

    // Place specific HTML content into the image modal (either image in full screen style or resetting HTML to blank "")
    function rerenderModal($modal, data) {
        let {title, src} = data;
        let $modalTitle = $modal.find('.modal-title'),
            $imgContainer = $modal.find('.modal-body');

        $modalTitle.text(title);
        $imgContainer.html(`<img src="${src}"/>`);
    }
})