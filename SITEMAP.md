# Product Wiki - Website Sitemap & Development Plan

## 🏗️ Website Structure Overview

### **Main Page:** Product Wiki Homepage
**URL:** `/` (Single Page Application)

---

## 📋 **Section Breakdown**

### **1. Header Section** `#header`
- **Company Logo & Branding**
  - DA Logo (60px x 32px)
  - Company name: "Product team"
- **Navigation Actions**
  - Primary CTA: "Send Product Request" button
  - Links to Atlassian Service Desk

### **2. Hero Section** `#hero`
- **Main Content**
  - Primary headline: "Build the right thing, the right way"
  - Supporting description text
  - Centered layout with proper typography
- **Design Elements**
  - Clean white background
  - Rounded bottom corners (40px)
  - Professional typography (Outfit SemiBold 64px)

### **3. Product Updates Banner** `#updates-banner`
- **Content**
  - Title: "🗞️ June 2025 Product Updates"
  - 6 update items with status badges:
    - Lightpunkt Chance - List & Comment [Completed]
    - More Savings on Bug Quantity per transaction [In progress]
    - Digest of education [Completed]
    - Help Sought For Tip [Completed] 
    - SMS Engine [Completed]
    - Migration complete API: C [Completed]
  - "View all updates" link
- **Layout**
  - Horizontal banner style
  - Compact badge design
  - Light gray background

### **4. Quick Links Section** `#quick-links`
- **Section Header**
  - Title: "Quick links"
- **First Time Here Card**
  - Icon: "New" service icon
  - Title: "First time here?"
  - Description: Explorer Guide introduction
- **Service Cards Grid (3 columns)**
  - **Card 1: Product Request**
    - Icon: Document/form icon
    - Action: "Send Request" → Atlassian Service Desk
  - **Card 2: Product Roadmap** 
    - Icon: ID Card/planning icon
    - Action: "View Roadmap" → Jira Polaris
  - **Card 3: Figma Assets**
    - Icon: Design/Figma icon
    - Action: "Download Assets" → Google Drive

### **5. Recent Product Updates** `#recent-updates`
- **Section Header**
  - Title: "Recent Product updates"
- **2-Column Layout**
  - **Left Column:**
    - **Card 1:** Latest TL;Dr Jun 2025 (Indigo background with floating elements)
    - **Card 2:** Product Sharing sessions (Yellow background with person illustration)
  - **Right Column:**
    - **Card 3:** What are our targets? (Light blue background with chart visualization)
- **Action**
  - "Read more" button

### **6. Behind the Scenes Gallery** `#gallery`
- **Section Header**
  - Title: "Behind the Scenes"
  - Subtitle: "Celebrating milestones, big and small."
- **Gallery Layout**
  - 3-column masonry grid
  - Various sized image placeholders
  - Rounded corners and proper spacing
- **Action**
  - "View our Gallery" button

### **7. Product Roadmap Hero** `#roadmap-hero`
- **Content Layout**
  - **Left Side:** Text content
    - Title: "Our Product Roadmap"
    - Description: Timeline and planning information
    - CTA: "See what's cooking?" button
  - **Right Side:** Device mockup
    - Laptop/device frame with spreadsheet preview
    - Shows roadmap data visualization
- **Design**
  - Dark gradient background
  - White text on dark background
  - Professional device frame

### **8. Call to Action Section** `#cta`
- **Content**
  - Title: "Need something specific?"
  - Description: Support and assistance information
- **Actions (2 buttons)**
  - Primary: "Send Product request" → Atlassian Service Desk
  - Secondary: "Reach out Design team" → Design team portal
- **Design**
  - Light gray card background
  - Rounded corners
  - Horizontal layout

### **9. Footer** `#footer`
- **Branding**
  - Company logo and name
- **Link Sections**
  - Product links (Features, Pricing, Roadmap)
  - Resources (Documentation, API Reference, Support)
  - Company (About, Team, Contact)
- **Legal**
  - Copyright notice
  - Terms and privacy links

---

## 🎯 **Development Priority**

### **Phase 1: Core Structure** ✅
- [x] Header with branding and CTA
- [x] Hero section with main messaging
- [x] Basic layout and navigation

### **Phase 2: Content Sections** ✅
- [x] Product updates banner
- [x] Quick links with service cards
- [x] Recent updates with illustrations

### **Phase 3: Visual Elements** 🔄
- [ ] Gallery masonry layout refinement
- [ ] Device mockup implementation
- [ ] Illustration improvements
- [ ] Animation enhancements

### **Phase 4: Polish & Optimization** ⏳
- [ ] Responsive design fine-tuning
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Cross-browser testing

---

## 🔗 **External Links Integration**

### **Atlassian/Jira Links:**
- Product requests: `https://doctoranywhere.atlassian.net/servicedesk/customer/portal/12`
- Roadmap: `https://doctoranywhere.atlassian.net/jira/polaris/projects/DBP/ideas/view/4174693`
- Documentation: `https://doctoranywhere.atlassian.net/wiki/spaces/PD/...`

### **Asset Links:**
- Figma assets: `https://drive.google.com/drive/folders/1Ypy2jnOi5TJ06CVS3ux6K41Tx1a68-W2`
- Design team: `https://doctoranywhere.atlassian.net/servicedesk/customer/portal/12/group/33/create/402`

---

## 📱 **Responsive Breakpoints**

- **Desktop:** 1200px+ (Full 3-column layout)
- **Tablet:** 768px - 1199px (2-column layout)
- **Mobile:** 320px - 767px (Single column layout)

---

## 🎨 **Design System Reference**

### **Colors:**
- Primary: #0d39d8
- Background: #fafafa
- White: #ffffff
- Text: #121212, #575757

### **Typography:**
- Headings: Outfit (400, 600, 700)
- Body: DM Sans (400)
- Buttons: Epilogue (600)

### **Spacing:**
- Section padding: 64px
- Card gaps: 32px
- Border radius: 16px (cards), 40px (sections)

This sitemap provides a clear roadmap for systematic development and ensures every section matches the Figma design specifications.
