FROM node:7-onbuild

LABEL maintainer "fahamak@yahoo.com"

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 CMD [ "curl -f http://127.0.0.1:8000 || exit 1" ]

EXPOSE  8000
             