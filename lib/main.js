var {data} = require('sdk/self')
var file = require('sdk/io/file')
var homedir = require('sdk/system').pathFor('Home')
var pageMod = require('sdk/page-mod')
var tabs = require('sdk/tabs')
var bot = file.join(homedir, 'devel', 'fightcode-bot', 'otherbot.js')

tabs.open('http://fightcodegame.com/robots/update/15941/?')

pageMod.PageMod({
    include: '*.fightcodegame.com',
    contentScriptFile: [data.url('jquery-1.9.1.min.js'),
                        data.url('loader.js')],
    onAttach: function(worker) {
        worker.port.emit('injectBot', file.read(bot))
        worker.port.on('log', function(msg){console.log(msg)})
    }
})
