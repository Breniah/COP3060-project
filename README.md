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
*add your name
>>>>>>> main

* Quick links to campus counseling
* National hotlines
* Safety and emergency information



