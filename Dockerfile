FROM    node:6.2.2
RUN     mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY    . /usr/src/app
RUN     npm install
RUN     npm run build
VOLUME  /usr/src/app/public/images
EXPOSE  3000
CMD     npm start
