# Tipper endpoints

## `GET /api/tippers`

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  },
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

## `GET /api/tipper/:id`

### returns

```json
[
  {
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

## `DELETE /api/tipper/:id`

### returns

```json
[
  {
    "name": string,
    "email": string
  }
]
```

## `PUT /api/tipper/:id`

### injest

```json
    {
        "name": string:required,
    }
```

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

# Tippee endpoints

## `GET /api/tippees/`

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "company": string,
    "photo_url": string,
    "start-date": integer,
    "email": string,
    "tagline": text,
    "qr_url": text
  },
  {
    "id": integer,
    "name": string,
    "company": string,
    "photo_url": string,
    "email": string,
    "tagline": text,
    "qr_url": text
  }
]
```

# `GET /api/tippees/:id`

```json
[
  {
    "name": string,
    "email": string,
    "company": string
  }
]
```

# `PUT /api/tippeess/:id`

```json
    {
        "name": string:required,
    }
```

### returns

```json
[
  {
    "id": integer,
    "name": string,
    "photo_url": string,
    "email": string
  }
]
```

## `DELETE /api/tipper/:id`

```json
[
  {
    "name": string,
    "email": string,
    "company": string
  }
]
```

## ``POST /api/register/```

#### MVP:

- [ ] roll our own authsystem

#### STRETCH IDEAS:

- [ ] OAUTH
- [ ] QR CODES
- [ ] STRIPE INTEGRATION
- [ ] GRAPH QL + REST API (dual system)

```

```
