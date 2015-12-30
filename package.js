Package.describe({
  summary: 'Slidebars - A jQuery framework for off-canvas menus and sidebars.',
  summary: 'A jQuery menu plugin',
  version: '0.0.1',
  name: 'waitingkuo:metismenu',
  git: 'https://github.com/waitingkuo/meteor-metismenu'

});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.2.1');
  api.use('jquery');
  api.addFiles(['metisMenu/dist/metisMenu.min.css', 'metisMenu/dist/metisMenu.min.js'], 'client');

});
