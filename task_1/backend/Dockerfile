# Git pull Stage
FROM python:3.7.15-alpine3.15 AS builder
RUN apk update && apk add git 
RUN git clone https://gitlab.com/redacre/test-project.git

# Run stage
FROM python:3.7.15-alpine3.15
RUN apk add build-base linux-headers
WORKDIR /api/
COPY --from=builder /test-project/api/ /api/
RUN python3 -m pip install -r requirements.txt && chmod -R 777 /api/ 
USER guest

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["python3 app.py"]
