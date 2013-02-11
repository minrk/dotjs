// remove 'finally' from any headlines
// because it gets annoying
// you can add `,p` to the selector if you want to also scrub body text,
// but that can make page load pretty slow.

scrub_finally = function() {
    $("h1,h2,h3,h4,h5").html(
        function(index, html) {
            var new_html = html.replace(/[Ff]inally /g, "");
            return new_html;
        }
    );
}

scrub_finally();