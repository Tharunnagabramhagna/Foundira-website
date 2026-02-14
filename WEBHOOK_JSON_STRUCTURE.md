# Webhook Configuration & JSON Structure

The application now uses **two separate webhooks** for authentication.

## 1. Sign Up (Registration) Webhook
**URL**: `https://hook.eu1.make.com/p0auu2abz4fdh6yvtyrs9fky6nrgizsg`

### Sent Payload (from App to Webhook)
When a user registers, the app sends:
```json
{
  "action": "signup",
  "name": "User Name",
  "email": "user@example.com",
  "password": "user_password",
  "yearOfStudy": "3rd",
  "collegeName": "College Name",
  "gender": "Male"
}
```

### Expected Response
```json
{
  "status": "success",
  "message": "Account created successfully"
}
```

---

## 2. Login (Sign In) Webhook
**URL**: `https://hook.eu1.make.com/yqhr3wl5doooqldn90bwb013glq40y2f`

### Sent Payload (from App to Webhook)
```json
{
  "action": "login",
  "email": "user@example.com",
  "password": "user_password"
}
```

### Expected Response (JSON)
On successful login, return the user details to populate the profile:
```json
{
  "status": "success",
  "message": "Login successful",
  "name": "User Full Name",
  "email": "user@example.com",
  "yearOfStudy": "2nd",
  "collegeName": "Institute Name",
  "gender": "Female" 
}
```
*Note: The password field in the response is optional and generally not recommended for security.*
