# ---------- Этап 1: сборка ----------
FROM golang:1.22-alpine AS builder

ENV GOMODCACHE=/go/pkg/mod
WORKDIR /build

# Манифесты зависимостей — кэшируются, пока не меняются go.mod/go.sum
COPY go.mod go.sum ./
RUN go mod download

# Только потом исходники
COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /out/app ./main.go

# ---------- Этап 2: исполнение ----------
FROM gcr.io/distroless/static-debian12:nonroot

WORKDIR /app
COPY --from=builder /out/app /app/app

ENTRYPOINT ["/app/app"]