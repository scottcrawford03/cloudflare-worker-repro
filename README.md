# cloudflare-worker-repro
This is a repro of strange behavior we were seeing on a cf worker

Note:
We have 2 enviroments sharing the same script. Each env has their own kv store that they bind to.

## KV Stores:
### Production
```
{ "yolo": "production" }
```

### Staging
```
{ "yolo": "staging" }
```
