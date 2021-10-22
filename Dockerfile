FROM node:16.6.1-buster

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  wget \
  mc \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@7.20.5
RUN npm install
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY mx31skldb8ixasa
ENV PM2_SECRET_KEY urq7u9tozalh1iz


COPY . .

EXPOSE 5000

CMD ["pm2-runtime", "index.js"]`
