var {data} = require('sdk/self')
var file = require('sdk/io/file')
var pageMod = require('sdk/page-mod')
var tabs = require('sdk/tabs')
var simplePrefs = require('sdk/simple-prefs')
var botPath = simplePrefs.prefs['botPath']


pageMod.PageMod({
    include: '*.fightcodegame.com',
    contentScriptFile: [data.url('jquery-1.9.1.min.js'),
                        data.url('loader.js')],
    onAttach: function(worker) {
        function inject() {
            if (botPath) {
                worker.port.emit('injectButton')
            } else {
                worker.port.emit('injectWarning')
            }
        }
        simplePrefs.on('botPath', function(prefName) {
            botPath = simplePrefs.prefs['botPath']
            inject()
        })
        inject()
        worker.port.on('readyToInject', function() {
            worker.port.emit('injectBot', file.read(botPath))
        })
        worker.port.on('log', function(msg){console.log(msg)})
    }
})
