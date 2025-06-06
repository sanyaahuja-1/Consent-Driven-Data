#Consent-Driven Health Data API
Multi-role API service that enables secure sharing of patient records with time-bound,
revocable, and auditable consent.
User Roles:
• Patient
• Doctor
• Admin (for audit & logs only)
Features:
1. User Authentication & Role Management
• Signup/Login with email + password (JWT token issuance)
• Password hashing (bcrypt or similar)
• Assign and validate roles on login
2. Medical Records Management
• Patients can:
o Upload medical records
o View their full record history
o Grant/revoke time-bound access to doctors (with timestamps)
• Doctors can:
o View only approved patient records within the approved time window
o Request access (with a reason)
3. Consent Engine
• Patients receive and approve/reject doctor access requests
• Consent can be granted for:
o A limited duration (e.g., 24–72 hrs)
o Specific types of records (e.g., Lab Reports only)
• Consent history is stored and immutable
4. Audit Trail
• Every access attempt (approved, rejected, expired) is logged
• Admin can view access logs: who accessed what, when, and why
5. Data Security
• No raw medical data should be exposed without proper auth
• Sensitive operations must require re-authentication (simulated)

Tech Stack:
• Node.js + Express
• MongoDB or PostgreSQL
• JWT + bcrypt
• GitHub for version control

