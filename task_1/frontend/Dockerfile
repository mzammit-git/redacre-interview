# Build stage
FROM node:16.17.1-alpine3.15 AS builder
RUN apk update && apk add git
RUN git clone https://gitlab.com/redacre/test-project.git
WORKDIR /test-project/sys-stats
COPY package.json package.json
RUN sed -i 's/http:\/\/localhost:5000\/stats/\/stats/g' src/App.js && npm i -f

# Run stage
FROM node:16.17.1-alpine3.15
USER node
WORKDIR /frontend_app/
COPY --from=builder /test-project/sys-stats/ /frontend_app/
ENTRYPOINT ["/bin/sh", "-c"]  
CMD ["npm start"]
