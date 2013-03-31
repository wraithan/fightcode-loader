self.port.on('injectWarning', function (){
    var btnBar = $('.buttons-bar')
    btnBar.append($('<p>').text('Please set your bot in FightCode Utils ' +
                                'preferneces'))
})

self.port.on('injectButton', function(){
    var script = $('#robot-code')
    if (script.length) {
        var btnBar = $('.buttons-bar')
        var btn = $('<button>')
        btnBar.append(btn)
        btn.addClass('btn').text('Load Bot').click(function(ev) {
            ev.preventDefault()
            ev.stopPropagation()
            self.port.emit('readyToInject')
        })
    }
})

self.port.on('injectBot', function(botCode){
    $('#code').val(botCode)
    $('#robo-code-form').submit()
})
