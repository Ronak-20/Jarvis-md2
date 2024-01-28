FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/Loki-Xer/jarvis-md /root/Jarvis-md/
WORKDIR /root/jarvis-md/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
