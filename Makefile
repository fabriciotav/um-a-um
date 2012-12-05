# Precisa ser editado

css.min: 
	recess src/less/selecao.css --compress > src/less/selecao.min.css

css.prod: css.min assets/css/style.css
	cat src/less/bootstrap.min.css \
	src/less/selecao.min.css \
	> assets/css/style.css

js.app.min: src/javascript/selecao.js
	uglifyjs src/javascript/selecao.js >  src/javascript/selecao.min.js

js.prod: js.app.min assets/js/app.js
	cat src/javascript/lib/jquery-1.8.3.min.js \
	src/javascript/lib/handlebars-1.0.rc.1.min.js \
	src/javascript/lib/ember-1.0.0-pre.2.min.js \
	src/javascript/lib/bootstrap.min.js \
	src/javascript/selecao.min.js \
	> assets/js/app.js

all: css.prod js.prod
	
