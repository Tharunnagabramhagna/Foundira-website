# 🔧 Make.com Webhook Setup Guide - "It's Me" Email

## 📧 Webhook Configuration

**URL**: `https://hook.eu1.make.com/9jko9rqqq7gmldgmur1f8gapnyvis55f`

---

## 📊 Data Being Sent

### **Payload Structure**
```json
{
  "to": "demo@foundira.com",
  "subject": "Found Item Claim: Lost AirPods Pro",
  "body": "Hello,\n\nI believe the AirPods Pro you found are mine..."
}
```

### **Field Details**
- **`to`**: Email address of the person who found the item
- **`subject`**: Email subject line
- **`body`**: Email message content

---

## 🛠️ Make.com Scenario Setup

### **Step 1: Webhook Module**

1. **Add Module**: Webhooks > Custom Webhook
2. **Webhook Name**: "Foundira Item Claim"
3. **Data Structure**: 
   - Click "Add" to create data structure
   - Name: "ItemClaimEmail"
   - Generator: Use the sample JSON below

**Sample JSON for Data Structure**:
```json
{
  "to": "demo@foundira.com",
  "subject": "Found Item Claim: Lost AirPods Pro",
  "body": "Hello,\n\nI believe the AirPods Pro you found are mine. Here are the details:\n\nThey are white AirPods Pro with a charging case.\n\nThank you!"
}
```

4. **Save** the webhook
5. **Copy** the webhook URL (should match the one in the code)

---

### **Step 2: Parse JSON (Optional but Recommended)**

If the data is not being parsed automatically:

1. **Add Module**: Tools > Parse JSON
2. **JSON String**: `{{1.body}}`
3. **Data Structure**: Same as webhook (ItemClaimEmail)

This ensures the JSON is properly parsed.

---

### **Step 3: Email Module**

1. **Add Module**: Email > Send an Email
2. **Connection**: Set up your email connection (Gmail, Outlook, etc.)
3. **Configuration**:

**To**:
```
{{1.to}}
```
or if using Parse JSON:
```
{{2.to}}
```

**Subject**:
```
{{1.subject}}
```
or if using Parse JSON:
```
{{2.subject}}
```

**Content**:
```
{{1.body}}
```
or if using Parse JSON:
```
{{2.body}}
```

**Content Type**: Text

---

### **Step 4: Response (Optional)**

Add a Webhook Response module to send a success response:

1. **Add Module**: Webhooks > Webhook Response
2. **Status**: 200
3. **Body**:
```json
{
  "status": "success",
  "message": "Email sent successfully"
}
```

---

## 🐛 Troubleshooting

### **Issue: All Fields Show as "Empty"**

**Cause**: Make.com is not parsing the JSON body correctly.

**Solution 1: Add Parse JSON Module**
```
Webhook → Parse JSON → Email
```

**Solution 2: Check Webhook Data Structure**
- Ensure data structure is defined
- Use the sample JSON provided above
- Regenerate data structure if needed

**Solution 3: Access Data Differently**
Instead of `{{1.to}}`, try:
- `{{1.body.to}}`
- `{{1.data.to}}`
- Check the actual output in Make.com to see the structure

---

### **Issue: Webhook Not Receiving Data**

**Check**:
1. Webhook URL is correct in code
2. Request is being sent (check browser console)
3. CORS is not blocking the request
4. Content-Type header is set to `application/json`

---

## 📋 Complete Scenario Flow

```
┌─────────────────┐
│  Custom Webhook │
│  (Receive Data) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Parse JSON    │ (Optional)
│  (Parse Body)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Send an Email  │
│  To: {{to}}     │
│  Subject: {{subject}}
│  Body: {{body}} │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Webhook Response│ (Optional)
│  Status: 200    │
└─────────────────┘
```

---

## 🧪 Testing

### **Test 1: Send Test Data**

From browser console:
```javascript
fetch('https://hook.eu1.make.com/9jko9rqqq7gmldgmur1f8gapnyvis55f', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    to: "test@example.com",
    subject: "Test Subject",
    body: "Test message body"
  })
})
.then(r => r.json())
.then(d => console.log(d));
```

### **Test 2: Check Make.com Execution**

1. Go to Make.com scenario
2. Click "History"
3. Find the latest execution
4. Check the data received in each module
5. Verify the email was sent

---

## 📊 Expected Make.com Output

### **Webhook Module Output**
```json
{
  "to": "demo@foundira.com",
  "subject": "Found Item Claim: Lost AirPods Pro",
  "body": "Hello,\n\nI believe the AirPods Pro you found are mine..."
}
```

### **Email Module**
- **To**: demo@foundira.com
- **Subject**: Found Item Claim: Lost AirPods Pro
- **Body**: Hello,\n\nI believe the AirPods Pro you found are mine...

---

## ✅ Verification Checklist

- [ ] Webhook URL matches code
- [ ] Data structure defined in webhook
- [ ] JSON is being parsed correctly
- [ ] Email module configured with correct fields
- [ ] Test email sent successfully
- [ ] Production email works from app
- [ ] Response is sent back (optional)

---

## 🔍 Debugging Tips

### **Check Browser Console**
```javascript
// You should see:
Sending email payload: {
  to: "demo@foundira.com",
  subject: "Found Item Claim: Lost AirPods Pro",
  body: "Hello, I believe..."
}
Response status: 200
```

### **Check Make.com Execution Log**
1. Go to scenario
2. Click "History"
3. Click on latest execution
4. Check each module's input/output
5. Look for errors

### **Common Issues**

**Empty Fields**:
- Data structure not defined
- JSON not parsed
- Wrong field mapping

**No Email Sent**:
- Email connection not configured
- Invalid recipient email
- Email module error

**Webhook Error**:
- Wrong URL
- CORS issue
- Invalid JSON

---

## 💡 Pro Tips

1. **Always define data structure** in webhook module
2. **Use Parse JSON** if data is not automatically parsed
3. **Test with simple data** first
4. **Check execution history** for errors
5. **Enable error handling** in scenario

---

## 📧 Example Email Received

**To**: demo@foundira.com  
**Subject**: Found Item Claim: Lost AirPods Pro  
**Body**:
```
Hello,

I believe the AirPods Pro you found are mine. Here are the details:

They are white AirPods Pro with a charging case. I lost them in the study hall on the 2nd floor around 2 PM today. The case has a small scratch on the back.

My contact: john@example.com

Thank you!
```

---

## 🎉 Success Criteria

✅ Webhook receives data  
✅ JSON is parsed correctly  
✅ Email is sent to correct recipient  
✅ Subject and body are correct  
✅ User receives success message  

---

**Follow this guide to set up your Make.com scenario correctly!** 🚀
