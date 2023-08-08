up:
	hugo server -D -w --minify

commit:
	git add -A; git commit -m ":new: fable"; git push
