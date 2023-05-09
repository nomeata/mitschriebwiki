#!/usr/bin/env bash

cd $(dirname $0)/..

(
for file in  \
	js/jquery-3.6.4.min.js \
	js/jquery-ui-1.8.21.custom.min.js \
	js/jquery.toc.js \
	js/jquery.highlight.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.facebook.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.twitter.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.gplus.js \
	js/SocialSharePrivacy/jquery.socialshareprivacy.flattr.js \
	js/latexki.js \
	js/browserupdate.js
do
	yuicompressor $file
done
) > js/minimized.js

