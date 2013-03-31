self.port.on('injectBot', function(botCode){
    var script = document.getElementById('#robot-code')
    if (script) {
        window.setTimeout(function() {
        var btnBar = $('.buttons-bar')
        var btn = $('<a>')
        btnBar.append(btn)
        btn.addClass('btn').text('Load Bot').click(function() {
            $('#code').val(botCode)
            $('#robo-code-form').submit()
        })}, 1000)
    }
})
