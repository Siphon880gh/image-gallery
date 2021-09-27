/**
 * @namespace app
 * @public app
 * 
 * @private $imgModal Points to image modal in HTML
 * @private imgModal Bootstrap image modal instance
 * 
 */
let app = {
    $imgModal: null,
    imgModal: null,
    init: function() {
        // Init full size image modal
        this.$imgModal = $("#imgModal"),
        this.imgModal = new bootstrap.Modal(this.$imgModal, {
            backdrop: true,
            keyboard: true,
            focus: true
        });

        // Delegate event handlers for clicking image into full image modal
        this.delegators.imgToModal();
    },
    delegators: {
        imgToModal: function() {
            $('.img-rollover img').on('click', function () {
                const {rerenderModal, $imgModal} = app;
                const $this = $(this),
                    src = $this.attr("src"),
                    html = `<img src="${src}"/>`;
        
                // Set modal HTML
                rerenderModal($imgModal, {title: "Foobar", src});
        
                // Activate modal
                $imgModal.modal("show");
            });
        }
    },

    // Helpers
    rerenderModal: function($modal, data) {
        let {title, src} = data;
        let $modalTitle = $modal.find('.modal-title'),
            $imgContainer = $modal.find('.modal-body');

        $modalTitle.text(title);
        $imgContainer.html(`<img src="${src}"/>`);
    }
}

app.init();