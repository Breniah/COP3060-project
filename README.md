
# COP 3060 Project

## Team Project Proposal

### **Project Title:** *MindBalance — Student Mental Wellness Assistant*

---

## **Problem**

College students face increasing levels of stress, anxiety, burnout, and academic pressure. Many do not have consistent access to mental-health resources, or they struggle with recognizing early signs of emotional strain. Existing wellness apps are often too generic, expensive, or not tailored to the unique daily challenges students experience.
**MindBalance** aims to provide accessible, evidence-based mental-health support that fits into students’ academic routines and empowers them to better manage stress, emotions, and self-care.

---

## **Target Users**

* Undergraduate and graduate students
* Students experiencing academic stress, burnout, or mood fluctuations
* Students seeking reliable, free, and easy-to-understand mental-health information
* Campus residents looking for quick self-help resources and wellness check-ins

---

## **Core Features**

* **Mood Tracking & Daily Check-ins**
  Students log emotions, stress levels, and energy to identify patterns over time.

* **Personalized Wellness Tips**
  The app recommends coping strategies, breathing exercises, and study-life balance tips.

* **Evidence-Based Mental Health Articles (API)**
  Integrates content from the *Health Literacy API* to deliver trustworthy, accessible health information.

* **Crisis Resource Quick-Access**
  Buttons for school counseling services, hotlines, and emergency contacts.

* **Goal Setting & Habit Support**
  Helps students set small mental-wellness goals (sleep schedule, hydration, study breaks).

* **Dashboard & Progress Insights**
  Charts that show mood trends, stress triggers, and weekly summaries.

---

## **API / Dataset Used**

### **U.S. Health Literacy API — Consumer Health Content**

**URL:**
`https://odphp.health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers/api-content`

**Purpose in Project:**

* Provides **free, high-quality, plain-language health and wellness articles**.
* Ensures that MindBalance offers medically accurate, safe, and easy-to-understand mental-health content.
* Can be used to fetch articles on stress management, depression, anxiety, sleep health, and general wellness.

---

## **System Decomposition**

### **Major Modules / Components**

#### **1. User Interface Module**

* Login/Registration
* Daily check-in screen
* Dashboard for mood analytics
* Resources & article feed

#### **2. Mood Tracking Module**

* Collects daily mood inputs
* Stores stress level, energy, notes
* Sends data to analytics engine

#### **3. Recommendation Engine**

* Generates personalized tips based on:

  * Reported mood
  * Past emotional patterns
  * Time of day or study schedule
* Uses rule-based logic in early stages

#### **4. Article Retrieval & API Integration Module**

* Handles connection to the Health Literacy API
* Parses and displays articles on mental-health topics
* Caches content for offline viewing

#### **5. Data Storage Module**

* Stores user profiles
* Saves mood history, goals, habits
* Manages secure local or cloud-based data

#### **6. Analytics & Insights Module**

* Creates mood trend graphs
* Weekly summaries
* Insights into stress triggers

#### **7. Crisis & Support Module**

* Quick links to campus counseling
* National hotlines
* Safety and emergency information

---
