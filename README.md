# FF-CRUD
> node.js implementation of a phone 
> book implementing basic crud and using the fs as the storage mechanism.
>

## Endpoints
> Base endpoint `/api/v1`

### New Contact
 - Endpoint: `/contacts/new`
 - Method: `POST`
 - Body: 
 ```json
{
    "full_name": "John Sunday",
    "email": "john@gmail.com",
    "username": "johnny",
    "phone": "09035958464"
}
 ```
- Response:
```json
{
    "full_name": "John Sunday",
    "username": "johnny",
    "email": "john@gmail.com",
    "phone": "09035958464",
    "id": "563203b7bb21d0de002e4ad94b3e0eb2"
}
```

### Contacts
> Fetches all contacts

- Endpoint: `/contacts/`
- Method: `GET`
- Response:
```json
[
    {
        "full_name": "Emmanuel Sunday",
        "username": "nuelsoft",
        "email": "nuel.mailbox@gmail.com",
        "phone": "09035458464",
        "id": "91115f67fb3ce4cf7f0b1d996b539bd8"
    },
    {
        "full_name": "John Sunday",
        "username": "johnny",
        "email": "john@gmail.com",
        "phone": "09035958464",
        "id": "cf2853c2ce0bbd28eea4e1c6c65f0935"
    },
    {
        "full_name": "Emeka Sunday",
        "username": "johnny",
        "email": "john@gmail.com",
        "phone": "09035958464",
        "id": "d338f8ab47f3000879e65733670c7a91"
    }
]
```

### Get Contact By ID
- Endpoint: `/contacts/:ID`
- Method: `GET`
- Sample: `/contacts/cf2853c2ce0bbd28eea4e1c6c65f0935`
- Response:
```json
{
    "full_name": "John Sunday",
    "username": "johnny",
    "email": "john@gmail.com",
    "phone": "09035958464",
    "id": "cf2853c2ce0bbd28eea4e1c6c65f0935"
}
```

### Update Contact
- Endpoint: `/contacts/:ID/update`
- Method: `POST`
- Body: 
```json
{
    "full_name": "Michaelson Sunday"
}
```
- Response:
```json
{
    "full_name": "Michaelson Sunday",
    "username": "johnny",
    "email": "john@gmail.com",
    "phone": "09035958464",
    "id": "563203b7bb21d0de002e4ad94b3e0eb2"
}
```

### Remove Contact
- Endpoint: `/contacts/:ID/remove`
- Method: `POST`
- Sample: `/contacts/563203b7bb21d0de002e4ad94b3e0eb2/update`
- Response:
```json
{
    "message": "contact deleted"
}
```