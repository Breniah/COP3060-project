# COP 3060 Project

## Team Project Proposal

### **Project Title:** *MindBalance — Student Mental Wellness Assistant*

---

## **Problem**

College students face increasing levels of stress, anxiety, burnout, and academic pressure. Many do not have consistent access to mental-health resources, or they struggle with recognizing early signs of emotional strain. Existing wellness apps are often too generic, expensive, or not tailored to the unique daily challenges students face.
**MindBalance** aims to provide accessible, evidence-based mental-health support that fits into students’ academic routines and empowers them to better manage stress, emotions, and self-care.

---

## **Target Users**

* Undergraduate and graduate students
* Students experiencing stress, burnout, or mood fluctuations
* Students seeking reliable, free, and easy-to-understand mental-health information
* Campus residents who want quick check-ins and wellness tools

---

## **Core Features**

* **Mood Tracking & Daily Check-ins**
* **Personalized Wellness Tips and Habit Coaching**
* **Evidence-Based Mental Health Articles (via API)**
* **Dashboard with Mood Insights & Weekly Trends**
* **Crisis Resource Quick-Access**
* **Goal Setting for Wellness Habits**

---

## **API / Dataset Used**

### **U.S. Health Literacy API — Consumer Health Content**

**URL:**
`https://odphp.health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers/api-content`

**Purpose in Project:**

* Provides **free, high-quality, plain-language health and wellness articles**.
* Ensures content is reliable, accurate, and accessible for student users.
* Supports mental-health topics such as stress, anxiety, sleep, and emotional wellbeing.

---

## **System Decomposition**

### **Major Modules / Components**

#### **1. User Interface Module**

* Registration/login
* Daily check-in screen
* Dashboard & insights page
* Article/resource feed

#### **2. Mood Tracking Module**

* Collects and stores mood, stress levels, and notes
* Prepares data for insights and recommendations

#### **3. Recommendation Engine**

* Suggests coping strategies
* Generates wellness tips based on user patterns

#### **4. Article Retrieval & API Integration Module**

* Fetches content from the Health Literacy API
* Formats and displays articles
* Handles caching and error fallback

#### **5. Data Storage Module**

* Stores user profiles
* Saves check-in history, goals, insights

#### **6. Analytics & Insights Module**

* Produces trend charts
* Summaries of mood patterns
* Identifies potential stress triggers

#### **7. Crisis Support Module**

* Direct links to hotline numbers
* Campus counseling resources
* Emergency contact features

---

## **Ethical AI / Data Responsibility Statement**

MindBalance is designed with student wellbeing, privacy, and responsible AI usage at its core. The team commits to the following ethical principles:

### **1. Privacy & Minimal Data Collection**

* Only collects data necessary for core functionality (mood logs, preferences).
* No sensitive personal information (such as identity, location, or medical history) is required to use the app.
* User data will not be shared, sold, or used for purposes outside the app’s goals.

### **2. Transparency of AI Behavior**

* Recommendations are generated using **simple, rule-based logic**, not predictive medical AI.
* The app does **not** attempt to diagnose or treat mental-health conditions.
* Users are informed that suggestions are general wellness tips, not clinical guidance.

### **3. Protection of Vulnerable Users**

* The app includes immediate access to professional crisis resources.
* Warnings remind users to seek real mental-health professionals for serious concerns.

### **4. Responsible Use of External Data & APIs**

* External resources (Health Literacy API) are provided by a reputable U.S. government health organization.
* All external content is used according to API terms and is cited clearly.

### **5. Secure Data Practices**

* Local storage or secure database options will be used depending on deployment.
* Data is encrypted where possible.
* Users can delete their data at any time.

### **6. No Harmful or Manipulative Design**

* No features exploit emotional vulnerability.
* No dark patterns, addictive loops, or intrusive notifications.
* User autonomy and emotional safety always come first.

### **7. Accessibility & Inclusivity**

* Content is written in plain language.
* Design supports students with varying levels of digital literacy.
* The app avoids bias, stigma, or discriminatory assumptions in wording or features.

---

## Team Project 
Breniah Saimpre
Brooke Davis
Fayolah Pierre
Jordon Ammons
>>>>>>> main

* Quick links to campus counseling
* National hotlines
* Safety and emergency information



## Architecture Diagram

```
                    Frontend (ReactJS)
                    ┌────────────────────────────┐
                    │        React App            │
                    │  - Home/Dashboard           │
                    │  - Data Display Page        │
                    │  - Form Page                │
                    └───────────────┬────────────┘
                                    │ API Calls (Axios/Fetch)
                                    ▼
                    ┌────────────────────────────────────────┐
                    │          Backend (Spring Boot)         │
                    │  Controller → Service → Model Layers   │
                    │                                        │
                    │  REST Endpoints:                       │
                    │   - GET /api/resource                  │
                    │   - POST /api/resource                 │
                    │   - PUT or DELETE /api/resource        │
                    └───────────────┬────────────────────────┘
                                    │
                                    ▼
                    ┌────────────────────────────────────────┐
                    │       In-Memory Storage (List/Map)     │
                    └────────────────────────────────────────┘
```

---

## API Endpoint Table

| Method | Route              | Purpose                          |
| ------ | ------------------ | -------------------------------- |
| GET    | /api/resource      | Retrieve all resource data       |
| POST   | /api/resource      | Create new resource entry        |
| PUT    | /api/resource/{id} | Update an existing resource item |
| DELETE | /api/resource/{id} | Delete an existing resource item |

---


### Screenshots / Demo GIFs

Home/Dashboard Screenshot

![Dashboard Screenshot](https://github.com/user-attachments/assets/ea49981a-3230-4360-a2ad-11e86fee3977)

Data Display Page Screenshot

![Data Display Screenshot](https://github.com/user-attachments/assets/f894c5fb-9390-4cd6-bde4-3497f21fee8f)

Form Page Screenshot

![Form Page Screenshot](https://github.com/user-attachments/assets/14bfd4b9-5e35-46ac-bc99-3640a8254c9e)






Demo GIF of Navigation

---

# AI Usage Log

## Project Information

* **Course:** COP 3060 – Full Stack Web Development
* **Milestone #:** 2
* **Team Members:**
* * Breniah Saimpre
* Brooke Davis
* Fayolah Pierre
* Jordon Ammons
* **Date Submitted:** 2025-11-25

---

## Summary of AI Use

AI was used to assist in generating documentation components for the milestone, including the architecture diagram (ASCII format), API endpoint table, and structured descriptions of the frontend and backend components. AI also provided initial text for the AI Usage Log itself. All outputs were reviewed, edited, and validated by the development team to ensure accuracy, relevance, and compliance with project requirements.

---

## Ethical Reflection

The team used AI as a supportive tool, not a replacement for original work. All AI-generated content was checked for correctness, rewritten where necessary, and aligned with the project’s intentions. No AI-generated code was used without review, and no confidential or inappropriate information was shared with AI tools. The team ensured transparency by logging every instance of AI usage in this document.

---

## Appendix: AI Usage Log 

Below is an expanded appendix listing all AI tools, prompts, and their specific purposes throughout the project.

### AI Usage Appendix Table

| Date       | AI Tool | Prompt / Request                                              | Purpose of Use                                              | Output Used | Notes                |
| ---------- | ------- | ------------------------------------------------------------- | ----------------------------------------------------------- | ----------- | -------------------- |
| 2025-11-25 | ChatGPT | "Demonstrate ethical AI use in creating architecture diagram" | Ensure diagram creation followed responsible AI guidelines  | Yes         | Reformatted manually |
| 2025-11-25 | ChatGPT | "Demonstrate ethical AI use when generating endpoint table"   | Produce structured table while keeping human review central | Yes         | Verified accuracy    |
| 2025-11-25 | ChatGPT | "Support ethical drafting of AI Usage Log"                    | Reinforce transparency and responsible AI documentation     | Yes         | Edited wording       |
| 2025-11-25 | ChatGPT | "Add appendix showing responsible AI prompts"                 | Highlight commitment to ethical AI usage                    | Yes         | Minor edits          |

All additional AI interactions will be listed here for transparency.

---

## Verification Statement

By signing below, we confirm that all AI usage has been accurately logged, ethically reviewed, and responsibly incorporated into the milestone.

**Signatures:**

* Breniah Saimpre
* Brooke Davis
* Fayolah Pierre
* Jordon Ammons




