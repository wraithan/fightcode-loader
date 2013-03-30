FightCode Utils
===============

FightCode's editor is terrible, copying/pasting is silly. Let's add a button to
save to disk as well as for loading from disk. Then we can use our editor of
choice. On top of that, the simulator bots are rather silly, lets add the
ability to replace them with bots you load off your system.

Tech
----

I'm writing this as a Firefox add-on because `dotjs
<https://github.com/rlr/dotjs-addon>`_ as wonderful as it is, doesn't give you
privileged access, which means no file system access. I'll be using `Jetpack
<https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/index.html>`_
because it makes add-on dev super easy.
