<!-- README.md -->

<p align="center">
    <img src="public/logo.png" height="75" width="75" />
</p>

# VInhance

> Make VTOP useful.

<p>
    VInhance is a powerful Chrome extension designed to make VTOP more feature-rich for students across all VIT campuses. The extension provides insights on attendance, marks, and schedules directly to your browser.
</p>

<p>
    <a href="https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Chrome%20Web%20Store-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="Get VInhance on Chrome Web Store" />
    </a>
</p>

> Add to Chrome (or Brave, Edge, or any Chromium browser). It's free.

---

## ✨ Features

### 📊 Smart Attendance Management

- **🎯 75% Attendance Calculator:** Automatically calculates how many classes you can skip while maintaining 75% attendance.
- **🚦 Real-time Alerts:** Color-coded warnings (🟢 Safe, 🟡 Caution, 🔴 Danger).
- **🧪 Lab vs Theory Differentiation:** Separate calculations for lab and theory classes.
- **🧮 Advanced Attendance Calculators:** Dual-mode planning tools.
    - **Target % Calculator:** Set desired attendance percentage and get exact classes needed.
    - **Future % Calculator:** Input classes to attend/skip and see projected percentage.
    - Real-time validation with visual feedback and flexible planning scenarios.
- **🕒 Last Posted Attendance:** Track latest attendance patterns.
    - Shows most recent attendance date for each course.
    - Displays last 3 statuses with color coding (P/Green, A/Red, O/Orange).
    - Includes a **Detailed View Toggle** for a vertically stacked timeline display (`Date - Status`).
    - Automatic updates with loading indicators.
- **📝 On-Duty Tracking:** Comprehensive OD summary with smart analysis.
    - Chronological list of all OD entries with dates and times.
    - Course-wise breakdown with theory/lab differentiation.
    - Smart counting (theory = 1 OD, lab = 2 ODs).
    - Real-time total counter.
- **📈 Attendance Summary:** Statistics with skip calculations for targets (95%, 90%, 85%, 80%, 75%).
- **👁️ Column Visibility Controls:** Customize table view with show/hide options.

### 📈 Marks & Grades Analysis

- **🙈 CGPA Privacy Toggle:** Hidden CGPA on the home page for privacy when opening VTOP in public!
- **🏁 Passing Marks Calculator:** Shows exact marks needed in FAT to pass each course.
- **⚖️ Weightage Analysis:** Display of total weightage, scored marks, and lost marks.
- **📚 Course-wise Breakdown:** Individual analysis for Theory, Lab, and STS courses.
- **🚦 Visual Indicators:** Color-coded status (🟢 Pass, 🔴 Need more marks).
- **📋 Comprehensive Academic Summary:** Complete semester overview with all courses in a single table.
    - Course codes, titles, and percentages with proper decimal formatting.
    - Enhanced compatibility across all VIT campuses.
- **📥 Export Options:** Copy to clipboard or download as CSV with one-click buttons.
- **✨ Enhanced Visuals:** Improved backgrounds for percent and weight columns for better readability.
- **⚡ Performance Optimization:** Faster page loads and smoother interactions.

### 📅 Calendar & Schedule Management

- **🗓️ Exam Schedule Sync:** Sync exam dates and venues to your calendar.
- **🎨 Enhanced Styling:** Color-coded calendar (🟢 classes, 🔴 holidays, 🟠 exams).
- **📍 Today Highlighting:** Current date automatically highlighted in calendar view.
- **🖌️ Timetable Cell Coloring:** Visual coloring for courses, lunch breaks, and more.

### 🎯 Enhanced Navigation & UI

- **⚡ Quick Access Toolbar:** One-click access to Attendance, Marks, Course Page, and Time Table.
- **🌌 Modern Styling:** Dark gradient navbar with consistent fonts (Inter, Open Sans).
- **🤖 Auto-captcha Solving:** Automatically solves VTOPCC captcha challenges.
- **📱 Responsive Design:** Optimized for all screen sizes and campuses.

### 📚 Course & Leave Management

- **📥 Course Material Downloads:** Bulk download course materials with organized file naming.
- **📂 Smart File Organization:** Automatic categorization by module and topic.
- **🗒️ Leave History Optimization:** Compact table view with improved readability.

---

## 🛠️ Installation

1. Download VInhance from the [Chrome Web Store](https://chromewebstore.google.com/detail/vinhance/kdpkhnlloacadjadmepfnpdliglafaaf).
2. Click **Add to Chrome**.
3. Confirm the installation prompt.
4. Open VTOP and start using VInhance.

---

## 🚀 Usage

- **Attendance Management:** Navigate to "Class Attendance" in VTOP to view the enhanced table with calculators. Use **Future % Calculator** to project attendance, **Target % Calculator** to find classes needed, and click **Check OD** for a comprehensive summary. Toggle column visibility using Show/Hide controls.
- **Marks Analysis:** Visit "Marks View" in VTOP for the enhanced marks table showing passing requirements, weightage analysis, and color-coded indicators.
- **Calendar Sync:** Use the extension popup to sign in to Google, then navigate to Exam Schedule in VTOP to sync events.
- **Privacy Controls:** The CGPA is automatically hidden on the home page for your privacy.

---

## 🏫 Supported Campuses

| Campus          | URL                                                    |
| --------------- | ------------------------------------------------------ |
| **VIT Chennai** | [`vtopcc.vit.ac.in`](https://vtopcc.vit.ac.in)         |
| **VIT Bhopal**  | [`vtop.vitbhopal.ac.in`](https://vtop.vitbhopal.ac.in) |
| **VIT Vellore** | [`vtop.vit.ac.in`](https://vtop.vit.ac.in)             |
| **VIT-AP**      | [`vtop.vitap.ac.in`](https://vtop.vitap.ac.in)         |

> ⚠️ Feature availability may vary across campuses due to VTOP implementation differences. Vellore and VIT-AP campuses are not fully tested but should work.

---

## 🌐 Compatible Browsers

VInhance is built for Chromium-based browsers. It works perfectly on:

<p>
  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="Chrome" />
  <img src="https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white" alt="Brave" />
  <img src="https://img.shields.io/badge/Microsoft%20Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white" alt="Edge" />
  <img src="https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white" alt="Opera" />
</p>

> ⚠️ Mozilla Firefox and Apple Safari are not supported because they use different extension systems

---

## 🐛 Troubleshooting

| Issue                                 | Solution                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Extension isn't loading**           | Refresh the VTOP page. Check if you're on a supported campus URL and ensure the extension is enabled in `chrome://extensions/`. |
| **Exam Calendar Sync fails**          | Open the extension popup, sign out and sign back in to Google. Check your Chrome calendar permissions and internet connection.  |
| **Incorrect Attendance calculations** | Refresh the attendance page, confirm you're viewing the correct semester, and ensure all attendance data has fully loaded.      |

> Most of the issues should get fixed upon refreshing.

---

## 👥 Team

| Name                                         | Course & Year | GitHub                                           | LinkedIn                                                 |
| -------------------------------------------- | ------------- | ------------------------------------------------ | -------------------------------------------------------- |
| **[Arsh Saxena](https://www.arshsaxena.in)** | ECE @ VITC'27 | [@arshsaxena](https://github.com/arshsaxena)     | [arshsaxena](https://www.linkedin.com/in/arshsaxena)     |
| **Aishik Tokdar**                            | ECE @ VITC'27 | [@AishikTokdar](https://github.com/AishikTokdar) | [aishiktokdar](https://www.linkedin.com/in/aishiktokdar) |
| **Akshat Srivastava**                        | ECE @ VITC'27 | [@akshatsri3](https://github.com/akshatsri3)     | [akshatsri3](https://www.linkedin.com/in/akshatsri3/)    |

<br>

<div align="center">
  <strong>Made with ❤️ for VITians</strong>
</div>
