<!-- README.md -->

<p align="center">
    <img src="public/logo.png" height="75" width="75" />
</p>

# VInhance

> Make VTOP useful.

<p>
    VInhance is a powerful Chrome extension designed to make VTOP more feature-rich for students across all VIT campuses. The extension provides insights on attendance, marks, schedules, and your daily timetable directly in your browser.
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
    - **Future % Calculator:** Real-time validation including intelligent lab-skip detection (warns and prevents skipping an odd number of lab slots).
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
- **📤 Attendance Export Tools:** One-click copy to clipboard or CSV download for attendance tables.
- **⚙️ Last Posted View Preference:** Choose compact or detailed Last Posted mode from the extension popup.

### 📈 Marks & Grades Analysis

- **🙈 CGPA Privacy Toggle:** Hidden CGPA on the home page for privacy when opening VTOP in public!
    - **Click** to pin the CGPA visible, click again to hide.
    - **Hover** to peek at the value temporarily — hides when the cursor leaves.
- **⚖️ Weightage Analysis:** Display of total weightage, scored marks, and lost marks.
- **📚 Course-wise Breakdown:** Individual analysis for Theory, Lab, and STS courses.
- **🚦 Visual Indicators:** Color-coded status (🟢 Pass, 🔴 Need more marks).
- **📋 Comprehensive Academic Summary:** Complete semester overview with all courses in a single table.
    - Course codes, titles, and percentages with proper decimal formatting.
    - Enhanced compatibility across all VIT campuses.
- **🎨 Grade History Coloring:** Color-coded grade rows across the Grade History and Grades pages for instant readability.
- **📥 Export Options:** Copy to clipboard or download as CSV with one-click buttons.
- **☑️ Include NGC Toggle:** Clean, compact checkbox to include/exclude NGC (non-graded courses) in grade calculations.

### 📅 Calendar, Schedule & Dashboard

- **📋 Today's Schedule Dashboard:** A personalized schedule widget on the VTOP home page.
    - Greets you by name with Good morning/afternoon/evening.
    - Shows today's classes with course name, venue, slot, and time.
    - **🔴 Live indicator:** Blinking red dot for the class currently in session.
    - **✅ Completed indicator:** Checkmark with faded opacity for classes that have ended.
    - **⏳ Smart Time Remaining:** Dynamic time tags (`1h`, `2h` for >1hr, `50m`, `5m` for <1hr) directly next to course titles, with an hourglass icon for upcoming classes.
    - **🔄 Refresh button:** One-click refresh to re-fetch and update the entire dashboard.
    - **📅 Day Order detection:** Automatically detects "Tuesday Day Order" or similar from the academic calendar and shows the correct schedule.
    - Handles holidays, exams, and special events with contextual messages.
    - Lab classes with consecutive slots are automatically compressed into a single row.
- **🎨 Enhanced Styling:** Color-coded calendar (🟢 classes, 🔴 holidays, 🟠 exams).
- **📍 Today Highlighting:** Current date automatically highlighted in calendar view.
- **🖌️ Timetable Cell Coloring:** Visual coloring for courses, lunch breaks, and more.
- **🎯 Smart Calendar Filtering:** Advanced course-specific calendar filtering with intelligent controls.
    - **📚 Course Filter Dropdown:** Select any course to highlight only that course's classes in the calendar.
    - **📅 Date Range Toggle:** "Show entries for today & onwards" checkbox to focus on upcoming classes.
    - **📊 Live Counter:** Dynamic counter showing filtered results (e.g., "5 classes left this month") using precise lab-session counting and robust academic holiday/exam skip detection.

### 🎯 Enhanced Navigation & UI

- **📅 Auto Semester Selection:** Zero manual selection required.
    - Automatically discovers and selects your most recent academic semester for all background data syncs.
    - Seamlessly switches between sessions (Winter/Summer/Fall) based on your portal activity.
- **🌌 Modern Styling:** Dark gradient navbar with consistent fonts (Inter, Open Sans).
- **🌙 Dark Mode:** One-click dark mode toggle for comfortable viewing.
- **🌙 Chennai LMS Dark Mode:** Dedicated dark mode toggle for Chennai LMS pages.
- **🤖 Auto-captcha Solving:** Automatically solves captcha challenges.
- **🚀 Quick Navbar Shortcuts:** Instant buttons for Attendance, Marks, Calendar, Course Page, Time Table, and LMS.

### 🎨 Customizable Portal Colors

- **🖌️ Primary Color Customization:** Change portal navigation, headers, and accents from default black to any color.
    - 5 built-in presets (Black, Red, Pink, Green, Yellow).
    - Custom color picker for unlimited color choice.
    - Live preview updates across all pages without reload.
- **⭐ Accent Color Customization:** Independently change accent colors (buttons, highlights) from default green.
    - 5 built-in accent presets (Green, Rose, Violet, Cyan, Amber).
    - Custom color picker for any accent shade.

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
- **Marks Analysis:** Visit "Marks View" in VTOP for the enhanced marks table showing passing requirements, weightage analysis, and color-coded indicators. Use the **Include NGC** checkbox to include/exclude non-graded courses.
- **Calendar Filtering:** On the Academic Calendar page, use the **Course Filter** dropdown to highlight specific course classes. The **Reset** button appears when a course is selected for easy clearing. Toggle **"Show entries for today & onwards"** to focus on upcoming classes only.
- **Privacy Controls:** The CGPA is automatically hidden on the home page for your privacy.
- **Zero Manual Selection:** VInhance automatically detects your active semester and session; you don't need to manually select dropdowns for background features to work.
- **LMS Support:** Open LMS directly from the VTOP navbar button and use the popup's **Dark Mode** toggle on LMS pages.

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

<p>
  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="Chrome" />
  <img src="https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white" alt="Brave" />
  <img src="https://img.shields.io/badge/Microsoft%20Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white" alt="Edge" />
  <img src="https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white" alt="Opera" />
</p>

> Firefox support coming soon.

---

## 🐛 Troubleshooting

| Issue                                 | Solution                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Extension isn't loading**           | Refresh the VTOP page. Check if you're on a supported campus URL and ensure the extension is enabled in `chrome://extensions/`. |
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
