##################
Installation
##################

If you have any problem following the instructions please open `a ticket`_.

.. _a ticket: https://github.com/chrissmejia/OpenSloth/issues

============
Requirements
============

* Ruby 1.9+
* `Node.js`_
* `compass`_: ``gem install compass``
* `bower`_: ``npm install bower -g``

.. _Node.js: http://nodejs.org
.. _compass: http://compass-style.org/
.. _bower: http://bower.io

==========
Quickstart
==========

* Clone the template ``git clone https://github.com/chrissmejia/OpenSloth.git``
* Run ``bower install`` to install the latest version of Foundation

Then when you're working on the project, just run the following command:

.. code-block:: bash
   :linenos:

    bundle exec compass watch --poll

====================
Upgrading Foundation
====================

If you'd like to upgrade to a newer version of Foundation down the road just run:

.. code-block:: bash
   :linenos:

    bower update