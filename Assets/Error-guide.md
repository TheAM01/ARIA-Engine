# Error guide for the ARIA engine

This guide contains set(s) of rules to declare error messages & embeds in the ARIA engine. ARIA uses the basic `http` status codes.

## Error codes by index:

### **4XX:**

#### 400 - Bad Request [BAD_REQUEST]:
The client is sending a request that's missing information/parameters that your application requires in order to process it correctly.

#### 401 - Unauthorized [UNAUTHORIZED]:
Indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.

#### 403 - Forbidden [FORBIDDEN]:
Indicates that the server understood the request but refuses to authorize it.

#### 404 - Not found [NOT_FOUND]:
Is used to to indicate that the server could not find what was requested by the client.

#### 410 - Gone [GONE]:
Indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.

---

### **5XX:**

#### 500 - Internal Server Error [INTERNAL]:
Means that server cannot process the request for an unknown reason.