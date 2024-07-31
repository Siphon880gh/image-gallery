/**
 * @namespace app
 * @public app
 * 
 * @private files Contains the file sources for the current image gallery
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

        // Load credentials from URL
        let urlSearchParams = new URLSearchParams(window.location.search);
        const credentials = (function getCredsFromUrlQuery(creds) {
            return (creds&&creds!=="")?creds:"*";
        })(urlSearchParams.get("creds"));
        // console.log({credentials});

        // Load image galleries from credentials or *
        $.post("/collections", {credentials}).done(res=>{
            let {collections}=res;
            let template = $(".template-dd-collections").html();

            for(let i = 0; i<collections.length; i++) {
                let html = template.replaceAll("__collection__", collections[i]);
                $(".dropdown-menu").append(html);

                // Load the first image gallery so it's not empty
                if(i===0)
                    app.reinit(collections[i]);
            } 
        });
    },
    reinit: function(collectionId) {
        $.get(`/collection/${ encodeURIComponent(collectionId) }`).done(data=>{
            let {files} = data;
            let template = $(".template-img-rollover").html();
            let $imgGallery = $(".img-rollovers");
            $imgGallery.html(""); // Reset the gallery before appending

            for(let i = 0; i<files.length; i++) {
                let html = template.replaceAll("__file__", files[i]).replaceAll("__collection__", collectionId).replaceAll("__title__", files[i].replace(/\.jpeg|\.jpg|\.bmp|\.gif|\.png|\.gif/, ""));
                $imgGallery.append(html);
            }

            // Delegate event handlers for clicking image into full image modal
            this.delegators.imgToModal();
        });
    },
    delegators: {
        imgToModal: function() {
            $('.img-rollover img').on('click', function () {
                const {rerenderModal, $imgModal} = app;
                const $this = $(this),
                    src = $this.attr("src"),
                    html = `<img src="${src}"/>`;
        
                // Set modal HTML
                rerenderModal($imgModal, {
                    src,
                    title: src.replace(/.*\/|\\/, "").replace(/\.jpeg|\.jpg|\.bmp|\.gif|\.png|\.gif/, "")
                });
        
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