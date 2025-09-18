# Web Form + Webhook + Airtable + IPinfo Automation

## Overview

This project is an interactive **web form** built with **HTML, CSS, and JavaScript**. It collects user data and sends it to a **Make.com Webhook**, which processes and stores it in **Airtable**. Additionally, the scenario enriches the data using **IPinfo API** to get geolocation and other IP-related details.  

This setup demonstrates **full-stack workflow automation**, including frontend data capture, backend integration, API enrichment, and automated database updates.

---

## Features

### Frontend
- Interactive form collecting **6 fields**: First Name, Last Name, Email, City, Country, Phone Number.
- Real-time **validation** for email, required fields, and proper formats.
- Clean and responsive **UI** using HTML & CSS.
- Ready for integration with **Webhook or backend API**.

### Backend Automation (Make.com)
- **Custom Webhook** receives form data.
- **Airtable Search & Create/Update Records**:
  - Each submission creates a new record.
  - Existing records can be updated based on email as unique identifier.
- **IPinfo HTTP Request**:
  - Retrieves geolocation, city, region, country, ISP, and other IP-related details.
  - Updates the same Airtable record with IP info.
- **JSON Parsing and Text Parsing** modules to handle structured data.

### Airtable Database
- Centralized storage of user submissions.
- Automatic updates with enriched IP info.
- Flexible schema for additional fields.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Automation Platform:** Make.com (Webhooks, HTTP, JSON, Text Parser, Airtable modules)
- **Database:** Airtable
- **External API:** IPinfo.io
- **Version Control:** Git & GitHub

---

## Setup Instructions

### Frontend
1. Clone the repository:
```bash
git clone https://github.com/your-username/web-form-webhook-airtable.git

