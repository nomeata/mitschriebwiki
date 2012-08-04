#!/bin/bash

cd $(dirname $0)/..

(
for file in  \
	js/jquery-1.7.2.min.js \
	js/jquery-ui-1.8.21.custom.min.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.facebook.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.twitter.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.gplus.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.flattr.js \
	js/latexki.js
do
	yui-compressor $file
done
) > js/minimized.js

